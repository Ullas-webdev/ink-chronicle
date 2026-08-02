"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { galleryPieces, tattooStyles } from "@/lib/data";
import { cldUrl } from "@/lib/cloudinary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { labelFromSlug } from "@/lib/utils";

const HEIGHT_CLASS: Record<string, string> = {
  short: "aspect-[4/5]",
  medium: "aspect-[3/4]",
  tall: "aspect-[2/3]",
};

export function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? galleryPieces
        : galleryPieces.filter((p) => p.styleSlug === filter),
    [filter]
  );

  const active = galleryPieces.find((p) => p.id === lightboxId) ?? null;

  return (
    <section id="gallery" className="py-28 md:py-40 bg-ink-charcoal">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHeading
          eyebrow="The Archive"
          title="A curated record of work."
          description="Selected pieces from our client archive, shown with consent. Filter by discipline to explore a single tradition in depth."
        />

        <div className="mt-10 flex flex-wrap gap-3" role="tablist" aria-label="Filter gallery by style">
          <FilterChip label="All Work" active={filter === "all"} onClick={() => setFilter("all")} />
          {tattooStyles.map((s) => (
            <FilterChip
              key={s.slug}
              label={s.name}
              active={filter === s.slug}
              onClick={() => setFilter(s.slug)}
            />
          ))}
        </div>

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {filtered.map((piece, i) => (
            <motion.button
              key={piece.id}
              onClick={() => setLightboxId(piece.id)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative w-full mb-4 break-inside-avoid overflow-hidden group ${HEIGHT_CLASS[piece.height]}`}
              aria-label={`View ${piece.caption}`}
            >
              <Image
                src={cldUrl(piece.image, { width: 800 })}
                alt={piece.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-lux group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-xs text-bone/80 font-light">{piece.caption}</p>
                <p className="text-[10px] uppercase tracking-widest2 text-gold-muted mt-1">
                  {labelFromSlug(piece.artistSlug)}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[90] bg-ink-black/95 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxId(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl w-full aspect-[3/4] md:aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={cldUrl(active.image, { width: 1600 })}
                alt={active.caption}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
            <button
              onClick={() => setLightboxId(null)}
              aria-label="Close image"
              className="absolute top-6 right-6 text-bone hover:text-gold transition-colors"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`text-[11px] uppercase tracking-widest2 px-5 py-2.5 border transition-colors duration-300 ${
        active
          ? "border-gold text-gold"
          : "border-bone/15 text-bone/50 hover:border-bone/40 hover:text-bone/80"
      }`}
    >
      {label}
    </button>
  );
}
