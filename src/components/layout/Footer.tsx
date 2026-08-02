import Link from "next/link";
import { GraduationCap, Instagram } from "lucide-react";

const HOURS = [
  { day: "Monday — Friday", time: "11:00 — 20:00" },
  { day: "Saturday", time: "10:00 — 18:00" },
  { day: "Sunday", time: "By private appointment" },
];

export function Footer() {
  return (
    <footer className="border-t hairline bg-ink-black text-bone">
      <div className="mx-auto max-w-shell px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
        
        {/* Column 1 & 2: Branding & Address & Social */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <span className="font-display text-2xl tracking-widest2 text-bone">
            INK CHRONICLE
          </span>
          <p className="text-sm text-bone/50 max-w-sm leading-relaxed font-light">
            A private tattoo atelier for work meant to last a lifetime. By consultation only.
          </p>
          <p className="text-xs uppercase tracking-widest2 text-gold-muted">
            Kannada Sahithya Parishath Rd, near mysuru coffee bar, Vijayanagar 1st Stage, Mysuru, Karnataka 570017
          </p>

          {/* Social Links (Instagram Only) */}
          <div className="flex items-center gap-4 mt-1">
            <a
              href="https://www.instagram.com/_ink_chronicle_?igsh=MTBxcHQyYm92YWNuYw=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border hairline bg-ink-charcoal flex items-center justify-center text-bone hover:text-gold hover:border-gold transition-all"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Careers Box */}
          <div className="mt-2 p-5 border border-gold/30 bg-ink-charcoal rounded-sm flex flex-col gap-2 max-w-sm">
            <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest2 font-semibold">
              <GraduationCap size={16} /> Academy & Careers
            </div>
            <p className="text-xs text-bone/70 font-light leading-relaxed">
              Pavan Mythra personally trains students 1-on-1 for a successful career in tattooing & aesthetics.
            </p>
            <Link
              href="/careers"
              className="text-xs uppercase tracking-widest2 text-gold hover:text-white transition-colors mt-1 font-semibold underline underline-offset-4"
            >
              Explore Training & Careers →
            </Link>
          </div>
        </div>

        {/* Column 3: Studio Links (Same as Navbar) */}
        <div className="flex flex-col gap-3">
          <span className="text-[11px] uppercase tracking-widest2 text-gold-muted mb-1 font-semibold">
            Studio
          </span>
          <a href="/#artists" className="text-sm text-bone/70 hover:text-gold transition-colors">
            Artists
          </a>
          <a href="/#tattoos" className="text-sm text-bone/70 hover:text-gold transition-colors">
            Tattoos
          </a>
          <Link href="/piercings" className="text-sm text-bone/70 hover:text-gold transition-colors">
            Piercings
          </Link>
          <a href="/#gallery" className="text-sm text-bone/70 hover:text-gold transition-colors">
            Gallery
          </a>
          <a href="/#process" className="text-sm text-bone/70 hover:text-gold transition-colors">
            Process
          </a>
          <a href="/#booking" className="text-sm text-bone/70 hover:text-gold transition-colors">
            Booking
          </a>
        </div>

        {/* Column 4: Legal & Careers Links */}
        <div className="flex flex-col gap-3">
          <span className="text-[11px] uppercase tracking-widest2 text-gold-muted mb-1 font-semibold">
            Legal
          </span>
          <Link href="/privacy" className="text-sm text-bone/70 hover:text-gold transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-bone/70 hover:text-gold transition-colors">
            Terms of Service
          </Link>
          
          <span className="text-[11px] uppercase tracking-widest2 text-gold-muted mt-4 mb-1 font-semibold">
            Careers
          </span>
          <Link href="/careers" className="text-sm text-bone/70 hover:text-gold transition-colors">
            Student Academy
          </Link>
        </div>

        {/* Column 5: Hours */}
        <div className="flex flex-col gap-3">
          <span className="text-[11px] uppercase tracking-widest2 text-gold-muted mb-1 font-semibold">
            Hours
          </span>
          {HOURS.map((h) => (
            <div key={h.day} className="text-sm text-bone/70">
              <p className="font-medium">{h.day}</p>
              <p className="text-bone/40 text-xs">{h.time}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Copyright & Kannada Tagline Bar */}
      <div className="border-t hairline bg-ink-black py-8">
        <div className="mx-auto max-w-shell px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-bone/40">
            © {new Date().getFullYear()} Ink Chronicle Studio. All rights reserved.
          </p>
          <span className="text-xs md:text-sm text-gold font-medium tracking-wide">
            ಇಲ್ಲಿ ಹಚ್ಚೆ ಮಾತ್ರವಲ್ಲ, ಕಥೆಗಳೂ ಹುಟ್ಟುತ್ತವೆ
          </span>
        </div>
      </div>
    </footer>
  );
}
