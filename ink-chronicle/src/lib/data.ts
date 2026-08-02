import type {
  Artist,
  TattooStyle,
  GalleryPiece,
  Testimonial,
  ProcessStep,
} from "@/types";

// Replace `image` paths with your Cloudinary public IDs or /public assets.
// Using next-cloudinary's CldImage, pass the publicId directly.

export const artists: Artist[] = [
  {
    slug: "kenji-arata",
    name: "Kenji Arata",
    title: "Founder & Master Artist",
    signatureStyle: "Japanese Irezumi",
    bio: "Trained for a decade under a Yokohama tebori master before founding Ink Chronicle. Kenji treats each piece as a lifelong garment — composed, not just placed.",
    yearsActive: 17,
    image: "artists/kenji-arata",
    portfolio: ["artists/kenji-1", "artists/kenji-2", "artists/kenji-3", "artists/kenji-4"],
  },
  {
    slug: "elena-voss",
    name: "Elena Voss",
    title: "Lead Artist, Fine Line & Botanical",
    signatureStyle: "Fine Line Botanical",
    bio: "Formerly a botanical illustrator in Geneva. Elena's linework carries the discipline of scientific drawing into skin — exact, restrained, alive.",
    yearsActive: 11,
    image: "artists/elena-voss",
    portfolio: ["artists/elena-1", "artists/elena-2", "artists/elena-3", "artists/elena-4"],
  },
  {
    slug: "marcus-idris",
    name: "Marcus Idris",
    title: "Artist, Blackwork & Geometry",
    signatureStyle: "Architectural Blackwork",
    bio: "A former structural draftsman. Marcus builds tattoos the way he once built blueprints — in grids, in vanishing points, in weight and balance.",
    yearsActive: 9,
    image: "artists/marcus-idris",
    portfolio: ["artists/marcus-1", "artists/marcus-2", "artists/marcus-3", "artists/marcus-4"],
  },
  {
    slug: "sofia-marin",
    name: "Sofia Marín",
    title: "Artist, Realism & Portraiture",
    signatureStyle: "Monochrome Realism",
    bio: "Sofia's background in oil portraiture informs every shadow she lays down. Her work is quiet, cinematic, and built to age like an heirloom photograph.",
    yearsActive: 8,
    image: "artists/sofia-marin",
    portfolio: ["artists/sofia-1", "artists/sofia-2", "artists/sofia-3", "artists/sofia-4"],
  },
];

export const tattooStyles: TattooStyle[] = [
  {
    slug: "japanese-irezumi",
    name: "Japanese Irezumi",
    description: "Full-body narrative work rooted in centuries of woodblock tradition — koi, dragons, wind and water rendered with ceremonial patience.",
    image: "styles/irezumi",
  },
  {
    slug: "fine-line",
    name: "Fine Line",
    description: "Precise, single-needle linework. Understated by design, engineered to remain legible for decades.",
    image: "styles/fine-line",
  },
  {
    slug: "blackwork",
    name: "Blackwork & Geometry",
    description: "Bold saturation and architectural structure — mandalas, sacred geometry, and dense ornamental fields.",
    image: "styles/blackwork",
  },
  {
    slug: "realism",
    name: "Monochrome Realism",
    description: "Portraiture and photographic detail in grayscale — light and shadow used the way a lens would.",
    image: "styles/realism",
  },
  {
    slug: "minimalist",
    name: "Minimalist",
    description: "Reduced to a single confident gesture. The most difficult style to execute — nowhere to hide.",
    image: "styles/minimalist",
  },
  {
    slug: "neo-traditional",
    name: "Neo-Traditional",
    description: "Bold outlines and a disciplined palette, reinterpreting classic Americana with modern restraint.",
    image: "styles/neo-traditional",
  },
];

export const galleryPieces: GalleryPiece[] = [
  { id: "g1", image: "gallery/g1", artistSlug: "kenji-arata", styleSlug: "japanese-irezumi", height: "tall", caption: "Koi ascending, full back panel" },
  { id: "g2", image: "gallery/g2", artistSlug: "elena-voss", styleSlug: "fine-line", height: "short", caption: "Botanical study, forearm" },
  { id: "g3", image: "gallery/g3", artistSlug: "marcus-idris", styleSlug: "blackwork", height: "medium", caption: "Sacred geometry, sternum" },
  { id: "g4", image: "gallery/g4", artistSlug: "sofia-marin", styleSlug: "realism", height: "tall", caption: "Portrait study, upper arm" },
  { id: "g5", image: "gallery/g5", artistSlug: "elena-voss", styleSlug: "minimalist", height: "short", caption: "Single line, collarbone" },
  { id: "g6", image: "gallery/g6", artistSlug: "kenji-arata", styleSlug: "japanese-irezumi", height: "medium", caption: "Wind bar and wave, ribs" },
  { id: "g7", image: "gallery/g7", artistSlug: "marcus-idris", styleSlug: "neo-traditional", height: "tall", caption: "Panther study, thigh" },
  { id: "g8", image: "gallery/g8", artistSlug: "sofia-marin", styleSlug: "realism", height: "short", caption: "Study in grayscale, calf" },
  { id: "g9", image: "gallery/g9", artistSlug: "elena-voss", styleSlug: "fine-line", height: "medium", caption: "Botanical sleeve, detail" },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aiko Tanaka",
    location: "Singapore",
    quote: "Every consultation felt like a fitting at a bespoke tailor, not a tattoo appointment. The result will outlive the trend cycle by decades.",
    rating: 5,
  },
  {
    id: "t2",
    name: "William Ashford",
    location: "London",
    quote: "Kenji spent forty minutes only discussing placement before a single line was drawn. That patience is on the skin now, permanently, and it shows.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Noor Al-Sayed",
    location: "Dubai",
    quote: "Elena's linework is the most disciplined I've seen. Three years on, it hasn't blurred a millimetre.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Diego Ferreira",
    location: "São Paulo",
    quote: "This is the only studio I've been to that treats restraint as a form of luxury. Nothing is oversold, nothing is rushed.",
    rating: 5,
  },
];

export const processSteps: ProcessStep[] = [
  {
    index: "I",
    title: "Private Consultation",
    description: "A seated, one-on-one session with your artist — in studio or over a private video call — to discuss placement, narrative, and longevity.",
  },
  {
    index: "II",
    title: "Bespoke Design",
    description: "Your concept is drafted, refined, and reviewed with you in person. Nothing reaches skin without your final approval.",
  },
  {
    index: "III",
    title: "The Sitting",
    description: "Conducted in a private suite, at your pace, with hospital-grade sterilisation and no time pressure.",
  },
  {
    index: "IV",
    title: "Aftercare & Archive",
    description: "A written aftercare protocol, a follow-up check at four weeks, and your piece archived in your private client dossier.",
  },
];
