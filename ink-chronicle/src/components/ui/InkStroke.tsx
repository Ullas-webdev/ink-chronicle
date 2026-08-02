"use client";

import { motion } from "framer-motion";

interface InkStrokeProps {
  className?: string;
}

/**
 * The studio's signature motif: a single continuous brush stroke, drawn once
 * as it enters the viewport — evoking the moment a tattoo needle first touches skin.
 * Used sparingly, once per major section transition.
 */
export function InkStroke({ className = "" }: InkStrokeProps) {
  return (
    <div className={`w-full flex justify-center ${className}`} aria-hidden>
      <svg
        viewBox="0 0 600 40"
        className="w-40 md:w-56 h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M4 20C60 4 120 36 180 20C240 4 300 36 360 20C420 4 480 36 540 20C560 14 580 20 596 18"
          stroke="#C5A46D"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
        />
      </svg>
    </div>
  );
}
