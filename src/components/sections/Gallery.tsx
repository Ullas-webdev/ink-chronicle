"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Instagram } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface GalleryVideo {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  videoUrl: string;
  thumbnail: string;
  caption: string;
  instagramUrl: string;
}

const CLOUD_NAME = "g2ot4amf";

// The user's 9 clean studio reel videos in Cloudinary
const CLEAN_CLOUDINARY_REELS: GalleryVideo[] = [
  "VID_20260802_233249_771_f83brc",
  "VID_20260802_233252_210_qtetou",
  "VID_20260802_233237_000_u4zrpt",
  "VID_20260802_233247_321_zitwg6",
  "VID_20260802_233240_135_h3ktg1",
  "VID_20260802_233234_430_e8vtds",
  "VID_20260802_233244_031_xzmiek",
  "VID_20260802_233228_527_tm7svk",
  "VID_20260802_233230_834_sldmdv",
].map((publicId, idx) => ({
  id: publicId,
  title: `Ink Chronicle Studio Reel #${idx + 1}`,
  subtitle: `Reel Transformation #${idx + 1}`,
  duration: "0:30",
  videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${publicId}.mp4`,
  thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_0,f_jpg/${publicId}.jpg`,
  caption: `Authentic studio session transformation by Pavan Mythra at Ink Chronicle Studio.`,
  instagramUrl: "https://www.instagram.com/_ink_chronicle_?igsh=MTBxcHQyYm92YWNuYw==",
}));

export function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);
  const [videos, setVideos] = useState<GalleryVideo[]>(CLEAN_CLOUDINARY_REELS);
  const [isCloudinaryLoaded, setIsCloudinaryLoaded] = useState(true);

  useEffect(() => {
    async function fetchCloudinaryFiles() {
      try {
        const res = await fetch("/api/gallery");
        const contentType = res.headers.get("content-type");
        if (res.ok && contentType && contentType.includes("application/json")) {
          const data = await res.json();
          if (data && data.success && data.videos && data.videos.length > 0) {
            setVideos(data.videos);
            setIsCloudinaryLoaded(true);
          }
        }
      } catch (err) {
        console.warn("Cloudinary fetch error:", err);
      }
    }

    fetchCloudinaryFiles();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
      }
    };
    if (selectedVideo) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedVideo]);

  return (
    <section id="gallery" className="py-12 md:py-18 bg-ink-charcoal text-bone">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHeading
          eyebrow="Studio Video Archive"
          title="Curated Reels & Craftsmanship"
          description="Watch authentic video transformations directly from our Cloudinary Cloud Media and official Instagram stream (@_ink_chronicle_)."
        />

        {/* Top Action Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-widest text-bone flex items-center gap-2">
              <span>Studio Reels & Videos ({videos.length})</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {isCloudinaryLoaded && (
              <span className="text-[11px] uppercase tracking-widest text-gold bg-gold/10 border border-gold/30 px-3 py-1.5 rounded-full flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Cloudinary ({videos.length})
              </span>
            )}
            <a
              href="https://www.instagram.com/_ink_chronicle_?igsh=MTBxcHQyYm92YWNuYw=="
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold hover:text-white transition-colors group"
            >
              <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              <span>Follow @_ink_chronicle_ ↗</span>
            </a>
          </div>
        </div>

        {/* REELS & VIDEOS GALLERY GRID */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="bg-ink-black border hairline rounded-sm overflow-hidden flex flex-col group"
            >
              {/* Video Thumbnail Box */}
              <div
                onClick={() => setSelectedVideo(video)}
                className="relative aspect-video w-full overflow-hidden cursor-pointer bg-black/90"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-gold text-ink-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="ml-1 fill-ink-black" />
                  </div>
                </div>

                <div className="absolute top-3 right-3 bg-black/80 text-bone text-xs font-mono px-2.5 py-1 rounded border border-white/20">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">
                    {video.subtitle}
                  </span>
                  <h3 className="font-display text-lg text-bone font-medium mt-1 mb-2 group-hover:text-gold transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-bone/70 font-light leading-relaxed">
                    {video.caption}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="text-xs uppercase tracking-wider font-semibold text-white hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <Play size={14} /> Play Video
                  </button>

                  <a
                    href={video.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-bone/50 hover:text-gold transition-colors flex items-center gap-1.5"
                  >
                    <Instagram size={14} /> Instagram ↗
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* VIDEO LIGHTBOX MODAL WITH PROMINENT CLOSE BUTTONS */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            {/* Top-Right Fixed Floating Screen Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 z-[110] bg-white text-black hover:bg-gold font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-2 cursor-pointer border border-white/40"
              aria-label="Close video modal"
            >
              <X size={18} />
              <span>Close Video</span>
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-ink-black border hairline rounded-lg overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="relative aspect-video w-full bg-black">
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-ink-charcoal text-bone flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">
                    {selectedVideo.subtitle}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-xs text-bone/70 font-light mt-1 max-w-lg">
                    {selectedVideo.caption}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={selectedVideo.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gold text-ink-black px-4 py-3 rounded text-xs font-bold uppercase tracking-wider hover:bg-gold-soft transition-colors flex items-center gap-2"
                  >
                    <Instagram size={16} /> Instagram ↗
                  </a>

                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded text-xs font-bold uppercase tracking-wider border border-white/20 transition-colors flex items-center gap-2"
                  >
                    <X size={16} /> Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
