"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { Github } from "@/components/ui/brand-icons";
import { TechBadge } from "@/components/ui/tech-badge";
import type { GithubProject } from "@/lib/github";
import { cn } from "@/lib/utils";

type Props = {
  project: GithubProject;
  className?: string;
  index?: number;
};

const MAX_BADGES = 2;

export function ProjectCard({ project, className, index = 0 }: Props) {
  const isRemoteCover = project.cover.startsWith("http");
  const badges = project.topics.slice(0, MAX_BADGES);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: 0.08 * (index % 4),
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative flex flex-col gap-5 rounded-2xl border border-[rgb(var(--border-strong))] bg-[rgb(var(--card))] p-4 hover:border-accent-red transition-colors",
        className
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black">
        <Image
          src={project.cover}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
          unoptimized={isRemoteCover}
        />
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Apri demo di ${project.title}`}
            className="absolute top-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgb(var(--bg))]/85 border border-[rgb(var(--border-strong))] text-white hover:bg-accent-red hover:text-black hover:border-accent-red press"
          >
            <ArrowUpRight size={14} />
          </Link>
        )}
      </div>

      <div className="flex flex-wrap items-start justify-between gap-3 px-2 pb-2">
        <div className="flex flex-col gap-1.5 min-w-0">
          <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-accent-red transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-zinc-500 tabular">
            <span>{project.language ?? "n/d"}</span>
            {project.stars > 0 && (
              <>
                <span className="text-zinc-700">·</span>
                <span className="inline-flex items-center gap-1 text-accent-red">
                  <Star size={10} />
                  {project.stars}
                </span>
              </>
            )}
            <span className="text-zinc-700">·</span>
            <Link
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-zinc-400 hover:text-white press"
            >
              <Github size={11} />
              Repo
            </Link>
          </div>
        </div>

        {badges.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {badges.map((t) => (
              <li key={t}>
                <TechBadge>{t}</TechBadge>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}
