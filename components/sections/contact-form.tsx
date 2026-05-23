"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContact, type ContactState } from "@/actions/contact.actions";
import { cn } from "@/lib/utils";

const initial: ContactState = { status: "idle" };

function FieldError({ msg }: { msg?: string }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-2 flex items-center gap-2 text-xs text-red-400 overflow-hidden"
        >
          <AlertCircle size={12} />
          {msg}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

function SubmitInner() {
  const { pending } = useFormStatus();
  return (
    <motion.button
      type="submit"
      disabled={pending}
      whileHover={{ scale: pending ? 1 : 1.02 }}
      whileTap={{ scale: pending ? 1 : 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md bg-white text-black h-10 px-5 text-sm font-medium border border-white hover:bg-zinc-200",
        pending && "opacity-60 pointer-events-none"
      )}
    >
      {pending ? "Invio in corso..." : "Invia messaggio"}
      <ArrowRight size={14} />
    </motion.button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initial);
  const formRef = useRef<HTMLFormElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
    if (state.status === "error") {
      anchorRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [state]);

  const errors = state.status === "error" ? state.errors : undefined;

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col gap-6 rounded-lg border bg-[rgb(var(--card))] p-6 md:p-8 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-20 -right-20 size-48 rounded-full bg-accent-red/5 blur-3xl pointer-events-none"
      />

      <div className="hidden" aria-hidden>
        <label>
          Non compilare
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div ref={anchorRef} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
        <Field
          name="name"
          label="Nome"
          placeholder="Il tuo nome"
          autoComplete="name"
          error={errors?.name?.[0]}
        />
        <Field
          name="email"
          label="Email"
          type="email"
          placeholder="tu@dominio.it"
          autoComplete="email"
          error={errors?.email?.[0]}
        />
      </div>

      <div className="relative z-10">
        <Field
          name="subject"
          label="Oggetto"
          placeholder="Es. progetto freelance"
          error={errors?.subject?.[0]}
        />
      </div>

      <div className="relative z-10">
        <TextArea
          name="message"
          label="Messaggio"
          placeholder="Raccontami: contesto, obiettivo, tempi indicativi."
          error={errors?.message?.[0]}
        />
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap pt-2 border-t relative z-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
          dati usati solo per rispondere
        </p>
        <SubmitInner />
      </div>

      <AnimatePresence>
        {state.status !== "idle" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            aria-live="polite"
            role="status"
            className={cn(
              "relative z-10 rounded-md px-4 py-3 flex items-start gap-3 text-sm border",
              state.status === "success" &&
                "bg-emerald-950/30 text-emerald-400 border-emerald-900",
              state.status === "error" &&
                "bg-red-950/30 text-red-400 border-red-900"
            )}
          >
            {state.status === "success" ? (
              <CheckCircle2 size={16} />
            ) : (
              <AlertCircle size={16} />
            )}
            <span>
              {state.status === "success" || state.status === "error"
                ? state.message
                : ""}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

type FieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  error?: string;
};

const inputBase =
  "w-full bg-[rgb(var(--bg))] text-white text-sm placeholder:text-zinc-700 focus:outline-none border rounded-md px-3 h-10 transition-colors font-sans focus:ring-1 focus:ring-accent-red/30";

function Field({
  name,
  label,
  placeholder,
  type = "text",
  autoComplete,
  error,
}: FieldProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="mb-2 text-[10px] font-mono uppercase tracking-[0.15em] text-zinc-500"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-err` : undefined}
        className={cn(
          inputBase,
          error
            ? "border-red-900 focus:border-red-700"
            : "border-[rgb(var(--border-strong))] focus:border-accent-red"
        )}
      />
      <div id={`${name}-err`}>
        <FieldError msg={error} />
      </div>
    </div>
  );
}

function TextArea({
  name,
  label,
  placeholder,
  error,
}: {
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="mb-2 text-[10px] font-mono uppercase tracking-[0.15em] text-zinc-500"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={5}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-err` : undefined}
        className={cn(
          "w-full bg-[rgb(var(--bg))] text-white text-sm placeholder:text-zinc-700 focus:outline-none border rounded-md px-3 py-2 leading-relaxed resize-none font-sans focus:ring-1 focus:ring-accent-red/30",
          error
            ? "border-red-900 focus:border-red-700"
            : "border-[rgb(var(--border-strong))] focus:border-accent-red"
        )}
      />
      <div id={`${name}-err`}>
        <FieldError msg={error} />
      </div>
    </div>
  );
}
