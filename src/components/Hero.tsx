import Logo from "./Logo";

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <section className="hero" id="top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&h=900&fit=crop" alt="Wood-fired pizza close-up" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} fetchPriority="high" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(12,8,6,0.75), rgba(12,8,6,0.55), rgba(12,8,6,0.85))' }} />
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
