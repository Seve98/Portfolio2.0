"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/ui/brand-icons";

type Props = {
  reposCount: number;
  totalStars: number;
};

export function ProjectCTAView({ reposCount, totalStars }: Props) {
  return (
    <section
      id="project-cta"
      className="relative py-24 md:py-32 overflow-hidden border-t bg-[rgb(var(--bg))]"
      aria-label="Pronto a costruire"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(46,230,168,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 flex flex-col gap-4"
        >
          <div className="flex items-baseline gap-3">
            <span className="text-stroke-mint text-6xl md:text-7xl font-bold leading-none tracking-[-0.04em] tabular">
              {reposCount}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              repo pubblici
            </span>
          </div>
          <div className="flex items-center gap-2 text-accent-red">
            <Github size={14} />
            <span className="text-sm text-white">
              <span className="tabular font-bold">{totalStars}</span>{" "}
              <span className="text-zinc-500">stelle ricevute</span>
            </span>
          </div>
          <p className="text-sm text-zinc-500 leading-snug max-w-[28ch]">
            Codice verificabile, niente claim inventati.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-[-0.02em]">
            Pronto a costruire il tuo prossimo
            <br />
            <span className="text-accent-red">progetto digitale?</span>
          </h2>

          <div>
            <a
              href="#contatti"
              className="inline-flex items-center gap-3 rounded-full border border-accent-red h-12 px-6 text-sm font-medium text-accent-red hover:bg-accent-red hover:text-black press"
            >
              Avvia un Progetto
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-4 text-sm md:text-base text-zinc-400 leading-relaxed max-w-[36ch]"
        >
          Hai un&apos;idea o un progetto in mente? Trasformiamo la tua visione
          in una soluzione digitale ad alte performance. Aperto a
          collaborazioni, startup e partnership a lungo termine.
        </motion.p>
      </div>
    </section>
  );
}
