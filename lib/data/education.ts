export type EducationEntry = {
  years: string;
  title: string;
  institution: string;
  description?: string;
};

export const education: EducationEntry[] = [
  {
    years: "Ott 2025",
    title: "Specializzazione React JS",
    institution: "Aulab · ID 164634954",
    description:
      "Specializzazione post-bootcamp su React.js: componenti, hooks, state management e integrazione con HTML.",
  },
  {
    years: "Lug 2025",
    title: "Full Stack Web Developer · Hackademy",
    institution: "Aulab · ID 154455101",
    description:
      "Bootcamp full-stack: PHP, Laravel, JavaScript, HTML5, CSS3, Bootstrap, Git e database relazionali.",
  },
  {
    years: "Mar 2025",
    title: "HTML5 e CSS3 · La guida completa",
    institution: "Udemy",
    description:
      "Fondamenta del web moderno: HTML5 semantico, CSS3 con layout responsive e best practice di accessibilità.",
  },
];
