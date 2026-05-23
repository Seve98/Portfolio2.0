import { fetchGithubStats } from "@/lib/github";
import { profile } from "@/lib/data/profile";
import { ProjectCTAView } from "./project-cta";

export async function ProjectCTA() {
  const stats = await fetchGithubStats(profile.githubUser);
  return (
    <ProjectCTAView
      reposCount={stats.reposCount}
      totalStars={stats.totalStars}
    />
  );
}
