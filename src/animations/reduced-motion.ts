"use client";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function getAnimationDuration(duration: number): number {
  return prefersReducedMotion() ? 0 : duration;
}
