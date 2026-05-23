# Portfolio Severino Santa Lucia — Next.js 16 + Anime.js

Portfolio personale in stile **dark cosmic gradient** (viola → blu), con sezione **Progetti sincronizzata automaticamente dalle repository pubbliche GitHub**.

## Stack

- **Next.js 16** (App Router, Turbopack, Server Actions, RSC)
- **React 19** (`useActionState`, `useFormStatus`)
- **TypeScript strict**
- **Tailwind CSS v4** (`@theme` inline, token semantici)
- **Anime.js v4** per planet 3D, magnetic CTA, stagger reveal, carousel
- **Zod** per validazione Server Action form contatti
- **Phosphor Icons** (strokeWidth uniforme)
- **GitHub REST API** + ISR 1h per fetch repo

## Avvio rapido

```bash
npm install
cp .env.example .env.local
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Sincronizzazione progetti da GitHub

I progetti nella sezione **Progetti** vengono caricati automaticamente da `https://api.github.com/users/Seve98/repos` ad ogni rigenerazione cache (ISR ogni 60 minuti). Quando pubblichi una nuova repo pubblica, appare nel portfolio entro 1 ora — zero codice da modificare.

### Personalizzare metadati per singola repo → `lib/data/repo-overrides.ts`

```ts
export const repoOverrides = {
  "DigitalQuest": {
    title: "Digital Quest",          // Sovrascrive il nome formattato del repo
    category: "Web App",              // Badge categoria sulla card
    description: "...",               // Sovrascrive description GitHub
    liveUrl: "https://...",           // Sovrascrive homepage GitHub
    cover: "/projects/custom.png",    // Sovrascrive cover (default = /projects/{repo}.png se esiste, altrimenti OG GitHub)
    hidden: true,                     // Nasconde la repo dal portfolio
  },
};

export const pinnedRepos = [
  "DigitalQuest",      // Questi appaiono prima
  "Petti-Beverage",    // nell'ordine indicato.
  "Technova",          // I restanti seguono per pushed_at desc.
];

export const PROJECT_CAP = 12;        // Max repo mostrate
```

### Aggiungere screenshot custom per una repo

Metti un PNG con il **nome esatto del repo** in `public/projects/`:

```
public/projects/Nome_Esatto_Repo.png
```

Viene preso automaticamente. Se manca, fallback su `https://opengraph.githubassets.com/1/Seve98/{repo}` (OG card auto-generata da GitHub con stats colorate).

### Rate limit GitHub API

- **Senza token**: 60 req/ora (sufficienti con cache 1h)
- **Con token** (opzionale): 5000 req/ora. Aggiungi `GITHUB_TOKEN=ghp_xxx` in `.env.local` (scope `public_repo`)

### Cambiare username GitHub

Modifica la costante `GITHUB_USERNAME` in `components/sections/projects.tsx`.

## Personalizzare contenuti statici

Tutti i contenuti non-progetto sono in `lib/data/*.ts` — niente CMS.

| File | Cosa contiene |
|------|---------------|
| `lib/data/profile.ts` | Nome, ruolo, bio, email, telefono, social, CV URL, statistiche About |
| `lib/data/skills.ts` | Tech logos marquee sezione Competenze |
| `lib/data/services.ts` | 4 card sezione Servizi |
| `lib/data/testimonials.ts` | Testimonianze cliente (quote + avatar + ruolo) |
| `lib/data/repo-overrides.ts` | Curation repo GitHub (vedi sopra) |

## Architettura

```
app/
├── layout.tsx              Root layout, Outfit + JetBrains Mono, metadata
├── page.tsx                Home — compone tutte le sezioni
├── globals.css             Tailwind v4 @theme cosmic palette
├── opengraph-image.tsx     OG image generata edge runtime
├── robots.ts / sitemap.ts

components/
├── sections/
│   ├── hero.tsx                # Hero full-viewport con navbar integrata
│   ├── about.tsx               # Foto reale + bio + 3 stats inline
│   ├── projects.tsx            # RSC async — fetch GitHub repos
│   ├── projects-carousel.tsx   # Client island — slider con anime.js
│   ├── competenze.tsx          # Tech logos marquee
│   ├── servizi.tsx             # 4 service cards bento
│   ├── testimonials.tsx        # Quote slider
│   ├── contact.tsx             # Info left + form right
│   ├── contact-form.tsx        # Server Action + Zod + useActionState
│   └── section-title.tsx       # Header riutilizzabile
├── ui/
│   ├── planet.tsx              # CSS planet 3D + ring spin (anime.js)
│   ├── photo-frame.tsx         # Cornice glow + signature + badge
│   ├── gradient-button.tsx     # Bottone gradient/outline/ghost
│   ├── project-card.tsx        # Card progetto da GithubProject
│   └── tech-icon.tsx           # SVG icone tech
└── layout/
    ├── navbar.tsx              # Pill fixed, glass on scroll, mobile overlay
    └── footer.tsx              # Logo SS + copyright + social

lib/
├── data/                       # Tutti i dati statici
├── hooks/                      # use-anime, use-in-view, use-reduced-motion
├── github.ts                   # Fetch + transform repos pubbliche
├── utils.ts, seo.ts

actions/
└── contact.actions.ts          # Server Action submitContact + Zod

public/
├── severino.jpg                Foto profilo (1024x1536)
├── favicon.ico                 Logo SS
├── cv-severino-santa-lucia.pdf
└── projects/                   Screenshot progetti per nome repo
```

## Form contatti — collegare provider email

`actions/contact.actions.ts` valida con Zod ma non invia ancora email. Per produzione, sostituisci il `console.log` con il provider (es. Resend):

```ts
await resend.emails.send({
  from: process.env.CONTACT_FROM_EMAIL!,
  to: profile.email,
  subject: `[Portfolio] ${parsed.data.subject}`,
  text: `${parsed.data.message}\n\n— ${parsed.data.name} <${parsed.data.email}>`,
});
```

## Deploy Vercel

```bash
npm install -g vercel
vercel
```

Env vars:
- `NEXT_PUBLIC_SITE_URL` = dominio finale
- `GITHUB_TOKEN` (opzionale) per rate limit più alto
- Credenziali provider email se attivi

## Accessibilità

- Contrast 4.5:1 verificato
- `prefers-reduced-motion` disabilita planet/marquee/stagger
- Skip link "Salta al contenuto"
- Form: label visibili, errori `aria-live`, autofocus errori
- Touch target ≥ 44px

## License

MIT
