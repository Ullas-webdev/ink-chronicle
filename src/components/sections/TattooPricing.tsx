"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Calculator, Sparkles, Tag, ArrowRight } from "lucide-react";

const PRICING_TIERS = [
  {
    id: "basic",
    name: "BASIC TATTOO",
    pricePerInch: 500,
    unit: "per inch",
    tagline: "Clean, elegant linework and minimal art",
    features: [
      "Fine linework & single-pass outlines",
      "Minimalist symbols, scripts & small motifs",
      "Hospital-grade sterile single-use needles",
      "Organic black ink & complimentary initial aftercare guide",
    ],
    popular: false,
    badge: "Clean Linework",
  },
  {
    id: "advanced",
    name: "ADVANCED TATTOO",
    pricePerInch: 600,
    unit: "per inch",
    tagline: "Complex shading, micro-realism & detailed depth",
    features: [
      "Detailed black & grey shading & gradient stippling",
      "Micro-realism, portraits & sacred geometry",
      "Custom stencil fitting & body anatomy alignment",
      "Sterile hospital-grade equipment & complimentary touch-up",
    ],
    popular: true,
    badge: "Most Popular",
  },
  {
    id: "coloured",
    name: "COLOURED TATTOO",
    pricePerInch: 800,
    unit: "per inch",
    tagline: "Vibrant custom pigments & full color saturation",
    features: [
      "Vibrant multi-color pigments & smooth color transitions",
      "Neo-traditional, watercolor & illustrative color art",
      "Premium color saturation formulated for long longevity",
      "Full aftercare guidance & complimentary 4-week checkup",
    ],
    popular: false,
    badge: "Rich Pigments",
  },
];

