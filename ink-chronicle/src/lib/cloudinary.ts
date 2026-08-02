const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

/**
 * Builds an optimized Cloudinary delivery URL for a given public ID.
 * Falls back gracefully if no cloud name is configured (local dev without keys).
 */
export function cldUrl(
  publicId: string,
  opts: { width?: number; height?: number; quality?: string } = {}
) {
  const { width = 1200, quality = "auto" } = opts;
  if (!CLOUD_NAME) {
    // Local fallback placeholder so the UI still renders without Cloudinary configured.
    return `/placeholders/${publicId.split("/").pop()}.jpg`;
  }
  const transforms = [
    "f_auto",
    `q_${quality}`,
    `w_${width}`,
    opts.height ? `h_${opts.height},c_fill` : "c_limit",
  ].join(",");
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}
