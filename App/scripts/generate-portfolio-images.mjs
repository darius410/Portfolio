import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const rootDir = path.resolve(process.cwd());
const sourceDir = path.join(rootDir, "public", "img");
const outputDir = path.join(sourceDir, "generated");
const manifestPath = path.join(
  rootDir,
  "src",
  "generated",
  "portfolioImages.ts",
);
const aboutManifestPath = path.join(
  rootDir,
  "src",
  "generated",
  "aboutImage.ts",
);

const defaultWidths = [480, 768, 1200];
const maxOutputWidth = 1200;
const aboutWidths = [320, 480, 640];

const portfolioImages = [
  {
    key: "fightcade",
    source: "fightcade.png",
    alt: "Fightcade clone project preview",
  },
  {
    key: "kittybot",
    source: "kittybot.png",
    alt: "Kitty Bot project preview",
  },
  {
    key: "mobile-design",
    source: "mobile-design.jpg",
    alt: "Front-End Mentor challenge project preview",
  },
  {
    key: "blog-image",
    source: "BlogImage.png",
    alt: "Astro blog project preview",
  },
];

const aboutImage = {
  key: "about-photo",
  source: "me.jpg",
  alt: "Portrait of Darius Hansley",
};

const formatOptions = {
  avif: { quality: 50 },
  webp: { quality: 72 },
  jpg: { quality: 76, mozjpeg: true },
  jpeg: { quality: 76, mozjpeg: true },
  png: { compressionLevel: 9, palette: true },
};

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

const manifestEntries = [];

function stringifyLines(values) {
  return values.map((value) => JSON.stringify(value)).join(", ");
}

async function createPlaceholder(sourcePath) {
  const buffer = await sharp(sourcePath)
    .resize({ width: 24, withoutEnlargement: true })
    .blur(1.5)
    .webp({ quality: 45 })
    .toBuffer();

  return `data:image/webp;base64,${buffer.toString("base64")}`;
}

async function buildResponsiveSources(image, widths, maxWidth) {
  const sourcePath = path.join(sourceDir, image.source);
  const metadata = await sharp(sourcePath).metadata();

  if (!metadata.width || !metadata.height || !metadata.format) {
    throw new Error(`Could not read metadata for ${image.source}`);
  }

  const largestWidth = Math.min(metadata.width, maxWidth);
  const outputWidths = [
    ...new Set([
      ...widths.filter((width) => width < largestWidth),
      largestWidth,
    ]),
  ];
  const fallbackFormat = metadata.format === "jpeg" ? "jpg" : metadata.format;

  const avifSrcSet = [];
  const webpSrcSet = [];
  const fallbackSrcSet = [];

  for (const width of outputWidths) {
    const resizeOptions = {
      width,
      withoutEnlargement: true,
    };

    const avifFileName = `${image.key}-${width}.avif`;
    const webpFileName = `${image.key}-${width}.webp`;
    const fallbackFileName = `${image.key}-${width}.${fallbackFormat}`;

    await sharp(sourcePath)
      .resize(resizeOptions)
      .avif(formatOptions.avif)
      .toFile(path.join(outputDir, avifFileName));
    await sharp(sourcePath)
      .resize(resizeOptions)
      .webp(formatOptions.webp)
      .toFile(path.join(outputDir, webpFileName));

    const fallbackPipeline = sharp(sourcePath).resize(resizeOptions);
    if (fallbackFormat === "jpg") {
      await fallbackPipeline
        .jpeg(formatOptions.jpg)
        .toFile(path.join(outputDir, fallbackFileName));
    } else if (fallbackFormat === "png") {
      await fallbackPipeline
        .png(formatOptions.png)
        .toFile(path.join(outputDir, fallbackFileName));
    } else {
      throw new Error(`Unsupported fallback format: ${fallbackFormat}`);
    }

    avifSrcSet.push(`/img/generated/${avifFileName} ${width}w`);
    webpSrcSet.push(`/img/generated/${webpFileName} ${width}w`);
    fallbackSrcSet.push(`/img/generated/${fallbackFileName} ${width}w`);
  }

  const fallbackFileName = `${image.key}-${largestWidth}.${fallbackFormat}`;
  const placeholder = await createPlaceholder(sourcePath);

  return {
    alt: image.alt,
    width: metadata.width,
    height: metadata.height,
    placeholder,
    fallbackSrc: `/img/generated/${fallbackFileName}`,
    fallbackSrcSet,
    webpSrcSet,
    avifSrcSet,
  };
}

for (const image of portfolioImages) {
  const responsiveSources = await buildResponsiveSources(
    image,
    defaultWidths,
    maxOutputWidth,
  );

  manifestEntries.push(`  ${JSON.stringify(image.key)}: {
    alt: ${JSON.stringify(responsiveSources.alt)},
    width: ${responsiveSources.width},
    height: ${responsiveSources.height},
    placeholder: ${JSON.stringify(responsiveSources.placeholder)},
    fallbackSrc: ${JSON.stringify(responsiveSources.fallbackSrc)},
    fallbackSrcSet: ${JSON.stringify(responsiveSources.fallbackSrcSet.join(", "))},
    webpSrcSet: ${JSON.stringify(responsiveSources.webpSrcSet.join(", "))},
    avifSrcSet: ${JSON.stringify(responsiveSources.avifSrcSet.join(", "))},
  }`);
}

const manifestSource = `export const portfolioImageManifest = {
${manifestEntries.join(",\n")}
} as const;
`;

const aboutResponsiveSources = await buildResponsiveSources(
  aboutImage,
  aboutWidths,
  Math.max(...aboutWidths),
);

const aboutManifestSource = `export const aboutImageManifest = {
  alt: ${JSON.stringify(aboutResponsiveSources.alt)},
  width: ${aboutResponsiveSources.width},
  height: ${aboutResponsiveSources.height},
  placeholder: ${JSON.stringify(aboutResponsiveSources.placeholder)},
  fallbackSrc: ${JSON.stringify(aboutResponsiveSources.fallbackSrc)},
  fallbackSrcSet: ${JSON.stringify(aboutResponsiveSources.fallbackSrcSet.join(", "))},
  webpSrcSet: ${JSON.stringify(aboutResponsiveSources.webpSrcSet.join(", "))},
  avifSrcSet: ${JSON.stringify(aboutResponsiveSources.avifSrcSet.join(", "))},
} as const;
`;

await writeFile(manifestPath, manifestSource, "utf8");
await writeFile(aboutManifestPath, aboutManifestSource, "utf8");

console.log(
  `Generated responsive portfolio images in ${path.relative(rootDir, outputDir)}`,
);
