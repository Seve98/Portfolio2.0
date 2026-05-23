"use client";

import { motion } from "framer-motion";
import { TimelineItem } from "@/components/ui/timeline-item";
import { education } from "@/lib/data/education";
import { SectionLabel } from "./about";

export function Education() {
  return (
    <section
      id="formazione"
      className="relative py-24 md:py-32 border-t overflow-hidden"
      aria-labelledby="education-title"
    >
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-8">
        <SectionLabel num="03" label="Formazione" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <motion.h2
            id="education-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-white max-w-[22ch]"
          >
            Imparare è il lavoro vero.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 text-sm md:text-base text-zinc-500 leading-relaxed max-w-[50ch] self-end"
          >
            Percorso self-taught con bussola sulla documentazione ufficiale e
            sui pattern testati dalla community.
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
            {education.map((e, i) => (
              <TimelineItem
                key={`${e.years}-${e.title}`}
                years={e.years}
                title={e.title}
                subtitle={e.institution}
                description={e.description}
                index={i}
                isLast={i === education.length - 1}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