export function TattooPricing() {
  const [selectedTier, setSelectedTier] = useState<number>(600);
  const [tattooSize, setTattooSize] = useState<number>(4);

  const rawTotal = tattooSize * selectedTier;
  const isDiscountEligible = tattooSize >= 10;
  const discountAmount = isDiscountEligible ? Math.round(rawTotal * 0.1) : 0;
  const finalEstimate = rawTotal - discountAmount;

  return (
    <section id="tattoo-pricing" className="py-16 md:py-24 bg-ink-charcoal text-bone relative overflow-hidden border-t hairline">
      
      {/* Ambient background glow — subtle white instead of gold */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] blur-[140px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-shell px-6 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest3 text-bone/40 font-semibold mb-3 block">
            Transparent Investment
          </span>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight text-bone mb-5 uppercase">
            TATTOO <span className="text-gradient-gold">PRICING MENU</span>
          </h2>
          <p className="text-bone/60 text-sm md:text-base font-light leading-relaxed">
            Every masterpiece at Ink Chronicle Studio is priced transparently per inch based on artistic complexity. Choose your style tier or use our interactive calculator below.
          </p>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PRICING_TIERS.map((tier) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative bg-ink-black border rounded-sm p-8 flex flex-col justify-between transition-all duration-500 group hover:-translate-y-1 ${
                tier.popular
                  ? "border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.06)] md:-translate-y-3"
                  : "border-white/[0.09] hover:border-white/25"
              }`}
            >
              {/* Top Badge */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded ${
                    tier.popular
                      ? "bg-white text-ink-black"
                      : "bg-white/[0.06] text-bone/50 border border-white/10"
                  }`}
                >
                  {tier.badge}
                </span>
                {tier.popular && (
                  <Sparkles size={16} className="text-bone/50 animate-pulse" />
                )}
              </div>

              {/* Title & Price */}
              <div>
                <h3 className="font-display text-xl md:text-2xl text-bone font-medium uppercase mb-2">
                  {tier.name}
                </h3>
                <p className="text-xs text-bone/50 font-light mb-6 min-h-[36px]">
                  {tier.tagline}
                </p>

                <div className="mb-8 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl md:text-5xl font-semibold text-bone">
                      ₹{tier.pricePerInch}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-bone/40 font-light">
                      / inch
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-bone/70 font-light">
                      <CheckCircle2 size={15} className="text-bone/40 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button — mirrors Process card hover style */}
              <a
                href="#booking"
                onClick={() => setSelectedTier(tier.pricePerInch)}
                className={`w-full py-3.5 text-center text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm flex items-center justify-center gap-2 ${
                  tier.popular
                    ? "bg-white text-ink-black hover:bg-bone"
                    : "bg-ink-charcoal text-bone border border-white/15 hover:border-white/40 hover:text-white"
                }`}
              >
                <span>Select {tier.name.split(" ")[0]}</span>
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* INTERACTIVE TATTOO ESTIMATOR CALCULATOR */}
        <div className="bg-ink-black border border-white/[0.12] rounded-lg p-8 md:p-12 max-w-4xl mx-auto shadow-2xl relative">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center text-bone/60">
              <Calculator size={20} />
            </div>
            <div>
              <h3 className="font-display text-xl text-bone uppercase tracking-wider">
                Instant Tattoo Price Estimator
              </h3>
              <p className="text-xs text-bone/50 font-light">
                Calculate an estimated cost based on your size in inches
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Left Controls */}
            <div className="space-y-6">
              
              {/* Tier Selection */}
              <div>
                <label className="text-xs uppercase tracking-wider text-bone/50 block mb-2 font-medium">
                  1. Select Tattoo Style Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Basic", price: 500 },
                    { label: "Advanced", price: 600 },
                    { label: "Coloured", price: 800 },
                  ].map((t) => (
                    <button
                      key={t.price}
                      onClick={() => setSelectedTier(t.price)}
                      className={`py-2.5 px-3 text-xs font-semibold rounded border uppercase tracking-wider transition-all ${
                        selectedTier === t.price
                          ? "bg-white text-ink-black border-white shadow-md"
                          : "bg-ink-charcoal text-bone/60 border-white/10 hover:border-white/30"
                      }`}
                    >
                      {t.label} (₹{t.price})
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase tracking-wider text-bone/50 font-medium">
                    2. Estimated Size in Inches
                  </label>
                  <span className="font-display text-lg font-bold text-bone">
                    {tattooSize} Inches
                  </span>
                </div>
                
                <input
                  type="range"
                  min={1}
                  max={20}
                  step={1}
                  value={tattooSize}
                  onChange={(e) => setTattooSize(Number(e.target.value))}
                  className="w-full h-2 bg-ink-charcoal rounded-lg appearance-none cursor-pointer accent-white"
                />

                <div className="flex justify-between text-[10px] text-bone/35 mt-1 font-mono">
                  <span>1 Inch (Tiny)</span>
                  <span>5 Inches (Medium)</span>
                  <span>10+ Inches (Large / Sleeve)</span>
                </div>
              </div>

              {/* Offer Banner inside calculator */}
              {isDiscountEligible ? (
                <div className="p-3 bg-white/[0.05] border border-white/20 rounded flex items-center gap-2 text-xs text-bone font-semibold">
                  <Tag size={16} />
                  <span>✦ 10% Studio Offer Unlocked for 10+ inch tattoos!</span>
                </div>
              ) : (
                <p className="text-[11px] text-bone/35 italic">
                  * Tattoos 10 inches or larger automatically qualify for 10% OFF at studio checkout!
                </p>
              )}

            </div>

            {/* Right Estimate Output Box */}
            <div className="bg-ink-charcoal border border-white/10 rounded-lg p-6 text-center flex flex-col items-center justify-center gap-4">
              <span className="text-xs uppercase tracking-widest text-bone/40 font-semibold">
                Estimated Session Price
              </span>

              <div className="space-y-1">
                {isDiscountEligible && (
                  <span className="text-xs line-through text-bone/30 block font-mono">
                    Original: ₹{rawTotal.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="font-display text-4xl md:text-5xl font-bold text-bone tracking-tight">
                  ₹{finalEstimate.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-bone/40 block font-light">
                  ({tattooSize} inches × ₹{selectedTier}/inch)
                </span>
              </div>

              <a
                href="#booking"
                className="w-full mt-2 py-3 bg-white text-ink-black font-bold text-xs uppercase tracking-widest rounded hover:bg-bone transition-colors shadow-lg"
              >
                Book Session For ₹{finalEstimate.toLocaleString("en-IN")}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
