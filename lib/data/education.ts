export type EducationEntry = {
  years: string;
  title: string;
  institution: string;
  description?: string;
};

export const education: EducationEntry[] = [
  {
    years: "2024",
    title: "Next.js 15 · App Router & Server Components",
    institution: "Documentazione ufficiale + project-based learning",
    description:
      "Deep dive su data fetching, caching, ISR, Server Actions e Streaming UI.",
  },
  {
    years: "2023–2024",
    title: "React + TypeScript",
    institution: "Self-taught · Open source",
    description:
      "Pattern di composizione, custom hooks, typing avanzato, testing con Vitest e Testing Library.",
  },
  {
    years: "2022–2023",
    title: "Angular Framework",
    institution: "Self-paced",
    description:
      "Architettura modulare, RxJS, signals, forms reattivi, lifecycle dei componenti.",
  },
  {
    years: "2021",
    title: "Web Fundamentals",
    institution: "Online resources · MDN",
    description:
      "HTML semantico, CSS Grid/Flexbox, JavaScript ES6+, DOM e fetch API.",
  },
];
