import { portfolioImageManifest } from "../../generated/portfolioImages";
import useInViewOnce from "./useInViewOnce";

const portfolioProjects = [
  {
    imageKey: "fightcade",
    title: "Fightcade",
    description:
      "I mimicked the layout and styling of Fightcade. A popular software that allows users to play old school fighting games with other players online.",
    liveHref: "https://fightcade.netlify.app/",
    liveLabel: "Open the live Fightcade project",
    repoHref: "https://github.com/darius410/FightcadeClone",
    repoLabel: "Open the Fightcade GitHub repository",
  },
  {
    imageKey: "kittybot",
    title: "Kitty Bot",
    description:
      "A unique Twitch bot that gives facts about cats in the chat room.",
    liveHref: "https://www.twitch.tv/popout/kittyfactzplz/chat?popout=",
    liveLabel: "Open the live Kitty Bot project",
    repoHref: "https://github.com/darius410/KittyFactz",
    repoLabel: "Open the Kitty Bot GitHub repository",
  },
  {
    imageKey: "mobile-design",
    title: "Front-End Mentor",
    description:
      "My attempt at a front end mentor challenge using tailwind and react JS",
    liveHref: "https://anotherfrontendchallenge.netlify.app/",
    liveLabel: "Open the live Front-End Mentor project",
    repoHref:
      "https://github.com/darius410/Front-End-Mentor-Challenge-Tailwind",
    repoLabel: "Open the Front-End Mentor GitHub repository",
  },
  {
    imageKey: "blog-image",
    title: "ASTRO BLOG",
    description:
      "My own personal blog site made using Astro. Please visit if you like opinions on gaming as well as coding.",
    liveHref: "https://chaosandvideogames.com/",
    liveLabel: "Open the live Astro blog project",
    repoHref: "https://github.com/darius410/Chaosandvideogames",
    repoLabel: "Open the Astro blog GitHub repository",
  },
] as const;

function Portfolio() {
  const { elementRef, isInView } = useInViewOnce<HTMLHeadingElement>();

  return (
    <section
      id="Portfolio"
      aria-labelledby="portfolio-heading"
      className="flex flex-col h-full bg-black text-white pb-6 md:p-4"
    >
      <h2
        ref={elementRef}
        id="portfolio-heading"
        className="section-shell lg:text-8xl font-primary justify-center mb-4 mt-9 text-6xl lg:mt-[200px]"
      >
        <span className={`portfolio-word-mark ${isInView ? "is-visible" : ""}`}>
          <span className="portfolio-word-mark__text">Port</span>
        </span>
        folio
      </h2>

      <div className="section-shell">
        <ul className="portfolio-grid text-center">
          {portfolioProjects.map((project) => (
            <li key={project.title} className="portfolio-card">
              <div
                className="portfolio-media"
                style={{
                  backgroundImage: `url(${portfolioImageManifest[project.imageKey].placeholder})`,
                }}
              >
                <picture>
                  <source
                    type="image/avif"
                    srcSet={portfolioImageManifest[project.imageKey].avifSrcSet}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <source
                    type="image/webp"
                    srcSet={portfolioImageManifest[project.imageKey].webpSrcSet}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <img
                    src={portfolioImageManifest[project.imageKey].fallbackSrc}
                    srcSet={
                      portfolioImageManifest[project.imageKey].fallbackSrcSet
                    }
                    alt={portfolioImageManifest[project.imageKey].alt}
                    width={portfolioImageManifest[project.imageKey].width}
                    height={portfolioImageManifest[project.imageKey].height}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                </picture>
              </div>
              <div className="portSiteDesc">
                <h3 className="text-4xl pb-3 font-primary">{project.title}</h3>
                <p className="tracking-wider font-secondary">
                  {project.description}
                </p>
                <div className="portfolio-links">
                  <a href={project.liveHref} aria-label={project.liveLabel}>
                    <img
                      className="portfolio-link-icon"
                      src="./img/www-click.png"
                      alt={`Live site icon for ${project.title}`}
                    />
                  </a>
                  <a href={project.repoHref} aria-label={project.repoLabel}>
                    <img
                      className="portfolio-link-icon"
                      src="./img/github.png"
                      alt={`GitHub icon for ${project.title} repository`}
                    />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
