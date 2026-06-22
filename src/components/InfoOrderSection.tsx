"use client";

import { useState, FormEvent } from "react";

export default function InfoOrderSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="info-section" id="order">
      <div style={{ marginBottom: "3rem" }}>
        <span className="section-label">Visit & Order</span>
        <h2 className="section-title">Come Hungry, Leave Happy</h2>
      </div>

      <div className="info-grid">
        {/* Left: Info */}
        <div className="info-block">
          <div className="info-item">
            <div className="glass-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8590C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p className="info-label">Location</p>
              <p className="info-value">2841 N Campbell Ave<br />Tucson, AZ 85719</p>
            </div>
          </div>

          <div className="info-item">
            <div className="glass-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8590C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <p className="info-label">Hours</p>
              <p className="info-value">Tue &ndash; Sun: 4:00 PM &ndash; 10:00 PM</p>
              <p className="info-note">Monday: Closed</p>
            </div>
          </div>

          <div className="info-item">
            <div className="glass-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8590C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div>
              <p className="info-label">Phone</p>
              <p className="info-value">(520) 555-0187</p>
              <p className="info-note">Call for reservations or large orders</p>
            </div>
          </div>
        </div>

        {/* Right: Order Form */}
        <div>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.35rem",
            marginBottom: "1.5rem",
            color: "var(--color-text)",
          }}>
            Place an Order
          </h3>
          {submitted ? (
            <div style={{
              padding: "2rem",
              background: "rgba(232, 89, 12, 0.08)",
              border: "1px solid rgba(232, 89, 12, 0.25)",
              borderRadius: "12px",
              textAlign: "center",
            }}>
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                color: "var(--color-tertiary)",
                marginBottom: "0.5rem",
              }}>
                Order Received!
              </p>
              <p style={{ color: "var(--color-muted)", fontSize: "0.9rem" }}>
                We&apos;ll confirm your order shortly. Thank you!
              </p>
            </div>
          ) : (
            <form className="order-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    className="form-input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone</label>
                  <input
                    className="form-input"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(520) 555-0000"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="orderType">Order Type</label>
                  <select className="form-select" id="orderType" name="orderType" required>
                    <option value="">Select type</option>
                    <option value="dine-in">Dine-In</option>
                    <option value="takeout">Takeout</option>
                    <option value="catering">Catering</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="partySize">Party Size</label>
                  <select className="form-select" id="partySize" name="partySize" required>
                    <option value="">How many?</option>
                    <option value="1-2">1 - 2</option>
                    <option value="3-4">3 - 4</option>
                    <option value="5-8">5 - 8</option>
                    <option value="9+">9+</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="details">Order Details</label>
                <textarea
                  className="form-textarea"
                  id="details"
                  name="details"
                  placeholder="Tell us what you'd like to order, any allergies or special requests..."
                  rows={4}
                />
              </div>

              <button type="submit" className="ember-submit">
                <span>Submit Order</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative", zIndex: 1 }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
