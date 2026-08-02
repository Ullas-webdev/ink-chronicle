"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function CategoryBanners() {
  return (
    <section className="py-10 md:py-14 bg-ink-black border-t hairline">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        
        {/* Top 2 Cards: Tattoos & Piercings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Card 1: TATTOOS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[380px] md:h-[440px] rounded-sm overflow-hidden group flex flex-col items-center justify-center p-8 text-center border hairline"
          >
            <Image
              src="/tattoo-cover.jpg"
              alt="Tattoos"
              fill
              className="object-cover transition-transform duration-[1400ms] ease-lux group-hover:scale-105 brightness-[0.45]"
            />
            <div className="relative z-10 max-w-md flex flex-col items-center">
              <h2 className="font-display text-4xl md:text-5xl text-bone tracking-wider mb-4 uppercase">
                TATTOOS
              </h2>
              <p className="text-bone/80 font-light text-sm md:text-base leading-relaxed mb-8">
                Whether you know exactly what kind of tattoo you want or just have a general idea, we can help!
              </p>
              <Link
                href="/#booking"
                className="bg-white text-black px-8 py-3.5 text-xs font-semibold uppercase tracking-widest2 hover:bg-gold transition-colors duration-300 shadow-lg"
              >
                TELL US YOUR IDEA
              </Link>
            </div>
          </motion.div>

          {/* Card 2: PIERCINGS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative h-[380px] md:h-[440px] rounded-sm overflow-hidden group flex flex-col items-center justify-center p-8 text-center border hairline"
          >
            <Image
              src="/piercing-cover.jpg"
              alt="Piercings"
              fill
              className="object-cover transition-transform duration-[1400ms] ease-lux group-hover:scale-105 brightness-[0.45]"
            />
            <div className="relative z-10 max-w-md flex flex-col items-center">
              <h2 className="font-display text-4xl md:text-5xl text-bone tracking-wider mb-4 uppercase">
                PIERCINGS
              </h2>
              <p className="text-bone/80 font-light text-sm md:text-base leading-relaxed mb-8">
                Say no to piercing guns! Have your piercings done by professionals with years’ of experience.
              </p>
              <Link
                href="/piercings"
                className="bg-white text-black px-8 py-3.5 text-xs font-semibold uppercase tracking-widest2 hover:bg-gold transition-colors duration-300 shadow-lg"
              >
                EXPLORE
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Card 3: AFTERCARE (Full Width Banner) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-[320px] md:h-[360px] rounded-sm overflow-hidden group flex flex-col items-center justify-center p-8 text-center border hairline"
        >
          <Image
            src="/aftercare-cover.jpg"
            alt="Aftercare Care Gel"
            fill
            className="object-cover transition-transform duration-[1400ms] ease-lux group-hover:scale-105 brightness-[0.4]"
          />
          <div className="relative z-10 max-w-lg flex flex-col items-center">
            <span className="text-gold text-xs uppercase tracking-widest3 font-semibold mb-2">Studio Essential — ₹200</span>
            <h2 className="font-display text-4xl md:text-5xl text-bone tracking-wider mb-4 uppercase">
              AFTERCARE
            </h2>
            <p className="text-bone/80 font-light text-sm md:text-base leading-relaxed mb-6">
              Flaunt Your Ink Soothing & Healing Gel. Essential protection to heal, cleanse, and preserve your tattoo & piercing.
            </p>
            <Link
              href="/aftercare"
              className="bg-white text-black px-8 py-3.5 text-xs font-semibold uppercase tracking-widest2 hover:bg-gold transition-colors duration-300 shadow-lg"
            >
              VIEW AFTERCARE — ₹200
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
