"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const HeroParticles = dynamic(
  () => import("./HeroParticles").then((m) => m.HeroParticles),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-ink-black"
    >
      <HeroParticles />

      {/* Vignette for cinematic depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, #090909 100%)",
        }}
        aria-hidden
      />

      <div className="relative flex-1 flex flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] md:text-xs uppercase tracking-widest3 text-gold-muted mb-8"
        >
          Est. Mayfair — By Private Consultation
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[15vw] leading-[0.9] md:text-[9rem] lg:text-[10.5rem] font-medium text-bone"
        >
          Ink <span className="text-gradient-gold italic">Chronicle</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-md text-sm md:text-base text-bone/60 font-light leading-relaxed"
        >
          Tattoos composed like heirlooms. A private studio for those who
          measure their marks in decades, not seasons.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a href="#booking">
            <Button>Request a Consultation</Button>
          </a>
          <a href="#gallery">
            <Button variant="outline">View the Gallery</Button>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="relative flex justify-center pb-10"
      >
        <a
          href="#artists"
          aria-label="Scroll to artists"
          className="flex flex-col items-center gap-2 text-bone/40 hover:text-gold transition-colors duration-300"
        >
          <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
