"use client";

import { motion } from "framer-motion";
import { TimelineItem } from "@/components/ui/timeline-item";
import { experience } from "@/lib/data/experience";
import { SectionLabel } from "./about";

export function Experience() {
  return (
    <section
      id="esperienza"
      className="relative py-24 md:py-32 border-t overflow-hidden"
      aria-labelledby="experience-title"
    >
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-8">
        <SectionLabel num="02" label="Esperienza" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <motion.h2
            id="experience-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-white max-w-[20ch]"
          >
            Il percorso, raccontato per tappe.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 text-sm md:text-base text-zinc-500 leading-relaxed max-w-[50ch] self-end"
          >
            Dalle prime righe di HTML ai progetti React in produzione. Una
            timeline onesta, niente padding di esperienze finte.
          </motion.p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-[18px] top-2 bottom-2 w-px bg-[rgb(var(--border))]"
          />
          <motion.div
            aria-hidden
            className="absolute left-[18px] top-2 w-px bg-accent-red origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ height: "calc(100% - 16px)" }}
          />
          <ol className="flex flex-col relative">
            {experience.map((e, i) => (
              <TimelineItem
                key={`${e.years}-${e.role}`}
                years={e.years}
                title={e.role}
                subtitle={`${e.company} · ${e.location}`}
                description={e.description}
                links={e.links}
                index={i}
                isLast={i === experience.length - 1}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
