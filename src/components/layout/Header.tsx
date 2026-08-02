"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "Artists", href: "/#artists" },
  { label: "Tattoos", href: "/#tattoos" },
  { label: "Piercings", href: "/#piercings" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Process", href: "/#process" },
  { label: "Booking", href: "/#booking" },
];

export function Header() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleComplete = () => setHeaderVisible(true);

    if (typeof window !== "undefined") {
      const alreadyShown = sessionStorage.getItem("ic_intro_shown") === "true";
      const isReload = Boolean(
        window.performance &&
        window.performance.getEntriesByType &&
        window.performance.getEntriesByType("navigation")[0] &&
        (window.performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming).type === "reload"
      );
      if (alreadyShown && !isReload) {
        setHeaderVisible(true);
      }
    }

    window.addEventListener("ic-loading-complete", handleComplete);
    return () => window.removeEventListener("ic-loading-complete", handleComplete);
  }, []);

  const handleLogoClick = () => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "").replace("#", "");
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        headerVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto max-w-shell px-6 md:px-10 h-20 flex items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="/"
          onClick={handleLogoClick}
          className="group flex items-center gap-3 shrink-0"
          aria-label="Ink Chronicle — home"
        >
          <Image
            src="/logo-mark.png"
            alt=""
            width={347}
            height={624}
            priority
            className="h-9 md:h-10 w-auto transition-all duration-500 group-hover:opacity-100"
            style={{
              opacity: scrolled ? 0.9 : 0.95,
              filter: scrolled ? "invert(1) brightness(0)" : "none",
            }}
          />
          <span
            className="font-display text-xl tracking-widest2 transition-colors duration-300"
            style={{ color: scrolled ? "#080808" : "#F5F5F3" }}
          >
            INK CHRONICLE
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs md:text-sm uppercase tracking-widest2 transition-colors duration-300 hover:!text-gold"
                style={{ color: scrolled ? "#080808" : "rgba(245,245,243,0.7)" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/#booking"
          onClick={(e) => handleNavClick(e, "/#booking")}
          className="hidden md:inline-block text-xs md:text-sm uppercase tracking-widest2 border px-6 py-3 transition-all duration-300 hover:bg-[#e5d3b3] hover:border-[#e5d3b3] hover:!text-[#080808]"
          style={{
            color: scrolled ? "#080808" : "#F5F5F3",
            borderColor: scrolled ? "rgba(8,8,8,0.2)" : "rgba(232,232,230,0.5)",
          }}
        >
          Tell Us Your Idea
        </Link>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="md:hidden p-2 rounded-lg"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5 w-6">
            <motion.span
              className={`h-px w-full transition-colors ${scrolled ? "bg-ink-black" : "bg-bone"}`}
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }}
            />
            <motion.span
              className={`h-px w-full transition-colors ${scrolled ? "bg-ink-black" : "bg-bone"}`}
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className={`h-px w-full transition-colors ${scrolled ? "bg-ink-black" : "bg-bone"}`}
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Container Element */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden px-4 pb-6"
          >
            {/* Mobile Nav Links Grouped Container Box */}
            <div className="bg-neutral-950/95 border border-white/20 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl flex flex-col gap-6 text-bone">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold flex items-center gap-1.5">
                  <span>✦ Studio Navigation</span>
                </span>
                <span className="text-[10px] font-mono text-bone/40">INK CHRONICLE</span>
              </div>

              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      setMenuOpen(false);
                      handleNavClick(e, link.href);
                    }}
                    className="font-display text-xl tracking-wide text-bone/90 hover:text-gold transition-colors duration-300 flex items-center justify-between group py-1"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-gold/0 group-hover:text-gold transition-all duration-300 transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/#booking"
                  onClick={(e) => {
                    setMenuOpen(false);
                    handleNavClick(e, "/#booking");
                  }}
                  className="w-full block text-center text-xs uppercase tracking-widest2 bg-gold text-ink-black font-bold py-4 rounded-xl hover:bg-gold-soft transition-all duration-300 shadow-lg"
                >
                  Tell Us Your Idea
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
