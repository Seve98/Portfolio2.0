export type ExperienceEntry = {
  years: string;
  role: string;
  company: string;
  location: string;
  description?: string;
};

export const experience: ExperienceEntry[] = [
  {
    years: "Feb 2026 – Presente",
    role: "Sviluppatore Web Junior",
    company: "Nextfuture · Stage",
    location: "Foggia, IT · In sede",
    description:
      "Sviluppo frontend con Next.js, React, TypeScript. Integrazione Docker, supporto helpdesk e collaborazione su backend Laravel. Uso quotidiano di Claude Code per pair-programming AI.",
  },
];
