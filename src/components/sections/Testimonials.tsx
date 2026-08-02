"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-12 md:py-18 bg-ink-black overflow-hidden">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHeading
          eyebrow="Client Record"
          title="Held to the same standard, every time."
          align="center"
        />
      </div>

      <div className="mt-16 relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div key={t.id} className="flex-[0_0_100%] md:flex-[0_0_60%] px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
                  <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-display text-2xl md:text-3xl text-bone/90 leading-snug italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-2">
                    <p className="text-sm uppercase tracking-widest2 text-bone">
                      {t.name}
                    </p>
                    <p className="text-xs text-bone/40 mt-1">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-shell px-6 md:px-10 flex items-center justify-center gap-8 mt-12">
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="text-bone/40 hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-selected={selected === i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selected === i ? "w-6 bg-gold" : "w-1.5 bg-bone/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="text-bone/40 hover:text-gold transition-colors duration-300"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
