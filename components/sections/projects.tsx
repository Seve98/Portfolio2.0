import { ArrowRight } from "lucide-react";
import { ProjectsCarousel } from "./projects-carousel";
import { fetchPublicRepos } from "@/lib/github";
import { profile } from "@/lib/data/profile";
import { ProjectsHeader } from "./projects-header";

export async function Projects() {
  const projects = await fetchPublicRepos(profile.githubUser);

  return (
    <section
      id="progetti"
      className="relative py-24 md:py-32 border-t overflow-hidden"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 mb-12">
        <ProjectsHeader githubUser={profile.githubUser} />
      </div>

      <ProjectsCarousel projects={projects} />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 mt-16 flex items-center justify-center gap-2 text-sm md:text-base">
        <span className="text-zinc-400">Hai un progetto in mente?</span>
        <a
          href="#contatti"
          className="inline-flex items-center gap-2 text-accent-red font-medium underline underline-offset-4 decoration-accent-red/40 hover:decoration-accent-red press"
        >
          Lavoriamo insieme
          <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
