import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  PROJECT_CAP,
  pinnedRepos,
  repoOverrides,
  type RepoOverride,
} from "./data/repo-overrides";

export type GithubProject = {
  slug: string;
  title: string;
  description: string;
  category: string;
  cover: string;
  liveUrl?: string;
  codeUrl: string;
  stars: number;
  pushedAt: string;
  language: string | null;
  topics: string[];
};

type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  homepage: string | null;
  html_url: string;
  stargazers_count: number;
  pushed_at: string;
  language: string | null;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  private: boolean;
};

const FALLBACK_CATEGORY = "Repo";
const PUBLIC_DIR = join(process.cwd(), "public");

function formatTitle(name: string): string {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((w) => (w.length > 2 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

function localCover(name: string): string | null {
  const file = join(PUBLIC_DIR, "projects", `${name}.png`);
  return existsSync(file) ? `/projects/${name}.png` : null;
}

function resolveCover(
  username: string,
  repo: GithubRepo,
  override?: RepoOverride
): string {
  if (override?.cover) return override.cover;
  const local = localCover(repo.name);
  if (local) return local;
  // GitHub's auto-generated OG card image (stats + colors)
  return `https://opengraph.githubassets.com/1/${username}/${repo.name}`;
}

function resolveCategory(
  repo: GithubRepo,
  override?: RepoOverride
): string {
  if (override?.category) return override.category;
  if (repo.topics && repo.topics.length > 0) {
    return formatTitle(repo.topics[0]);
  }
  if (repo.language) return repo.language;
  return FALLBACK_CATEGORY;
}

function resolveDescription(
  repo: GithubRepo,
  override?: RepoOverride
): string {
  if (override?.description) return override.description;
  if (repo.description && repo.description.trim()) return repo.description;
  if (repo.language) return `Progetto ${repo.language}.`;
  return "Repository pubblico. Visita il codice su GitHub.";
}

function toProject(username: string, repo: GithubRepo): GithubProject {
  const override = repoOverrides[repo.name];
  return {
    slug: repo.name,
    title: override?.title ?? formatTitle(repo.name),
    description: resolveDescription(repo, override),
    category: resolveCategory(repo, override),
    cover: resolveCover(username, repo, override),
    liveUrl:
      override?.liveUrl ??
      (repo.homepage && repo.homepage.trim() ? repo.homepage : undefined),
    codeUrl: repo.html_url,
    stars: repo.stargazers_count,
    pushedAt: repo.pushed_at,
    language: repo.language,
    topics: repo.topics ?? [],
  };
}

function orderProjects(projects: GithubProject[]): GithubProject[] {
  const bySlug = new Map(projects.map((p) => [p.slug, p]));
  const pinned: GithubProject[] = [];
  for (const slug of pinnedRepos) {
    const p = bySlug.get(slug);
    if (p) {
      pinned.push(p);
      bySlug.delete(slug);
    }
  }
  const rest = Array.from(bySlug.values()).sort((a, b) =>
    a.pushedAt < b.pushedAt ? 1 : -1
  );
  return [...pinned, ...rest].slice(0, PROJECT_CAP);
}

function ghHeaders(): HeadersInit {
  const h: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    (h as Record<string, string>).Authorization =
      `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return h;
}

async function fetchAllPublicRepos(username: string): Promise<GithubRepo[]> {
  const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed&direction=desc&type=public`;
  try {
    const res = await fetch(url, {
      headers: ghHeaders(),
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.warn(`[github] HTTP ${res.status} for ${url}`);
      return [];
    }
    return (await res.json()) as GithubRepo[];
  } catch (err) {
    console.error("[github] fetch failed:", err);
    return [];
  }
}

export async function fetchPublicRepos(
  username: string
): Promise<GithubProject[]> {
  const repos = await fetchAllPublicRepos(username);
  const filtered = repos.filter((r) => {
    if (r.fork || r.archived || r.private) return false;
    const override = repoOverrides[r.name];
    if (override?.hidden) return false;
    return true;
  });
  const mapped = filtered.map((r) => toProject(username, r));
  return orderProjects(mapped);
}

export type GithubStats = {
  reposCount: number;
  totalStars: number;
  languages: string[];
  lastPushAt: string | null;
};

export async function fetchGithubStats(
  username: string
): Promise<GithubStats> {
  const repos = await fetchAllPublicRepos(username);
  const visible = repos.filter((r) => {
    if (r.fork || r.archived || r.private) return false;
    const override = repoOverrides[r.name];
    if (override?.hidden) return false;
    return true;
  });
  const totalStars = visible.reduce(
    (sum, r) => sum + (r.stargazers_count || 0),
    0
  );
  const languages = Array.from(
    new Set(visible.map((r) => r.language).filter((l): l is string => !!l))
  );
  const lastPushAt =
    visible
      .map((r) => r.pushed_at)
      .filter(Boolean)
      .sort((a, b) => (a < b ? 1 : -1))[0] ?? null;
  return {
    reposCount: visible.length,
    totalStars,
    languages,
    lastPushAt,
  };
}
