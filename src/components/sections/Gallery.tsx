"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  X,
  Instagram,
  Camera,
  Film,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* ═══════════════════════════════════════════
   Type Definitions
   ═══════════════════════════════════════════ */

interface GalleryPhoto {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
}

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

/* ═══════════════════════════════════════════
   Cloudinary Config & Fallback Data
   ═══════════════════════════════════════════ */

const CLOUD_NAME = "g2ot4amf";
const INSTAGRAM_URL =
  "https://www.instagram.com/_ink_chronicle_?igsh=MTBxcHQyYm92YWNuYw==";

// Fallback photo IDs (newly uploaded Aug 4)
const FALLBACK_PHOTO_IDS = [
  "IMG_2244.JPG_ew8zbp",
  "IMG_1748.JPG_cais2f",
  "IMG_1699.JPG_suvzvw",
  "IMG_1594.JPG_xvegzz",
  "IMG_7631.JPG_yezcdt",
  "IMG_1302.JPG_g9inhw",
  "IMG_1517.JPG_dr9oeh",
  "IMG_7668.JPG_o1x88t",
  "IMG_2268.JPG_idz5z1",
  "IMG_2277.JPG_zynmb8",
  "IMG_5204.JPG_td07bb",
  "IMG_2805.JPG_esio1l",
  "IMG_2562.JPG_y6idwp",
  "IMG_6966.JPG_hadfl6",
  "IMG_2285.JPG_aij2ps",
  "IMG_5226.JPG_ye1kdg",
  "IMG_4713.JPG_erowdv",
  "IMG_4705.JPG_m6011a",
];

const FALLBACK_PHOTOS: GalleryPhoto[] = FALLBACK_PHOTO_IDS.map((id, idx) => ({
  id,
  title: `Studio Work ${idx + 1}`,
  image: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_800/${id}`,
  width: 4284,
  height: 5712,
}));

// Fallback video IDs (11 new high-res + 9 original reels)
const FALLBACK_VIDEO_IDS_NEW = [
  "IMG_0252_rrw2tf",
  "IMG_2632_pzgpxg",
  "IMG_7594_dutrax",
  "IMG_2003_zls39q",
  "IMG_1623_kwidjk",
  "IMG_1917_ime3kk",
  "IMG_1722_fhpzex",
  "IMG_6552_tifobn",
  "IMG_1698_o9qcc0",
  "IMG_7411_fx8ago",
  "IMG_2246_cqc9im",
];

const FALLBACK_VIDEO_IDS_OLD = [
  "VID_20260802_233249_771_f83brc",
  "VID_20260802_233252_210_qtetou",
  "VID_20260802_233237_000_u4zrpt",
  "VID_20260802_233247_321_zitwg6",
  "VID_20260802_233240_135_h3ktg1",
  "VID_20260802_233234_430_e8vtds",
  "VID_20260802_233244_031_xzmiek",
  "VID_20260802_233228_527_tm7svk",
  "VID_20260802_233230_834_sldmdv",
];

const ALL_VIDEO_IDS = [...FALLBACK_VIDEO_IDS_NEW, ...FALLBACK_VIDEO_IDS_OLD];

const FALLBACK_VIDEOS: GalleryVideo[] = ALL_VIDEO_IDS.map((id, idx) => {
  const isNew = idx < FALLBACK_VIDEO_IDS_NEW.length;
  const format = id.startsWith("VID_") ? "mp4" : (isNew && !id.includes("2246") ? "mov" : "mp4");
  return {
    id,
    title: `Studio Reel #${idx + 1}`,
    subtitle: isNew ? "HD Studio Session" : "Studio Reel",
    duration: "0:30",
    videoUrl: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${id}.${format}`,
    thumbnail: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_1,f_jpg,w_600,q_auto/${id}.jpg`,
    caption: `Authentic studio session by Pavan Kumar at Ink Chronicle Studio, Mysuru.`,
    instagramUrl: INSTAGRAM_URL,
  };
});

/* ═══════════════════════════════════════════
   Gallery Component
   ═══════════════════════════════════════════ */

