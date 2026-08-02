"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { artists } from "@/lib/data";
import { cldUrl } from "@/lib/cloudinary";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ArtistPortfolio() {
  return (
    <section id="artists" className="py-12 md:py-18 bg-ink-black">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHeading
          eyebrow="The Artist"
          title="Master of the Craft."
          description="Pavan Mythra brings years of multi-disciplinary expertise to Ink Chronicle, offering elite standards in tattooing, piercing, aesthetics, and training."
        />

        <div className="mt-16 flex flex-col">
          {artists.map((artist, i) => (
            <motion.article
              key={artist.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-14 border-b hairline items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="relative aspect-square w-full max-w-sm lg:max-w-md mx-auto overflow-hidden rounded-full shadow-2xl md:[direction:ltr]">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-lux hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-5 md:[direction:ltr]">
                <span className="text-[11px] uppercase tracking-widest2 text-gold-muted">
                  {artist.signatureStyle}
                </span>
                <h3 className="font-display text-4xl md:text-5xl text-bone">
                  {artist.name}
                </h3>
                <p className="text-sm uppercase tracking-widest2 text-bone/40">
                  {artist.title} — {artist.yearsActive} Years
                </p>
                <p className="text-bone/60 font-light leading-relaxed max-w-md">
                  {artist.bio}
                </p>
                <a
                  href="#booking"
                  className="mt-4 w-fit text-xs uppercase tracking-widest2 text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-300"
                >
                  Book with {artist.name.split(" ")[0]}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
