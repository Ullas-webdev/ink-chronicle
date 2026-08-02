import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const runtime = "nodejs";

export async function GET() {
  try {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    if (!cloudName) {
      return NextResponse.json({ success: false, error: "Cloudinary not configured" }, { status: 500 });
    }

    let imageResults: any[] = [];
    let videoResults: any[] = [];

    // 1. Fetch Video resources from Cloudinary account
    try {
      const vidRes = await cloudinary.api.resources({
        resource_type: "video",
        type: "upload",
        max_results: 500,
      });
      // Exclude Cloudinary default sample videos
      videoResults = (vidRes.resources || []).filter(
        (r: any) => !r.public_id.startsWith("samples/") && !r.public_id.startsWith("sample")
      );
    } catch (e) {
      console.warn("Direct video resources fetch failed", e);
    }

    // 2. Fetch Image resources from Cloudinary account
    try {
      const imgRes = await cloudinary.api.resources({
        resource_type: "image",
        type: "upload",
        max_results: 500,
      });
      // Exclude Cloudinary default sample images
      imageResults = (imgRes.resources || []).filter(
        (r: any) => !r.public_id.startsWith("samples/") && !r.public_id.startsWith("cld-sample") && r.public_id !== "sample"
      );
    } catch (e) {
      console.warn("Direct image resources fetch failed", e);
    }

    // Process image items
    const photos = imageResults.map((item: any, idx: number) => {
      const publicId = item.public_id;
      const format = item.format || "jpg";
      const secureUrl = item.secure_url || `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${publicId}.${format}`;
      
      const filename = publicId.split("/").pop() || `work-${idx + 1}`;
      const cleanTitle = filename.replace(/[-_]/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase());

      let category: "tattoos" | "piercings" | "fineline" | "realism" | "abstract" = "tattoos";
      const lower = filename.toLowerCase();
      if (lower.includes("piercing")) category = "piercings";
      else if (lower.includes("line") || lower.includes("rose") || lower.includes("flower")) category = "fineline";
      else if (lower.includes("realism") || lower.includes("lion") || lower.includes("medusa") || lower.includes("portrait")) category = "realism";
      else if (lower.includes("abstract") || lower.includes("mandala") || lower.includes("geometric")) category = "abstract";

      const aspects: ("aspect-[4/5]" | "aspect-[3/4]" | "aspect-[1/1]" | "aspect-[2/3]")[] = [
        "aspect-[3/4]",
        "aspect-[4/5]",
        "aspect-[2/3]",
        "aspect-[1/1]"
      ];

      return {
        id: publicId,
        title: cleanTitle,
        category,
        image: secureUrl,
        publicId,
        caption: `${cleanTitle} — Official Ink Chronicle Atelier piece.`,
        aspect: aspects[idx % aspects.length],
      };
    });

    // Process video items (All your real reel videos)
    const videos = videoResults.map((item: any, idx: number) => {
      const publicId = item.public_id;
      const format = item.format || "mp4";
      const secureUrl = item.secure_url || `https://res.cloudinary.com/${cloudName}/video/upload/${publicId}.${format}`;
      const filename = publicId.split("/").pop() || `reel-${idx + 1}`;
      const cleanTitle = `Ink Chronicle Studio Reel ${idx + 1}`;
      // Cloudinary video thumbnail poster
      const posterUrl = `https://res.cloudinary.com/${cloudName}/video/upload/so_0,f_jpg/${publicId}.jpg`;

      return {
        id: publicId,
        title: cleanTitle,
        subtitle: `Studio Reel ${idx + 1}`,
        duration: item.duration ? `${Math.floor(item.duration / 60)}:${Math.floor(item.duration % 60).toString().padStart(2, "0")}` : "0:30",
        videoUrl: secureUrl,
        thumbnail: posterUrl,
        caption: `Live studio session highlight: Master craftsmanship by Pavan Mythra at Ink Chronicle.`,
        instagramUrl: "https://www.instagram.com/_ink_chronicle_?igsh=MTBxcHQyYm92YWNuYw==",
      };
    });

    return NextResponse.json({
      success: true,
      countPhotos: photos.length,
      countVideos: videos.length,
      photos,
      videos,
    });
  } catch (err: any) {
    console.error("Cloudinary fetch error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
