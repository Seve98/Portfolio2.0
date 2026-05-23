"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data/profile";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#chi-sono", label: "About" },
  { href: "#esperienza", label: "Esperienza" },
  { href: "#progetti", label: "Progetti" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contatti", label: "Contatti" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled
            ? "bg-[rgb(var(--bg))]/85 backdrop-blur-md border-b border-[rgb(var(--border))]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-20 flex items-center justify-between">
          <Link
            href="#home"
            className="flex items-center gap-2 press"
            aria-label="Home"
          >
            <BrandBadge />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="#contatti"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-accent-red px-5 h-11 text-sm font-medium text-accent-red hover:bg-accent-red hover:text-black transition-colors press"
            >
              Inizia Progetto
              <span className="inline-flex items-center justify-center size-5 rounded-full bg-accent-red text-black">
                <ArrowUpRight size={12} />
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Apri menu"
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border press"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] lg:hidden bg-[rgb(var(--bg))] flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b">
              <BrandBadge />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Chiudi menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border press"
              >
                <X size={16} />
              </button>
            </div>
            <ul className="flex flex-1 flex-col px-6 pt-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-2xl font-medium border-b press"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                className="mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * links.length, duration: 0.3 }}
              >
                <Link
                  href="#contatti"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent-red h-12 px-5 text-sm font-medium text-accent-red"
                >
                  Inizia Progetto
                  <ArrowUpRight size={14} />
                </Link>
              </motion.li>
            </ul>
            <div className="px-6 py-5 text-center text-xs text-zinc-600">
              © {new Date().getFullYear()} {profile.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function BrandBadge() {
  return (
    <div className="flex items-center gap-3">
      <span className="relative inline-flex size-11 md:size-12 rounded-full overflow-hidden ring-2 ring-accent-red/40 bg-[rgb(var(--bg-elev))]">
        <Image
          src="/avatar-seve.png"
          alt={profile.name}
          fill
          sizes="48px"
          className="object-cover"
          priority
        />
      </span>
      <div className="flex flex-col leading-tight">
        <span className="text-sm md:text-base font-bold text-white tracking-tight">
          {profile.firstName}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
          frontend studio
        </span>
      </div>
    </div>
  );
}
