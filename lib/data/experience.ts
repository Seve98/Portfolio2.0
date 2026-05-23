export type ExperienceLink = {
  label: string;
  href: string;
};

export type ExperienceEntry = {
  years: string;
  role: string;
  company: string;
  location: string;
  description?: string;
  links?: ExperienceLink[];
};

export const experience: ExperienceEntry[] = [
  {
    years: "Feb 2026 – Presente",
    role: "Sviluppatore Web Junior",
    company: "Nextfuture · Stage",
    location: "Foggia, IT · In sede",
    description:
      "Sviluppo frontend con Next.js, React e TypeScript. Contributi a portali web rilasciati in produzione e ad applicazioni gestionali interne. Backend Laravel, containerizzazione Docker, supporto helpdesk. Pair-programming AI con Claude Code.",
  },
  {
    years: "Feb 2026 – Presente",
    role: "Sviluppatore Freelance",
    company: "Progetti su commissione",
    location: "Italia · Remote",
    description:
      "Petti Beverage — e-commerce per distribuzione bevande, rilasciato Feb 2026. E-Planner — simulatore di bollette elettriche, attualmente in sviluppo.",
    links: [
      { label: "Petti Beverage", href: "https://www.pettibeverage.com" },
    ],
  },
];
