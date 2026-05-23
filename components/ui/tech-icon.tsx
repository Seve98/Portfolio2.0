import type { SVGProps } from "react";

type Name =
  | "react"
  | "next"
  | "typescript"
  | "tailwind"
  | "node"
  | "mongo"
  | "figma"
  | "gsap"
  | "framer";

type Props = SVGProps<SVGSVGElement> & {
  name: Name;
};

export function TechIcon({ name, ...rest }: Props) {
  switch (name) {
    case "react":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...rest}>
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      );
    case "next":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...rest}>
          <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 7v10M16 7v6.5L8.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...rest}>
          <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 11h6M11 11v7M15 17.5c.6.5 1.4.8 2.3.8 1.3 0 2.2-.7 2.2-1.8 0-2.3-4.3-1.7-4.3-3.8 0-1 .8-1.7 2-1.7.9 0 1.6.3 2.1.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...rest}>
          <path
            d="M6 11c1.5-3 3.5-4.5 6-4.5 3 0 4.5 1.5 5 4.5-1.5-1.5-3-2-4-1.5-.7.3-1.2 1-1.7 1.7-.9 1.2-1.9 2.5-4.3 2.5-3 0-4.5-1.5-5-4.5 1.5 1.5 3 2 4 1.5z M4 17c1.5-3 3.5-4.5 6-4.5 3 0 4.5 1.5 5 4.5-1.5-1.5-3-2-4-1.5-.7.3-1.2 1-1.7 1.7-.9 1.2-1.9 2.5-4.3 2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      );
    case "node":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...rest}>
          <path d="M12 2.5l8.5 5v9L12 21.5 3.5 16.5v-9L12 2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M9 9v6c0 .8.7 1.5 1.5 1.5h1c.8 0 1.5-.7 1.5-1.5V9M15 14v.5c0 1 .8 1.5 1.8 1.5h.5c1.1 0 1.7-.5 1.7-1.3 0-1.6-3.5-1.2-3.5-2.7 0-.7.6-1.2 1.5-1.2h.5c.9 0 1.5.5 1.5 1.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "mongo":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...rest}>
          <path d="M12 2c2.5 5 5 8 5 11.5S15 20 12 21c-3-1-5-4-5-7.5S9.5 7 12 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M12 4v18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...rest}>
          <path d="M8 2h4v6H8a3 3 0 110-6z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M12 2h4a3 3 0 010 6h-4V2z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M12 8h4a3 3 0 010 6h-4V8z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 8h4v6H8a3 3 0 110-6z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 14h4v3a3 3 0 11-3-3h-1z" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "gsap":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...rest}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 11.5c0-2 1.4-3.5 3.5-3.5 1.5 0 2.8.8 3.2 2M15.5 11v3.5h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "framer":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...rest}>
          <path d="M5 3h14v6h-7l7 6v6h-7l-7-6V9h7L5 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      );
  }
}
