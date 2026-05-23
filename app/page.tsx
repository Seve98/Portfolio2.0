import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { DesignSkills } from "@/components/sections/design-skills";
import { DevSkills } from "@/components/sections/dev-skills";
import { Projects } from "@/components/sections/projects";
import { Expertise } from "@/components/sections/expertise";
import { SkillCards } from "@/components/sections/skill-cards-server";
import { ProjectCTA } from "@/components/sections/project-cta-server";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <About />
      <Experience />
      <Education />
      <MarqueeStrip />
      <DesignSkills />
      <DevSkills />
      <Projects />
      <MarqueeStrip
        items={[
          "Lavoriamo Insieme",
          "Mettiamoci in Contatto",
          "Aperto a Nuove Opportunità",
          "Freelance · Full-time",
        ]}
        variant="stroke"
      />
      <Expertise />
      <SkillCards />
      <ProjectCTA />
      <ContactCTA />
    </>
  );
}
