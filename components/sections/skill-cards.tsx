"use client";

import { motion, useReducedMotion } from "framer-motion";

type Stat = {
  label: string;
  value: string;
  suffix: string;
};

type Props = {
  stats: Stat[];
};

export function SkillCardsView({ stats }: Props) {
  const reduced = useReducedMotion();

  return (
    <section
      id="stats"
      className="relative py-20 md:py-28 border-t"
      aria-label="Numeri verificabili"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 30 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-start gap-6 md:gap-10"
        >
          <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] text-accent-red">
            Numeri verificabili, niente claim inventati
          </p>

          <p className="text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] tracking-[-0.03em] max-w-[22ch]">
            <Inline value={stats[0].value} suffix={stats[0].suffix} />{" "}
            <span className="text-zinc-500">{stats[0].label.toLowerCase()}.</span>
            <br />
            <Inline value={stats[1].value} suffix={stats[1].suffix} />{" "}
            <span className="text-zinc-500">{stats[1].label.toLowerCase()}.</span>
            <br />
            <Inline value={stats[2].value} suffix={stats[2].suffix} />{" "}
            <span className="text-zinc-500">{stats[2].label.toLowerCase()}.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Inline({ value, suffix }: { value: string; suffix: string }) {
  return (
    <span className="inline-flex items-baseline tracking-[-0.04em] tabular">
      <span className="text-stroke-mint">{value}</span>
      {suffix && <span className="text-accent-red">{suffix}</span>}
    </span>
  );
}
