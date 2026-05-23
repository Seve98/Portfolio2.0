"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin, XTwitter } from "@/components/ui/brand-icons";
import { profile } from "@/lib/data/profile";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Github,
  mail: Mail,
  x: XTwitter,
};

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Chi sono", href: "#chi-sono" },
  { name: "Esperienza", href: "#esperienza" },
  { name: "Progetti", href: "#progetti" },
  { name: "Competenze", href: "#expertise" },
  { name: "Contatti", href: "#contatti" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t mt-24 bg-[rgb(var(--bg))] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link href="#home" className="press inline-flex w-fit">
              <BrandWordmark />
            </Link>
            <p className="text-lg md:text-xl font-semibold text-white leading-snug max-w-[36ch]">
              Sviluppo siti web e prodotti digitali ad alte performance.
            </p>
            <div className="hairline w-full" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-base font-bold text-white">
                  Telefono
                </span>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="text-sm text-zinc-400 hover:text-accent-red tabular press"
                >
                  {profile.phone}
                </a>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-base font-bold text-white">Sede</span>
                <span className="text-sm text-zinc-400 leading-relaxed">
                  {profile.location}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-base font-bold text-white">Email</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-zinc-400 hover:text-accent-red press break-all"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="text-lg font-bold text-white">Link Rapidi</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-3 text-sm text-zinc-400 hover:text-white press"
                  >
                    <span className="inline-flex items-center justify-center size-6 rounded-full border border-accent-red text-accent-red group-hover:bg-accent-red group-hover:text-black transition-colors">
                      <ChevronRight size={12} />
                    </span>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col gap-5">
            <h4 className="text-lg font-bold text-white leading-snug">
              Iscriviti alla newsletter
              <br />
              <span className="text-zinc-400 font-medium">
                per gli ultimi aggiornamenti
              </span>
            </h4>

            <form
              action={`mailto:${profile.email}`}
              method="post"
              encType="text/plain"
              className="flex items-center rounded-full border border-[rgb(var(--border-strong))] bg-[rgb(var(--card))] p-1 pl-5 h-14"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="tu@email.com"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-accent-red text-black h-11 px-5 text-sm font-medium hover:bg-accent-red-soft press"
              >
                Iscriviti
                <ArrowRight size={14} />
              </button>
            </form>

            <div className="flex flex-col gap-3 pt-2">
              <span className="text-sm font-bold text-white">Seguimi</span>
              <ul className="flex items-center gap-3">
                {profile.socials.map((s) => {
                  const Icon = iconMap[s.icon] ?? Github;
                  return (
                    <li key={s.label}>
                      <motion.a
                        whileHover={{ y: -3 }}
                        href={s.href}
                        target={s.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer noopener"
                        aria-label={s.label}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgb(var(--border-strong))] bg-[rgb(var(--card))] text-zinc-400 hover:text-accent-red hover:border-accent-red press"
                      >
                        <Icon size={14} />
                      </motion.a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <motion.h2
          aria-hidden
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="flex items-baseline gap-4 leading-[0.85] tracking-[-0.05em] whitespace-nowrap overflow-hidden px-6 md:px-10"
        >
          <span className="text-stroke-mint text-[18vw] font-bold">Lavoriamo</span>
          <span className="text-white text-[18vw] font-bold">Insieme</span>
        </motion.h2>
      </div>

      <div className="border-t border-[rgb(var(--border))]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
          <p className="text-zinc-500">
            © {year} {profile.name}. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-zinc-500 hover:text-white press">
              Privacy Policy
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-white press">
              Termini e Condizioni
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function BrandWordmark() {
  const first = profile.firstName.toLowerCase();
  const left = first.slice(0, 2);
  const mid = first.slice(2, 3);
  const right = first.slice(3);
  return (
    <div className="flex flex-col leading-[0.9]">
      <div className="flex items-baseline">
        <span className="text-3xl font-bold text-white tracking-tight">
          {left}
        </span>
        <span className="relative inline-flex items-center justify-center size-10 rounded-full bg-accent-red -mx-px">
          <span className="text-xl font-bold text-black leading-none">
            {mid}
          </span>
        </span>
        <span className="text-3xl font-bold text-white tracking-tight">
          {right}
        </span>
      </div>
      <span className="ml-[2px] font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
        frontend studio
      </span>
    </div>
  );
}
