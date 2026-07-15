"use client";

import { useEffect, useRef } from "react";

const phrases = [
  "Track symptoms.",
  "Notice changes.",
  "Speak up sooner.",
];

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const interval = setInterval(() => {
      text.animate(
        [
          { transform: "translateY(0)", opacity: 1 },
          { transform: "translateY(-30px)", opacity: 0 },
        ],
        { duration: 350, fill: "forwards" },
      );

      setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % phrases.length;
        text.textContent = phrases[indexRef.current];

        text.animate(
          [
            { transform: "translateY(30px)", opacity: 0 },
            { transform: "translateY(0)", opacity: 1 },
          ],
          { duration: 350, fill: "forwards" },
        );
      }, 350);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hf-hero-wrapper">
      <div className="hf-hero">
        <span className="static">
          A daily check-in app for heart failure patients.
        </span>
        <span className="slider">
          <span ref={textRef} id="animatedText">
            {phrases[0]}
          </span>
        </span>
      </div>

      <p className="hf-subtitle">
        HF Daily helps people with heart failure consistently track changes in
        symptoms and know when it may be appropriate to speak with their care
        team.
      </p>

      <div className="hf-buttons">
        <a href="/about" className="hf-btn">
          How it works
        </a>
        <a href="/beta" className="hf-btn">
          Join beta
        </a>
      </div>
    </div>
  );
}
