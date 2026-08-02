"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * A single ceremonial load, shown once per session (not on client-side route
 * changes). Draws the wordmark like a needle tracing a first line, then clears.
 */
export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("ic-loaded");
    if (alreadyShown) {
      setVisible(false);
      return;
    }
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("ic-loaded", "1");
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          role="status"
          aria-live="polite"
          aria-label="Loading Ink Chronicle"
        >
          <div className="flex flex-col items-center gap-6">
            <svg width="220" height="48" viewBox="0 0 220 48" fill="none">
              <motion.text
                x="0"
                y="34"
                fontFamily="Cormorant, serif"
                fontSize="34"
                fill="none"
                stroke="#C5A46D"
                strokeWidth="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
              >
                INK
              </motion.text>
            </svg>
            <motion.span
              className="text-[10px] uppercase tracking-widest3 text-bone/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Chronicle
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
