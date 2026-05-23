"use client";

import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";

type Props = {
  items?: string[];
  variant?: "solid" | "stroke";
};

const defaultItems = [
  "Frontend Engineer",
  "React & Next.js",
  "TypeScript Nativo",
  "Ossessione per i Dettagli",
  "Performance Prima di Tutto",
  "Accessibilità WCAG",
  "Aperto al Lavoro",
  "Italia · Remoto",
];

export function MarqueeStrip({ items = defaultItems, variant = "solid" }: Props) {
  const doubled = [...items, ...items];

  return (
    <motion.section
      aria-hidden
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative border-y overflow-hidden bg-[rgb(var(--bg-elev))]"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{
          background:
            "linear-gradient(to right, rgb(var(--bg-elev)) 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{
          background:
            "linear-gradient(to left, rgb(var(--bg-elev)) 0%, transparent 100%)",
        }}
      />

      <div className="marquee-track py-6">
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 px-8"
          >
            <span
              className={
                variant === "stroke"
                  ? "text-3xl md:text-5xl font-medium tracking-tight text-stroke-mint"
                  : "text-3xl md:text-5xl font-medium tracking-tight text-white"
              }
            >
              {item}
            </span>
            <Asterisk
              size={28}
              className="text-accent-red shrink-0"
              strokeWidth={1.5}
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
