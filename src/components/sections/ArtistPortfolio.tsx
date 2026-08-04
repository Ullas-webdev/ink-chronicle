"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { artists } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ArtistPortfolio() {
  return (
    <section id="artists" className="relative py-16 md:py-24 overflow-hidden border-b hairline bg-ink-black">
      {/* Background Image: Ink Chronicle Studio Storefront */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/storefront-bg.jpg"
          alt="Ink Chronicle Studio Storefront"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        {/* Dark overlay gradient for ambient studio lighting & contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-black/90 via-ink-black/85 to-ink-black/95 backdrop-blur-[2px]" />
      </div>

      <div className="mx-auto max-w-shell px-6 md:px-10 relative z-10">
        <SectionHeading
          eyebrow="The Artist"
          title="Master of the Craft."
          description="Pavan Kumar brings years of multi-disciplinary expertise to Ink Chronicle, offering elite standards in tattooing, piercing, aesthetics, and training."
        />

        <div className="mt-16 flex flex-col">
          {artists.map((artist, i) => (
            <motion.article
              key={artist.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-14 border-b hairline last:border-0 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="relative aspect-square w-full max-w-sm lg:max-w-md mx-auto overflow-hidden rounded-full shadow-2xl border-2 border-gold/30 md:[direction:ltr]">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-lux hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-5 md:[direction:ltr]">
                <span className="text-[11px] uppercase tracking-widest2 text-gold-muted font-semibold">
                  {artist.signatureStyle}
                </span>
                <h3 className="font-display text-4xl md:text-5xl text-bone font-medium">
                  {artist.name}
                </h3>
                <p className="text-xs md:text-sm uppercase tracking-widest2 text-bone/60 font-mono">
                  {artist.title} — {artist.yearsActive} Years Experience
                </p>
                <p className="text-bone/80 font-light leading-relaxed max-w-md">
                  {artist.bio}
                </p>
                <a
                  href="#booking"
                  className="mt-4 w-fit text-xs uppercase tracking-widest2 text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-300 font-semibold"
                >
                  Book with {artist.name.split(" ")[0]} &rarr;
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
