"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { InkStroke } from "@/components/ui/InkStroke";

interface TattooSubItem {
  id: string;
  name: string;
  image: string;
}

interface TattooCategory {
  id: string;
  name: string;
  items: TattooSubItem[];
}

const TATTOO_CATEGORIES: TattooCategory[] = [
  {
    id: "animal",
    name: "Animal Tattoos",
    items: [
      { id: "a1", name: "Cat Tattoos", image: "/tattoos/cat.jpg" },
      { id: "a2", name: "Snake Tattoos", image: "/tattoos/snake.jpg" },
      { id: "a3", name: "Dog Tattoos", image: "/tattoos/dog.jpg" },
      { id: "a4", name: "Owl Tattoos", image: "/tattoos/owl.jpg" },
      { id: "a5", name: "Lion Tattoos", image: "/tattoos/lion.jpg" },
      { id: "a6", name: "Turtle Tattoos", image: "/tattoos/turtle.jpg" },
    ],
  },
  {
    id: "meanings",
    name: "Meanings Tattoos",
    items: [
      { id: "m1", name: "Family Tattoos", image: "/tattoos/family.jpg" },
      { id: "m2", name: "Friendship Tattoos", image: "/tattoos/friendship.jpg" },
      { id: "m3", name: "Love Tattoos", image: "/tattoos/love.jpg" },
      { id: "m4", name: "Strength Tattoos", image: "/tattoos/strength.jpg" },
      { id: "m5", name: "Faith Tattoos", image: "/tattoos/faith.jpg" },
      { id: "m6", name: "Protection Tattoos", image: "/tattoos/protection.jpg" },
    ],
  },
  {
    id: "symbol",
    name: "Symbol Tattoos",
    items: [
      { id: "s1", name: "Cross Tattoos", image: "/tattoos/cross.jpg" },
      { id: "s2", name: "Heart Tattoos", image: "/tattoos/heart.jpg" },
      { id: "s3", name: "Pirate Tattoos", image: "/tattoos/pirate.jpg" },
      { id: "s4", name: "Book Tattoos", image: "/tattoos/book.jpg" },
      { id: "s5", name: "Crown Tattoos", image: "/tattoos/crown.jpg" },
    ],
  },
  {
    id: "nature",
    name: "Nature Tattoos",
    items: [
      { id: "n1", name: "Vine Tattoos", image: "/tattoos/vine.jpg" },
      { id: "n2", name: "Rose Tattoos", image: "/tattoos/rose.jpg" },
      { id: "n3", name: "Tree Tattoos", image: "/tattoos/tree.jpg" },
      { id: "n4", name: "Cloud Tattoos", image: "/tattoos/cloud.jpg" },
      { id: "n5", name: "Sun Tattoos", image: "/tattoos/sun.jpg" },
    ],
  },
  {
    id: "mythological",
    name: "Mythological Tattoos",
    items: [
      { id: "my1", name: "Dragon Tattoos", image: "/tattoos/dragon.jpg" },
      { id: "my2", name: "Medusa Tattoos", image: "/tattoos/medusa.jpg" },
      { id: "my3", name: "Mermaid Tattoos", image: "/tattoos/mermaid.jpg" },
      { id: "my4", name: "Zeus Tattoos", image: "/tattoos/zeus.jpg" },
      { id: "my5", name: "Oni Tattoos", image: "/tattoos/oni.jpg" },
      { id: "my6", name: "Phoenix Tattoos", image: "/tattoos/phoenix.jpg" },
    ],
  },
  {
    id: "spiritual",
    name: "Spiritual Tattoos",
    items: [
      { id: "sp1", name: "Star Tattoos", image: "/tattoos/star.jpg" },
      { id: "sp2", name: "Phoenix Tattoos", image: "/tattoos/phoenix.jpg" },
      { id: "sp3", name: "Angel Tattoos", image: "/tattoos/angel.jpg" },
    ],
  },
  {
    id: "religious",
    name: "Religious Tattoos",
    items: [
      { id: "r1", name: "Angel Tattoos", image: "/tattoos/angel.jpg" },
      { id: "r2", name: "Jesus Tattoos", image: "/tattoos/jesus.jpg" },
      { id: "r3", name: "Bible Tattoos", image: "/tattoos/bible.jpg" },
      { id: "r4", name: "Dove Tattoos", image: "/tattoos/dove.jpg" },
      { id: "r5", name: "Mandala Tattoos", image: "/tattoos/mandala.jpg" },
    ],
  },
  {
    id: "tribal",
    name: "Tribal Tattoos",
    items: [
      { id: "tr1", name: "Line Tattoos", image: "/tattoos/line.jpg" },
      { id: "tr2", name: "Arrow Tattoos", image: "/tattoos/arrow.jpg" },
      { id: "tr3", name: "Triangle Tattoos", image: "/tattoos/triangle.jpg" },
      { id: "tr4", name: "Sacred Geometry Tattoos", image: "/tattoos/sacred-geometry.jpg" },
      { id: "tr5", name: "Diamond Tattoos", image: "/tattoos/diamond.jpg" },
      { id: "tr6", name: "Mandala Tattoos", image: "/tattoos/mandala.jpg" },
    ],
  },
  {
    id: "geometric",
    name: "Geometric Tattoos",
    items: [
      { id: "g1", name: "Line Tattoos", image: "/tattoos/line.jpg" },
      { id: "g2", name: "Arrow Tattoos", image: "/tattoos/arrow.jpg" },
      { id: "g3", name: "Triangle Tattoos", image: "/tattoos/triangle.jpg" },
      { id: "g4", name: "Sacred Geometry Tattoos", image: "/tattoos/sacred-geometry.jpg" },
      { id: "g5", name: "Diamond Tattoos", image: "/tattoos/diamond.jpg" },
      { id: "g6", name: "Mandala Tattoos", image: "/tattoos/mandala.jpg" },
    ],
  },
  {
    id: "abstract",
    name: "Abstract Tattoos",
    items: [
      { id: "ab1", name: "Abstract Geometric Tattoo", image: "/tattoos/abstract-geometric.jpg" },
      { id: "ab2", name: "Abstract Line Tattoo", image: "/tattoos/abstract-line.jpg" },
      { id: "ab3", name: "Abstract Liner Tattoo", image: "/tattoos/abstract-liner.jpg" },
      { id: "ab4", name: "Abstract Minimalist Tattoo", image: "/tattoos/abstract-minimalist.jpg" },
      { id: "ab5", name: "Abstract Watercolor Tattoo", image: "/tattoos/abstract-watercolor.jpg" },
      { id: "ab6", name: "Abstract Shape Tattoos", image: "/tattoos/abstract-shape.jpg" },
    ],
  },
];

