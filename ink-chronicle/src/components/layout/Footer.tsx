import Link from "next/link";

const HOURS = [
  { day: "Tuesday — Friday", time: "11:00 — 20:00" },
  { day: "Saturday", time: "10:00 — 18:00" },
  { day: "Sunday — Monday", time: "By private appointment" },
];

export function Footer() {
  return (
    <footer className="border-t hairline bg-ink-black">
      <div className="mx-auto max-w-shell px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="md:col-span-2 flex flex-col gap-6">
          <span className="font-display text-2xl tracking-widest2 text-bone">
            INK CHRONICLE
          </span>
          <p className="text-sm text-bone/50 max-w-sm leading-relaxed font-light">
            A private tattoo atelier for work meant to last a lifetime. By
            consultation only.
          </p>
          <p className="text-xs uppercase tracking-widest2 text-gold-muted">
            12 Marchmont Row, Mayfair, London
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-[11px] uppercase tracking-widest2 text-gold-muted">
            Studio
          </span>
          <Link href="#artists" className="text-sm text-bone/70 hover:text-gold transition-colors">
            Artists
          </Link>
          <Link href="#styles" className="text-sm text-bone/70 hover:text-gold transition-colors">
            Styles
          </Link>
          <Link href="#gallery" className="text-sm text-bone/70 hover:text-gold transition-colors">
            Gallery
          </Link>
          <Link href="#process" className="text-sm text-bone/70 hover:text-gold transition-colors">
            Process
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-[11px] uppercase tracking-widest2 text-gold-muted">
            Hours
          </span>
          {HOURS.map((h) => (
            <div key={h.day} className="text-sm text-bone/70">
              <p>{h.day}</p>
              <p className="text-bone/40 text-xs">{h.time}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t hairline">
        <div className="mx-auto max-w-shell px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-bone/30">
            © {new Date().getFullYear()} Ink Chronicle Studio. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-xs text-bone/30 hover:text-gold transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-bone/30 hover:text-gold transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
