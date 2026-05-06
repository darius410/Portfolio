import { aboutImageManifest } from "../../generated/aboutImage";
import SocialLinks from "./SocialLinks";
import useInViewOnce from "./useInViewOnce";

function About() {
  const { elementRef: introHeadingRef, isInView: isIntroHeadingInView } =
    useInViewOnce<HTMLHeadingElement>();
  const { elementRef, isInView } = useInViewOnce<HTMLHeadingElement>();

  return (
    <section
      id="About"
      aria-labelledby="about-intro-heading"
      className="justify-center h-full text-platinum-100"
    >
      <div className="about-stage">
        <div className="about-intro-panel">
          <div className="section-shell about-grid">
            <div className="about-copy lg:text-3xl">
              <p className="about-meta-strip font-secondary">
                Front-End Developer / Maryland / UI-First Thinking
              </p>
              <h2
                ref={introHeadingRef}
                id="about-intro-heading"
                className="about-intro-heading font-primary w-full text-3xl text-gunMetal lg:text-6xl"
              >
                My Name is{" "}
                <span
                  className={`reverseSpan text-platinum-100 ${isIntroHeadingInView ? "active" : ""}`}
                >
                  {" "}
                  Darius Hansley
                </span>{" "}
                And I'm a web developer{" "}
              </h2>
              <p className="about-intro-summary text-2xl w-full text-gunMetal leading-8 font-secondary font-light tracking-wider lg:text-3xl">
                I'm a front end developer in the state of Maryland that has done
                allot of work in debugging CSS issues and fixing JavaScript
                errors. I enjoy making websites that look great and have great
                accessibility for the people that use them.
              </p>
            </div>
          </div>
        </div>

        <div className="about-photo-wrap">
          <div
            className={`about-photo-shell cornersBottom ${isInView ? "about-photo-reveal" : "about-photo-pending"}`}
            style={{
              backgroundImage: `url(${aboutImageManifest.placeholder})`,
            }}
          >
            <div className="about-photo-frame-inner">
              <picture>
                <source
                  type="image/avif"
                  srcSet={aboutImageManifest.avifSrcSet}
                  sizes="(min-width: 1024px) 24rem, (min-width: 768px) 22rem, 80vw"
                />
                <source
                  type="image/webp"
                  srcSet={aboutImageManifest.webpSrcSet}
                  sizes="(min-width: 1024px) 24rem, (min-width: 768px) 22rem, 80vw"
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
                  sizes="(min-width: 1024px) 24rem, (min-width: 768px) 22rem, 80vw"
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="about-details-panel pb-20 lg:text-3xl">
          <div className="section-shell">
            <div className="about-details-layout">
              <div className="about-details-lead">
                <p
                  className="about-background-word font-primary"
                  aria-hidden="true"
                >
                  About
                </p>
                <h2
                  ref={elementRef}
                  id="about-details-heading"
                  className="font-primary mt-0 mb-7 w-full text-3xl text-platinum-100 lg:text-6xl"
                >
                  A few things{" "}
                  <span
                    className={`portfolio-word-mark portfolio-word-mark--dark ${isInView ? "is-visible" : ""}`}
                  >
                    <span className="text-oxfordBlue">About Me</span>
                  </span>
                </h2>

                <p className="about-details-intro font-secondary">
                  Clean interfaces, strong structure, and a practical eye for
                  how people actually move through a site.
                </p>

                <SocialLinks />

                <ul className="about-facts-list text-2xl w-full mb-8 leading-8 font-secondary font-light tracking-wider lg:text-3xl">
                  <li className="about-fact-item">
                    <h3 className="about-fact-label font-bold">Tech Stack</h3>
                    <p className="about-fact-copy">
                      React, Vue.js, Node, TailwindCSS, AstroJS
                    </p>
                  </li>

                  <li className="about-fact-item">
                    <h3 className="about-fact-label font-bold">
                      Favorite Movie
                    </h3>
                    <p className="about-fact-copy">
                      Everything Everywhere All At Once
                    </p>
                  </li>

                  <li className="about-fact-item">
                    <h3 className="about-fact-label font-bold">Favorite Pet</h3>
                    <p className="about-fact-copy">
                      Rabbits...the fluffier the better
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
