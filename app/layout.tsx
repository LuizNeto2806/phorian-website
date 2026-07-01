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

const siteUrl = "https://phorian-website.vercel.app";

const siteDescription =
  "An artistic universe dedicated to translating philosophy, movement, nature and human experience into atmosphere through sound, image and contemplation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PHORIAN",
    template: "%s — PHORIAN",
  },
  description: siteDescription,
  applicationName: "PHORIAN",
  icons: {
    icon: [
      { url: `/favicon.ico?v=${5}`, sizes: "any" },
      { url: `/icon.svg?v=${5}`, type: "image/svg+xml" },
      { url: `/favicon-16x16.png?v=${5}`, sizes: "16x16", type: "image/png" },
      { url: `/favicon-32x32.png?v=${5}`, sizes: "32x32", type: "image/png" },
      { url: `/favicon-48x48.png?v=${5}`, sizes: "48x48", type: "image/png" },
      { url: `/icon-192x192.png?v=${5}`, sizes: "192x192", type: "image/png" },
      { url: `/icon-512x512.png?v=${5}`, sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: `/apple-icon.png?v=${5}`, sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "PHORIAN",
    description: siteDescription,
    url: siteUrl,
    siteName: "PHORIAN",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PHORIAN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PHORIAN",
    description: siteDescription,
    images: ["/og-image.png"],
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
