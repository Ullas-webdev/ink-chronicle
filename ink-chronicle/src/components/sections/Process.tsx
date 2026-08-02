"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="py-28 md:py-40 bg-ink-charcoal">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHeading
          eyebrow="The Process"
          title="Four stages. No shortcuts."
          description="A permanent mark deserves a deliberate process. Here is exactly what happens between your first enquiry and your finished piece."
        />

        <div className="relative mt-20">
          <div
            className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:-translate-x-1/2"
            aria-hidden
          />

          <ol className="flex flex-col gap-16 md:gap-24">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                <span
                  className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 h-8 w-8 rounded-full border border-gold/50 bg-ink-charcoal flex items-center justify-center text-[11px] text-gold font-display"
                  aria-hidden
                >
                  {step.index}
                </span>

                <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                  <h3 className="font-display text-3xl md:text-4xl text-bone mb-4">
                    {step.title}
                  </h3>
                  <p className="text-bone/60 font-light leading-relaxed max-w-md md:ml-0 md:mr-0">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
