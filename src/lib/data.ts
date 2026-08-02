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
    slug: "pavan-mythra",
    name: "PAVAN MYTHRA",
    title: "Owner & Lead Artist",
    signatureStyle: "Tattoo, Piercing, Training, Aesthetic",
    bio: "Certified Tattoo Artist. Certified Aesthetician. Celebrity Tattoo Artist. Best piercing artist. Establishing his craft since 2017.",
    yearsActive: 8,
    image: "/pavan-mythra.jpg",
    portfolio: [],
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
    index: "01",
    slug: "private-consultation",
    title: "Private Consultation",
    description: "A seated, one-on-one session with your artist — in studio or over a private video call — to discuss placement, narrative, and longevity.",
    fullDescription: [
      "Every engagement begins with an unhurried, seated conversation.",
      "We discuss design scale, body placement, skin tone harmony, and longevity over decades.",
      "You can share your reference photos, personal ideas, or simply explore ideas together with the artist."
    ]
  },
  {
    index: "02",
    slug: "bespoke-design",
    title: "Bespoke Design",
    description: "Your concept is drafted, refined, and reviewed with you in person. Nothing reaches skin without your final approval.",
    fullDescription: [
      "We prepare tailored stencils and digital renders tailored precisely to your body contours.",
      "Every linework density and shading gradient is calibrated specifically for your chosen placement.",
      "Nothing reaches skin without your 100% enthusiastic approval."
    ]
  },
  {
    index: "03",
    slug: "the-sitting",
    title: "The Sitting",
    description: "Conducted in a private suite, at your pace, with hospital-grade sterilisation and no time pressure.",
    fullDescription: [
      "Conducted in a clean, private, sterile suite designed for comfort and privacy.",
      "We use single-use hospital-grade equipment and organic, skin-safe inks.",
      "The session moves at your pace, with breaks whenever you need them."
    ]
  },
  {
    index: "04",
    slug: "aftercare-and-archive",
    title: "Aftercare & Archive",
    description: "A written aftercare protocol, a follow-up check at four weeks, and your piece archived in your private client dossier.",
    fullDescription: [
      "You receive a custom aftercare kit with medical-grade protective film and natural soothing balms.",
      "We schedule a complimentary touch-up check at 4 weeks to ensure perfect healing.",
      "Your artwork details and custom ink mix are permanently archived in your client file."
    ]
  },
];
