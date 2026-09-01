import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { AppProviders } from "@/providers/AppProviders";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ÉLANE — El arte de cuidarte",
    template: "%s — ÉLANE",
  },
  description:
    "Estudio de belleza y bienestar en Barcelona. Tratamientos faciales, corporales, masaje y rituales diseñados alrededor de ti.",
  applicationName: "ÉLANE",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-ivory">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
