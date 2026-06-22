"use client";

import { useEffect } from "react";

/**
 * Intersection Observer fallback for browsers without
 * native scroll-driven animation support.
 * Adds .visible class to .io-reveal and .io-scale elements.
 */
export default function ScrollReveal() {
  useEffect(() => {
    // Skip if browser supports scroll-driven animations natively
    const supportsScrollTimeline =
      CSS.supports?.("animation-timeline: view()") ?? false;
    if (supportsScrollTimeline) return;

    const targets = document.querySelectorAll(".io-reveal, .io-scale, .holo-card, .side-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Once revealed, stop observing for one-shot animation
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    targets.forEach((el) => {
      // Add base class for IO-based animation
      if (!el.classList.contains("io-reveal") && !el.classList.contains("io-scale")) {
        el.classList.add("io-scale");
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
