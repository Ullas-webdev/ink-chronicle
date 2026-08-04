"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Styles placeholder images
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

export function BookingModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  // Form Data
  const [formData, setFormData] = useState({
    service: "",
    colorPreference: "",
    style: "",
    size: "",
    placement: "",
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
      if (value === "Piercings") {
        closeModal();
        router.push("/piercings");
        return;
      }
    }
    // Auto-advance for multiple choice questions
    if (key !== "name" && key !== "email" && key !== "phone") {
      setTimeout(nextStep, 300);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-black/95 backdrop-blur-md p-4 md:p-10"
      >
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 text-bone/60 hover:text-bone transition-colors"
        >
          <X size={32} />
        </button>

        <div className="w-full max-w-3xl relative h-[80vh] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <StepContainer key="step0">
                <h2 className="font-display text-4xl md:text-6xl text-bone mb-6 text-center">
                  Share Your Idea in <br /> Just 30 Seconds!
                </h2>
                <p className="text-bone/70 text-center mb-10 max-w-lg mx-auto">
                  Fill out our quick form to book a <span className="text-gold font-medium">Free Consultation</span> 💡
                  <br />
                  We'll get back to you with the pricing details and session plan to create your dream tattoo. 🎉
                </p>
                <div className="flex justify-center">
                  <Button onClick={nextStep} className="px-10 py-6 text-lg">
                    Get Started <ArrowRight className="ml-2 inline" size={20} />
                  </Button>
                </div>
              </StepContainer>
            )}

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

            {step === 2 && (
              <StepContainer key="step2">
                <QuestionHeader step="2" title="Would you like a Colour Tattoo or a Black & Grey Tattoo*" />
                <OptionsList
                  options={["Colour", "Black & Grey", "Partial Colour"]}
                  selected={formData.colorPreference}
                  onSelect={(v) => handleSelect("colorPreference", v)}
                />
              </StepContainer>
            )}

            {step === 3 && (
              <StepContainer key="step3">
                <QuestionHeader step="3" title="What style are you looking for?*" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-h-[50vh] overflow-y-auto pr-2 pb-4">
                  {STYLES.map((style) => (
                    <button
                      key={style}
                      onClick={() => handleSelect("style", style)}
                      className={`relative aspect-square flex items-end p-4 border transition-all duration-300 ${
                        formData.style === style
                          ? "border-gold bg-gold/10"
                          : "border-bone/20 hover:border-gold/50 bg-ink-charcoal"
                      }`}
                    >
                      <span className="text-bone font-medium text-sm z-10 drop-shadow-md">
                        {style}
                      </span>
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
                        className={`text-left px-6 py-4 border transition-all duration-300 ${
                          formData.size === size
                            ? "border-gold bg-gold/10 text-gold"
                            : "border-bone/20 hover:border-gold/50 text-bone"
                        }`}
                      >
                        {size}
                      </button>
                    )
                  )}
                </div>
              </StepContainer>
            )}

            {step === 5 && (
              <StepContainer key="step5">
                <QuestionHeader step="5" title="Where would you be putting your tattoo?*" subtitle="You can always change this, but we'd love to know what you have planned!" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Chest", "Feet", "Shoulder", "Hands", "Legs", "Neck", "Arms", "Back", "Other"].map((placement) => (
                    <button
                      key={placement}
                      onClick={() => handleSelect("placement", placement)}
                      className={`text-left px-5 py-3 border transition-all duration-300 ${
                        formData.placement === placement
                          ? "border-gold bg-gold/10 text-gold"
                          : "border-bone/20 hover:border-gold/50 text-bone"
                      }`}
                    >
                      {placement}
                    </button>
                  ))}
                </div>
              </StepContainer>
            )}

            {step === 6 && (
              <StepContainer key="step6">
                <QuestionHeader step="6" title="Studio Location*" subtitle="Are you able to visit our Mayfair studio for your session?" />
                <div className="mb-8 p-6 border border-bone/20 bg-ink-charcoal flex flex-col items-center text-center gap-4">
                  <MapPin size={32} className="text-gold" />
                  <a
                    href="https://maps.app.goo.gl/NC6nEVa1nRaqccz48?g_st=aw"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg text-bone hover:text-gold transition-colors underline underline-offset-4"
                  >
                    View Studio Location on Google Maps
                  </a>
                </div>
                <OptionsList
                  options={["Yes, I can visit", "No, I am out of town"]}
                  selected={formData.canVisit}
                  onSelect={(v) => handleSelect("canVisit", v)}
                />
              </StepContainer>
            )}

            {step === 7 && (
              <StepContainer key="step7">
                <QuestionHeader step="7" title="Alright, now that's settled, what's your contact info?*" subtitle="We'll use this to send you information about your idea afterwards." />
                <form
                  className="flex flex-col gap-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    nextStep();
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-bone/70 text-sm">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-transparent border-b border-bone/30 py-3 text-bone outline-none focus:border-gold transition-colors text-lg"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-bone/70 text-sm">Phone number</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-transparent border-b border-bone/30 py-3 text-bone outline-none focus:border-gold transition-colors text-lg"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-bone/70 text-sm">Email*</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-transparent border-b border-bone/30 py-3 text-bone outline-none focus:border-gold transition-colors text-lg"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mt-4 flex gap-4">
                    <Button type="submit" className="px-10">Submit</Button>
                  </div>
                </form>
              </StepContainer>
            )}

            {step === 8 && (
              <StepContainer key="step8">
                <div className="text-center">
                  <h2 className="font-display text-4xl text-gold mb-6">Request Received</h2>
                  <p className="text-bone/70 max-w-md mx-auto mb-10 text-lg">
                    Thank you, {formData.name || "friend"}. We've received your request and will be in touch shortly to finalize the details of your private consultation.
                  </p>
                  <Button onClick={closeModal} variant="outline">Back to site</Button>
                </div>
              </StepContainer>
            )}
          </AnimatePresence>

          {/* Navigation Controls */}
          {step > 0 && step < 8 && (
            <div className="absolute bottom-[-20px] left-0 flex gap-4">
              <button
                onClick={prevStep}
                className="text-bone/50 hover:text-bone text-sm flex items-center gap-1 transition-colors"
              >
                &larr; Back
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function StepContainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full flex flex-col"
    >
      {children}
    </motion.div>
  );
}

function QuestionHeader({ step, title, subtitle }: { step: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h3 className="font-display text-2xl md:text-3xl text-bone flex items-start gap-3 leading-tight">
        <span className="flex items-center justify-center w-6 h-6 rounded bg-gold text-ink-black text-sm font-bold shrink-0 mt-1">
          {step}
        </span>
        {title}
      </h3>
      {subtitle && <p className="text-bone/60 mt-3 ml-9">{subtitle}</p>}
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
    <div className="flex flex-col gap-3 ml-0 md:ml-9">
      {options.map((opt, i) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className={`flex items-center gap-4 w-full text-left p-4 md:p-5 border transition-all duration-300 ${
            selected === opt
              ? "border-gold bg-gold/10 text-gold"
              : "border-bone/20 hover:border-gold/50 text-bone bg-ink-charcoal"
          }`}
        >
          <span className="flex items-center justify-center w-6 h-6 rounded bg-bone/10 text-bone/70 text-xs font-bold">
            {String.fromCharCode(65 + i)}
          </span>
          <span className="text-sm md:text-base">{opt}</span>
        </button>
      ))}
    </div>
  );
}
