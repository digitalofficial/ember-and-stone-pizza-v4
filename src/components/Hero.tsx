import Logo from "./Logo";

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <Logo width={140} />
          <h1 className="hero-tagline" style={{ marginTop: "1.5rem" }}>
            Fire. Dough.<br />
            <span className="ember">Perfection.</span>
          </h1>
          <p className="hero-description">
            Wood-fired artisan pizza, crafted with passion in the heart of Tucson.
          </p>
          <a href="#menu" className="hero-cta">
            <span>View the Menu</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>
    </div>
  );
}
