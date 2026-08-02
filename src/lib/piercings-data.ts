export interface PiercingItem {
  id: string;
  slug: string;
  name: string;
  price: string;
  type: "ear" | "facial" | "body" | "combo" | "service";
  diagramType: string;
  duration: string;
  healingTime: string;
  painLevel: string;
  shortDescription: string;
  inDepthDescription: string[];
  careTips: string[];
}

export const PIERCINGS_DATA: PiercingItem[] = [
  {
    id: "1",
    slug: "ear-lobe-piercing",
    name: "EAR LOBE PIERCING",
    price: "Rs. 2,800",
    type: "ear",
    diagramType: "ear-lobe",
    duration: "15 – 20 Minutes",
    healingTime: "6 – 8 Weeks",
    painLevel: "Low (2/10)",
    shortDescription: "The classic ear lobe piercing performed with single-use sterile needles.",
    inDepthDescription: [
      "The ear lobe piercing is the most timeless and versatile piercing in body art history. Performed exclusively with sterile, single-use hollow needles rather than harmful piercing guns.",
      "Our lead piercer ensures perfectly symmetrical placement tailored to your ear geometry. Ideal for your very first piercing or adding to a curated ear stack."
    ],
    careTips: [
      "Clean twice daily with saline spray or antibacterial wash.",
      "Avoid sleeping directly on the fresh piercing for the first 3 weeks.",
      "Do not rotate or twist the jewelry while healing."
    ]
  },
  {
    id: "2",
    slug: "pair-of-ear-lobe-piercings",
    name: "PAIR OF EAR LOBE PIERCINGS",
    price: "Rs. 4,600",
    type: "ear",
    diagramType: "ear-lobe-pair",
    duration: "25 – 30 Minutes",
    healingTime: "6 – 8 Weeks",
    painLevel: "Low (2/10)",
    shortDescription: "Symmetrical double ear lobe piercings for both ears in a single sterile session.",
    inDepthDescription: [
      "Get both left and right ear lobes pierced in one session with exact anatomical alignment.",
      "We measure and mark both lobes carefully before piercing to guarantee balance and comfort with your future earrings."
    ],
    careTips: [
      "Clean both ears with gentle saline solution twice a day.",
      "Use a travel pillow to keep pressure off your ears while sleeping."
    ]
  },
  {
    id: "3",
    slug: "helix-piercing",
    name: "HELIX PIERCING",
    price: "Rs. 2,800",
    type: "ear",
    diagramType: "ear-helix",
    duration: "20 – 30 Minutes",
    healingTime: "3 – 6 Months",
    painLevel: "Mild (4/10)",
    shortDescription: "Placed along the upper outer cartilage rim of the ear for a sleek aesthetic.",
    inDepthDescription: [
      "The helix piercing sits on the upper outer cartilage rim of your ear. It offers endless styling options ranging from subtle studs to fitted hoops once fully healed.",
      "Because cartilage has less blood flow than the lobe, healing requires patience and proper touchless care."
    ],
    careTips: [
      "Keep hair tied back to avoid snagging on the post.",
      "Avoid wearing over-ear headphones while healing."
    ]
  },
  {
    id: "4",
    slug: "2x-helix-piercing",
    name: "2X HELIX PIERCING",
    price: "Rs. 5,600",
    type: "ear",
    diagramType: "ear-helix-2x",
    duration: "30 – 40 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Mild (4/10)",
    shortDescription: "Double helix cartilage piercings placed closely together for a stacked rim look.",
    inDepthDescription: [
      "Two side-by-side cartilage piercings along the upper rim. Creates a stunning parallel or stacked jewelry arrangement.",
      "Both piercings are angled precisely so your chosen studs or hoops align seamlessly."
    ],
    careTips: [
      "Rinse gently under warm water during showers.",
      "Do not touch or pick at scabs around cartilage."
    ]
  },
  {
    id: "5",
    slug: "3x-helix-piercing",
    name: "3X HELIX PIERCING",
    price: "Rs. 8,400",
    type: "ear",
    diagramType: "ear-helix-3x",
    duration: "40 – 50 Minutes",
    healingTime: "6 – 9 Months",
    painLevel: "Moderate (5/10)",
    shortDescription: "Triple helix cartilage piercing cascade along the outer ear curve.",
    inDepthDescription: [
      "A dramatic triple cartilage project along the upper helix. Crafted for clients wanting a bold, curated ear curation in a single sterile appointment.",
      "We space each piercing with millimeter precision to allow comfortable post-healing jewelry customization."
    ],
    careTips: [
      "Avoid sleeping on the pierced ear completely.",
      "Use our Flaunt Your Ink aftercare gel for optimal recovery."
    ]
  },
  {
    id: "6",
    slug: "forward-helix-piercing",
    name: "FORWARD HELIX PIERCING",
    price: "Rs. 2,800",
    type: "ear",
    diagramType: "ear-forward-helix",
    duration: "20 – 30 Minutes",
    healingTime: "3 – 6 Months",
    painLevel: "Mild (4/10)",
    shortDescription: "Placed on the front upper cartilage rim directly above the tragus.",
    inDepthDescription: [
      "The forward helix is located on the front upper curve of your cartilage, facing forward toward your face.",
      "It pairs beautifully with tragus and lobe piercings to create a balanced front-to-back ear curation."
    ],
    careTips: [
      "Be careful when pulling shirts over your head.",
      "Clean gently using sterile saline wipes."
    ]
  },
  {
    id: "7",
    slug: "2x-forward-helix-piercing",
    name: "2X FORWARD HELIX PIERCING",
    price: "Rs. 5,600",
    type: "ear",
    diagramType: "ear-forward-helix-2x",
    duration: "30 – 40 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Moderate (5/10)",
    shortDescription: "Double forward helix studs stacked along the front cartilage ridge.",
    inDepthDescription: [
      "Two stacked forward helix piercings following the natural curve of your front ear ridge. Gives an elegant gem-studded accent to your profile.",
      "Pierced with titanium labret flatbacks for maximum comfort."
    ],
    careTips: [
      "Keep facial products and hairspray away from the area."
    ]
  },
  {
    id: "8",
    slug: "tragus-piercing",
    name: "TRAGUS PIERCING",
    price: "Rs. 2,800",
    type: "ear",
    diagramType: "ear-tragus",
    duration: "20 – 30 Minutes",
    healingTime: "3 – 6 Months",
    painLevel: "Mild (4/10)",
    shortDescription: "Placed on the small cartilage flap covering your ear canal.",
    inDepthDescription: [
      "The tragus is the thick flap of cartilage sitting right outside your ear canal. It is one of the most popular ear cartilage piercings globally.",
      "Gives a subtle, sophisticated pop of sparkle right at the center of your ear."
    ],
    careTips: [
      "Avoid using in-ear earbuds/airpods during the initial healing phase.",
      "Clean front and back surfaces daily."
    ]
  },
  {
    id: "9",
    slug: "2x-tragus-piercing",
    name: "2X TRAGUS PIERCING",
    price: "Rs. 5,600",
    type: "ear",
    diagramType: "ear-tragus-2x",
    duration: "30 – 40 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Moderate (5/10)",
    shortDescription: "Double stacked tragus piercings depending on tragus size and anatomy.",
    inDepthDescription: [
      "A unique double tragus setup for clients with suitable tragus surface area.",
      "Requires high-precision needle angle to fit two flatback studs side by side."
    ],
    careTips: [
      "Avoid putting pressure on the ear flap."
    ]
  },
  {
    id: "10",
    slug: "conch-piercing",
    name: "CONCH PIERCING",
    price: "Rs. 2,800",
    type: "ear",
    diagramType: "ear-conch",
    duration: "20 – 30 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Moderate (5/10)",
    shortDescription: "Placed in the center cup cartilage of the ear.",
    inDepthDescription: [
      "Situated right in the central dish of your ear cartilage. Can be fitted with a delicate stud during healing and swapped to a bold fitted hoop once fully healed.",
      "Adds central depth and focal balance to any ear curation."
    ],
    careTips: [
      "Avoid phone receiver pressure on the ear.",
      "Clean with saline solution twice daily."
    ]
  },
  {
    id: "11",
    slug: "2x-conch-piercing",
    name: "2X CONCH PIERCING",
    price: "Rs. 5,600",
    type: "ear",
    diagramType: "ear-conch-2x",
    duration: "35 – 45 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Moderate (5/10)",
    shortDescription: "Double center conch piercings placed vertically or side by side.",
    inDepthDescription: [
      "Two central cartilage piercings inside the ear bowl. Allows double stud or double ring styling once healed."
    ],
    careTips: [
      "Keep clean and touch-free during healing."
    ]
  },
  {
    id: "12",
    slug: "flat-piercing",
    name: "FLAT PIERCING",
    price: "Rs. 2,800",
    type: "ear",
    diagramType: "ear-flat",
    duration: "20 – 30 Minutes",
    healingTime: "3 – 6 Months",
    painLevel: "Mild (4/10)",
    shortDescription: "Placed on the flat inner upper cartilage area of the upper ear.",
    inDepthDescription: [
      "The flat piercing rests on the smooth upper cartilage area inside the upper rim. It provides a perfect flat canvas for statement clusters, snakes, or geometric studs."
    ],
    careTips: [
      "Tie back long hair to prevent tangling."
    ]
  },
  {
    id: "13",
    slug: "2x-flat-piercing",
    name: "2X FLAT PIERCING",
    price: "Rs. 5,600",
    type: "ear",
    diagramType: "ear-flat-2x",
    duration: "30 – 40 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Moderate (5/10)",
    shortDescription: "Double flat cartilage piercings for dual decorative studs.",
    inDepthDescription: [
      "Two flat cartilage piercings custom-angled to highlight ornamental jewelry arrangements."
    ],
    careTips: [
      "Spray saline solution daily."
    ]
  },
  {
    id: "14",
    slug: "rook-piercing",
    name: "ROOK PIERCING",
    price: "Rs. 2,800",
    type: "ear",
    diagramType: "ear-rook",
    duration: "20 – 30 Minutes",
    healingTime: "6 – 9 Months",
    painLevel: "Moderate (6/10)",
    shortDescription: "Placed vertically through the upper inner cartilage ridge above the daith.",
    inDepthDescription: [
      "The rook piercing passes through the inner ridge of cartilage above the daith. Usually fitted with a curved barbell or small hoop.",
      "Tucked safely inside the ear, making it less prone to snagging on clothing."
    ],
    careTips: [
      "Avoid touching or moving the barbell."
    ]
  },
  {
    id: "15",
    slug: "daith-piercing",
    name: "DAITH PIERCING",
    price: "Rs. 3,500",
    type: "ear",
    diagramType: "ear-daith",
    duration: "25 – 35 Minutes",
    healingTime: "6 – 9 Months",
    painLevel: "Moderate (6/10)",
    shortDescription: "Placed through the innermost cartilage fold right above the ear canal.",
    inDepthDescription: [
      "The daith piercing passes through the innermost cartilage fold where the helix meets the inner ear. Famous for housing decorative heart or clicker rings.",
      "A striking centerpiece piercing that sits snug inside the ear curve."
    ],
    careTips: [
      "Clean with saline solution using cotton swabs gently."
    ]
  },
  {
    id: "16",
    slug: "combo-ear-lobe-rook-piercing",
    name: "COMBO: EAR LOBE + ROOK PIERCING",
    price: "Rs. 4,600",
    type: "combo",
    diagramType: "combo-lobe-rook",
    duration: "35 – 45 Minutes",
    healingTime: "Cartilage: 6-9 Mos | Lobe: 6-8 Wks",
    painLevel: "Moderate (5/10)",
    shortDescription: "Curated dual combo package combining a classic ear lobe and a rook cartilage piercing.",
    inDepthDescription: [
      "A popular combination package that pairs a lower lobe placement with an upper inner rook cartilage placement. Gives immediate high-and-low ear balance."
    ],
    careTips: [
      "Follow aftercare for both lobe and cartilage zones."
    ]
  },
  {
    id: "17",
    slug: "combo-ear-lobe-tragus-piercing",
    name: "COMBO: EAR LOBE + TRAGUS PIERCING",
    price: "Rs. 4,600",
    type: "combo",
    diagramType: "combo-lobe-tragus",
    duration: "35 – 45 Minutes",
    healingTime: "Tragus: 3-6 Mos | Lobe: 6-8 Wks",
    painLevel: "Mild (4/10)",
    shortDescription: "Curated package combining an ear lobe piercing with a tragus accent.",
    inDepthDescription: [
      "Pairs a lower lobe placement with a central tragus stud for an effortlessly chic look."
    ],
    careTips: [
      "Avoid earbuds during tragus healing."
    ]
  },
  {
    id: "18",
    slug: "combo-helix-conch-piercing",
    name: "COMBO: HELIX + CONCH PIERCING",
    price: "Rs. 5,600",
    type: "combo",
    diagramType: "combo-helix-conch",
    duration: "40 – 50 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Moderate (5/10)",
    shortDescription: "Dual cartilage combo connecting the outer rim helix and inner bowl conch.",
    inDepthDescription: [
      "Combines an upper helix rim piercing with a central conch bowl piercing. Creates an architectural cartilage frame."
    ],
    careTips: [
      "Do not sleep on the pierced ear."
    ]
  },
  {
    id: "19",
    slug: "combo-helix-rook-piercing",
    name: "COMBO: HELIX + ROOK PIERCING",
    price: "Rs. 5,600",
    type: "combo",
    diagramType: "combo-helix-rook",
    duration: "40 – 50 Minutes",
    healingTime: "6 – 9 Months",
    painLevel: "Moderate (6/10)",
    shortDescription: "High-cartilage combo pairing the upper outer rim and inner rook fold.",
    inDepthDescription: [
      "An upper cartilage curation combining outer helix line with inner rook structure."
    ],
    careTips: [
      "Keep touchless and clean."
    ]
  },
  {
    id: "20",
    slug: "combo-helix-tragus-piercing",
    name: "COMBO: HELIX + TRAGUS PIERCING",
    price: "Rs. 5,600",
    type: "combo",
    diagramType: "combo-helix-tragus",
    duration: "40 – 50 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Moderate (5/10)",
    shortDescription: "Balanced package pairing top outer rim helix with front tragus stud.",
    inDepthDescription: [
      "Frames the ear from top to center, offering great contrast between upper rim and inner tragus."
    ],
    careTips: [
      "Clean both locations thoroughly."
    ]
  },
  {
    id: "21",
    slug: "combo-ear-lobe-conch-piercing",
    name: "COMBO: EAR LOBE + CONCH PIERCING",
    price: "Rs. 4,600",
    type: "combo",
    diagramType: "combo-lobe-conch",
    duration: "35 – 45 Minutes",
    healingTime: "Conch: 4-6 Mos | Lobe: 6-8 Wks",
    painLevel: "Mild (4/10)",
    shortDescription: "Harmonious combo pairing lower ear lobe with central conch cartilage.",
    inDepthDescription: [
      "Connects the soft lower lobe with the deep center conch bowl for a timeless dual accent."
    ],
    careTips: [
      "Follow standard saline aftercare."
    ]
  },
  {
    id: "22",
    slug: "lip-piercing",
    name: "LIP PIERCING (18+)",
    price: "Rs. 3,500",
    type: "facial",
    diagramType: "lip",
    duration: "20 – 30 Minutes",
    healingTime: "2 – 3 Months",
    painLevel: "Mild (3/10)",
    shortDescription: "Classic labret or side lip piercing performed with sterile implant-grade labrets.",
    inDepthDescription: [
      "A classic lip placement positioned on the lower lip (center or side). Fitted initially with a flatback labret post to protect teeth and gums.",
      "Must be 18 years or older."
    ],
    careTips: [
      "Rinse with alcohol-free mouthwash after meals.",
      "Avoid spicy or acidic foods for 7 days."
    ]
  },
  {
    id: "23",
    slug: "philtrum-piercing",
    name: "PHILTRUM PIERCING (18+)",
    price: "Rs. 3,500",
    type: "facial",
    diagramType: "philtrum",
    duration: "20 – 30 Minutes",
    healingTime: "2 – 3 Months",
    painLevel: "Mild (4/10)",
    shortDescription: "Placed in the center dip of the upper lip below the nose septum.",
    inDepthDescription: [
      "Also known as a Medusa piercing, situated in the anatomical groove directly above the upper lip Cupid's bow.",
      "Centered to enhance facial symmetry."
    ],
    careTips: [
      "Keep outer area clean with saline spray and oral cavity clean with mouthwash."
    ]
  },
  {
    id: "24",
    slug: "vertical-labret-piercing",
    name: "VERTICAL LABRET PIERCING",
    price: "Rs. 3,500",
    type: "facial",
    diagramType: "vertical-labret",
    duration: "20 – 30 Minutes",
    healingTime: "6 – 8 Weeks",
    painLevel: "Mild (4/10)",
    shortDescription: "Vertical barbell passing through the lower lip tissue without touching inside mouth.",
    inDepthDescription: [
      "Passes vertically through the center of the lower lip, with one bead sitting on top of the lip and the other below it.",
      "Because it does not enter the inside of the mouth, it avoids contact with teeth or gums."
    ],
    careTips: [
      "Use lip balm carefully without touching fresh piercing."
    ]
  },
  {
    id: "25",
    slug: "eyebrow-piercing",
    name: "EYEBROW PIERCING",
    price: "Rs. 2,800",
    type: "facial",
    diagramType: "eyebrow",
    duration: "20 – 30 Minutes",
    healingTime: "2 – 3 Months",
    painLevel: "Low (3/10)",
    shortDescription: "Vertical or angled piercing through the eyebrow ridge.",
    inDepthDescription: [
      "Placed along the outer third of the eyebrow ridge using a curved titanium barbell.",
      "Completely customized to fit your natural brow bone curvature."
    ],
    careTips: [
      "Avoid makeup or facial creams near the brow area."
    ]
  },
  {
    id: "26",
    slug: "2x-eyebrow-piercing",
    name: "2X EYEBROW PIERCING",
    price: "Rs. 5,600",
    type: "facial",
    diagramType: "eyebrow-2x",
    duration: "30 – 40 Minutes",
    healingTime: "2 – 3 Months",
    painLevel: "Mild (4/10)",
    shortDescription: "Double parallel eyebrow piercings along the brow ridge.",
    inDepthDescription: [
      "Two side-by-side eyebrow piercings aligned precisely along the brow curve."
    ],
    careTips: [
      "Clean with saline solution daily."
    ]
  },
  {
    id: "27",
    slug: "nipple-piercing",
    name: "NIPPLE PIERCING",
    price: "Rs. 3,500",
    type: "body",
    diagramType: "nipple",
    duration: "20 – 30 Minutes",
    healingTime: "6 – 12 Months",
    painLevel: "Moderate (6/10)",
    shortDescription: "Single nipple piercing performed in a private sterile suite.",
    inDepthDescription: [
      "Performed in a completely private, comfortable suite with maximum discretion and hospital-grade sterilization.",
      "Fitted with a straight titanium barbell calibrated to your natural anatomy."
    ],
    careTips: [
      "Wear clean, breathable cotton clothing.",
      "Avoid friction from tight athletic wear."
    ]
  },
  {
    id: "28",
    slug: "pair-of-nipple-piercings",
    name: "PAIR OF NIPPLE PIERCINGS",
    price: "Rs. 7,000",
    type: "body",
    diagramType: "nipple-pair",
    duration: "35 – 45 Minutes",
    healingTime: "6 – 12 Months",
    painLevel: "Moderate (6/10)",
    shortDescription: "Symmetrical pair of nipple piercings in a single private appointment.",
    inDepthDescription: [
      "Both nipples pierced in one private session with exact horizontal or vertical alignment."
    ],
    careTips: [
      "Soak with saline solution daily during shower routines."
    ]
  },
  {
    id: "29",
    slug: "jewelry-removal",
    name: "JEWELRY REMOVAL",
    price: "Rs. 1,800",
    type: "service",
    diagramType: "removal",
    duration: "15 Minutes",
    healingTime: "Immediate",
    painLevel: "None (0/10)",
    shortDescription: "Professional, painless removal or assistance with stuck jewelry.",
    inDepthDescription: [
      "Professional in-studio assistance to safely remove tight, stuck, or difficult body jewelry without damaging tissue or ear cartilage."
    ],
    careTips: [
      "Apply soothing ointment if skin is irritated."
    ]
  },
  {
    id: "32",
    slug: "nose-piercing",
    name: "NOSE PIERCING",
    price: "Rs. 2,800",
    type: "facial",
    diagramType: "nose",
    duration: "15 – 20 Minutes",
    healingTime: "2 – 4 Months",
    painLevel: "Low (3/10)",
    shortDescription: "Classic nostril piercing placed cleanly along the nostril crease.",
    inDepthDescription: [
      "The nostril piercing is an iconic placement across cultures. Pierced with implant-grade labret studs or nostril screws for smooth healing.",
      "Accentuates facial symmetry and profile elegance."
    ],
    careTips: [
      "Avoid snagging with towels while drying your face.",
      "Spray saline twice daily."
    ]
  },
  {
    id: "33",
    slug: "belly-button-piercing",
    name: "BELLY BUTTON PIERCING",
    price: "Rs. 2,800",
    type: "body",
    diagramType: "belly-button",
    duration: "20 – 30 Minutes",
    healingTime: "4 – 9 Months",
    painLevel: "Mild (4/10)",
    shortDescription: "Classic navel piercing placed through the upper rim of the belly button.",
    inDepthDescription: [
      "Placed through the top skin lip of the navel using a curved titanium navel barbell.",
      "Our piercer evaluates your natural sit and movement to ensure comfortable long-term wear."
    ],
    careTips: [
      "Avoid high-waisted tight pants during initial months.",
      "Clean after workouts or sweating."
    ]
  },
  {
    id: "34",
    slug: "septum-piercing",
    name: "SEPTUM PIERCING",
    price: "Rs. 3,500",
    type: "facial",
    diagramType: "septum",
    duration: "20 – 30 Minutes",
    healingTime: "2 – 3 Months",
    painLevel: "Mild (4/10)",
    shortDescription: "Placed through the soft sweet spot tissue inside the nasal septum.",
    inDepthDescription: [
      "Pierced through the delicate 'sweet spot' membranous tissue inside the nose, avoiding hard cartilage entirely for a fast, low-pain experience.",
      "Can be fitted with circular barbells, clickers, or flip-up retainers for work environment versatility."
    ],
    careTips: [
      "Soak nose tip in warm saline solution.",
      "Do not touch or twist septum ring."
    ]
  },
  {
    id: "35",
    slug: "combo-ear-lobe-helix-piercing",
    name: "COMBO: EAR LOBE + HELIX PIERCING",
    price: "Rs. 4,600",
    type: "combo",
    diagramType: "combo-lobe-helix",
    duration: "35 – 45 Minutes",
    healingTime: "Helix: 3-6 Mos | Lobe: 6-8 Wks",
    painLevel: "Mild (4/10)",
    shortDescription: "Curated dual combo pairing a lower ear lobe and an upper helix cartilage rim.",
    inDepthDescription: [
      "Combines a classic lower lobe placement with an upper helix rim accent for instant ear curation harmony."
    ],
    careTips: [
      "Follow aftercare for both locations."
    ]
  }
];

export function getPiercingBySlug(slug: string): PiercingItem | undefined {
  return PIERCINGS_DATA.find((p) => p.slug === slug);
}
