"use client";

import { motion } from "framer-motion";

type Props = {
  githubUser: string;
};

export function ProjectsHeader({ githubUser }: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-3 mb-10"
      >
        <span className="size-2 rounded-full bg-accent-red" />
        <span className="text-sm font-medium text-white">
          Progetti Selezionati
        </span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14 md:mb-20">
        <motion.h2
          id="projects-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-[-0.02em] max-w-[18ch]"
        >
          Prodotti digitali scalabili che funzionano
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-5 self-end text-sm md:text-base text-zinc-400 leading-relaxed max-w-[42ch]"
        >
          Ogni progetto riflette un approccio strategico al problem solving e
          all&apos;esperienza utente. Sincronizzato in tempo reale da{" "}
          <a
            href={`https://github.com/${githubUser}`}
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent-red hover:underline underline-offset-4"
          >
            github.com/{githubUser}
          </a>
          .
        </motion.p>
      </div>
    </>
  );
}
