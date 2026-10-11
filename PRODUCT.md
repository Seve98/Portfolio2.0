# Product

## Register

brand

## Users

Due pubblici, in quest'ordine di priorità:

1. **Clienti freelance**: PMI, attività locali e professionisti che cercano qualcuno per un sito, un e-commerce o un'applicazione web. Non sono tecnici. Arrivano da passaparola, LinkedIn o un link diretto, spesso da telefono, e decidono in pochi secondi se fidarsi. Valutano risultati concreti (siti live, come Petti Beverage), chiarezza e la sensazione di avere davanti qualcuno che consegna.
2. **Recruiter e tech lead**: aziende che cercano un Junior Frontend Engineer (React, Next.js, TypeScript). Arrivano da CV o candidatura, spesso da desktop. Verificano stack, qualità del codice su GitHub, esperienza e cura del dettaglio. Il sito stesso è la loro prima prova tecnica.

## Product Purpose

Portfolio personale di Severino Santalucia, Junior Frontend Engineer. Esiste per trasformare una visita in una conversazione: il successo è un **contatto o una richiesta di preventivo** dal form o via email. I progetti sono sincronizzati da GitHub e il sito stesso è la dimostrazione principale di competenza: se è lento, generico o trascurato, smentisce tutto ciò che afferma.

## Brand Personality

**Sicuro, diretto, scenico.**

- Voce: frasi brevi, verbi d'azione, zero riempitivi ("Progetto. Sviluppo. Spedisco."). Parla di risultati, non di passioni.
- Tono: chi sa cosa fa e lo dimostra, senza vantarsi. Numeri verificabili, mai claim inventati.
- Emozione da lasciare: "questo consegna, e lo fa con cura".
- Riferimento di lane: portfolio da Awwwards. Presenza scenica, tipografia grande, motion orchestrato e fluido. La scena serve a dare fiducia, non a intrattenere: ogni effetto deve far sembrare il lavoro più solido, non più decorato.

## Anti-references

- **Template ThemeForest**: sezioni prevedibili in ordine prevedibile (hero, about, skills a barre, servizi in 3 card, testimonial, contatti), riconoscibili come tema comprato.
- **Look "fatto con l'AI"**: gradienti viola/blu, glassmorphism decorativo, griglie di card identiche icona+titolo+testo, metriche hero con numeri giganti e gradiente, testo con gradiente, etichette maiuscole spaziate sopra ogni sezione.
- **CV online noioso**: pagina piatta stile LinkedIn, elenchi puntati e timeline senza ritmo né voce.

## Design Principles

1. **Il sito è la prova.** Performance, accessibilità e fluidità non si dichiarano, si dimostrano. Ogni scelta deve reggere l'ispezione di un tech lead con DevTools aperti.
2. **Lavoro reale prima delle parole.** Progetti live, repo e risultati concreti vengono prima di bio e aggettivi. Mostrare, non raccontare.
3. **Scena con uno scopo.** Il motion è ricco e orchestrato come un'unica coreografia, mai effetti sparsi. Se un'animazione rallenta la lettura o il contatto, va tolta.
4. **Il contatto è sempre a un passo.** Il percorso verso preventivo o email deve essere evidente da ogni sezione, senza attrito, soprattutto da mobile.
5. **Due lettori, una pagina.** Il cliente deve capire cosa ottiene senza gergo; il recruiter deve trovare lo stack e le prove tecniche senza cercarle.

## Accessibility & Inclusion

- Target **WCAG 2.2 AA**: contrasto testo ≥ 4.5:1 (≥ 3:1 per testo grande e componenti UI), navigazione completa da tastiera con focus visibile, landmark e heading semantici, alt text significativi, errori del form annunciati.
- **Reduced motion** rispettato ovunque: con `prefers-reduced-motion` niente spostamenti né animazioni continue (marquee, carosello), solo dissolvenze o stato finale immediato.
- Lingua del documento `it`; target touch ≥ 44px; layout pienamente usabile a 360px di larghezza.
- Il profilo dichiara "accessibilità WCAG come default": il sito deve mantenerlo, è parte della credibilità.
