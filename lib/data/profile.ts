export type Social = {
  label: string;
  href: string;
  icon: "github" | "instagram" | "linkedin" | "mail" | "x";
};

export type Profile = {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  greeting: string;
  role: string;
  tagline: string;
  bioShort: string;
  aboutBullets: string[];
  email: string;
  phone: string;
  location: string;
  githubUser: string;
  socials: Social[];
  cvUrl: string;
};

export const profile: Profile = {
  name: "Severino Santalucia",
  firstName: "Severino",
  lastName: "Santalucia",
  initials: "SS",
  greeting: "Ciao, sono",
  role: "Junior Frontend Engineer",
  tagline:
    "Junior Frontend Engineer focalizzato su React e Next.js. Costruisco applicazioni web performanti, type-safe e accessibili.",
  bioShort:
    "Un developer appassionato che trasforma idee in interfacce performanti.",
  aboutBullets: [
    "Junior Frontend Engineer specializzato in React 19 e Next.js 16",
    "Performance, accessibilità WCAG e type-safety come default",
    "Esperienza in progetti freelance, side builds e open source",
  ],
  email: "severinosantalucia5@gmail.com",
  phone: "+39 349 934 7058",
  location: "Italia, Remote",
  githubUser: "Seve98",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Seve98",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/severinosantalucia",
      icon: "linkedin",
    },
    {
      label: "X",
      href: "https://x.com/severinosantalucia",
      icon: "x",
    },
    {
      label: "Email",
      href: "mailto:severinosantalucia5@gmail.com",
      icon: "mail",
    },
  ],
  cvUrl: "/cv-severino-santa-lucia.pdf",
};
