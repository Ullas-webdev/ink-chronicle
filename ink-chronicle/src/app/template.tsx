"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Next.js re-mounts `template.tsx` on every navigation, making it the right
 * place for a consistent cross-route fade — distinct from in-page scroll reveals.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
