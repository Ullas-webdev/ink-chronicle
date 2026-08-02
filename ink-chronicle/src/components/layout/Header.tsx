"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Artists", href: "#artists" },
  { label: "Styles", href: "#styles" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Booking", href: "#booking" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 160);
    setScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ink-black/80 backdrop-blur-md border-b hairline" : "bg-transparent"
      }`}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className="mx-auto max-w-shell px-6 md:px-10 h-20 flex items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="#top"
          className="font-display text-xl tracking-widest2 text-bone hover:text-gold transition-colors duration-300"
        >
          INK CHRONICLE
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] uppercase tracking-widest2 text-bone/70 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          className="hidden md:inline-block text-[11px] uppercase tracking-widest2 border border-gold/50 text-bone px-6 py-3 hover:border-gold hover:text-gold transition-all duration-300"
        >
          Request Consultation
        </a>

        <button
          className="md:hidden text-bone"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5 w-6">
            <motion.span
              className="h-px bg-bone w-full"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }}
            />
            <motion.span
              className="h-px bg-bone w-full"
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className="h-px bg-bone w-full"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }}
            />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          className="md:hidden bg-ink-black border-t hairline px-6 py-10 flex flex-col gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl text-bone hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="text-[11px] uppercase tracking-widest2 border border-gold/50 text-bone px-6 py-4 w-fit hover:border-gold hover:text-gold transition-all duration-300"
          >
            Request Consultation
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
