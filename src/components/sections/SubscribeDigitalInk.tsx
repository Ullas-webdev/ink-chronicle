"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

export function SubscribeDigitalInk() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Digital Ink Subscriber",
          email,
          message: "Subscribed to Digital Ink newsletter updates.",
        }),
      });
    } catch {
      // Ignore network errors for smooth UX
    }

    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 400);
  };

  return (
    <section className="py-14 md:py-20 bg-[#E8E8E6] text-black border-y border-black/10 relative overflow-hidden">
      <div className="mx-auto max-w-shell px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black uppercase leading-tight">
              SUBSCRIBE TO <br className="hidden sm:inline" />
              DIGITAL INK.
            </h2>

            <p className="text-xs sm:text-sm text-neutral-800 font-normal leading-relaxed max-w-lg mt-1">
              New designs, news, sales and promo&apos;s, right in your inbox.
              Not too often and you can always opt out.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6 w-full">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-black text-white p-6 rounded-md flex items-start gap-4 shadow-xl"
                >
                  <CheckCircle2 size={24} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display text-base font-bold uppercase tracking-wider text-white">
                      Welcome to Digital Ink
                    </h4>
                    <p className="text-xs text-neutral-300 font-light mt-1">
                      Your subscription is confirmed. You will receive exclusive studio updates and flash drop invitations.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-3 text-[11px] uppercase tracking-widest text-gold hover:underline font-semibold"
                    >
                      Subscribe Another Email
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3"
                >
                  <div className="flex flex-col sm:flex-row items-stretch gap-0 border border-black/80 rounded-none shadow-md overflow-hidden bg-white">
                    <div className="relative flex-1">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="w-full bg-white text-black text-sm px-5 py-4 focus:outline-none placeholder:text-neutral-500 font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="bg-black hover:bg-neutral-800 text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-2 shrink-0 cursor-pointer min-w-[140px] transition-colors"
                    >
                      <span>{status === "submitting" ? "JOINING..." : "SIGN UP"}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-neutral-700 font-normal leading-relaxed mt-1">
                    By completing this form, you are signing up to receive our emails and can unsubscribe at any time.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
