"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export function TattooTrainingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Mysuru");
  const [description, setDescription] = useState("");

  const buildWhatsappUrl = () => {
    const text = `Hi Pavan, I am interested in enrolling for the certified Tattoo Training Course at Ink Chronicle Mysuru.\n\n` +
      `• Name: ${name || "Not provided"}\n` +
      `• Phone: ${phone || "Not provided"}\n` +
      `• Location: ${location || "Mysuru"}\n` +
      `• Query / Notes: ${description || "None"}`;
    return `https://wa.me/919916899172?text=${encodeURIComponent(text)}`;
  };

  const buildMailtoUrl = () => {
    const subject = `Tattoo Training Course Inquiry - ${name || "New Applicant"}`;
    const body = `Hi Pavan,\n\n` +
      `I am interested in enrolling for the certified Tattoo Training Course at Ink Chronicle in Mysuru.\n\n` +
      `My Details:\n` +
      `- Name: ${name || "Not provided"}\n` +
      `- Phone: ${phone || "Not provided"}\n` +
      `- Location: ${location || "Mysuru"}\n` +
      `- Query / Description: ${description || "None"}\n\n` +
      `Please send me the batch schedule, course fee structure, and enrollment details.\n\n` +
      `Thank you!`;
    return `mailto:pavanrocker001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsappClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(buildWhatsappUrl(), "_blank", "noopener,noreferrer");
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = buildMailtoUrl();
  };

  return (
    <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-2xl text-left">
      <h3 className="font-display text-2xl font-bold mb-2 text-black">Apply for Tattoo Course</h3>
      <p className="text-xs text-gray-600 mb-6 leading-relaxed">
        Fill out your details below to email the studio directly or inquire instantly on WhatsApp with your entered information.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.open(buildWhatsappUrl(), "_blank", "noopener,noreferrer");
        }}
        className="flex flex-col gap-4"
      >
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-1">Full Name*</label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full bg-gray-50 border border-gray-300 rounded p-3 text-sm text-black focus:outline-none focus:border-black font-medium"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-1">Phone Number*</label>
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full bg-gray-50 border border-gray-300 rounded p-3 text-sm text-black focus:outline-none focus:border-black font-medium"
            />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-1">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Mysuru / Bangalore"
              className="w-full bg-gray-50 border border-gray-300 rounded p-3 text-sm text-black focus:outline-none focus:border-black font-medium"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-1">
            Questions / Description (Optional)
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter any specific queries, prior experience, or preferred batch schedule..."
            className="w-full bg-gray-50 border border-gray-300 rounded p-3 text-sm text-black focus:outline-none focus:border-black font-medium"
          />
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={handleEmailClick}
            className="flex-1 bg-black text-white py-4 px-6 rounded text-xs font-bold uppercase tracking-widest text-center hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
          >
            <Mail size={16} />
            <span>EMAIL OWNER DIRECTLY</span>
          </button>
          <button
            type="button"
            onClick={handleWhatsappClick}
            className="flex-1 bg-[#25D366] text-black py-4 px-6 rounded text-xs font-bold uppercase tracking-widest text-center hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 shadow font-extrabold cursor-pointer"
          >
            <span>INQUIRE ON WHATSAPP</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}
