"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { artists } from "@/lib/data";
import { cldUrl } from "@/lib/cloudinary";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ArtistPortfolio() {
  return (
    <section id="artists" className="py-28 md:py-40 bg-ink-black">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHeading
          eyebrow="The Roster"
          title="Four artists. Four disciplines mastered."
          description="Every artist at Ink Chronicle has spent a minimum of eight years in a single tradition before joining the studio. We do not carry generalists."
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
              <div className="relative aspect-[4/5] w-full overflow-hidden md:[direction:ltr]">
                <Image
                  src={cldUrl(artist.image, { width: 1000 })}
                  alt={artist.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-[1200ms] ease-lux"
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
