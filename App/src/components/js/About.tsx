import { aboutImageManifest } from "../../generated/aboutImage";
import SocialLinks from "./SocialLinks";

function About() {
  return (
    <section
      id="About"
      aria-labelledby="about-heading"
      className="justify-center mt-10 h-full text-platinum-100"
    >
      <div className="section-shell">
        <h1
          id="about-heading"
          className="text-5xl py-5 lg:text-8xl font-primary about-heading-reveal"
        >
          Welcome To My Site !!
        </h1>
      </div>
      <div className="flex flex-col">
        {/* Top Container  */}
        <div className="about-grid bg-platinum-100">
          <div className="about-copy lg:text-3xl">
            <h2 className="font-primary w-full text-3xl text-gunMetal lg:text-6xl">
              My Name is{" "}
              <span className="reverseSpan text-platinum-100">
                {" "}
                Darius Hansley
              </span>{" "}
              And I'm a web developer{" "}
            </h2>
            <p className="text-2xl w-full text-gunMetal mb-8 leading-8 font-secondary font-light tracking-wider lg:text-3xl">
              I'm a front end developer in the state of Maryland that has done
              allot of work in debugging CSS issues and fixing JavaScript
              errors. I enjoy making websites that look great and have great
              accessibility for the people that use them.
            </p>
          </div>

          <div className="about-photo-wrap">
            <div
              className="about-photo-shell cornersBottom about-photo-reveal"
              style={{
                backgroundImage: `url(${aboutImageManifest.placeholder})`,
              }}
            >
              <picture>
                <source
                  type="image/avif"
                  srcSet={aboutImageManifest.avifSrcSet}
                  sizes="(min-width: 768px) 20rem, 80vw"
                />
                <source
                  type="image/webp"
                  srcSet={aboutImageManifest.webpSrcSet}
                  sizes="(min-width: 768px) 20rem, 80vw"
                />
                <img
                  src={aboutImageManifest.fallbackSrc}
                  srcSet={aboutImageManifest.fallbackSrcSet}
                  width={aboutImageManifest.width}
                  height={aboutImageManifest.height}
                  className="about-photo"
                  alt={aboutImageManifest.alt}
                  decoding="async"
                  fetchPriority="high"
                  sizes="(min-width: 768px) 20rem, 80vw"
                />
              </picture>
            </div>
          </div>
        </div>
        {/* BOTTOM CONTAINER */}
        <div className="section-shell py-20 lg:text-3xl">
          <h2
            id="about-details-heading"
            className="font-primary my-7 w-full text-3xl text-platinum-100 lg:text-6xl"
          >
            A few things{" "}
            <span className="text-highlight text-gunMetal h-3"> About Me</span>
          </h2>

          <SocialLinks />

          <ul className="text-2xl w-full mb-8 leading-8 font-secondary font-light tracking-wider lg:text-3xl">
            <li className="mb-4">
              <h3 className="font-bold">Tech Stack</h3>
              React, Vue.js, Node, TailwindCSS,AstroJS
            </li>

            <li className="mb-4">
              <h3 className="font-bold">Favorite Movie</h3>
              Everything Everywhere All At Once
            </li>

            <li className="mb-4">
              <h3 className="font-bold">Favorite Pet</h3>
              Rabbits...the fluffier the better
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
