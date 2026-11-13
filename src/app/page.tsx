import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { CategoryBanners } from "@/components/sections/CategoryBanners";
import { SubscribeDigitalInk } from "@/components/sections/SubscribeDigitalInk";
import { ArtistPortfolio } from "@/components/sections/ArtistPortfolio";
import { StyleExplorer } from "@/components/sections/StyleExplorer";
import { TattooPricing } from "@/components/sections/TattooPricing";
import { Piercings } from "@/components/sections/Piercings";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { Booking } from "@/components/sections/Booking";

export const metadata: Metadata = {
  title: "Private Luxury Tattoo & Piercing Studio, Mysuru",
};

const TATTOO_PIERCING_HIGHLIGHTS = [
  "Custom Fine Line Tattoos",
  "✦",
  "Precision Body Piercing",
  "✦",
  "Micro-Realism & Blackwork",
  "✦",
  "Implant-Grade Titanium Jewelry",
  "✦",
  "Sacred Geometry & Heirlooms",
  "✦",
  "Curated Ear & Body Styling",
  "✦",
  "Sterile Single-Use Equipment",
  "✦",
  "Private Studio Atelier",
  "✦",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee items={TATTOO_PIERCING_HIGHLIGHTS} />
      <CategoryBanners />
      <SubscribeDigitalInk />
      <ArtistPortfolio />
      <StyleExplorer />
      <TattooPricing />
      <Piercings />
      <Gallery />
      <Process />
      <Booking />
    </>
  );
}
