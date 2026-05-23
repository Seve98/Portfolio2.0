"use server";

import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Il nome è obbligatorio.").max(80, "Massimo 80 caratteri"),
  email: z.string().trim().email("Inserisci una email valida."),
  subject: z
    .string()
    .trim()
    .min(3, "L'oggetto è obbligatorio.")
    .max(120, "Massimo 120 caratteri"),
  message: z
    .string()
    .trim()
    .min(1, "Il messaggio è obbligatorio.")
    .max(2000, "Massimo 2000 caratteri"),
  // Honeypot
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactState =
  | { status: "idle" }
  | {
      status: "error";
      message: string;
      errors?: Partial<Record<keyof z.infer<typeof ContactSchema>, string[]>>;
    }
  | { status: "success"; message: string };

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const parsed = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    website: formData.get("website"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Si è verificato un errore durante l'invio del messaggio.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // Honeypot — silently fake success for bots
  if (parsed.data.website) {
    return { status: "success", message: "Grazie, ti rispondo presto." };
  }

  // TODO cliente: agganciare provider email (Resend / SMTP / API custom).
  // Per ora simuliamo latency + log server.
  await new Promise((r) => setTimeout(r, 700));
  // eslint-disable-next-line no-console
  console.log("[contact]", {
    name: parsed.data.name,
    email: parsed.data.email,
    subject: parsed.data.subject,
    at: new Date().toISOString(),
  });

  return {
    status: "success",
    message: "Messaggio inviato con successo!",
  };
}
