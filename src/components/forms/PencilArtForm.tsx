"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

export function PencilArtForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [medium, setMedium] = useState("Pencil Sketch / Portrait");
  const [description, setDescription] = useState("");

  const buildWhatsappUrl = () => {
    const text = `Hi Pavan, I would like to order a custom Pencil Art / Painting commission from Ink Chronicle Studio.\n\n` +
      `• Name: ${name || "Not provided"}\n` +
      `• Phone: ${phone || "Not provided"}\n` +
      `• Artwork Medium: ${medium}\n` +
      `• Artwork Description & Size: ${description || "Not provided"}`;
    return `https://wa.me/919916899172?text=${encodeURIComponent(text)}`;
  };

  const buildMailtoUrl = () => {
    const subject = `Custom Art Commission Order - ${name || "Client"}`;
    const body = `Hi Pavan,\n\n` +
      `I would like to order a custom artwork commission (Pencil Art / Painting) from Ink Chronicle Studio.\n\n` +
      `Order Details:\n` +
      `- Name: ${name || "Not provided"}\n` +
      `- Phone: ${phone || "Not provided"}\n` +
      `- Artwork Medium: ${medium}\n` +
      `- Artwork Description & Size: ${description || "Not provided"}\n\n` +
      `Please contact me with exact pricing, timeline, and delivery details.\n\n` +
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
      <h3 className="font-display text-2xl font-bold mb-2 text-black">Commission Art Order Form</h3>
      <p className="text-xs text-gray-600 mb-6 leading-relaxed">
        Select your artwork type, size, and description. Email the studio directly or order instantly on WhatsApp with your entered details.
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
            <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-1">Artwork Medium</label>
            <select
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded p-3 text-sm text-black focus:outline-none focus:border-black font-medium"
            >
              <option value="Pencil Sketch / Portrait">Pencil Sketch / Portrait</option>
              <option value="Charcoal Drawing">Charcoal Drawing</option>
              <option value="Oil Painting on Canvas">Oil Painting on Canvas</option>
              <option value="Archival Flash Art Print">Archival Flash Art Print</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block mb-1">
            Artwork Description & Preferred Size*
          </label>
          <textarea
            required
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your subject (e.g. Portrait of 2 persons, A3 size 12x16 inches, high detail graphite pencil)..."
            className="w-full bg-gray-50 border border-gray-300 rounded p-3 text-sm text-black focus:outline-none focus:border-black font-medium"
          />
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={handleEmailClick}
            className="flex-1 bg-black text-white py-4 px-6 rounded text-xs font-bold uppercase tracking-widest text-center hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow font-bold"
          >
            <Mail size={16} />
            <span>EMAIL OWNER DIRECTLY</span>
          </button>
          <button
            type="button"
            onClick={handleWhatsappClick}
            className="flex-1 bg-[#25D366] text-black py-4 px-6 rounded text-xs font-bold uppercase tracking-widest text-center hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 shadow font-bold cursor-pointer"
          >
            <span>INQUIRE ON WHATSAPP</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}
