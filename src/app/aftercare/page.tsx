import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Flaunt Your Ink — Tattoo & Piercing Aftercare Gel (₹200)",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Product Image */}
          <div className="relative aspect-square w-full rounded-sm overflow-hidden border hairline bg-ink-charcoal shadow-2xl">
            <Image
              src="/aftercare-product.png"
              alt="Flaunt Your Ink Aftercare Care Products"
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest3 text-gold font-semibold">
              Studio Official Aftercare
            </span>

            <h1 className="font-display text-4xl md:text-5xl text-bone leading-tight">
              Flaunt Your Ink <br />
              <span className="text-gold">Tattoo & Piercing Care Gel</span>
            </h1>

            <div className="flex items-baseline gap-4">
              <span className="font-display text-4xl text-bone font-semibold">₹200</span>
              <span className="text-xs text-bone/50 uppercase tracking-widest2">In-Studio Price</span>
            </div>

            <p className="text-bone/70 text-sm md:text-base font-light leading-relaxed">
              Specially formulated for fresh tattoos and new piercings. Enriched with Aloe Vera, Chamomile, and Vitamin E to accelerate healing, prevent infection, and keep ink colors vivid for years.
            </p>

            {/* Studio Pickup Note */}
            <div className="p-5 border border-gold/40 bg-gold/5 rounded-sm flex items-start gap-4">
              <MapPin size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h4 className="text-xs uppercase tracking-widest2 font-semibold text-gold mb-1">
                  How to Buy & Pay
                </h4>
                <p className="text-xs text-bone/80 font-light leading-relaxed">
                  Available for direct purchase at our studio. You can pay and pick up your gel in person during your tattoo or piercing appointment.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/919916899172?text=Hi%20Pavan,%20I'd%20like%20to%20reserve%20a%20bottle%20of%20Flaunt%20Your%20Ink%20Aftercare%20Gel%20(₹200)!"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-fit text-center bg-gold text-ink-black px-8 py-4 text-xs font-semibold uppercase tracking-widest2 hover:bg-white transition-colors mt-2"
            >
              Reserve via WhatsApp — ₹200
            </a>
          </div>

        </div>

        {/* Product Formula Breakdown */}
        <div className="border-t hairline pt-16 mb-16">
          <h2 className="font-display text-2xl md:text-3xl text-bone mb-8 text-center">
            4-Step Healing Formula
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
              <p><strong>Step 3:</strong> Apply a very thin layer of Soothing Gel 2 to 3 times daily for the first 7 days. Do not over-apply.</p>
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
