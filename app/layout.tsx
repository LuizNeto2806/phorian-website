import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { I18nProvider } from "@/i18n/I18nProvider";
import { SiteBackground } from "@/components/SiteBackground";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PHORIAN — Música Cinematográfica",
  description:
    "Universo artístico de música eletrônica cinematográfica. Melodic Techno, Peak Time Techno, Ghost Production e Co-Produção.",
  keywords: [
    "PHORIAN",
    "Melodic Techno",
    "Peak Time Techno",
    "Ghost Production",
    "Co-Produção",
    "música eletrônica",
  ],
  openGraph: {
    title: "PHORIAN — Música Cinematográfica",
    description:
      "Universo artístico onde som, contemplação e emoção se encontram.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-grotesk text-foreground">
        <SiteBackground />
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
