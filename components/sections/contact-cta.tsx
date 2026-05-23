"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./contact-form";
import { profile } from "@/lib/data/profile";
import { SectionLabel } from "./about";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Telefono",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    tabular: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

export function ContactCTA() {
  return (
    <section
      id="contatti"
      className="relative py-24 md:py-32 border-t overflow-hidden"
      aria-labelledby="contact-cta-title"
    >
      <div
        aria-hidden
        className="absolute left-[-200px] top-1/2 -translate-y-1/2 size-[500px] rounded-full bg-accent-red/8 blur-3xl pointer-events-none"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-8">
        <SectionLabel num="09" label="Contatti" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-red">
              Lavoriamo insieme
            </p>
            <h2
              id="contact-cta-title"
              className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.05] tracking-[-0.035em] text-white max-w-[18ch]"
            >
              Hai un&apos;idea?{" "}
              <span className="text-accent-red">Scrivimi.</span>
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[50ch]">
              Aperto a freelance, collaborazioni e ruoli junior frontend.
              Risposta media in 24-48h, timezone Europe/Rome.
            </p>

            <ul className="flex flex-col border-y">
              {contactItems.map(({ icon: Icon, label, value, href, tabular }, i) => {
                const content = (
                  <>
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-red/10 text-accent-red shrink-0"
                    >
                      <Icon size={14} />
                    </motion.span>
                    <span className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                        {label}
                      </span>
                      <span
                        className={`text-sm text-white truncate group-hover:text-accent-red transition-colors ${
                          tabular ? "tabular" : ""
                        }`}
                      >
                        {value}
                      </span>
                    </span>
                    {href && (
                      <ArrowUpRight
                        size={14}
                        className="text-zinc-600 group-hover:text-accent-red transition-colors"
                      />
                    )}
                  </>
                );

                return (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className={i < contactItems.length - 1 ? "border-b" : ""}
                  >
                    {href ? (
                      <Link
                        href={href}
                        className="group flex items-center gap-4 py-4 press"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div className="group flex items-center gap-4 py-4">
                        {content}
                      </div>
                    )}
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2"
            >
              <Button
                as="a"
                href={profile.cvUrl}
                variant="outline"
                size="md"
                target="_blank"
                rel="noreferrer noopener"
              >
                Scarica CV
                <ArrowUpRight size={14} />
              </Button>
            </motion.div>

            <p className="font-mono text-[11px] text-zinc-600">
              risposta media: 24-48h · timezone Europe/Rome
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
