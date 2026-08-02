"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { tattooStyles } from "@/lib/data";
import { cldUrl } from "@/lib/cloudinary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InkStroke } from "@/components/ui/InkStroke";

export function StyleExplorer() {
  const [active, setActive] = useState(0);

  return (
    <section id="styles" className="py-28 md:py-40 bg-ink-black">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHeading
          eyebrow="The Language"
          title="Six disciplines. One standard of restraint."
          description="Every style at Ink Chronicle is practiced, not sampled — each artist committed to a single tradition for years before it entered our portfolio."
        />

        <div className="mt-16 flex flex-col lg:flex-row gap-3 h-[520px]">
          {tattooStyles.map((style, i) => (
            <motion.button
              key={style.slug}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              animate={{ flex: active === i ? 3 : 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden text-left group outline-none"
              aria-pressed={active === i}
            >
              <Image
                src={cldUrl(style.image, { width: 900 })}
                alt={style.name}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-[1400ms] ease-lux group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/30 to-ink-black/10" />

              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7">
                <span className="text-[10px] uppercase tracking-widest2 text-gold-muted mb-2">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-bone leading-tight">
                  {style.name}
                </h3>
                <motion.p
                  animate={{
                    opacity: active === i ? 1 : 0,
                    height: active === i ? "auto" : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-xs md:text-sm text-bone/60 mt-3 max-w-xs overflow-hidden font-light leading-relaxed"
                >
                  {style.description}
                </motion.p>
              </div>
            </motion.button>
          ))}
        </div>

        <InkStroke className="mt-24" />
      </div>
    </section>
  );
}
