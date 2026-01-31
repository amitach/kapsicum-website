"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function createScrollReveal(
  element: string | Element,
  options?: { start?: string; delay?: number; duration?: number; y?: number }
) {
  const { start = "top 85%", delay = 0, duration = 0.6, y = 30 } = options || {};
  return gsap.fromTo(
    element,
    { opacity: 0, y },
    {
      opacity: 1, y: 0, duration, delay, ease: "power2.out",
      scrollTrigger: { trigger: element, start, toggleActions: "play none none none" },
    }
  );
}

export function cleanupScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
