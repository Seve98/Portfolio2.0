"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { profile } from "@/lib/data/profile";

type Stat = { value: string; label: string };

type Props = {
  stats: Stat[];
};

export function HeroContent({ stats }: Props) {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full overflow-hidden bg-base"
    >
      <Navbar />

      <div
        aria-hidden
        className="absolute inset-0 bg-dot opacity-[0.18] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,#000_15%,transparent_70%)]"
      />

      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 size-[500px] md:size-[700px] rounded-full bg-accent-red/20 blur-[80px] pointer-events-none"
      />

      <div className="relative z-10 min-h-[100dvh] flex flex-col px-6 md:px-10 pt-32 md:pt-32 pb-16">
        <div className="max-w-[1500px] mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="lg:col-span-3 order-2 lg:order-1 lg:pb-12"
          >
            <h1 className="font-medium tracking-[-0.055em] leading-[0.82] text-white">
              <span className="block text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
                Costruisco
              </span>
              <span className="block text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-stroke-mint">
                Soluzioni
              </span>
              <span className="block text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
                Digitali
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="lg:col-span-6 order-1 lg:order-2 relative flex items-end justify-center"
          >
            <div className="relative aspect-square w-full max-w-[900px]">
              <Image
                src="/severino-pro.png"
                alt={`Foto di ${profile.name}`}
                width={1400}
                height={1400}
                sizes="(min-width: 1024px) 900px, 95vw"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_40px_80px_rgba(0,0,0,0.65)]"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="lg:col-span-3 order-3 flex flex-col gap-6 lg:pb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-white">
              Progetto. Sviluppo.
              <br />
              Spedisco. <span className="text-accent-red">Veloce.</span>
            </h2>

            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[40ch]">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contatti"
                className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--bg-elev))] border border-[rgb(var(--border-strong))] h-12 px-6 text-sm font-medium text-white hover:bg-[rgb(var(--border))] hover:border-zinc-600 press"
              >
                Richiedi Preventivo
              </a>
              <a
                href="#progetti"
                className="inline-flex items-center gap-2 rounded-full border border-accent-red h-12 px-6 text-sm font-medium text-accent-red hover:bg-accent-red hover:text-black press"
              >
                I Miei Servizi
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="max-w-[1500px] mx-auto w-full mt-10 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex items-center justify-center gap-3 text-sm md:text-base text-zinc-300"
          >
            <span className="size-2 rounded-full bg-accent-red" />
            <span>
              {profile.name}
              <span className="mx-2 text-zinc-700">·</span>
              <span className="text-zinc-500">{profile.role}</span>
            </span>
          </motion.div>

          {stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[rgb(var(--border))]"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="relative pt-4"
                >
                  <div className="absolute top-0 left-0 w-8 h-px bg-accent-red" />
                  <div className="text-2xl md:text-3xl font-medium text-white tabular leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
