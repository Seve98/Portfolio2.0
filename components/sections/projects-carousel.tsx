"use client";

import { ProjectCard } from "@/components/ui/project-card";
import type { GithubProject } from "@/lib/github";

type Props = {
  projects: GithubProject[];
};

export function ProjectsCarousel({ projects }: Props) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border bg-[rgb(var(--card))] p-12 text-center">
        <p className="text-sm text-zinc-400">
          Repository in arrivo. Controlla diretto su GitHub.
        </p>
        <a
          href="https://github.com/Seve98"
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm text-white hover:underline underline-offset-4"
        >
          → github.com/Seve98
        </a>
      </div>
    );
  }

  const doubled = [...projects, ...projects];
  const half = projects.slice(0, Math.ceil(projects.length / 2));
  const rest = projects.slice(Math.ceil(projects.length / 2));
  const rowATop = [...half, ...half];
  const rowBBottom = [...rest, ...rest];
  const single = projects.length <= 3;

  return (
    <div className="relative -mx-6 md:-mx-10 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 md:w-40 bg-gradient-to-r from-[rgb(var(--bg))] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 md:w-40 bg-gradient-to-l from-[rgb(var(--bg))] to-transparent"
      />

      {single ? (
        <CarouselRow items={doubled} duration={50} />
      ) : (
        <div className="flex flex-col gap-6">
          <CarouselRow items={rowATop} duration={55} />
          <CarouselRow items={rowBBottom} duration={65} reverse />
        </div>
      )}
    </div>
  );
}

function CarouselRow({
  items,
  duration,
  reverse,
}: {
  items: GithubProject[];
  duration: number;
  reverse?: boolean;
}) {
  return (
    <div
      className="group/row relative flex w-max gap-5 px-6 md:px-10 will-change-transform"
      style={{
        animation: `carousel-scroll ${duration}s linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
        animationPlayState: "running",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.animationPlayState =
          "running")
      }
    >
      {items.map((p, i) => (
        <div
          key={`${p.slug}-${i}`}
          className="w-[320px] sm:w-[380px] md:w-[420px] shrink-0"
        >
          <ProjectCard project={p} index={i} />
        </div>
      ))}
    </div>
  );
}
