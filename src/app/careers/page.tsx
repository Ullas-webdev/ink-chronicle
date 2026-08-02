import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, Sparkles, GraduationCap, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Academy — Ink Chronicle",
};

export default function CareersPage() {
  return (
    <section className="min-h-screen pt-36 pb-28 px-6 md:px-10 bg-ink-black text-bone">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-gold-muted hover:text-gold transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Studio
        </Link>

        <span className="text-xs uppercase tracking-widest3 text-gold block mb-3 font-semibold">
          Training & Mentorship
        </span>
        <h1 className="font-display text-4xl md:text-6xl text-bone mb-6 leading-tight">
          Build Your Career Under <br />
          <span className="text-gold">Pavan Mythra</span>
        </h1>
        <p className="text-bone/70 text-base md:text-lg font-light leading-relaxed max-w-2xl mb-12">
          Master the art of tattoo, piercing, and aesthetics with direct 1-on-1 mentorship from studio founder & celebrity artist Pavan Mythra.
        </p>

        {/* Highlight Card */}
        <div className="bg-ink-charcoal border hairline p-8 md:p-10 rounded-sm mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <GraduationCap size={160} />
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-bone mb-4">
            Personal 1-on-1 Masterclass
          </h2>
          <p className="text-bone/70 font-light leading-relaxed mb-6 max-w-xl">
            Our training program is designed to transform aspiring artists into certified professionals. Pavan Mythra personally conducts every training session, sharing over 8 years of industry secrets, clinical aesthetic standards, and business building skills.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t hairline">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-gold shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-semibold text-bone">Personal Mentorship</h4>
                <p className="text-xs text-bone/60 font-light">Trained directly by Pavan Mythra himself.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-gold shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-semibold text-bone">Hands-on Practice</h4>
                <p className="text-xs text-bone/60 font-light">Real studio equipment & live model sessions.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-gold shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-semibold text-bone">Full Certification</h4>
                <p className="text-xs text-bone/60 font-light">Certified in Tattooing, Piercing & Aesthetics.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-gold shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-semibold text-bone">Career Placement</h4>
                <p className="text-xs text-bone/60 font-light">Guaranteed support to launch your studio career.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-gold/30 bg-gold/5 rounded-sm">
          <div>
            <h3 className="font-display text-xl text-bone mb-1">Ready to start your journey?</h3>
            <p className="text-xs text-bone/60 font-light">Enquire today for upcoming batch slots and curriculum details.</p>
          </div>
          <a
            href="https://wa.me/919916899172?text=Hi%20Pavan,%20I'm%20interested%20in%20your%20Tattoo%20%26%20Aesthetic%20Training%20Course!"
            target="_blank"
            rel="noreferrer"
            className="bg-gold text-ink-black px-6 py-3 text-xs uppercase tracking-widest2 font-semibold hover:bg-white transition-colors shrink-0"
          >
            Apply via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
