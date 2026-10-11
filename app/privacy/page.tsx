import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { profile } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Informativa sul trattamento dei dati personali di ${profile.name}.`,
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATE = "11 ottobre 2026";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Titolare del trattamento",
    body: (
      <p>
        {profile.name}, sviluppatore web con sede in Italia. Per qualsiasi richiesta sui tuoi
        dati scrivi a{" "}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>.
      </p>
    ),
  },
  {
    title: "Quali dati raccolgo",
    body: (
      <>
        <p>
          <strong>Form di contatto.</strong> Nome, email, oggetto e messaggio
          che inserisci volontariamente. Senza questi dati non posso
          risponderti.
        </p>
        <p>
          <strong>Dati tecnici di navigazione.</strong> Il server che ospita il
          sito registra, come ogni server web, indirizzo IP, data e ora della
          richiesta, pagina visitata e tipo di browser. Servono a far
          funzionare il sito e a proteggerlo da abusi.
        </p>
        <p>
          Il sito <strong>non usa cookie</strong>, né strumenti di analisi o di
          profilazione.
        </p>
      </>
    ),
  },
  {
    title: "Perché e su quale base",
    body: (
      <>
        <p>
          I dati del form servono solo a rispondere alla tua richiesta ed
          eventualmente a preparare un preventivo. Base giuridica: misure
          precontrattuali richieste da te (art. 6.1.b GDPR) e il mio legittimo
          interesse a rispondere a chi mi contatta (art. 6.1.f).
        </p>
        <p>
          I dati tecnici sono trattati per il legittimo interesse a garantire
          il funzionamento e la sicurezza del sito (art. 6.1.f).
        </p>
        <p>Non uso i tuoi dati per newsletter o marketing.</p>
      </>
    ),
  },
  {
    title: "Chi tratta i dati per mio conto",
    body: (
      <>
        <p>Mi appoggio a questi fornitori, nominati responsabili del trattamento:</p>
        <ul>
          <li>
            <strong>Vercel Inc.</strong> (USA): hosting del sito e log tecnici.
          </li>
          <li>
            <strong>Resend</strong> (USA): invio
            dell&apos;email generata dal form, con server di invio in Irlanda.
          </li>
          <li>
            <strong>Google LLC</strong> (USA): casella Gmail in cui ricevo e
            conservo i messaggi.
          </li>
        </ul>
        <p>
          Le immagini di anteprima dei progetti sono caricate direttamente da{" "}
          <strong>GitHub</strong> (GitHub, Inc., USA): aprendo la pagina, il tuo
          browser comunica a GitHub il tuo indirizzo IP.
        </p>
        <p>
          Per i trasferimenti verso gli Stati Uniti questi fornitori aderiscono
          al Data Privacy Framework UE-USA o adottano le Clausole Contrattuali
          Standard della Commissione Europea. I dati non vengono venduti né
          ceduti ad altri.
        </p>
      </>
    ),
  },
  {
    title: "Per quanto tempo",
    body: (
      <p>
        I messaggi del form restano nella mia casella per il tempo necessario a
        gestire la richiesta e comunque non oltre 24 mesi dall&apos;ultimo
        scambio, salvo che ne nasca un rapporto di lavoro. I log tecnici sono
        conservati da Vercel per periodi brevi, secondo le sue policy.
      </p>
    ),
  },
  {
    title: "I tuoi diritti",
    body: (
      <>
        <p>
          Puoi chiedermi in qualsiasi momento di accedere ai tuoi dati,
          correggerli, cancellarli, limitarne il trattamento, opporti o
          riceverli in un formato portabile (artt. 15-22 GDPR). Basta scrivere a{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>: rispondo
          entro 30 giorni.
        </p>
        <p>
          Se ritieni che il trattamento violi la normativa puoi presentare
          reclamo al{" "}
          <a
            href="https://www.garanteprivacy.it"
            target="_blank"
            rel="noreferrer noopener"
          >
            Garante per la protezione dei dati personali
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 pb-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors press"
      >
        <ArrowLeft size={14} />
        Torna al sito
      </Link>

      <header className="mt-12 md:mt-16 mb-12 md:mb-16 flex flex-col gap-5">
        <div className="inline-flex items-center gap-3">
          <span className="size-2 rounded-full bg-accent-red" />
          <span className="text-sm font-medium text-white">Privacy</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-[-0.02em] max-w-[18ch]">
          Come tratto i tuoi dati
        </h1>
        <p className="text-sm text-zinc-400">
          Ultimo aggiornamento: {LAST_UPDATE}
        </p>
      </header>

      <div className="flex flex-col max-w-[70ch]">
        {sections.map((s, i) => (
          <section
            key={s.title}
            className="grid gap-4 py-8 border-t border-[rgb(var(--border))] first:border-t-0 first:pt-0"
          >
            <h2 className="flex items-baseline gap-4 text-xl font-semibold text-white tracking-[-0.01em]">
              <span className="text-sm font-medium text-accent-red tabular">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.title}
            </h2>
            <div className="flex flex-col gap-4 text-base text-zinc-400 leading-relaxed [&_strong]:text-white [&_strong]:font-medium [&_a]:text-white [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-accent-red [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_ul]:list-disc [&_li]:marker:text-accent-red">
              {s.body}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
