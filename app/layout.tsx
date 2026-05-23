import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/layout/footer";
import { baseMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-base text-base-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:text-black focus:rounded focus:px-4 focus:py-2 focus:text-xs"
        >
          Salta al contenuto
        </a>
        <div className="bg-grain-overlay" aria-hidden />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
