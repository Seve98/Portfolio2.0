"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import { Github } from "@/components/ui/brand-icons";
import { profile } from "@/lib/data/profile";

export function About() {
  const bullets = profile.aboutBullets;

  return (
    <section
      id="chi-sono"
      className="relative py-24 md:py-32 border-t overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-10"
        >
          <span className="size-2 rounded-full bg-accent-red" />
          <span className="text-sm font-medium text-white">Chi sono</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-20">
          <motion.h2
            id="about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-[-0.02em] max-w-[18ch]"
          >
            Sviluppatore guidato da scopo e precisione
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 self-end text-sm md:text-base text-zinc-400 leading-relaxed max-w-[42ch]"
          >
            Sviluppo applicazioni web moderne con focus su React, Next.js e
            TypeScript. Costruisco esperienze digitali pulite, performanti e
            durature nel tempo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="relative rounded-2xl border border-[rgb(var(--border-strong))] bg-[rgb(var(--card))] p-8 md:p-10">
              <Quote
                className="absolute -top-4 -left-2 text-accent-red bg-[rgb(var(--bg))] rounded-full p-1 size-10"
                fill="currentColor"
              />
              <p className="text-2xl md:text-3xl font-medium text-white leading-[1.3] tracking-[-0.01em]">
                &ldquo;Ogni progetto è approcciato con chiarezza, collaborazione
                e valore a lungo termine in mente.&rdquo;
              </p>
              <div className="mt-8 pt-6 border-t border-[rgb(var(--border))] flex items-center justify-between gap-3 flex-wrap">
                <div className="flex flex-col">
                  <span className="font-bold text-white">{profile.name}</span>
                  <span className="text-sm text-accent-red">
                    Frontend Engineer
                  </span>
                </div>
                <a
                  href="#esperienza"
                  className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--bg-elev))] border border-[rgb(var(--border-strong))] h-11 px-5 text-sm font-medium text-white hover:bg-[rgb(var(--border))] press"
                >
                  Vedi Esperienza
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <a
              href={`https://github.com/${profile.githubUser}`}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-3 mt-2 self-start press"
            >
              <span className="inline-flex items-center justify-center size-9 rounded-full bg-accent-red text-black shrink-0 group-hover:scale-110 transition-transform">
                <Github size={16} />
              </span>
              <span className="text-sm text-zinc-400">
                Codice e progetti pubblici su{" "}
                <span className="font-bold text-white group-hover:text-accent-red transition-colors">
                  github.com/{profile.githubUser}
                </span>
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <ul className="flex flex-col">
              {bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-start gap-5 py-5 border-b border-[rgb(var(--border))] last:border-0"
                >
                  <span className="font-mono text-xs text-accent-red tabular-nums shrink-0 mt-2 tracking-[0.1em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg md:text-xl font-semibold text-white leading-snug tracking-[-0.01em]">
                    {b}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-10"
    >
      <span className="size-2 rounded-full bg-accent-red" />
      <span className="text-sm font-medium text-white">{label}</span>
      <span className="text-xs text-zinc-600 tabular">{num}</span>
    </motion.div>
  );
}
