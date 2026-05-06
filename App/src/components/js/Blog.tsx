const featuredEntry = {
  href: "https://chaosandvideogames.com/blogs/blog-2/",
  eyebrow: "Featured Writing",
  date: "05.07.25",
  title: "Early Access Is Killing Games",
  excerpt:
    "A look at why putting your game in early access can create more long-term damage than momentum.",
  label: "Read Early Access Is Killing Games on Chaos and Video Games",
};

const blogEntries = [
  {
    href: "https://chaosandvideogames.com/blogs/blog-17/",
    eyebrow: "Design Rant",
    date: "12.26.24",
    title: "No One Wants To Buy Your Overlays",
    excerpt:
      "An argument for moving past generic gamer panels and making work that feels more original and useful.",
    label: "Read No One Wants To Buy Your Overlays on Chaos and Video Games",
  },
  {
    href: "https://chaosandvideogames.com/blogs/blog-6/",
    eyebrow: "Film And Games",
    date: "02.27.23",
    title: "Are Video Game Movies Finally Good?",
    excerpt:
      "A piece on why game adaptations may finally be improving, and what still has to go right for them to work.",
    label: "Read Are Video Game Movies Finally Good? on Chaos and Video Games",
  },
  {
    href: "https://chaosandvideogames.com/blogs/blog-16/",
    eyebrow: "Fighting Games",
    date: "02.26.24",
    title: "Can Fighting Game AI Replace Real Opponents?",
    excerpt:
      "A post exploring whether machine learning could ever become a believable rival in competitive fighters.",
    label:
      "Read Can Fighting Game AI Replace Real Opponents? on Chaos and Video Games",
  },
] as const;

function Blog() {
  return (
    <section id="Blog" aria-labelledby="blog-heading" className="blog-section">
      <div className="section-shell blog-shell">
        <div className="blog-heading-block">
          <p className="blog-kicker font-secondary">Latest Writing</p>
          <h2 id="blog-heading" className="blog-title font-primary">
            Journal
          </h2>
          <p className="blog-intro font-secondary">
            Notes on front-end work, design instincts, and the interests that
            shape how I build on the web.
          </p>
        </div>

        <div className="blog-rule" aria-hidden="true"></div>

        <div className="blog-layout">
          <a
            href={featuredEntry.href}
            aria-label={featuredEntry.label}
            className="blog-feature blog-link-panel"
          >
            <article>
              <p className="blog-card-eyebrow font-secondary">
                {featuredEntry.eyebrow}
              </p>
              <p className="blog-card-date font-secondary">
                {featuredEntry.date}
              </p>
              <h3 className="blog-feature-title font-primary">
                {featuredEntry.title}
              </h3>
              <p className="blog-feature-copy font-secondary">
                {featuredEntry.excerpt}
              </p>
              <span className="blog-read-link font-secondary">
                Read The Blog
              </span>
            </article>
          </a>

          <div className="blog-side-label font-primary" aria-hidden="true">
            Notes
          </div>

          <ul className="blog-grid" aria-label="Recent blog highlights">
            {blogEntries.map((entry) => (
              <li key={entry.title} className="blog-card">
                <a
                  href={entry.href}
                  aria-label={entry.label}
                  className="blog-link-panel"
                >
                  <article>
                    <p className="blog-card-eyebrow font-secondary">
                      {entry.eyebrow}
                    </p>
                    <p className="blog-card-date font-secondary">
                      {entry.date}
                    </p>
                    <h3 className="blog-card-title font-primary">
                      {entry.title}
                    </h3>
                    <p className="blog-card-copy font-secondary">
                      {entry.excerpt}
                    </p>
                    <span className="blog-read-link font-secondary">
                      Read Article
                    </span>
                  </article>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Blog;
