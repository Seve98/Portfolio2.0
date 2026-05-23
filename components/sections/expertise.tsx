"use client";

import { motion } from "framer-motion";
import { Palette, Layout, Sparkles } from "lucide-react";
import { expertise, technologies, type ExpertiseCard } from "@/lib/data/skills";
import { TechIcon } from "@/components/ui/tech-icon";

const iconMap: Record<
  ExpertiseCard["icon"],
  React.ComponentType<{ size?: number; className?: string }>
> = {
  palette: Palette,
  layout: Layout,
  sparkles: Sparkles,
};

export function Expertise() {
  return (
    <section
      id="expertise"
      className="relative py-24 md:py-32 border-t overflow-hidden"
      aria-labelledby="expertise-title"
    >
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-12"
        >
          <span className="size-2 rounded-full bg-accent-red" />
          <span className="text-sm font-medium text-white">
            Le Mie Competenze
          </span>
        </motion.div>

        <motion.h2
          id="expertise-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-[-0.02em] max-w-[64ch] mb-20 md:mb-28"
        >
          Aiuto aziende e founder a trasformare idee in prodotti digitali
          funzionali e scalabili. Ogni progetto è costruito con{" "}
          <span className="text-accent-red">performance</span>, chiarezza e
          crescita a lungo termine in mente.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-4 flex flex-col gap-4">
            {expertise.map((e, i) => {
              const Icon = iconMap[e.icon];
              return (
                <motion.article
                  key={e.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  whileHover={{ y: -4 }}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-[rgb(var(--border-strong))] bg-[rgb(var(--card))] hover:border-accent-red press"
                >
                  <span className="inline-flex items-center justify-center size-12 rounded-xl bg-[rgb(var(--bg-elev))] text-accent-red shrink-0 group-hover:bg-accent-red group-hover:text-black transition-colors">
                    <Icon size={20} />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base md:text-lg font-bold text-white leading-tight">
                      {e.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {e.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 relative flex flex-col gap-8"
          >
            <h3
              aria-hidden
              className="text-stroke-mint text-5xl md:text-7xl lg:text-[6rem] font-bold leading-[0.9] tracking-[-0.04em]"
            >
              Servizi
              <br />
              Offerti
            </h3>

            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {technologies.map((t, i) => (
                <motion.li
                  key={t.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: 0.04 * i }}
                  whileHover={{ y: -3 }}
                  className="group flex items-center gap-3 rounded-xl border border-[rgb(var(--border-strong))] bg-[rgb(var(--card))] px-4 py-3 hover:border-accent-red press"
                >
                  <span
                    className="inline-flex items-center justify-center size-9 rounded-lg bg-[rgb(var(--bg-elev))] text-zinc-400 group-hover:text-accent-red transition-colors shrink-0"
                    style={{ color: undefined }}
                  >
                    <TechIcon name={t.icon} width={18} height={18} />
                  </span>
                  <span className="text-sm font-semibold text-white truncate">
                    {t.name}
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
