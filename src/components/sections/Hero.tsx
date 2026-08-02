"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-ink-black"
    >
      {/* Video background - behind all hero content */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/LandingPage.mp4" type="video/mp4" />
      </video>

      {/* Vignette for cinematic depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.85) 100%)",
        }}
        aria-hidden
      />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex-1 flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          variants={itemFadeUp}
          className="text-[11px] md:text-xs uppercase tracking-widest3 text-gold-muted mb-8 drop-shadow-md"
        >
          Rooted in MYSURU. Inspired by MYSELF. Crafted in INK.
        </motion.span>

        <motion.h1
          className="font-display text-[15vw] leading-[0.9] md:text-[9rem] lg:text-[10.5rem] font-medium text-[#e5d3b3] relative drop-shadow-2xl flex flex-col items-center"
        >
          <motion.span variants={itemFadeUp} className="block">Ink</motion.span>
          <motion.span variants={itemFadeUp} className="italic block -mt-2 md:-mt-6">Chronicle</motion.span>
        </motion.h1>

        <motion.p
          variants={itemFadeUp}
          className="mt-10 max-w-md text-sm md:text-base text-bone/80 font-light leading-relaxed drop-shadow-md"
        >
          Tattoos composed like heirlooms. A private studio for those who
          measure their marks in decades, not seasons.
        </motion.p>

        <motion.div
          variants={itemFadeUp}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a href="#booking">
            <Button>Request a Consultation</Button>
          </a>
          <a href="#gallery">
            <Button variant="outline">View the Gallery</Button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
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
