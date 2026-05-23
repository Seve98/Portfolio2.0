export type Tech = {
  name: string;
  color: string;
  icon: "react" | "next" | "typescript" | "tailwind" | "node" | "mongo" | "figma" | "gsap" | "framer";
};

// Ordered by personal confidence (most confident first)
export const technologies: Tech[] = [
  { name: "React", color: "#61DAFB", icon: "react" },
  { name: "Next.js", color: "#ffffff", icon: "next" },
  { name: "TypeScript", color: "#3178C6", icon: "typescript" },
  { name: "Tailwind CSS", color: "#06B6D4", icon: "tailwind" },
  { name: "Node.js", color: "#8CC84B", icon: "node" },
  { name: "Figma", color: "#F24E1E", icon: "figma" },
  { name: "Framer Motion", color: "#0055FF", icon: "framer" },
  { name: "MongoDB", color: "#47A248", icon: "mongo" },
  { name: "GSAP", color: "#88CE02", icon: "gsap" },
];

export type SkillBar = {
  name: string;
  percent: number;
};

export const designSkills: SkillBar[] = [
  { name: "Figma", percent: 83 },
  { name: "Auto Layout & Components", percent: 76 },
  { name: "Design Tokens", percent: 71 },
  { name: "Prototyping", percent: 64 },
];

export const devSkills: SkillBar[] = [
  { name: "React", percent: 87 },
  { name: "Next.js", percent: 81 },
  { name: "TypeScript", percent: 78 },
  { name: "Tailwind CSS", percent: 91 },
];

export type ExpertiseCard = {
  title: string;
  description: string;
  percent: number;
  icon: "palette" | "layout" | "sparkles";
};

export const expertise: ExpertiseCard[] = [
  {
    title: "UI Design",
    description:
      "Sistemi di componenti coerenti, design tokens, accessibilità WCAG e layout responsive.",
    percent: 74,
    icon: "palette",
  },
  {
    title: "Frontend Development",
    description:
      "React 19, Next.js 16, TypeScript, Server Components e Server Actions in produzione.",
    percent: 86,
    icon: "layout",
  },
  {
    title: "Motion & Interaction",
    description:
      "Animazioni performanti con Framer Motion e CSS, rispetto del prefers-reduced-motion.",
    percent: 68,
    icon: "sparkles",
  },
];
