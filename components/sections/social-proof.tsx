"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, XTwitter } from "@/components/ui/brand-icons";
import { profile } from "@/lib/data/profile";

const socialMap = {
  github: { Icon: Github, label: "GitHub" },
  linkedin: { Icon: Linkedin, label: "LinkedIn" },
  x: { Icon: XTwitter, label: "X (Twitter)" },
} as const;

export function SocialProof() {
  const socials = profile.socials
    .filter((s): s is (typeof profile.socials)[number] =>
      ["github", "linkedin", "x"].includes(s.icon)
    )
    .slice(0, 3);

  return (
    <section
      id="social-proof"
      className="relative py-10 md:py-14 border-t border-b border-[rgb(var(--border))]"
      aria-label="Affidabilità"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 flex items-start gap-4 pl-1"
          >
            <span
              aria-hidden
              className="mt-1 block w-px h-12 bg-accent-red"
            />
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[48ch]">
              Costruisco prodotti digitali affidabili per aziende e founder
              indipendenti che vogliono crescere.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-6 flex flex-wrap items-center gap-3 md:justify-end"
          >
            {socials.map((s) => {
              const entry = socialMap[s.icon as keyof typeof socialMap];
              if (!entry) return null;
              const { Icon, label } = entry;
              return (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-3 px-4 h-12 rounded-xl border border-[rgb(var(--border-strong))] bg-[rgb(var(--card))] hover:border-accent-red press"
                >
                  <span className="inline-flex items-center justify-center size-9 rounded-lg bg-[rgb(var(--bg-elev))] text-accent-red group-hover:bg-accent-red group-hover:text-black transition-colors">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm font-medium text-white">
                    {label}
                  </span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
