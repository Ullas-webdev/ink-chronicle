"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const STYLES = [
  "Realism",
  "Micro Tattoo",
  "Fineline",
  "Asian",
  "Illustrative",
  "Script",
  "Blackwork",
  "Fineline Floral",
  "Minimalist",
];

const PIERCING_TYPES = [
  "Ear Lobe Piercing (Gunshot)",
  "Helix Cartilage Piercing",
  "Forward Helix Piercing",
  "Tragus Piercing",
  "Conch Piercing",
  "Rook Piercing",
  "Flat Piercing",
  "Daith Piercing",
  "Nostril / Nose Piercing",
  "Septum Piercing",
  "Belly Button / Navel Piercing",
  "Eyebrow Piercing",
  "Other Custom Piercing",
];

export function BookingModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Data
  const [formData, setFormData] = useState({
    service: "",
    colorPreference: "",
    style: "",
    size: "",
    placement: "",
    piercingType: "",
    piercingSides: "",
    piercingPlacement: "",
    canVisit: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#booking") {
        setIsOpen(true);
        setStep(0);
      } else {
        setIsOpen(false);
      }
    };

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href="#booking"]');
      if (anchor) {
        e.preventDefault();
        setIsOpen(true);
        setStep(0);
        window.history.pushState(null, "", "#booking");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    document.addEventListener("click", handleLinkClick);

    if (window.location.hash === "#booking") {
      setIsOpen(true);
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    history.pushState("", document.title, window.location.pathname + window.location.search);
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => Math.max(0, s - 1));

  const handleSelect = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (key === "service") {
      if (value.includes("Tattoo Training") || value.includes("Academy")) {
        closeModal();
        router.push("/tattoo-training");
        return;
      }
      if (value.includes("Pencil Art") || value.includes("Paintings")) {
        closeModal();
        router.push("/pencil-art-and-paintings");
        return;
      }
      // "Piercings" stays in modal form and advances to step 2
    }
    if (key !== "name" && key !== "email" && key !== "phone") {
      setTimeout(nextStep, 300);
    }
  };

  const isPiercing = formData.service === "Piercings";

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      >
        <div className="w-full max-w-3xl relative min-h-[500px] bg-ink-black border hairline rounded-lg p-6 md:p-10 flex flex-col justify-between shadow-2xl text-bone">
          
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-bone/50 hover:text-bone p-2 transition-colors z-20"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <AnimatePresence mode="wait">
            
            {/* Step 0: Welcome / Intro */}
            {step === 0 && (
              <StepContainer key="step0">
                <h2 className="font-display text-4xl md:text-5xl text-bone mb-6 text-center">
                  Share Your Idea in <br /> Just 30 Seconds!
                </h2>
                <p className="text-bone/70 text-center mb-10 max-w-lg mx-auto font-light leading-relaxed">
                  Fill out our quick form to book a <span className="text-gold font-medium">Free Consultation</span> 💡
                  <br />
                  We'll get back to you with the pricing details and session plan to create your dream tattoo or piercing. 🎉
                </p>
                <div className="flex justify-center">
                  <Button onClick={nextStep} className="px-10 py-5 text-base">
                    Get Started <ArrowRight className="ml-2 inline" size={18} />
                  </Button>
                </div>
              </StepContainer>
            )}

            {/* Step 1: Service Selection */}
            {step === 1 && (
              <StepContainer key="step1">
                <QuestionHeader step="1" title="I am looking for:*" />
                <OptionsList
                  options={[
                    "Custom Tattoo / Tattoo Pricing",
                    "Piercings",
                    "Tattoo Training (Academy)",
                    "Pencil Art & Paintings",
                  ]}
                  selected={formData.service}
                  onSelect={(v) => handleSelect("service", v)}
                />
              </StepContainer>
            )}

            {/* ═══════════════════════════════════════════
               PIERCINGS BRANCH FLOW
               ═══════════════════════════════════════════ */}
            {isPiercing && (
              <>
                {/* Piercing Query 1: Type */}
                {step === 2 && (
                  <StepContainer key="piercing_modal_step2">
                    <QuestionHeader
                      step="2"
                      title="What type of piercing are you looking for?*"
                      subtitle="Select your preferred piercing procedure."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1">
                      {PIERCING_TYPES.map((pType) => (
                        <button
                          key={pType}
                          onClick={() => handleSelect("piercingType", pType)}
                          className={`text-left p-4 border rounded transition-all duration-300 ${
                            formData.piercingType === pType
                              ? "border-gold bg-gold/10 text-gold shadow-md"
                              : "border-white/10 hover:border-gold/50 text-bone bg-ink-charcoal"
                          }`}
                        >
                          <span className="text-sm font-medium">{pType}</span>
                        </button>
                      ))}
                    </div>
                  </StepContainer>
                )}

                {/* Piercing Query 2: Sides */}
                {step === 3 && (
                  <StepContainer key="piercing_modal_step3">
                    <QuestionHeader
                      step="3"
                      title="How many sides / spots would you like?*"
                      subtitle="Choose single, pair (2 sides), or triple (3 sides)."
                    />
                    <OptionsList
                      options={[
                        "Single (1 Side)",
                        "Pair / Double (2 Sides)",
                        "Triple (3 Sides)",
                      ]}
                      selected={formData.piercingSides}
                      onSelect={(v) => handleSelect("piercingSides", v)}
                    />
                  </StepContainer>
                )}

                {/* Piercing Query 3: Location / Placement */}
                {step === 4 && (
                  <StepContainer key="piercing_modal_step4">
                    <QuestionHeader
                      step="4"
                      title="Where would you like the piercing placed?*"
                      subtitle="Select your preferred side or placement location."
                    />
                    <OptionsList
                      options={[
                        "Left Side",
                        "Right Side",
                        "Both Sides / Center",
                        "Other Placement",
                      ]}
                      selected={formData.piercingPlacement}
                      onSelect={(v) => handleSelect("piercingPlacement", v)}
                    />
                  </StepContainer>
                )}

                {/* Piercing Query 4: Studio Location */}
                {step === 5 && (
                  <StepContainer key="piercing_modal_step5">
                    <QuestionHeader
                      step="5"
                      title="Studio Location*"
                      subtitle="Are you able to visit our studio in Mysuru for your session?"
                    />
                    <div className="mb-6 p-4 border border-white/10 bg-ink-charcoal rounded flex items-center gap-3">
                      <MapPin size={18} className="text-gold" />
                      <a
                        href="https://maps.app.goo.gl/NC6nEVa1nRaqccz48?g_st=aw"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-bone/80 hover:text-gold transition-colors"
                      >
                        Vijayanagar 1st Stage, Mysuru (View Google Maps ↗)
                      </a>
                    </div>
                    <OptionsList
                      options={["Yes, I can visit", "No, I am out of town"]}
                      selected={formData.canVisit}
                      onSelect={(v) => handleSelect("canVisit", v)}
                    />
                  </StepContainer>
                )}

                {/* Piercing Query 5: Contact Info */}
                {step === 6 && (
                  <StepContainer key="piercing_modal_step6">
                    <QuestionHeader
                      step="6"
                      title="What's your contact info?*"
                      subtitle="We'll use this to confirm your piercing session."
                    />
                    <form
                      className="flex flex-col gap-4"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setIsSubmitting(true);
                        try {
                          await fetch("/api/booking", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              name: formData.name,
                              email: formData.email,
                              phone: formData.phone,
                              service: "Piercings",
                              styleSlug: formData.piercingType,
                              size: formData.piercingSides,
                              placement: formData.piercingPlacement,
                              canVisit: formData.canVisit,
                            }),
                          });
                        } catch (err) {
                          console.error("Booking error:", err);
                        } finally {
                          setIsSubmitting(false);
                          nextStep();
                        }
                      }}
                    >
                      <div>
                        <label className="text-xs text-bone/60 font-semibold uppercase tracking-wider mb-1 block">Full Name*</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-ink-charcoal border border-white/10 rounded px-4 py-3 text-sm text-bone focus:border-gold outline-none"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-bone/60 font-semibold uppercase tracking-wider mb-1 block">Phone number*</label>
                          <input
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-ink-charcoal border border-white/10 rounded px-4 py-3 text-sm text-bone focus:border-gold outline-none"
                            placeholder="000 000-0000"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-bone/60 font-semibold uppercase tracking-wider mb-1 block">Email*</label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-ink-charcoal border border-white/10 rounded px-4 py-3 text-sm text-bone focus:border-gold outline-none"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button disabled={isSubmitting} type="submit" className="w-full py-4 text-sm font-semibold uppercase">
                          {isSubmitting ? "Submitting..." : "Submit Reservation"}
                        </Button>
                      </div>
                    </form>
                  </StepContainer>
                )}

                {/* Piercing Thank You */}
                {step === 7 && (
                  <StepContainer key="piercing_modal_step7">
                    <div className="flex flex-col items-center justify-center text-center py-8">
                      <CheckCircle2 size={56} className="text-emerald-400 mb-4" />
                      <h3 className="font-display text-3xl text-bone font-semibold mb-2">
                        Piercing Request Submitted!
                      </h3>
                      <p className="text-bone/70 text-sm max-w-md font-light leading-relaxed mb-6">
                        Thank you {formData.name}! We have received your piercing request for {formData.piercingType || "Piercings"} ({formData.piercingSides}). We will reach out to you shortly.
                      </p>
                      <Button onClick={closeModal} className="px-8 py-3 text-xs uppercase">
                        Close
                      </Button>
                    </div>
                  </StepContainer>
                )}
              </>
            )}

            {/* ═══════════════════════════════════════════
               TATTOO BRANCH FLOW
               ═══════════════════════════════════════════ */}
            {!isPiercing && (
              <>
                {step === 2 && (
                  <StepContainer key="step2">
                    <QuestionHeader step="2" title="What type of tattoo are you looking for?*" />
                    <OptionsList
                      options={["Basic Tattoo", "Advanced Tattoo", "Coloured Tattoo"]}
                      selected={formData.colorPreference}
                      onSelect={(v) => handleSelect("colorPreference", v)}
                    />
                  </StepContainer>
                )}

                {step === 3 && (
                  <StepContainer key="step3">
                    <QuestionHeader step="3" title="What style are you looking for?*" />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto pr-1">
                      {STYLES.map((style) => (
                        <button
                          key={style}
                          onClick={() => handleSelect("style", style)}
                          className={`text-left p-3.5 border rounded transition-all duration-300 ${
                            formData.style === style
                              ? "border-gold bg-gold/10 text-gold"
                              : "border-white/10 hover:border-gold/50 text-bone bg-ink-charcoal"
                          }`}
                        >
                          <span className="text-xs md:text-sm font-medium">{style}</span>
                        </button>
                      ))}
                    </div>
                  </StepContainer>
                )}

                {step === 4 && (
                  <StepContainer key="step4">
                    <QuestionHeader step="4" title="Approximately what size would you like your tattoo?*" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {["2 x 2 Inches", "4 x 4 Inches", "6 x 6 Inches", "8 x 8 Inches", "Larger than 8 x 8 Inches", "Other"].map(
                        (size) => (
                          <button
                            key={size}
                            onClick={() => handleSelect("size", size)}
                            className={`text-left px-5 py-3 border rounded transition-all duration-300 ${
                              formData.size === size
                                ? "border-gold bg-gold/10 text-gold"
                                : "border-white/10 hover:border-gold/50 text-bone bg-ink-charcoal"
                            }`}
                          >
                            <span className="text-xs md:text-sm font-medium">{size}</span>
                          </button>
                        )
                      )}
                    </div>
                  </StepContainer>
                )}

                {step === 5 && (
                  <StepContainer key="step5">
                    <QuestionHeader
                      step="5"
                      title="Where would you be putting your tattoo?*"
                      subtitle="You can always change this later."
                    />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {["Chest", "Feet", "Shoulder", "Hands", "Legs", "Neck", "Arms", "Back", "Other"].map((placement) => (
                        <button
                          key={placement}
                          onClick={() => handleSelect("placement", placement)}
                          className={`text-left px-4 py-3 border rounded transition-all duration-300 ${
                            formData.placement === placement
                              ? "border-gold bg-gold/10 text-gold"
                              : "border-white/10 hover:border-gold/50 text-bone bg-ink-charcoal"
                          }`}
                        >
                          <span className="text-xs md:text-sm font-medium">{placement}</span>
                        </button>
                      ))}
                    </div>
                  </StepContainer>
                )}

                {step === 6 && (
                  <StepContainer key="step6">
                    <QuestionHeader
                      step="6"
                      title="Studio Location*"
                      subtitle="Are you able to visit our studio in Mysuru?"
                    />
                    <OptionsList
                      options={["Yes, I can visit", "No, I am out of town"]}
                      selected={formData.canVisit}
                      onSelect={(v) => handleSelect("canVisit", v)}
                    />
                  </StepContainer>
                )}

                {step === 7 && (
                  <StepContainer key="step7">
                    <QuestionHeader
                      step="7"
                      title="What's your contact info?*"
                      subtitle="We'll use this to send you consultation details."
                    />
                    <form
                      className="flex flex-col gap-4"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setIsSubmitting(true);
                        try {
                          await fetch("/api/booking", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              name: formData.name,
                              email: formData.email,
                              phone: formData.phone,
                              service: formData.service,
                              colorPreference: formData.colorPreference,
                              styleSlug: formData.style,
                              size: formData.size,
                              placement: formData.placement,
                              canVisit: formData.canVisit,
                            }),
                          });
                        } catch (err) {
                          console.error("Booking error:", err);
                        } finally {
                          setIsSubmitting(false);
                          nextStep();
                        }
                      }}
                    >
                      <div>
                        <label className="text-xs text-bone/60 font-semibold uppercase tracking-wider mb-1 block">Full Name*</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-ink-charcoal border border-white/10 rounded px-4 py-3 text-sm text-bone focus:border-gold outline-none"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-bone/60 font-semibold uppercase tracking-wider mb-1 block">Phone number*</label>
                          <input
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-ink-charcoal border border-white/10 rounded px-4 py-3 text-sm text-bone focus:border-gold outline-none"
                            placeholder="000 000-0000"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-bone/60 font-semibold uppercase tracking-wider mb-1 block">Email*</label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-ink-charcoal border border-white/10 rounded px-4 py-3 text-sm text-bone focus:border-gold outline-none"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button disabled={isSubmitting} type="submit" className="w-full py-4 text-sm font-semibold uppercase">
                          {isSubmitting ? "Submitting..." : "Submit Reservation"}
                        </Button>
                      </div>
                    </form>
                  </StepContainer>
                )}

                {step === 8 && (
                  <StepContainer key="step8">
                    <div className="flex flex-col items-center justify-center text-center py-8">
                      <CheckCircle2 size={56} className="text-emerald-400 mb-4" />
                      <h3 className="font-display text-3xl text-bone font-semibold mb-2">
                        Reservation Request Received!
                      </h3>
                      <p className="text-bone/70 text-sm max-w-md font-light leading-relaxed mb-6">
                        Thank you {formData.name}! We have received your consultation request and will reach out to you shortly.
                      </p>
                      <Button onClick={closeModal} className="px-8 py-3 text-xs uppercase">
                        Close
                      </Button>
                    </div>
                  </StepContainer>
                )}
              </>
            )}

          </AnimatePresence>

          {/* Navigation Controls */}
          {step > 0 && (
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={prevStep}
                className="text-bone/50 hover:text-bone text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                &larr; Back
              </button>
              <span className="text-xs font-mono text-bone/40">
                Step {step} of {isPiercing ? 6 : 7}
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function StepContainer({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full flex flex-col" suppressHydrationWarning>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full flex flex-col"
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
}

function QuestionHeader({ step, title, subtitle }: { step: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h3 className="font-display text-xl md:text-2xl text-bone flex items-start gap-3 leading-tight">
        <span className="flex items-center justify-center w-6 h-6 rounded bg-gold text-ink-black text-xs font-bold shrink-0 mt-0.5">
          {step}
        </span>
        {title}
      </h3>
      {subtitle && <p className="text-bone/60 text-xs md:text-sm mt-2 ml-9 font-light">{subtitle}</p>}
    </div>
  );
}

function OptionsList({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (val: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      {options.map((opt, i) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className={`flex items-center gap-4 w-full text-left p-3.5 md:p-4 border rounded transition-all duration-300 ${
            selected === opt
              ? "border-gold bg-gold/10 text-gold"
              : "border-white/10 hover:border-gold/50 text-bone bg-ink-charcoal"
          }`}
        >
          <span className="flex items-center justify-center w-5 h-5 rounded bg-white/10 text-bone/70 text-xs font-bold">
            {String.fromCharCode(65 + i)}
          </span>
          <span className="text-xs md:text-sm font-medium">{opt}</span>
        </button>
      ))}
    </div>
  );
}
