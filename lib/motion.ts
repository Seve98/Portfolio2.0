import type { Transition } from "framer-motion";

/**
 * Shared motion tokens. Every reveal on the page uses the same curve, distance
 * and trigger so sections read as one continuous choreography.
 */

// easeOutQuint: fast start, long soft landing. Mirrors --ease-out-quint in globals.css.
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.3,
  base: 0.7,
  slow: 1.2,
} as const;

// Vertical travel for scroll reveals, in px.
export const RISE = 20;

// Delay between siblings in a staggered group, in seconds.
export const STAGGER = 0.07;

// Trigger slightly before the element is fully on screen; low `amount` so tall
// blocks still fire on short mobile viewports.
export const VIEWPORT = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -8% 0px",
} as const;

export function reveal(delay = 0, duration: number = DURATION.base): Transition {
  return { duration, delay, ease: EASE_OUT };
}

// Staggered siblings each trigger on their own, so a long list must not make
// the 8th item wait half a second after it scrolls into view.
export function stagger(index: number, cap = 4): number {
  return Math.min(index, cap) * STAGGER;
}
