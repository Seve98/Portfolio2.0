export type ExperienceEntry = {
  years: string;
  role: string;
  company: string;
  location: string;
  description?: string;
};

export const experience: ExperienceEntry[] = [
  {
    years: "2024–Presente",
    role: "Junior Frontend Engineer",
    company: "Freelance / Open Source",
    location: "Italia · Remote",
    description:
      "Sviluppo di interfacce React/Next.js per progetti personali e contributi open source. Focus su performance e Core Web Vitals.",
  },
  {
    years: "2023–2024",
    role: "Frontend Developer Trainee",
    company: "Self-taught Path",
    location: "Italia · Remote",
    description:
      "Studio strutturato di React, TypeScript, Next.js App Router, Server Components e testing con Vitest/Playwright.",
  },
  {
    years: "2022–2023",
    role: "Web Developer (Angular)",
    company: "Progetti personali",
    location: "Italia",
    description:
      "Primi progetti in produzione con Angular, RxJS e SCSS. Approccio modulare ai componenti e routing complesso.",
  },
  {
    years: "2021–2022",
    role: "Bootcamp · Fundamentals",
    company: "Self-paced HTML/CSS/JS",
    location: "Italia",
    description:
      "Fondamenta del web: HTML semantico, CSS moderno, JavaScript vanilla. Prime esperienze con Git e deployment statico.",
  },
];
