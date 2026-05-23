"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  animate,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  percent: number;
  className?: string;
  variant?: "red" | "white";
};

export function ProgressBar({ name, percent, className, variant = "white" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.3 });
  const reduced = useReducedMotion();
  const targetScale = percent / 100;

  const value = useMotionValue(reduced ? percent : 0);
  const rounded = useTransform(value, (v) => `${Math.round(v)}%`);
  const [text, setText] = useState(reduced ? `${percent}%` : "0%");

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setText(v));
    return () => unsub();
  }, [rounded]);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      value.set(percent);
      return;
    }
    const controls = animate(value, percent, {
      duration: 1.1,
      ease: [0.33, 1, 0.68, 1],
    });
    return () => controls.stop();
  }, [inView, reduced, percent, value]);

  const fillColor = variant === "red" ? "bg-accent-red" : "bg-white";

  return (
    <div ref={containerRef} className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="font-mono text-xs text-zinc-500 tabular">{text}</span>
      </div>
      <div className="relative h-1 w-full overflow-hidden rounded-full bg-[rgb(var(--border))]">
        <motion.span
          className={cn(
            "absolute inset-y-0 left-0 block w-full origin-left rounded-full",
            fillColor
          )}
          initial={{ scaleX: reduced ? targetScale : 0 }}
          animate={{ scaleX: inView ? targetScale : reduced ? targetScale : 0 }}
          transition={{ duration: 1.1, ease: [0.33, 1, 0.68, 1] }}
        />
      </div>
    </div>
  );
}
