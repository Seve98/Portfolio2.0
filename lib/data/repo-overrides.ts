export type RepoOverride = {
  hidden?: boolean;
  title?: string;
  description?: string;
  category?: string;
  cover?: string;
  liveUrl?: string;
};

/**
 * Per-repo customization. Key = exact GitHub repo name (case-sensitive).
 * Anything left undefined falls back to data from the GitHub API.
 */
export const repoOverrides: Record<string, RepoOverride> = {
  DigitalQuest: {
    title: "Digital Quest",
    category: "Web App",
    description:
      "Piattaforma educativa con percorsi gamificati e tracking progressi.",
    liveUrl: "https://digital-quest-omega.vercel.app/",
  },
  "Petti-Beverage": {
    title: "Petti Beverage",
    category: "E-Commerce",
    description:
      "E-commerce per distribuzione bevande con catalogo, carrello e gestione ordini.",
    liveUrl: "https://www.pettibeverage.com/",
  },
  Portfolio: {
    title: "Portfolio v1",
    category: "Personal",
    description: "Prima versione del portfolio personale (Angular).",
    liveUrl: "https://severino-santalucia-portfolio.vercel.app",
  },
  Yugioh_Project: {
    title: "Yu-Gi-Oh Deck Builder",
    category: "Web App",
    description:
      "Deck builder con ricerca carte real-time, salvataggio mazzi e statistiche.",
  },
  Master_Hotel_Project: {
    title: "Master Hotel",
    category: "Booking",
    description:
      "Sistema di prenotazione hotel con calendario, disponibilità e pannello admin.",
  },
  Boxyfay: {
    title: "Boxyfay",
    category: "Mobile",
    description: "App mobile per gestione abbonamenti box ricorrenti.",
  },
  Progetto_Red: {
    title: "Progetto Red",
    category: "Landing Page",
    description: "Landing page promozionale con animazioni scroll-driven.",
  },
  Technova: {
    title: "Technova",
    category: "SaaS",
    description: "Dashboard SaaS B2B con metriche live, billing e team management.",
  },
  Progetto_Simulatore_Bolletta: {
    title: "E-Planner",
    category: "Web App",
    description:
      "Simulatore di bollette elettriche con calcolo consumi, fasce orarie e proiezione costi mensili.",
  },
};

/**
 * Repos shown FIRST (in this exact order) at the top of the projects grid.
 * Remaining repos follow, sorted by `pushed_at` descending.
 */
export const pinnedRepos: string[] = [
  "DigitalQuest",
  "Petti-Beverage",
  "Technova",
  "Yugioh_Project",
];

/**
 * Maximum total projects to render in the carousel.
 */
export const PROJECT_CAP = 12;
