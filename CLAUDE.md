# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Next.js dev server (Turbopack) on http://localhost:3000
npm run build    # Production build
npm run start    # Serve production build
```

No test runner, linter, or formatter is configured. TypeScript checking happens through `next build` (strict mode via `tsconfig.json`).

Environment: copy `.env.example` to `.env.local`. `GITHUB_TOKEN` is optional (raises GitHub API rate limit from 60 → 5000/h). `NEXT_PUBLIC_SITE_URL` is consumed by `lib/seo.ts`, `app/sitemap.ts`, `app/robots.ts`.

## Stack

- Next.js 16 App Router + React 19 (Server Components by default, `useActionState` for forms)
- TypeScript strict, path alias `@/*` → repo root
- Tailwind CSS v4 via `@theme` block in `app/globals.css` (no `tailwind.config.*`)
- `framer-motion` for animations, `zod` for Server Action validation
- Fonts: Geist Sans + Geist Mono (`geist/font/*`)

## Architecture

### Page composition
`app/page.tsx` is a single Server Component that imports section components from `components/sections/*` and stacks them. Each section is self-contained — no global layout state, no client-side router beyond Next defaults. Adding/removing a section = adding/removing one import + JSX line.

### Static content lives in `lib/data/*.ts`
There is no CMS. Profile, skills, experience, education, and repo curation are all typed TS modules:
- `lib/data/profile.ts` — name, bio, contacts, social, CV link
- `lib/data/skills.ts` — tech badges/marquee
- `lib/data/experience.ts`, `lib/data/education.ts` — timeline entries
- `lib/data/repo-overrides.ts` — see "GitHub sync" below

### GitHub projects sync (`lib/github.ts`)
`components/sections/projects.tsx` is an async RSC. It calls `fetchPublicRepos(GITHUB_USERNAME)` with `next.revalidate = 3600` (ISR 1h). To change the source user, edit `GITHUB_USERNAME` inside `projects.tsx`.

The pipeline:
1. `fetchAllPublicRepos` hits `api.github.com/users/{user}/repos`. On HTTP error or fetch failure it returns `[]` (graceful empty state, never throws).
2. Filters out forks, archived, private, and repos with `hidden: true` in `repoOverrides`.
3. `toProject` merges each repo with its override from `lib/data/repo-overrides.ts` (title, description, category, liveUrl, cover).
4. Cover resolution order: `override.cover` → local file at `public/projects/{repoName}.png` (checked via `existsSync` at request time) → `opengraph.githubassets.com/1/{user}/{repo}` fallback.
5. `orderProjects` puts `pinnedRepos` first (in declared order), the rest sorted by `pushed_at` desc, capped at `PROJECT_CAP`.

`fetchGithubStats` reuses the same fetch+filter to expose aggregates (repos count, total stars, languages, last push) — used in the About section.

Remote image hosts must be whitelisted in `next.config.ts` `images.remotePatterns` (currently allows `opengraph.githubassets.com`, `avatars.githubusercontent.com`, `picsum.photos`).

### Contact form (Server Action)
`actions/contact.actions.ts` exports `submitContact` validated with Zod, including a `website` honeypot field that silently fakes success when filled. The action currently logs to console — wire a provider (Resend, SMTP, etc.) at the `TODO cliente` marker before shipping. The form component (`components/sections/contact-form.tsx`) is a Client Component using `useActionState` with `ContactState` discriminated union (`idle | error | success`).

### Animation conventions
- Default to **Framer Motion** (`framer-motion`). Import `motion`, `useInView`, `useReducedMotion`, `useMotionValue`, `animate` from `framer-motion`.
- Pattern for scroll-triggered reveals: `motion.div` with `initial` + `whileInView` + `viewport={{ once: true, amount: 0.25 }}`. Skip the `initial` (pass `false`) when `useReducedMotion()` returns true.
- For numeric counters / progress bars use `useMotionValue` + `animate(value, target, …)` and subscribe via `.on("change", …)`.
- CSS-only ambient animations (marquee, float, breathe, drift, pulse) live in `app/globals.css` under `@layer utilities` and are disabled inside `@media (prefers-reduced-motion: reduce)`. Any new continuous motion must respect that media query.

### Styling tokens
All design tokens live in `app/globals.css`. Two parallel systems:
- `@theme { --color-*, --font-*, --container-screen }` — exposed as Tailwind utilities (`bg-bg`, `text-fg`, etc.)
- `:root { --bg, --fg, --accent-red, ... }` — raw RGB triplets used by hand-written utilities (`.bg-base`, `.text-accent-red`, `.glow-accent-red`, `.spotlight-border`, `.red-glow-radial`, ...)

When adding a new color, update both blocks to keep utilities and Tailwind in sync. Palette is dark/cosmic with a single red accent — avoid introducing new hues.

### Components
- `components/sections/*` — page sections, mostly Server Components. Mark `"use client"` only when interactivity or anime.js is needed (e.g. carousels, forms, hover effects).
- `components/ui/*` — primitives (`button`, `project-card`, `tech-icon`, `brand-icons`, `progress-bar`, `timeline-item`, etc.).
- `components/layout/{navbar,footer}.tsx` — the navbar is integrated **inside** the full-viewport hero, not as a separate sticky bar above it (user-confirmed style choice).

### SEO
`lib/seo.ts` builds the shared metadata object. `app/layout.tsx` wires it via `export const metadata`. `app/opengraph-image.tsx` is an edge-runtime generated OG card. `app/sitemap.ts` + `app/robots.ts` use `NEXT_PUBLIC_SITE_URL`.

## Working notes

- The README is in Italian and is the source of truth for content-editing instructions; mirror its file paths when modifying data files.
- When the user asks for a new section or visual, ask for the reference image / mockup upfront — do not invent layouts from text alone.
- Image assets go in `public/`. Project covers must match the exact GitHub repo name (case-sensitive) at `public/projects/{Repo}.png`.
