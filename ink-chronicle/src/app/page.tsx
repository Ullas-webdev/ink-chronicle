import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { ArtistPortfolio } from "@/components/sections/ArtistPortfolio";
import { StyleExplorer } from "@/components/sections/StyleExplorer";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Booking } from "@/components/sections/Booking";

export const metadata: Metadata = {
  title: "Private Luxury Tattoo Studio, Mayfair",
};

const PRESS = [
  "Vogue",
  "GQ",
  "Wallpaper*",
  "Tatler",
  "Monocle",
  "The Financial Times",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee items={PRESS} />
      <ArtistPortfolio />
      <StyleExplorer />
      <Gallery />
      <Process />
      <Testimonials />
      <Booking />
    </>
  );
}
