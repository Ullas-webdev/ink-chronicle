import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { CategoryBanners } from "@/components/sections/CategoryBanners";
import { ArtistPortfolio } from "@/components/sections/ArtistPortfolio";
import { StyleExplorer } from "@/components/sections/StyleExplorer";
import { Piercings } from "@/components/sections/Piercings";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
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
      <CategoryBanners />
      <ArtistPortfolio />
      <StyleExplorer />
      <Piercings />
      <Gallery />
      <Process />
      <Booking />
    </>
  );
}
