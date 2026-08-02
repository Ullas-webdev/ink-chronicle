"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InkStroke } from "@/components/ui/InkStroke";

const PIERCINGS = [
  {
    id: "ear",
    title: "Curated Ear Styling",
    subtitle: "Helix, Tragus & Lobe Stack",
    description: "Anatomically precise ear stack using solid 14k gold hoops, fine chains, and conflict-free diamond accents across helix, tragus, and lobe.",
    image: "/piercings/ear-piercing.jpg",
  },
  {
    id: "nostril",
    title: "Nostril & Facial Studs",
    subtitle: "Fine Diamond Studs",
    description: "Subtle, delicate diamond nostril studs fitted with single-needle surgical precision to elevate natural facial symmetry.",
    image: "/piercings/nostril-piercing.jpg",
  },
  {
    id: "septum",
    title: "Septum & Dual Nostril",
    subtitle: "Gold Rings & Floral Accents",
    description: "Elegant gold septum rings and floral nostril accents tailored with precision to complement natural facial contours.",
    image: "/piercings/septum-piercing.jpg",
  },
  {
    id: "navel",
    title: "Navel & Belly Jewelry",
    subtitle: "Crystal Butterfly Dangles",
    description: "Sparkling crystal butterfly navel dangles crafted from hypoallergenic implant-grade titanium.",
    image: "/piercings/navel-piercing.jpg",
  },
  {
    id: "lip",
    title: "Lip & Oral Piercings",
    subtitle: "Labret & Lip Rings",
    description: "Clean labret and lip ring placements engineered for comfortable oral ergonomics and sleek modern aesthetics.",
    image: "/piercings/lip-piercing.jpg",
  },
];

export function Piercings() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalItems = PIERCINGS.length;

  // Auto-scroll 1 item every 2 seconds (2000ms)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % totalItems);
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused, totalItems]);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  // Display 3 items per window on desktop, wrapping around
  const countToShow = Math.min(3, totalItems);
  const displayedItems = Array.from({ length: countToShow }).map((_, i) => {
    const idx = (startIndex + i) % totalItems;
    return PIERCINGS[idx]!;
  });

  return (
    <section id="piercings" className="py-12 md:py-18 bg-ink-charcoal text-bone">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHeading
          eyebrow="Fine Body Adornment"
          title="Precision Piercing"
          description="A clinical approach to body art. We offer a highly curated selection of luxury body jewelry, fitted with surgical precision in a sterile, private environment."
        />

        {/* Piercing Showcase Auto-Scrolling Carousel Container */}
        <div
          className="relative mt-16 group/piercingCarousel px-2 md:px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-ink-black/90 border border-white/20 flex items-center justify-center text-bone hover:border-gold hover:text-gold transition-all shadow-xl"
            aria-label="Previous piercing picture"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-ink-black/90 border border-white/20 flex items-center justify-center text-bone hover:border-gold hover:text-gold transition-all shadow-xl"
            aria-label="Next piercing picture"
          >
            <ArrowRight size={18} />
          </button>

          {/* 3-Item Grid Carousel with smooth 1-by-1 sliding transition */}
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
            >
              {displayedItems.map((item, idx) => (
                <Link
                  key={`${item.id}-${idx}`}
                  href="/#booking"
                  className="group flex flex-col cursor-pointer outline-none"
                >
                  {/* Image Frame Container */}
                  <div className="w-full bg-white/5 border border-white/20 p-2.5 md:p-3 rounded-sm group-hover:border-gold/70 transition-all duration-500 shadow-xl mb-4">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-ink-black">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[1500ms] ease-lux group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-ink-black/20 to-transparent opacity-80" />

                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-black/80 border border-gold/30 px-2.5 py-1 rounded">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl md:text-2xl text-bone mb-2 uppercase group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-bone/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <InkStroke className="mt-24 opacity-50" />
      </div>
    </section>
  );
}
