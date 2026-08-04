"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, CheckCircle2, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

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

export function Booking() {
  const router = useRouter();
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

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => Math.max(0, s - 1));

  const handleSelect = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (key === "service") {
      if (value.includes("Tattoo Training") || value.includes("Academy")) {
        router.push("/tattoo-training");
        return;
      }
      if (value.includes("Pencil Art") || value.includes("Paintings")) {
        router.push("/pencil-art-and-paintings");
        return;
      }
      // "Piercings" stays in form and moves to step 2
    }
    if (key !== "name" && key !== "email" && key !== "phone") {
      setTimeout(nextStep, 250);
    }
  };

  const isPiercing = formData.service === "Piercings";

  return (
    <section id="booking" className="py-12 md:py-18 bg-ink-charcoal flex items-center">
      <div className="mx-auto max-w-shell px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading & Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <SectionHeading
            eyebrow="Reservation"
            title="Tell us your idea."
            description="Every engagement begins with a seated consultation, not a quote. Fill out our quick questionnaire to share your vision with us."
          />

          {/* Contact Details List */}
          <div className="flex flex-col gap-5 mt-2">
            <a
              href="tel:+919916899172"
              className="flex items-center gap-4 text-bone hover:text-gold transition-colors text-sm md:text-base font-light group"
            >
              <div className="w-10 h-10 rounded-full border hairline flex items-center justify-center bg-ink-black group-hover:border-gold/50 transition-colors shrink-0">
                <Phone size={16} />
              </div>
              <span>+91 9916899172</span>
            </a>

            <a
              href="mailto:pavanrocker001@gmail.com"
              className="flex items-center gap-4 text-bone hover:text-gold transition-colors text-sm md:text-base font-light group"
            >
              <div className="w-10 h-10 rounded-full border hairline flex items-center justify-center bg-ink-black group-hover:border-gold/50 transition-colors shrink-0">
                <Mail size={16} />
              </div>
              <span>pavanrocker001@gmail.com</span>
            </a>

            <a
              href="https://wa.me/919916899172"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-bone hover:text-gold transition-colors text-sm md:text-base font-light group"
            >
              <div className="w-10 h-10 rounded-full border hairline flex items-center justify-center bg-ink-black group-hover:border-gold/50 transition-colors shrink-0">
                <MessageCircle size={16} />
              </div>
              <span>Chat with us on WhatsApp</span>
            </a>
          </div>

          {/* Map Box */}
          <div className="relative w-full h-52 md:h-60 rounded-sm overflow-hidden border hairline bg-ink-black shadow-lg">
            <iframe
              title="Studio Location Map"
              src="https://maps.google.com/maps?q=Kannada+Sahithya+Parishath+Rd,+near+mysuru+coffee+bar,+Vijayanagar+1st+Stage,+Vijayanagar,+Mysuru,+Karnataka+570017&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale contrast-125 opacity-70 hover:opacity-100 transition-opacity duration-500"
              loading="lazy"
            />
            <a
              href="https://maps.app.goo.gl/NC6nEVa1nRaqccz48?g_st=aw"
              target="_blank"
              rel="noreferrer"
              className="absolute top-3 left-3 bg-ink-black/90 hover:bg-ink-black text-bone text-xs px-3 py-2 border hairline flex items-center gap-2 backdrop-blur-md transition-colors"
            >
              Open in Maps <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Right Column: Multi-Step Questionnaire */}
        <div className="lg:col-span-7 bg-white text-black p-6 md:p-10 rounded-lg shadow-2xl relative min-h-[460px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            
            {/* Step 0: Welcome / Intro */}
            {step === 0 && (
              <StepContainer key="step0">
                <h3 className="font-display text-3xl md:text-4xl text-black mb-4 leading-tight font-semibold">
                  Share Your Idea in <br />
                  <span className="text-black">Just 30 Seconds!</span>
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-8 font-light leading-relaxed">
                  Fill out our quick form to book a <strong className="text-black font-semibold">Free Consultation</strong> 
                  <br />
                  We’ll get back to you with the pricing details and session plan to create your dream tattoo or piercing. 
                </p>
                <div>
                  <button
                    onClick={nextStep}
                    className="bg-black text-white px-8 py-4 text-sm uppercase tracking-wider font-semibold rounded hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-md"
                  >
                    Get Started <ArrowRight size={18} />
                  </button>
                </div>
              </StepContainer>
            )}

            {/* Step 1: Service Selection */}
            {step === 1 && (
              <StepContainer key="step1">
                <QuestionHeader step="1" title="I am looking for " />
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
                {/* Piercing Query 1: Piercing Type */}
                {step === 2 && (
                  <StepContainer key="piercing_step2">
                    <QuestionHeader
                      step="2"
                      title="What type of piercing are you looking for?"
                      subtitle="Select your preferred piercing procedure."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[320px] overflow-y-auto pr-1">
                      {PIERCING_TYPES.map((pType) => (
                        <button
                          key={pType}
                          onClick={() => handleSelect("piercingType", pType)}
                          className={`text-left p-3.5 border rounded transition-all duration-300 ${
                            formData.piercingType === pType
                              ? "border-2 border-black bg-black text-white shadow"
                              : "border-gray-200 bg-gray-50 hover:border-black text-black"
                          }`}
                        >
                          <span className="text-xs md:text-sm font-medium">{pType}</span>
                        </button>
                      ))}
                    </div>
                  </StepContainer>
                )}

                {/* Piercing Query 2: Single / Pair / Triple Sides */}
                {step === 3 && (
                  <StepContainer key="piercing_step3">
                    <QuestionHeader
                      step="3"
                      title="How many sides / spots would you like?"
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

                {/* Piercing Query 3: Location / Side */}
                {step === 4 && (
                  <StepContainer key="piercing_step4">
                    <QuestionHeader
                      step="4"
                      title="Where would you like the piercing placed?"
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

                {/* Piercing Query 4: Studio Location Visit */}
                {step === 5 && (
                  <StepContainer key="piercing_step5">
                    <QuestionHeader
                      step="5"
                      title="Studio Location"
                      subtitle="Are you able to visit our studio in Mysuru for your session?"
                    />
                    <div className="mb-6 p-4 border border-gray-200 bg-gray-50 rounded flex flex-col items-start gap-2">
                      <div className="flex items-center gap-2 text-black text-xs uppercase tracking-widest2 font-semibold">
                        <MapPin size={16} /> Location
                      </div>
                      <a
                        href="https://maps.app.goo.gl/NC6nEVa1nRaqccz48?g_st=aw"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs md:text-sm text-black font-medium hover:underline underline-offset-4"
                      >
                        View Studio Location on Google Maps ↗
                      </a>
                    </div>
                    <OptionsList
                      options={["Yes, I can visit", "No, I am out of town"]}
                      selected={formData.canVisit}
                      onSelect={(v) => handleSelect("canVisit", v)}
                    />
                  </StepContainer>
                )}

                {/* Piercing Query 5: Contact Info / Lead Gen Form */}
                {step === 6 && (
                  <StepContainer key="piercing_step6">
                    <QuestionHeader
                      step="6"
                      title="Alright, now that's settled, what's your contact info?"
                      subtitle="We'll use this to confirm your piercing session details."
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
                        <label className="text-xs text-gray-700 font-semibold uppercase tracking-wider mb-1 block">Full Name*</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-transparent border-b border-gray-400 py-2 text-sm text-black focus:border-black outline-none font-medium"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-gray-700 font-semibold uppercase tracking-wider mb-1 block">Phone number*</label>
                          <input
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-transparent border-b border-gray-400 py-2 text-sm text-black focus:border-black outline-none font-medium"
                            placeholder="000 000-0000"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-700 font-semibold uppercase tracking-wider mb-1 block">Email*</label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-transparent border-b border-gray-400 py-2 text-sm text-black focus:border-black outline-none font-medium"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="w-full bg-black text-white py-4 text-sm font-semibold uppercase tracking-wider rounded hover:bg-gray-800 transition-all duration-300 shadow-md"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Reservation"}
                        </button>
                      </div>
                    </form>
                  </StepContainer>
                )}

                {/* Piercing Thank You */}
                {step === 7 && (
                  <StepContainer key="piercing_step7">
                    <div className="flex flex-col items-center justify-center text-center py-8">
                      <CheckCircle2 size={56} className="text-emerald-600 mb-4" />
                      <h3 className="font-display text-3xl text-black font-semibold mb-2">
                        Piercing Request Submitted!
                      </h3>
                      <p className="text-gray-600 text-sm max-w-md font-light leading-relaxed mb-6">
                        Thank you {formData.name}! We have received your piercing request for {formData.piercingType || "Piercings"} ({formData.piercingSides}). Pavan Kumar & studio team will reach out to you shortly.
                      </p>
                      <button
                        onClick={() => {
                          setStep(0);
                          setFormData({
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
                        }}
                        className="bg-black text-white px-8 py-3 text-xs uppercase tracking-wider font-semibold rounded hover:bg-gray-800 transition-all"
                      >
                        Submit Another Request
                      </button>
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
                {/* Step 2: Tattoo Type */}
                {step === 2 && (
                  <StepContainer key="step2">
                    <QuestionHeader step="2" title="What type of tattoo are you looking for?" />
                    <OptionsList
                      options={["Basic Tattoo", "Advanced Tattoo", "Coloured Tattoo"]}
                      selected={formData.colorPreference}
                      onSelect={(v) => handleSelect("colorPreference", v)}
                    />
                  </StepContainer>
                )}

                {/* Step 3: Style Grid */}
                {step === 3 && (
                  <StepContainer key="step3">
                    <QuestionHeader step="3" title="What style are you looking for?" />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[340px] overflow-y-auto pr-1">
                      {STYLES.map((style) => (
                        <button
                          key={style}
                          onClick={() => handleSelect("style", style)}
                          className={`text-left p-3.5 border rounded transition-all duration-300 ${
                            formData.style === style
                              ? "border-2 border-black bg-black text-white shadow"
                              : "border-gray-200 bg-gray-50 hover:border-black text-black"
                          }`}
                        >
                          <span className="text-xs md:text-sm font-medium">{style}</span>
                        </button>
                      ))}
                    </div>
                  </StepContainer>
                )}

                {/* Step 4: Size Selection */}
                {step === 4 && (
                  <StepContainer key="step4">
                    <QuestionHeader step="4" title="Approximately what size would you like your tattoo?" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {["2 x 2 Inches", "4 x 4 Inches", "6 x 6 Inches", "8 x 8 Inches", "Larger than 8 x 8 Inches", "Other"].map(
                        (size) => (
                          <button
                            key={size}
                            onClick={() => handleSelect("size", size)}
                            className={`text-left px-5 py-3 border rounded transition-all duration-300 ${
                              formData.size === size
                                ? "border-2 border-black bg-black text-white shadow"
                                : "border-gray-200 bg-gray-50 hover:border-black text-black"
                            }`}
                          >
                            <span className="text-xs md:text-sm font-medium">{size}</span>
                          </button>
                        )
                      )}
                    </div>
                  </StepContainer>
                )}

                {/* Step 5: Placement Selection */}
                {step === 5 && (
                  <StepContainer key="step5">
                    <QuestionHeader
                      step="5"
                      title="Where would you be putting your tattoo?"
                      subtitle="You can always change this, but we'd love to know what you have planned!"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {["Chest", "Feet", "Shoulder", "Hands", "Legs", "Neck", "Arms", "Back", "Other"].map((placement) => (
                        <button
                          key={placement}
                          onClick={() => handleSelect("placement", placement)}
                          className={`text-left px-4 py-3 border rounded transition-all duration-300 ${
                            formData.placement === placement
                              ? "border-2 border-black bg-black text-white shadow"
                              : "border-gray-200 bg-gray-50 hover:border-black text-black"
                          }`}
                        >
                          <span className="text-xs md:text-sm font-medium">{placement}</span>
                        </button>
                      ))}
                    </div>
                  </StepContainer>
                )}

                {/* Step 6: Location Info */}
                {step === 6 && (
                  <StepContainer key="step6">
                    <QuestionHeader
                      step="6"
                      title="Studio Location"
                      subtitle="Are you able to visit our studio for your session?"
                    />
                    <div className="mb-6 p-4 border border-gray-200 bg-gray-50 rounded flex flex-col items-start gap-2">
                      <div className="flex items-center gap-2 text-black text-xs uppercase tracking-widest2 font-semibold">
                        <MapPin size={16} /> Location
                      </div>
                      <a
                        href="https://maps.app.goo.gl/NC6nEVa1nRaqccz48?g_st=aw"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs md:text-sm text-black font-medium hover:underline underline-offset-4"
                      >
                        View Studio Location on Google Maps ↗
                      </a>
                    </div>
                    <OptionsList
                      options={["Yes, I can visit", "No, I am out of town"]}
                      selected={formData.canVisit}
                      onSelect={(v) => handleSelect("canVisit", v)}
                    />
                  </StepContainer>
                )}

                {/* Step 7: Contact Information */}
                {step === 7 && (
                  <StepContainer key="step7">
                    <QuestionHeader
                      step="7"
                      title="Alright, now that's settled, what's your contact info?"
                      subtitle="We'll use this to send you information about your idea afterwards."
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
                        <label className="text-xs text-gray-700 font-semibold uppercase tracking-wider mb-1 block">Full Name</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-transparent border-b border-gray-400 py-2 text-sm text-black focus:border-black outline-none font-medium"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-gray-700 font-semibold uppercase tracking-wider mb-1 block">Phone number</label>
                          <input
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-transparent border-b border-gray-400 py-2 text-sm text-black focus:border-black outline-none font-medium"
                            placeholder="000 000-0000"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-gray-700 font-semibold uppercase tracking-wider mb-1 block">Email*</label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-transparent border-b border-gray-400 py-2 text-sm text-black focus:border-black outline-none font-medium"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="w-full bg-black text-white py-4 text-sm font-semibold uppercase tracking-wider rounded hover:bg-gray-800 transition-all duration-300 shadow-md"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Reservation"}
                        </button>
                      </div>
                    </form>
                  </StepContainer>
                )}

                {/* Step 8: Thank You */}
                {step === 8 && (
                  <StepContainer key="step8">
                    <div className="flex flex-col items-center justify-center text-center py-8">
                      <CheckCircle2 size={56} className="text-emerald-600 mb-4" />
                      <h3 className="font-display text-3xl text-black font-semibold mb-2">
                        Reservation Request Received!
                      </h3>
                      <p className="text-gray-600 text-sm max-w-md font-light leading-relaxed mb-6">
                        Thank you {formData.name}! We have received your consultation request and will reach out to you within 24 hours to schedule your session.
                      </p>
                      <button
                        onClick={() => {
                          setStep(0);
                          setFormData({
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
                        }}
                        className="bg-black text-white px-8 py-3 text-xs uppercase tracking-wider font-semibold rounded hover:bg-gray-800 transition-all"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </StepContainer>
                )}
              </>
            )}

          </AnimatePresence>

          {/* Navigation Controls */}
          {step > 0 && (
            <div className="mt-8 pt-4 border-t border-gray-200 flex items-center justify-between">
              <button
                onClick={prevStep}
                className="text-gray-500 hover:text-black text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                &larr; Back
              </button>

              <span className="text-xs font-mono text-gray-400">
                Step {step} of {isPiercing ? 6 : 7}
              </span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

function StepContainer({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full" suppressHydrationWarning>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
}

function QuestionHeader({ step, title, subtitle }: { step: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h3 className="font-display text-xl md:text-2xl text-black flex items-start gap-3 leading-tight font-semibold">
        <span className="flex items-center justify-center w-6 h-6 rounded bg-black text-white text-xs font-bold shrink-0 mt-0.5">
          {step}
        </span>
        {title}
      </h3>
      {subtitle && <p className="text-gray-500 text-xs md:text-sm mt-2 ml-9 font-light">{subtitle}</p>}
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
              ? "border-2 border-black bg-black text-white shadow"
              : "border-gray-200 bg-gray-50 hover:border-black text-black"
          }`}
        >
          <span className="flex items-center justify-center w-5 h-5 rounded bg-gray-200 text-black text-xs font-bold">
            {String.fromCharCode(65 + i)}
          </span>
          <span className="text-xs md:text-sm font-medium">{opt}</span>
        </button>
      ))}
    </div>
  );
}