export function Gallery() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [photos, setPhotos] = useState<GalleryPhoto[]>(FALLBACK_PHOTOS);
  const [videos, setVideos] = useState<GalleryVideo[]>(FALLBACK_VIDEOS);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);
  const [liveCount, setLiveCount] = useState({ photos: FALLBACK_PHOTOS.length, videos: FALLBACK_VIDEOS.length });

  // Fetch live data from Cloudinary API
  useEffect(() => {
    async function fetchCloudinaryFiles() {
      try {
        const res = await fetch("/api/gallery");
        const contentType = res.headers.get("content-type");
        if (res.ok && contentType && contentType.includes("application/json")) {
          const data = await res.json();
          if (data && data.success) {
            if (data.photos && data.photos.length > 0) {
              const livePhotos: GalleryPhoto[] = data.photos.map((p: any) => ({
                id: p.id || p.publicId,
                title: p.title || "Studio Work",
                image: p.image,
                width: p.width || 4284,
                height: p.height || 5712,
              }));
              setPhotos(livePhotos);
            }
            if (data.videos && data.videos.length > 0) {
              setVideos(data.videos);
            }
            setLiveCount({
              photos: data.countPhotos || data.photos?.length || 0,
              videos: data.countVideos || data.videos?.length || 0,
            });
          }
        }
      } catch (err) {
        console.warn("Cloudinary fetch error:", err);
      }
    }
    fetchCloudinaryFiles();
  }, []);

  // Keyboard navigation for lightbox
  const navigatePhoto = useCallback(
    (dir: -1 | 1) => {
      if (selectedPhoto === null) return;
      const next = selectedPhoto + dir;
      if (next >= 0 && next < photos.length) setSelectedPhoto(next);
    },
    [selectedPhoto, photos.length]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPhoto(null);
        setSelectedVideo(null);
      }
      if (selectedPhoto !== null) {
        if (e.key === "ArrowLeft") navigatePhoto(-1);
        if (e.key === "ArrowRight") navigatePhoto(1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, selectedVideo, navigatePhoto]);

  const tabs = [
    { key: "photos" as const, label: "Photos", icon: Camera, count: photos.length },
    { key: "videos" as const, label: "Videos", icon: Film, count: videos.length },
  ];

  return (
    <section id="gallery" className="py-12 md:py-18 bg-ink-charcoal text-bone">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHeading
          eyebrow="Studio Archive"
          title="Craftsmanship Gallery."
          description="Browse our curated portfolio of photos and studio session videos — sourced live from our Cloudinary media cloud."
        />

        {/* ── Tab Bar ── */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-0">
          <div className="flex items-center gap-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex items-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-widest transition-colors duration-300 border-b-2 ${
                    isActive
                      ? "text-bone border-white"
                      : "text-bone/40 border-transparent hover:text-bone/70"
                  }`}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                  <span
                    className={`ml-1 text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isActive
                        ? "bg-white/10 text-bone"
                        : "bg-white/[0.04] text-bone/30"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] uppercase tracking-widest text-bone/40 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Cloudinary ({liveCount.photos + liveCount.videos})
            </span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-bone/50 hover:text-white transition-colors group"
            >
              <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">@_ink_chronicle_ ↗</span>
            </a>
          </div>
        </div>

        {/* ══════════ PHOTOS TAB ══════════ */}
        <AnimatePresence mode="wait">
          {activeTab === "photos" && (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="mt-10"
            >
              {/* Masonry-style Grid */}
              <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {photos.map((photo, idx) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                    className="relative break-inside-avoid rounded-sm overflow-hidden group cursor-pointer border border-white/[0.06] hover:border-white/20 transition-all duration-500"
                    onClick={() => setSelectedPhoto(idx)}
                  >
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      width={400}
                      height={Math.round(400 * (photo.height / photo.width))}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                          <Maximize2 size={18} className="text-white" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                          View
                        </span>
                      </div>
                    </div>

                    {/* Index badge */}
                    <div className="absolute top-2.5 left-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[9px] font-mono font-bold bg-black/70 backdrop-blur-sm text-white/80 px-2 py-1 rounded border border-white/10">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ══════════ VIDEOS TAB ══════════ */}
          {activeTab === "videos" && (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="mt-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, idx) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                    className="bg-ink-black border border-white/[0.09] rounded-sm overflow-hidden flex flex-col group hover:border-white/20 transition-all duration-500"
                  >
                    {/* Video Thumbnail */}
                    <div
                      onClick={() => setSelectedVideo(video)}
                      className="relative aspect-[9/16] w-full overflow-hidden cursor-pointer bg-black"
                    >
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                          <Play size={22} className="ml-0.5 text-white fill-white" />
                        </div>
                      </div>

                      {/* Duration badge */}
                      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-bone text-[10px] font-mono font-bold px-2.5 py-1 rounded border border-white/10">
                        {video.duration}
                      </div>

                      {/* Bottom Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-bone/60">
                          {video.subtitle}
                        </span>
                        <h3 className="font-display text-sm text-white font-medium mt-0.5">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ══════════ PHOTO LIGHTBOX ══════════ */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
          >
            {/* Close */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 z-[110] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/15 transition-all"
              aria-label="Close gallery"
            >
              <X size={20} />
            </button>

            {/* Image counter */}
            <div className="absolute top-6 left-6 z-[110] text-bone/50 text-xs font-mono">
              {String(selectedPhoto + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
            </div>

            {/* Previous */}
            {selectedPhoto > 0 && (
              <button
                onClick={() => navigatePhoto(-1)}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/15 transition-all"
                aria-label="Previous photo"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Next */}
            {selectedPhoto < photos.length - 1 && (
              <button
                onClick={() => navigatePhoto(1)}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/15 transition-all"
                aria-label="Next photo"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Main Image */}
            <motion.div
              key={selectedPhoto}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[85vh] w-full px-4"
              onClick={() => setSelectedPhoto(null)}
            >
              {photos[selectedPhoto] && (
                <Image
                  src={photos[selectedPhoto].image}
                  alt={photos[selectedPhoto].title}
                  width={photos[selectedPhoto].width}
                  height={photos[selectedPhoto].height}
                  className="w-full h-full max-h-[85vh] object-contain rounded-sm"
                  sizes="90vw"
                  priority
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════ VIDEO LIGHTBOX ══════════ */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 z-[110] bg-white text-black hover:bg-bone font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-2 cursor-pointer border border-white/40"
              aria-label="Close video modal"
            >
              <X size={18} />
              <span>Close</span>
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-ink-black border border-white/[0.12] rounded-lg overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="relative aspect-[9/16] w-full bg-black">
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-5 bg-ink-charcoal text-bone flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-bone/40">
                    {selectedVideo.subtitle}
                  </span>
                  <h3 className="font-display text-base font-semibold text-white truncate">
                    {selectedVideo.title}
                  </h3>
                </div>

                <a
                  href={selectedVideo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 bg-white/10 hover:bg-white/20 text-white px-3 py-2.5 rounded text-xs font-bold uppercase tracking-wider border border-white/15 transition-colors flex items-center gap-1.5"
                >
                  <Instagram size={14} /> ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
