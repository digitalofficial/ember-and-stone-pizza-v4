"use client";

import { useEffect, useRef } from "react";

const storyText =
  "Hand-stretched dough. San Marzano tomatoes. 900-degree oven. Every pizza, made to order.";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // IO fallback for browsers without scroll-driven animations
    const supportsScrollTimeline =
      CSS.supports?.("animation-timeline: view()") ?? false;
    if (supportsScrollTimeline) return;

    const words = containerRef.current?.querySelectorAll(".word");
    if (!words) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.8, rootMargin: "-10% 0px -10% 0px" }
    );

    words.forEach((word) => observer.observe(word));
    return () => observer.disconnect();
  }, []);

  const words = storyText.split(" ");
  const totalWords = words.length;

  return (
    <section className="story-section" id="story">
      <div className="story-text" ref={containerRef}>
        {words.map((word, i) => {
          const entryStart = Math.round((i / totalWords) * 60);
          const entryEnd = Math.round(((i + 1) / totalWords) * 60) + 10;
          const isEmber =
            word.includes("900") || word === "order.";
          return (
            <span
              key={i}
              className={`word${isEmber ? " story-ember" : ""}`}
              style={{
                animationRange: `entry ${entryStart}% entry ${entryEnd}%`,
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
    </section>
  );
}
