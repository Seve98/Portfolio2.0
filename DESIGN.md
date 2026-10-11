---
name: Severino Santalucia Portfolio
description: Portfolio di un frontend engineer, buio e operativo, con un solo accento menta.
colors:
  night-canvas: "#09090b"
  night-elevated: "#111113"
  night-card: "#0e0e10"
  seam-line: "#1f1f22"
  seam-line-strong: "#2a2a2e"
  chalk-white: "#fafafa"
  ash-text: "#a1a1aa"
  ash-muted: "#71717a"
  electric-mint: "#2ee6a8"
  electric-mint-deep: "#1faf7f"
typography:
  display:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(3.75rem, 7vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.82
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  gutter-mobile: "24px"
  gutter-desktop: "40px"
  section-mobile: "96px"
  section-desktop: "128px"
  container: "1400px"
components:
  button-primary:
    backgroundColor: "{colors.night-elevated}"
    textColor: "{colors.chalk-white}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.seam-line}"
    textColor: "{colors.chalk-white}"
  button-accent:
    backgroundColor: "transparent"
    textColor: "{colors.electric-mint}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "44px"
  button-accent-hover:
    backgroundColor: "{colors.electric-mint}"
    textColor: "{colors.night-canvas}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ash-text}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "44px"
  chip-tech:
    backgroundColor: "transparent"
    textColor: "{colors.ash-text}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  card-project:
    backgroundColor: "{colors.night-card}"
    rounded: "{rounded.xl}"
    padding: "16px"
  input-field:
    backgroundColor: "{colors.night-canvas}"
    textColor: "{colors.chalk-white}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "40px"
  nav-link:
    textColor: "{colors.ash-text}"
    padding: "8px 16px"
---

# Design System: Severino Santalucia Portfolio

## 1. Overview

**Creative North Star: "Il Cantiere Notturno"**

Un cantiere di notte: tutto è buio tranne il punto in cui si sta costruendo, e lì c'è una sola luce, verde menta. Il sistema è quasi monocromo, con superfici nere appena separate da linee sottili, e affida all'accento il compito di dire "qui succede qualcosa": un link, un'azione, un progetto live. La luce non decora, indica il lavoro.

La densità è da palcoscenico, non da dashboard: sezioni lunghe e ariose (96–128px di respiro verticale), una sola idea dominante per schermata, tipografia display enorme e serrata accanto a testo di supporto piccolo e grigio. Il contrasto di scala fa il lavoro gerarchico; il colore resta in riserva. Il movimento è un'unica coreografia: ogni elemento entra salendo di 20px con la stessa curva easeOutQuint, a cascata breve, una volta sola.

Il sistema rifiuta esplicitamente tre cose, citate da PRODUCT.md: il **template ThemeForest** (sezioni prevedibili in ordine prevedibile), il **look "fatto con l'AI"** (gradienti viola/blu, glassmorphism decorativo, card identiche, metriche hero, testo sfumato, etichette maiuscole spaziate sopra ogni sezione) e il **CV online noioso** (elenchi e timeline piatti, senza ritmo né voce).

**Key Characteristics:**
- Tema scuro con neutri leggermente freddi, mai nero puro.
- Un solo accento saturo, Menta Elettrica, sotto il 10% della superficie.
- Profondità tonale e linee sottili, niente ombre strutturali.
- Pillole per le azioni, angoli morbidi (16px) per i contenitori.
- Display serrato (tracking −0.055em, interlinea 0.82) contro corpo piccolo e rilassato.
- Grana fissa leggerissima su tutta la pagina, come polvere nella luce dei fari.
- Motion unico e condiviso, definito in `lib/motion.ts`.

## 2. Colors

Notte quasi monocroma con una sola fonte di luce: neutri zinco leggermente freddi e un accento menta elettrico.

### Primary
- **Menta Elettrica** (#2ee6a8): l'unica luce del cantiere. Link attivi, CTA "Inizia Progetto", bordi in hover delle card, puntini-marcatori delle sezioni, parola chiave nell'hero ("Veloce."), contorno della parola "Soluzioni". Testo nero sopra quando fa da sfondo pieno.
- **Menta Profonda** (#1faf7f): variante più scura per riempimenti estesi o stati premuti, dove la menta piena abbaglierebbe.

### Neutral
- **Tela Notturna** (#09090b): sfondo di pagina e degli input. È il buio di base.
- **Superficie Rialzata** (#111113): bottoni primari, chip di link, icone su fondo.
- **Fondo Card** (#0e0e10): card progetto, timeline, form. Un gradino appena sopra la tela.
- **Linea di Giunzione** (#1f1f22): divisori di sezione (`border-t`), bordi a riposo, hover dei bottoni primari.
- **Linea di Giunzione Forte** (#2a2a2e): bordi di card e bottoni, puntinato di sfondo dell'hero.
- **Bianco Gesso** (#fafafa): titoli e testo primario.
- **Cenere** (#a1a1aa): testo di supporto, paragrafi, link di navigazione a riposo.
- **Cenere Spenta** (#71717a): solo metadati non essenziali (etichette delle statistiche). Sotto 4.5:1 su Tela Notturna: mai per testo che deve essere letto.

### Named Rules
**The Una Sola Luce Rule.** La Menta Elettrica è l'unico colore saturo del sistema e copre meno del 10% di qualsiasi schermata. Nuove tinte sono vietate; i nomi `accent-red` nel codice sono storici e indicano la menta.

**The Due Registri Rule.** Ogni colore nuovo va aggiunto sia in `@theme` (`--color-*`, per le utility Tailwind) sia in `:root` (triplette RGB per le utility scritte a mano) in `app/globals.css`. Uno senza l'altro rompe il sistema.

**The Notte Non Nera Rule.** Il nero puro (#000) e il bianco puro (#fff) sono vietati come superfici. Il buio è sempre #09090b o superiore.

## 3. Typography

**Display Font:** Geist Sans (con -apple-system, Segoe UI, Roboto)
**Body Font:** Geist Sans
**Label/Mono Font:** Geist Mono (con ui-monospace, SFMono-Regular, Menlo)

**Character:** Una sola famiglia sans, tecnica ma non fredda, spinta agli estremi: display medium enormi e serratissimi, titoli bold compatti, corpo regolare piccolo e arioso. Il mono compare solo per micro-etichette tecniche, come le targhette di un quadro elettrico.

### Hierarchy
- **Display** (500, 60–96px, interlinea 0.82, tracking −0.055em): solo l'H1 dell'hero, impilato su tre righe ("Costruisco / Soluzioni / Digitali"), con una riga a solo contorno menta.
- **Headline** (700, 36–60px, interlinea 1.05, tracking −0.02em): titoli di sezione (H2), larghezza massima ~18ch.
- **Title** (500–600, 18–20px, interlinea ~1.2): titoli di card progetto e voci di timeline; diventano menta in hover del gruppo.
- **Body** (400, 14–16px, interlinea 1.625): paragrafi in Cenere, larghezza massima 40–42ch accanto ai titoli, mai oltre 70ch.
- **Label** (400, 10–11px, tracking 0.15–0.2em, MAIUSCOLO, mono): metadati di statistiche e note di form. Uso parco.

### Named Rules
**The Scala Fa la Gerarchia Rule.** La gerarchia si ottiene con salti di scala ≥ 1.25 e contrasto di peso, non col colore. Un titolo non diventa menta per farsi notare.

**The Etichetta Non è Grammatica Rule.** Le micro-etichette mono maiuscole sono vietate come intestazione ricorrente di ogni sezione. I marcatori di sezione usano il puntino menta + testo normale ("● Chi sono").

## 4. Elevation

Il sistema è piatto e tonale. La profondità nasce da tre gradini di buio (Tela #09090b → Card #0e0e10 → Rialzata #111113) separati da linee sottili da 1px, non da ombre. Le uniche luci sono atmosferiche: un alone menta sfocato (blur 80px, 20% di opacità) alla base dell'hero e un'ombra lunga sotto la foto ritratto, che la stacca dal fondo come un soggetto illuminato dal basso.

### Shadow Vocabulary
- **Ombra del Ritratto** (`filter: drop-shadow(0 40px 80px rgba(0,0,0,0.65))`): solo sulla foto dell'hero.
- **Alone del Cantiere** (`background: rgb(46 230 168 / 0.2); filter: blur(80px)`): bagliore di fondo dell'hero, uno solo per pagina; versione minore al 5% nell'angolo del form.

### Named Rules
**The Piatto a Riposo Rule.** Le superfici sono piatte a riposo. In hover una card si solleva di 6px (transform) e il bordo diventa menta; nessuna ombra compare.

**The Un Solo Alone Rule.** Gli aloni sfocati sono luce di scena, non decorazione: al massimo uno grande per schermata. Se due aloni si vedono insieme, uno è di troppo.

## 5. Components

Precisi e tattili: bordi sottili netti, pillole morbide, risposta immediata al tocco.

### Buttons
- **Shape:** pillola completa (9999px); altezze 36 / 44 / 48px.
- **Primary:** Superficie Rialzata con bordo Giunzione Forte e testo Bianco Gesso, padding orizzontale 20–24px, testo 14px medium.
- **Accent (outline menta):** trasparente, bordo e testo Menta Elettrica; in hover si riempie di menta con testo Tela Notturna. È la CTA di conversione ("Inizia Progetto", "I Miei Servizi"), spesso con freccia ↗ in un cerchietto menta.
- **Ghost:** trasparente, testo Cenere; in hover testo bianco su Fondo Card.
- **Hover / Focus:** transizioni di colore 250ms easeOutQuint; alla pressione scende di 1px (`.press`). Focus visibile con anello menta da 2px a 3px di distanza.

### Chips
- **Style:** pillola trasparente con bordo Giunzione Forte, testo 11px medium Cenere.
- **State:** in hover bordo e testo diventano menta. Sulle card progetto al massimo 2 chip.

### Cards / Containers
- **Corner Style:** 16px per card progetto e blocchi citazione; 12px per l'immagine interna; 8px per timeline e form.
- **Background:** Fondo Card (#0e0e10).
- **Shadow Strategy:** nessuna; vedi Elevation.
- **Border:** 1px Giunzione Forte; menta in hover.
- **Internal Padding:** 16px (card progetto), 20–24px (timeline), 32–40px (citazione).
- **Copertine:** in scala di grigi a riposo, a colore con zoom 1.03 in hover (filter + transform, 700ms).

### Inputs / Fields
- **Style:** fondo Tela Notturna, bordo 1px Giunzione, raggio 6px, altezza 40px, testo 14px; placeholder molto spento.
- **Focus:** anello 1px menta al 30%, nessun outline di sistema.
- **Error:** messaggio rosso 12px con icona sotto il campo; riepilogo in un riquadro con `role="status"` e `aria-live`.

### Navigation
- **Style:** barra fissa alta 80px integrata nell'hero, trasparente in cima; dopo 40px di scroll diventa Tela Notturna all'85% con sfocatura leggera e linea inferiore.
- **Links:** 14px medium Cenere, bianchi in hover; CTA "Inizia Progetto" in stile Accent sulla destra.
- **Mobile:** sotto 1024px un bottone menu circolare apre un overlay a tutto schermo con voci 24px separate da linee, entrata a cascata breve.

### Marquee dei Progetti
Due righe di card che scorrono in direzioni opposte a velocità diverse (55s e 65s), sfumate ai bordi nella Tela Notturna, in pausa all'hover. Le righe entrano intere una sola volta; le card non hanno animazione d'ingresso propria. Ferme con reduced motion.

### Marcatore di Sezione
Puntino menta da 8px seguito dall'etichetta della sezione in 14px medium bianco. È l'unica "intestazione sopra il titolo" ammessa.

## 6. Do's and Don'ts

### Do:
- **Do** tenere la Menta Elettrica (#2ee6a8) sotto il 10% di ogni schermata e usarla solo dove c'è un'azione o un risultato.
- **Do** importare tutte le animazioni da `lib/motion.ts` (`reveal()`, `stagger()`, `RISE`, `VIEWPORT`) e le transizioni CSS da `--ease-out-quint`. Entrate 0.7s, salita di 20px, cascata 0.07s con tetto a 4 passi.
- **Do** rispettare `prefers-reduced-motion`: niente spostamenti, marquee e carosello fermi.
- **Do** separare superfici con gradini di buio e linee da 1px, mai con ombre.
- **Do** mantenere il contrasto WCAG 2.2 AA: testo da leggere almeno in Cenere (#a1a1aa) su Tela Notturna.
- **Do** mostrare lavoro reale (siti live, repo, copertine vere) prima di ogni aggettivo.

### Don't:
- **Don't** sembrare un **template ThemeForest**: niente sezioni prevedibili in ordine prevedibile, niente skills a barre come riempitivo, niente servizi in 3 card identiche.
- **Don't** produrre il **look "fatto con l'AI"**: vietati gradienti viola/blu, glassmorphism decorativo, griglie di card identiche icona+titolo+testo, metriche hero con numeri giganti, testo con gradiente, etichette maiuscole spaziate sopra ogni sezione.
- **Don't** ridursi a un **CV online noioso**: niente elenchi e timeline piatti senza ritmo né voce.
- **Don't** introdurre una seconda tinta satura; il rosso è ammesso solo per gli errori del form.
- **Don't** usare Cenere Spenta (#71717a) o tonalità più scure per testo che va letto: sotto 4.5:1.
- **Don't** usare bordi laterali colorati più spessi di 1px come accento su card o voci di lista.
- **Don't** animare `width`, `height`, `top`, `left` o margini; usare transform e opacity.
- **Don't** usare easing con rimbalzo o elastici, né le molle di default di framer-motion su x/y.
- **Don't** applicare `mix-blend-mode` a livelli fissi a tutto schermo: ogni frame di scroll ridisegna la pagina.
