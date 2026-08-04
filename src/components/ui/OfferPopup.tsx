"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";

export function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Helper to launch popup after 5 seconds
    const startTimer = () => {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // 5 seconds delay
      return timer;
    };

    let timerId: NodeJS.Timeout;

    if (typeof window !== "undefined") {
      const alreadyShown = sessionStorage.getItem("ic_intro_shown") === "true";
      const isReload = Boolean(
        window.performance &&
        window.performance.getEntriesByType &&
        window.performance.getEntriesByType("navigation")[0] &&
        (window.performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming).type === "reload"
      );

      // If intro already completed and not a fresh reload, start 5s timer immediately
      if (alreadyShown && !isReload) {
        timerId = startTimer();
      } else {
        // Otherwise wait for ic-loading-complete event (fires when intro finishes on reload/first load)
        const handleComplete = () => {
          timerId = startTimer();
        };
        window.addEventListener("ic-loading-complete", handleComplete);
        return () => {
          window.removeEventListener("ic-loading-complete", handleComplete);
          clearTimeout(timerId);
        };
      }
    }

    return () => clearTimeout(timerId);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
  };

  const handleClaimOffer = () => {
    handleDismiss();
    if (typeof window !== "undefined") {
      const bookingElem = document.getElementById("booking");
      if (bookingElem) {
        bookingElem.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/#booking";
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[95] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          {/* Backdrop click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="absolute inset-0"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-[#0d0d0d] border border-white/20 p-8 sm:p-10 rounded-2xl shadow-2xl z-10 overflow-hidden text-[#F5F5F3]"
          >
            {/* Background Luxury Glow */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, rgba(232,232,230,0.25) 0%, transparent 70%)",
              }}
            />

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-2.5 text-white/70 hover:text-white bg-black/60 hover:bg-black/90 rounded-full border border-white/20 transition-colors z-20"
              aria-label="Close offer modal"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col items-center text-center relative z-10">
              {/* Badge */}
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#C5A46D] bg-[#C5A46D]/15 border border-[#C5A46D]/40 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 mb-5">
                <Sparkles size={12} className="text-[#C5A46D]" />
                <span>EXCLUSIVE STUDIO OFFER</span>
              </span>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white leading-tight">
                GO BIG. <span className="text-[#C5A46D] italic font-serif">WEAR LEGACY.</span>
              </h3>

              {/* Offer Highlight Banner Box */}
              <div className="my-6 p-6 rounded-xl bg-black border border-white/20 w-full relative overflow-hidden shadow-inner">
                <div className="text-3xl sm:text-4xl font-black text-[#C5A46D] tracking-tight uppercase">
                  10% OFF
                </div>
                <p className="text-xs sm:text-sm text-white/90 font-medium mt-1">
                  On All Custom Tattoos <span className="text-[#C5A46D] font-bold">10 Inches & Above</span>
                </p>
              </div>

              <p className="text-xs text-white/70 font-light leading-relaxed max-w-sm">
                Ready for your statement piece? Book any tattoo session 10 inches or larger and receive an instant 10% studio credit off your total artwork.
              </p>

              {/* High-Contrast Solid Off-White CTA Button with Black Bold Text */}
              <button
                onClick={handleClaimOffer}
                className="mt-7 w-full bg-[#E8E8E6] text-black font-black text-sm uppercase tracking-widest py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-2xl cursor-pointer"
              >
                <span className="text-black font-black text-sm tracking-widest">CLAIM OFFER</span>
                <ArrowRight size={18} className="stroke-[3] text-black" />
              </button>

              <button
                onClick={handleDismiss}
                className="mt-4 text-[11px] uppercase tracking-widest text-white/50 hover:text-white transition-colors"
              >
                No Thanks, Maybe Later
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
