"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, Compass, ShieldCheck, Award, ArrowUpRight } from "lucide-react";
import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICONS = [MessageSquare, Compass, ShieldCheck, Award];

export function Process() {
  return (
    <section id="process" className="py-12 md:py-18 bg-ink-charcoal border-t hairline relative">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHeading
          eyebrow="The Process"
          title="Four stages. No shortcuts."
          description="Click any stage to view a minimal breakdown of what happens between your first enquiry and your finished piece."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => {
            const IconComponent = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={step.slug || step.index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/process/${step.slug}`}
                  className="group block relative bg-ink-black border hairline p-8 rounded-sm h-full flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 shadow-lg hover:bg-white hover:border-white hover:text-black"
                >
                  <div>
                    {/* Step Header: Number & Icon */}
                    <div className="flex items-center justify-between mb-8 pb-6 border-b hairline group-hover:border-black/10 transition-colors">
                      <span className="font-display text-3xl font-medium text-gold group-hover:text-black transition-colors">
                        {step.index}
                      </span>
                      <div className="w-10 h-10 rounded-full border hairline bg-ink-charcoal flex items-center justify-center text-gold-muted group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-500">
                        {i === 0 && <MessageSquare size={18} />}
                        {i === 1 && <Compass size={18} />}
                        {i === 2 && <ShieldCheck size={18} />}
                        {i === 3 && <Award size={18} />}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-display text-2xl text-bone mb-3 group-hover:text-black transition-colors duration-300 flex items-center justify-between">
                      <span>{step.title}</span>
                      <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-bone/60 group-hover:text-gray-700 font-light text-sm leading-relaxed transition-colors">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Accent Indicator */}
                  <div className="mt-8 pt-4">
                    <div className="h-0.5 w-8 bg-gold/30 group-hover:w-full group-hover:bg-black transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
