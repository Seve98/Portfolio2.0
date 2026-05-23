"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  years: string;
  title: string;
  subtitle: string;
  description?: string;
  links?: { label: string; href: string }[];
  index?: number;
  isLast?: boolean;
};

export function TimelineItem({
  years,
  title,
  subtitle,
  description,
  links,
  index = 0,
  isLast = false,
}: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.li
      className={cn("relative pl-12 md:pl-14", !isLast && "pb-10")}
      initial={reduced ? false : { opacity: 0, y: 30 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.span
        aria-hidden
        className="absolute left-3 top-2 size-3 rounded-full bg-accent-red ring-4 ring-[rgb(var(--bg))] shadow-[0_0_12px_rgba(46,230,168,0.55)]"
        whileHover={{ scale: 1.3 }}
      />

      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        className="group relative rounded-lg border bg-[rgb(var(--card))] p-5 md:p-6 hover:border-accent-red/40 transition-colors"
      >
        <div className="flex flex-col gap-1 mb-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-red">
            {years}
          </span>
          <h3 className="text-lg md:text-xl font-medium text-white leading-tight group-hover:text-accent-red transition-colors">
            {title}
          </h3>
          <span className="text-sm text-zinc-400">{subtitle}</span>
        </div>
        {description && (
          <p className="text-sm text-zinc-500 leading-relaxed max-w-[62ch]">
            {description}
          </p>
        )}
        {links && links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--border-strong))] bg-[rgb(var(--bg-elev))] px-3 h-8 text-xs font-medium text-white hover:border-accent-red hover:text-accent-red transition-colors"
              >
                {l.label}
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </motion.li>
  );
}
