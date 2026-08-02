"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

/** Persistent floating action for a fast consultation enquiry, distinct from the full booking form. */
export function FloatingConsult() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-[300px] bg-ink-charcoal border hairline p-6 shadow-2xl"
            role="dialog"
            aria-label="Quick consultation enquiry"
          >
            <p className="font-display text-lg text-bone mb-4">Quick Enquiry</p>
            {status === "sent" ? (
              <p className="text-sm text-gold">
                Received — we&apos;ll reply within one business day.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  name="name"
                  required
                  placeholder="Name"
                  className="bg-transparent border-b hairline py-2 text-sm text-bone placeholder:text-bone/30 focus:border-gold outline-none transition-colors"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="bg-transparent border-b hairline py-2 text-sm text-bone placeholder:text-bone/30 focus:border-gold outline-none transition-colors"
                />
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Tell us briefly what you have in mind"
                  className="bg-transparent border-b hairline py-2 text-sm text-bone placeholder:text-bone/30 focus:border-gold outline-none transition-colors resize-none"
                />
                <Button type="submit" size="sm" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send"}
                </Button>
                {status === "error" && (
                  <p className="text-xs text-red-400">
                    Couldn&apos;t send — please email us directly.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close consultation form" : "Open consultation form"}
        className="h-14 w-14 rounded-full bg-gold text-ink-black flex items-center justify-center shadow-xl hover:bg-gold-soft transition-colors duration-300"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
    </div>
  );
}
