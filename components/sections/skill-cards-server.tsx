import { fetchGithubStats } from "@/lib/github";
import { profile } from "@/lib/data/profile";
import { technologies } from "@/lib/data/skills";
import { SkillCardsView } from "./skill-cards";

export async function SkillCards() {
  const s = await fetchGithubStats(profile.githubUser);

  const stats = [
    { label: "Anni in produzione React", value: "2", suffix: "+" },
    { label: "Repo pubblici su GitHub", value: `${s.reposCount}`, suffix: "" },
    { label: "Tecnologie nello stack", value: `${technologies.length}`, suffix: "" },
  ];

  return <SkillCardsView stats={stats} />;
}