function getTattooSlug(name: string): string {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
}

export function StyleExplorer() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [itemOffsetIndex, setItemOffsetIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentCategory = TATTOO_CATEGORIES[activeCategoryIndex] || TATTOO_CATEGORIES[0]!;
  const categoryLength = currentCategory.items.length;

  // Auto-scroll 1 item by 1 item every 2 seconds (2000ms)
  useEffect(() => {
    if (isPaused || categoryLength === 0) return;

    const timer = setInterval(() => {
      setItemOffsetIndex((prev) => {
        const next = prev + 1;
        // If cycled through all items in current category twice, auto-advance category
        if (next >= categoryLength * 2) {
          setActiveCategoryIndex((prevCat) => (prevCat + 1) % TATTOO_CATEGORIES.length);
          return 0;
        }
        return next;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [categoryLength, isPaused, activeCategoryIndex]);

  const handleCategorySelect = (index: number) => {
    setActiveCategoryIndex(index);
    setItemOffsetIndex(0);
  };

  const handleNextCategory = () => {
    setActiveCategoryIndex((prev) => (prev + 1) % TATTOO_CATEGORIES.length);
    setItemOffsetIndex(0);
  };

  const handlePrevCategory = () => {
    setActiveCategoryIndex((prev) =>
      prev === 0 ? TATTOO_CATEGORIES.length - 1 : prev - 1
    );
    setItemOffsetIndex(0);
  };

  const handleNextItem = () => {
    setItemOffsetIndex((prev) => prev + 1);
  };

  const handlePrevItem = () => {
    setItemOffsetIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // Get 4 items starting from itemOffsetIndex (wrapping around nicely)
  const countToShow = Math.min(4, categoryLength);
  const displayedItems = Array.from({ length: countToShow }).map((_, i) => {
    const idx = (itemOffsetIndex + i) % categoryLength;
    return currentCategory.items[idx]!;
  });

  const navContainerRef = useRef<HTMLDivElement>(null);

  const scrollNav = (direction: "left" | "right") => {
    if (navContainerRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      navContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="tattoos" className="py-12 md:py-18 bg-ink-black text-bone">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wider text-bone font-medium">
            EXPLORE TATTOO STYLES
          </h2>
        </div>

        {/* Top Category Nav Bar (Single Line with Left/Right Scroll Arrows & Hidden Scrollbars) */}
        <div className="flex items-center justify-between mb-12 border-b hairline pb-4 gap-2">
          
          {/* Left Nav Arrow */}
          <button
            onClick={() => scrollNav("left")}
            className="p-2 text-bone/60 hover:text-gold transition-colors shrink-0"
            aria-label="Scroll categories left"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Single-Line Category Tabs Container */}
          <div
            ref={navContainerRef}
            className="flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth py-1 w-full"
          >
            {TATTOO_CATEGORIES.map((cat, idx) => {
              const isActive = activeCategoryIndex === idx;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(idx)}
                  className={`text-xs md:text-sm uppercase tracking-wider whitespace-nowrap transition-all duration-300 relative pb-2 shrink-0 ${
                    isActive
                      ? "text-bone font-bold"
                      : "text-bone/50 hover:text-bone/80 font-normal"
                  }`}
                >
                  {cat.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-bone"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Nav Arrow */}
          <button
            onClick={() => scrollNav("right")}
            className="p-2 text-bone/60 hover:text-gold transition-colors shrink-0"
            aria-label="Scroll categories right"
          >
            <ArrowRight size={20} />
          </button>

        </div>

        {/* Cards Carousel (4 items per window, scrolls 1 by 1 every 2s) */}
        <div
          className="relative group/carousel px-2 md:px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrevItem}
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-ink-black/90 border border-white/20 flex items-center justify-center text-bone hover:border-gold hover:text-gold transition-all shadow-xl"
            aria-label="Previous tattoo item"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNextItem}
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-ink-black/90 border border-white/20 flex items-center justify-center text-bone hover:border-gold hover:text-gold transition-all shadow-xl"
            aria-label="Next tattoo item"
          >
            <ArrowRight size={18} />
          </button>

          {/* 4 Cards Grid with smooth 1-by-1 sliding transition */}
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={`${currentCategory.id}-${itemOffsetIndex}`}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6"
            >
              {displayedItems.map((item, idx) => (
                <Link
                  key={`${item.id}-${idx}`}
                  href={`/tattoos/${getTattooSlug(item.name)}`}
                  className="group flex flex-col items-center outline-none"
                >
                  {/* Framed White-bordered Card Container (as in screenshot) */}
                  <div className="w-full bg-white/5 border border-white/20 p-2 md:p-3 rounded-sm group-hover:border-gold/70 transition-all duration-500 shadow-xl">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-ink-charcoal">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                        className="object-cover transition-transform duration-[1200ms] ease-lux group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Centered Title below card */}
                  <span className="text-xs md:text-sm font-medium tracking-wider text-bone/90 uppercase group-hover:text-gold transition-colors leading-snug mt-3 text-center">
                    {item.name}
                  </span>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>

        <InkStroke className="mt-20" />

      </div>
    </section>
  );
}
