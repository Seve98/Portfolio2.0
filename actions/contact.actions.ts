"use server";

import { Resend } from "resend";
import { z } from "zod";
import { profile } from "@/lib/data/profile";

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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY mancante: messaggio non inviato.");
    return sendFailure();
  }

  const { name, email, subject, message } = parsed.data;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `Portfolio <${process.env.CONTACT_FROM_EMAIL ?? DEFAULT_FROM}>`,
      to: process.env.CONTACT_TO_EMAIL ?? profile.email,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `${message}\n\n${name} <${email}>\nInviato dal form di ${process.env.NEXT_PUBLIC_SITE_URL ?? "portfolio"}`,
    });

    if (error) {
      console.error("[contact] Resend ha rifiutato l'invio:", error.name, error.message);
      return sendFailure();
    }
  } catch (err) {
    console.error("[contact] Invio fallito:", err);
    return sendFailure();
  }

  return {
    status: "success",
    message: "Messaggio inviato. Ti rispondo presto.",
  };
}

const DEFAULT_FROM = "form@severinosantalucia.dev";

// Never claim success when the email did not leave: the visitor gets the
// direct address instead, so the contact is not lost.
function sendFailure(): ContactState {
  return {
    status: "error",
    message: `Invio non riuscito. Scrivimi direttamente a ${profile.email}.`,
  };
}
