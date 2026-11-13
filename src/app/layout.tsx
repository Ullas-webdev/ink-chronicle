import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingConsult } from "@/components/layout/FloatingConsult";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { OfferPopup } from "@/components/ui/OfferPopup";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.inkchronicle.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ink Chronicle — Luxury Tattoo & Piercing Studio, Mysuru",
    template: "%s — Ink Chronicle",
  },
  description:
    "Premier luxury tattoo and precision body piercing studio in Mysuru, led by master artist Pavan Kumar. Custom fine line, micro-realism, blackwork, and certified piercing by consultation.",
  keywords: [
    "tattoo studio Mysuru",
    "best tattoo artist Mysuru",
    "piercing studio Mysuru",
    "fine line tattoo Karnataka",
    "micro realism tattoo",
    "custom tattoo design",
    "Ink Chronicle Mysuru",
    "Pavan Kumar tattoo artist",
  ],
  authors: [{ name: "Ink Chronicle Studio" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ink Chronicle — Luxury Tattoo & Piercing Studio, Mysuru",
    description:
      "Tattoos composed like heirlooms. A private atelier in Mysuru for work meant to last a lifetime.",
    siteName: "Ink Chronicle",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ink Chronicle Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ink Chronicle — Luxury Tattoo & Piercing Studio, Mysuru",
    description: "Premier luxury tattoo and precision piercing atelier in Mysuru.",
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
  telephone: "+919916899172",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kannada Sahithya Parishath Rd, near mysuru coffee bar, Vijayanagar 1st Stage",
    addressLocality: "Mysuru",
    addressRegion: "Karnataka",
    postalCode: "570017",
    addressCountry: "IN",
  },
  priceRange: "₹₹ - ₹₹₹₹",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..700&family=Manrope:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
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
