import { fetchGithubStats } from "@/lib/github";
import { profile } from "@/lib/data/profile";
import { HeroContent } from "./hero-content";

function formatRelative(iso: string | null): string {
  if (!iso) return "n/d";
  const date = new Date(iso);
  const now = new Date();
  const days = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (days < 1) return "oggi";
  if (days < 2) return "ieri";
  if (days < 30) return `${days}g`;
  if (days < 365) return `${Math.floor(days / 30)}m`;
  return `${Math.floor(days / 365)}a`;
}

export async function Hero() {
  const s = await fetchGithubStats(profile.githubUser);
  const stats = [
    { value: `${s.reposCount}`, label: "REPO" },
    { value: `${s.totalStars}`, label: "STELLE" },
    { value: `${s.languages.length}`, label: "LINGUE" },
    { value: formatRelative(s.lastPushAt), label: "ULTIMO PUSH" },
  ];
  return <HeroContent stats={stats} />;
}
