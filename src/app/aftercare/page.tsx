import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ShieldCheck, MapPin, PackageCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Tattoo & Piercing Aftercare — Soothing Gel (₹200) & Complete Kit (₹900) by Ink Chronicle",
  description:
    "Official Ink Chronicle tattoo & piercing aftercare products. Flaunt Your Ink Soothing Gel (₹200) and Complete 4-Piece Professional Aftercare Kit (₹900).",
};

export default function AftercarePage() {
  return (
    <section className="min-h-screen pt-36 pb-28 px-6 md:px-10 bg-ink-black text-bone">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-gold-muted hover:text-gold transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Studio
        </Link>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest3 text-gold font-semibold block mb-2">
            OFFICIAL STUDIO AFTERCARE
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-bone leading-tight">
            Protect Your Ink & <span className="text-gold italic font-serif">Piercings</span>
          </h1>
          <p className="text-bone/70 text-sm md:text-base font-light leading-relaxed mt-4">
            Formulated for optimal skin recovery. Choose between our essential single gel or the full 4-piece professional healing kit.
          </p>
        </div>

        {/* 2 Product Cards Grid (₹200 Gel & ₹900 Complete Kit) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Product Option 1: Flaunt Your Ink Soothing Gel (₹200) */}
          <div className="bg-ink-charcoal border hairline rounded-sm p-6 md:p-8 flex flex-col justify-between relative group">
            <div>
              <div className="relative aspect-video w-full rounded-sm overflow-hidden mb-6 bg-ink-black border hairline">
                <Image
                  src="/aftercare-product.png"
                  alt="Flaunt Your Ink Aftercare Care Gel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <span className="text-[10px] uppercase tracking-widest2 font-bold px-3 py-1 bg-gold/10 text-gold border border-gold/30 rounded-full inline-block mb-3">
                ESSENTIAL SINGLE GEL
              </span>
              <h2 className="font-display text-2xl text-bone font-semibold mb-2">
                Flaunt Your Ink Soothing Gel
              </h2>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-3xl font-bold text-gold">₹200</span>
                <span className="text-xs text-bone/50 uppercase tracking-wider">In-Studio Price</span>
              </div>
              <p className="text-xs text-bone/70 font-light leading-relaxed mb-6">
                Enriched with Aloe Vera, Chamomile, and Vitamin E to soothe itching, cool redness, and keep fresh tattoos moist and vibrant.
              </p>

              <ul className="space-y-2 mb-8 text-xs text-bone/80 font-light">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold shrink-0" />
                  <span>30ml Soothing & Healing Gel</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold shrink-0" />
                  <span>Reduces inflammation & itching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold shrink-0" />
                  <span>Suitable for fresh tattoos & piercings</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919916899172?text=Hi%20Pavan%2C%20I'd%20like%20to%20reserve%20a%20bottle%20of%20Flaunt%20Your%20Ink%20Aftercare%20Gel%20(%E2%82%B9200)!"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center bg-ink-black border hairline text-bone py-3.5 text-xs font-semibold uppercase tracking-widest2 hover:bg-gold hover:text-black transition-colors"
            >
              RESERVE GEL — ₹200
            </a>
          </div>

          {/* Product Option 2: Complete Professional Aftercare Kit (₹900) */}
          <div className="bg-ink-charcoal border-2 border-gold/60 rounded-sm p-6 md:p-8 flex flex-col justify-between relative group shadow-2xl">
            {/* Best Value Badge */}
            <div className="absolute -top-3 right-6 bg-gold text-black font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded shadow">
              RECOMMENDED 4-PIECE KIT
            </div>

            <div>
              <div className="relative aspect-video w-full rounded-sm overflow-hidden mb-6 bg-ink-black border hairline">
                <Image
                  src="/aftercare-cover.jpg"
                  alt="Complete Professional Tattoo & Piercing Aftercare Kit"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <span className="text-[10px] uppercase tracking-widest2 font-bold px-3 py-1 bg-gold text-black rounded-full inline-block mb-3">
                COMPLETE 4-PIECE HEALING KIT
              </span>
              <h2 className="font-display text-2xl text-bone font-semibold mb-2">
                Professional Aftercare Kit
              </h2>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-3xl font-bold text-gold">₹900</span>
                <span className="text-xs text-bone/50 uppercase tracking-wider">Full Healing System</span>
              </div>
              <p className="text-xs text-bone/70 font-light leading-relaxed mb-6">
                The ultimate 4-step studio recovery kit containing everything needed from day 1 to complete healing: Foam Cleanser, Soothing Gel, SPF Shield, and Hydrating Balm.
              </p>

              <ul className="space-y-2 mb-8 text-xs text-bone/90 font-light">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold shrink-0" />
                  <span>01. Anti-Bacterial Cleansing Foam</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold shrink-0" />
                  <span>02. Cooling Aloe Soothing Gel</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold shrink-0" />
                  <span>03. UV SPF Color Protector Shield</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold shrink-0" />
                  <span>04. Daily Hydrating Healing Balm</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919916899172?text=Hi%20Pavan%2C%20I'd%20like%20to%20reserve%20the%20Complete%20Professional%20Aftercare%20Kit%20(%E2%82%B9900)!"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center bg-gold text-black py-3.5 text-xs font-black uppercase tracking-widest2 hover:bg-white transition-colors shadow-lg"
            >
              RESERVE COMPLETE KIT — ₹900
            </a>
          </div>

        </div>

        {/* Studio Pickup Note */}
        <div className="p-6 border border-gold/40 bg-gold/5 rounded-sm flex items-start gap-4 mb-16">
          <MapPin size={24} className="text-gold shrink-0 mt-1" />
          <div>
            <h4 className="text-xs uppercase tracking-widest2 font-semibold text-gold mb-1">
              In-Studio Pickup & Payment
            </h4>
            <p className="text-xs text-bone/80 font-light leading-relaxed">
              Both the ₹200 Soothing Gel and ₹900 Complete Aftercare Kit are available for direct purchase at our studio in Mysuru. You can pick up your kit during your session or order via WhatsApp.
            </p>
          </div>
        </div>

        {/* Product Formula Breakdown */}
        <div className="border-t hairline pt-16 mb-16">
          <h2 className="font-display text-2xl md:text-3xl text-bone mb-8 text-center">
            4-Step Healing Kit System
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border hairline bg-ink-charcoal/40 rounded-sm">
              <span className="text-red-400 font-bold text-xs uppercase tracking-widest2 block mb-2">01. Cleanse</span>
              <h3 className="font-display text-lg text-bone mb-2">Foam Cleanser</h3>
              <p className="text-xs text-bone/60 font-light leading-relaxed">
                Anti-bacterial formula removes excess fluid and dirt without stripping natural skin oils.
              </p>
            </div>
            <div className="p-6 border hairline bg-ink-charcoal/40 rounded-sm">
              <span className="text-green-400 font-bold text-xs uppercase tracking-widest2 block mb-2">02. Soothe</span>
              <h3 className="font-display text-lg text-bone mb-2">Soothing Gel</h3>
              <p className="text-xs text-bone/60 font-light leading-relaxed">
                Aloe vera and chamomile calm itching, reduce swelling, and cool fresh tattoo inflammation.
              </p>
            </div>
            <div className="p-6 border hairline bg-ink-charcoal/40 rounded-sm">
              <span className="text-yellow-400 font-bold text-xs uppercase tracking-widest2 block mb-2">03. Protect</span>
              <h3 className="font-display text-lg text-bone mb-2">SPF Shield</h3>
              <p className="text-xs text-bone/60 font-light leading-relaxed">
                Protects healed tattoos against UV discoloration, keeping blacks deep and colors sharp.
              </p>
            </div>
            <div className="p-6 border hairline bg-ink-charcoal/40 rounded-sm">
              <span className="text-blue-400 font-bold text-xs uppercase tracking-widest2 block mb-2">04. Nourish</span>
              <h3 className="font-display text-lg text-bone mb-2">Daily Moisturizer</h3>
              <p className="text-xs text-bone/60 font-light leading-relaxed">
                Deep hydration balm prevents scab cracking and promotes fast, smooth skin repair.
              </p>
            </div>
          </div>
        </div>

        {/* How to Use Instructions */}
        <div className="p-8 md:p-10 border hairline bg-ink-charcoal rounded-sm">
          <h3 className="font-display text-2xl text-gold mb-6 flex items-center gap-3">
            <ShieldCheck size={28} /> How To Use Instructions
          </h3>
          <div className="flex flex-col gap-4 text-sm text-bone/80 font-light">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
              <p><strong>Step 1:</strong> Always wash your hands thoroughly with anti-bacterial soap before touching a new tattoo or piercing.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
              <p><strong>Step 2:</strong> Gently clean the area with lukewarm water or Cleanse Foam, then pat dry with a clean paper towel.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
              <p><strong>Step 3:</strong> Apply a thin layer of Soothing Gel 2 to 3 times daily for the first 7 days. Do not over-apply.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
              <p><strong>Step 4:</strong> Never pick, scratch, or peel scabbing skin. Avoid swimming, hot tubs, and direct sunlight for 2 weeks.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
