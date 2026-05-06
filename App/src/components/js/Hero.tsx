function Hero() {
  return (
    <section className="hero-print-shell" aria-labelledby="hero-heading">
      <div className="section-shell hero-print-grid">
        <div className="hero-print-copy">
          <p className="hero-kicker">
            Frontend Developer • Maryland • UI Systems
          </p>
          <h1 id="hero-heading" className="hero-title font-primary">
            Creating
            <br />
            Accessible,
            <br />
            Polished Web
            <br />
            Experiences.
          </h1>
          <p className="hero-summary font-secondary">
            I build portfolio sites and interfaces with a strong visual point of
            view, cleaner structure, and practical accessibility.
          </p>
        </div>

        <div className="hero-print-panel" aria-hidden="true">
          <p className="hero-panel-label font-secondary">Darius Hansley</p>
          <div className="hero-panel-rule"></div>
          <p className="hero-panel-text font-primary">FRONT</p>
          <p className="hero-panel-text hero-panel-text--outline font-primary">
            END
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
