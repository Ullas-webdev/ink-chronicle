import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingConsult } from "@/components/layout/FloatingConsult";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { OfferPopup } from "@/components/ui/OfferPopup";

const display = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.inkchronicle.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ink Chronicle — Private Luxury Tattoo Studio, Mayfair",
    template: "%s — Ink Chronicle",
  },
  description:
    "A private tattoo atelier in Mayfair for work meant to last a lifetime. Japanese Irezumi, fine line, blackwork, and realism, by consultation only.",
  keywords: [
    "luxury tattoo studio",
    "private tattoo artist London",
    "Japanese Irezumi tattoo",
    "fine line tattoo Mayfair",
    "bespoke tattoo consultation",
  ],
  authors: [{ name: "Ink Chronicle Studio" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ink Chronicle — Private Luxury Tattoo Studio, Mayfair",
    description:
      "Tattoos composed like heirlooms. A private studio for those who measure their marks in decades, not seasons.",
    siteName: "Ink Chronicle",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ink Chronicle Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ink Chronicle — Private Luxury Tattoo Studio",
    description: "A private tattoo atelier for work meant to last a lifetime.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Ink Chronicle",
  image: `${siteUrl}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Marchmont Row",
    addressLocality: "Mayfair, London",
    addressCountry: "GB",
  },
  priceRange: "££££",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadingScreen />
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingConsult />
          <OfferPopup />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
