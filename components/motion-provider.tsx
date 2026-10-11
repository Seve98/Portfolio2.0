"use client";

import { MotionConfig } from "framer-motion";
import { EASE_OUT, DURATION } from "@/lib/motion";

/**
 * Global defaults for every motion component: one easing curve instead of the
 * per-property defaults (which make x/y spring with overshoot), and transforms
 * disabled for users who ask for reduced motion.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: DURATION.base, ease: EASE_OUT }}
    >
      {children}
    </MotionConfig>
  );
}
