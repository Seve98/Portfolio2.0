import type { Metadata } from "next";
import { profile } from "./data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.dev";

export const siteMeta = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.bioShort,
  url: siteUrl,
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteMeta.title,
    template: `%s · ${profile.name}`,
  },
  description: siteMeta.description,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteUrl,
    siteName: profile.name,
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
};
