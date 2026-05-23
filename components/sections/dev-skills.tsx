"use client";

import { motion } from "framer-motion";
import { ProgressBar } from "@/components/ui/progress-bar";
import { devSkills } from "@/lib/data/skills";
import { SectionLabel } from "./about";

export function DevSkills() {
  return (
    <section
      id="dev-skills"
      className="relative py-24 md:py-32 border-t overflow-hidden"
      aria-labelledby="dev-skills-title"
    >
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-8">
        <SectionLabel num="05" label="Sviluppo" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <h2
              id="dev-skills-title"
              className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-white max-w-[18ch]"
            >
              Stack che muovo in <span className="text-accent-red">produzione</span>.
            </h2>
            <p className="text-sm md:text-base text-zinc-500 leading-relaxed max-w-[42ch]">
              Le percentuali sono autovalutazioni oneste, non finte certificazioni.
              Crescono con i progetti reali.
            </p>
          </motion.div>

          <ul className="lg:col-span-7 flex flex-col gap-6">
            {devSkills.map((s, i) => (
              <motion.li
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
              >
                <ProgressBar name={s.name} percent={s.percent} variant="red" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
