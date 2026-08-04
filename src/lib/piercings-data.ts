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
  technique?: string;
  shortDescription: string;
  inDepthDescription: string[];
  careTips: string[];
}

export const PIERCINGS_DATA: PiercingItem[] = [
  {
    id: "1",
    slug: "ear-lobe-piercing",
    name: "EAR LOBE PIERCING (1 SIDE)",
    price: "Rs. 400",
    type: "ear",
    diagramType: "ear-lobe",
    duration: "15 – 20 Minutes",
    healingTime: "4 – 6 Weeks",
    painLevel: "Low (2/10)",
    technique: "Gunshot Piercing (Only gunshot piercing in studio)",
    shortDescription: "Classic ear lobe piercing for 1 side (Rs. 400). Performed with precision gunshot instrument (the only gunshot piercing available in studio).",
    inDepthDescription: [
      "The ear lobe piercing is the most timeless and popular placement. At Ink Chronicle studio, ear lobe piercings are performed with a precision gunshot instrument — this is the ONLY gunshot piercing offered in our studio.",
      "Our lead piercer ensures accurate placement tailored to your lobe geometry."
    ],
    careTips: [
      "Clean twice daily with saline spray or antibacterial solution.",
      "Avoid sleeping directly on the fresh piercing for the first 2 weeks.",
      "Do not rotate or twist the studs with unwashed hands."
    ]
  },
  {
    id: "2",
    slug: "pair-of-ear-lobe-piercings",
    name: "PAIR OF EAR LOBE PIERCINGS (2 SIDES)",
    price: "Rs. 600",
    type: "ear",
    diagramType: "ear-lobe-pair",
    duration: "20 – 25 Minutes",
    healingTime: "4 – 6 Weeks",
    painLevel: "Low (2/10)",
    technique: "Gunshot Piercing (Only gunshot piercing in studio)",
    shortDescription: "Symmetrical pair of ear lobe piercings for both ears (Rs. 600 for 2 sides) performed with gunshot instrument.",
    inDepthDescription: [
      "Get both left and right ear lobes pierced in one session (Rs. 600 for 2 sides). Performed with precision gunshot instrument.",
      "We measure and mark both lobes carefully before piercing to guarantee symmetry and balance."
    ],
    careTips: [
      "Clean both ears with gentle saline solution twice a day.",
      "Use a soft pillow to keep pressure off your ears while sleeping."
    ]
  },
  {
    id: "3",
    slug: "helix-piercing",
    name: "HELIX PIERCING (1 SIDE)",
    price: "Rs. 800",
    type: "ear",
    diagramType: "ear-helix",
    duration: "20 – 30 Minutes",
    healingTime: "3 – 6 Months",
    painLevel: "Mild (4/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Single upper outer cartilage rim piercing (Rs. 800) performed with professional single-use sterile hollow needle.",
    inDepthDescription: [
      "The helix piercing sits along the upper outer cartilage rim. All cartilage piercings at Ink Chronicle are strictly performed with single-use sterile hollow needles (never guns).",
      "Offers endless styling options ranging from studs to fitted hoops once healed."
    ],
    careTips: [
      "Keep hair tied back to avoid snagging.",
      "Avoid wearing over-ear headphones while healing."
    ]
  },
  {
    id: "4",
    slug: "2x-helix-piercing",
    name: "2X HELIX PIERCING (2 SIDES / DOUBLE)",
    price: "Rs. 1,400",
    type: "ear",
    diagramType: "ear-helix-2x",
    duration: "30 – 40 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Mild (4/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Double helix cartilage piercings (Rs. 1,400 for 2 sides/spots) performed with sterile hollow needles.",
    inDepthDescription: [
      "Two side-by-side cartilage piercings along the upper rim (Rs. 1,400 for 2 sides/placements). Creates a stacked rim look with sterile needle technique."
    ],
    careTips: [
      "Rinse gently under warm water during showers.",
      "Do not touch or pick at scabs."
    ]
  },
  {
    id: "5",
    slug: "3x-helix-piercing",
    name: "3X HELIX PIERCING (3 SIDES / TRIPLE)",
    price: "Rs. 2,200",
    type: "ear",
    diagramType: "ear-helix-3x",
    duration: "40 – 50 Minutes",
    healingTime: "6 – 9 Months",
    painLevel: "Moderate (5/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Triple helix cartilage cascade (Rs. 2,200 for 3 sides/placements) performed with sterile needles.",
    inDepthDescription: [
      "A dramatic triple cartilage project along the upper helix (Rs. 2,200 for 3 sides/placements). Crafted with millimeter precision using single-use sterile hollow needles."
    ],
    careTips: [
      "Avoid sleeping on the pierced ear completely.",
      "Use our Flaunt Your Ink aftercare gel daily."
    ]
  },
  {
    id: "6",
    slug: "forward-helix-piercing",
    name: "FORWARD HELIX PIERCING (1 SIDE)",
    price: "Rs. 800",
    type: "ear",
    diagramType: "ear-forward-helix",
    duration: "20 – 30 Minutes",
    healingTime: "3 – 6 Months",
    painLevel: "Mild (4/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Front upper cartilage rim piercing (Rs. 800) performed with sterile hollow needle.",
    inDepthDescription: [
      "Located on the front upper curve facing forward (Rs. 800 for 1 side). Pierced with implant-grade sterile needles."
    ],
    careTips: [
      "Be careful when pulling clothing over your head.",
      "Clean gently using sterile saline wipes."
    ]
  },
  {
    id: "7",
    slug: "2x-forward-helix-piercing",
    name: "2X FORWARD HELIX PIERCING (2 SIDES)",
    price: "Rs. 1,400",
    type: "ear",
    diagramType: "ear-forward-helix-2x",
    duration: "30 – 40 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Moderate (5/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Double forward helix studs (Rs. 1,400 for 2 sides/placements) using sterile needles.",
    inDepthDescription: [
      "Two stacked forward helix piercings (Rs. 1,400 for 2 sides) following the natural curve of your front ear ridge with titanium flatbacks."
    ],
    careTips: [
      "Keep facial products and hairspray away from the area."
    ]
  },
  {
    id: "8",
    slug: "tragus-piercing",
    name: "TRAGUS PIERCING (1 SIDE)",
    price: "Rs. 800",
    type: "ear",
    diagramType: "ear-tragus",
    duration: "20 – 30 Minutes",
    healingTime: "3 – 6 Months",
    painLevel: "Mild (4/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Cartilage flap piercing covering ear canal (Rs. 800 for 1 side) performed with sterile needle.",
    inDepthDescription: [
      "The tragus is the thick flap of cartilage sitting right outside your ear canal (Rs. 800 for 1 side). Pierced with single-use sterile hollow needle."
    ],
    careTips: [
      "Avoid using in-ear earbuds/airpods during initial healing.",
      "Clean front and back surfaces daily."
    ]
  },
  {
    id: "9",
    slug: "2x-tragus-piercing",
    name: "2X TRAGUS PIERCING (2 SIDES)",
    price: "Rs. 1,400",
    type: "ear",
    diagramType: "ear-tragus-2x",
    duration: "30 – 40 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Moderate (5/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Double stacked tragus piercings (Rs. 1,400 for 2 sides/placements) with sterile needles.",
    inDepthDescription: [
      "Double tragus setup (Rs. 1,400 for 2 sides) performed with sterile hollow needles."
    ],
    careTips: [
      "Avoid putting pressure on the ear flap."
    ]
  },
  {
    id: "10",
    slug: "conch-piercing",
    name: "CONCH PIERCING (1 SIDE)",
    price: "Rs. 800",
    type: "ear",
    diagramType: "ear-conch",
    duration: "20 – 30 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Moderate (5/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Center cup ear cartilage piercing (Rs. 800 for 1 side) performed with sterile needle.",
    inDepthDescription: [
      "Situated in the central dish of your ear cartilage (Rs. 800 for 1 side). Pierced with sterile hollow needle."
    ],
    careTips: [
      "Avoid phone receiver pressure.",
      "Clean with saline solution twice daily."
    ]
  },
  {
    id: "11",
    slug: "2x-conch-piercing",
    name: "2X CONCH PIERCING (2 SIDES)",
    price: "Rs. 1,400",
    type: "ear",
    diagramType: "ear-conch-2x",
    duration: "35 – 45 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Moderate (5/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Double center conch piercings (Rs. 1,400 for 2 sides) using sterile needles.",
    inDepthDescription: [
      "Two central cartilage piercings inside the ear bowl (Rs. 1,400 for 2 sides/placements) using sterile hollow needles."
    ],
    careTips: [
      "Keep clean and touch-free during healing."
    ]
  },
  {
    id: "12",
    slug: "flat-piercing",
    name: "FLAT PIERCING (1 SIDE)",
    price: "Rs. 800",
    type: "ear",
    diagramType: "ear-flat",
    duration: "20 – 30 Minutes",
    healingTime: "3 – 6 Months",
    painLevel: "Mild (4/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Flat inner upper cartilage piercing (Rs. 800 for 1 side) performed with sterile needle.",
    inDepthDescription: [
      "The flat piercing rests on the smooth upper cartilage area (Rs. 800 for 1 side). Pierced with sterile hollow needle."
    ],
    careTips: [
      "Tie back long hair to prevent tangling."
    ]
  },
  {
    id: "13",
    slug: "2x-flat-piercing",
    name: "2X FLAT PIERCING (2 SIDES)",
    price: "Rs. 1,400",
    type: "ear",
    diagramType: "ear-flat-2x",
    duration: "30 – 40 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Moderate (5/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Double flat cartilage piercings (Rs. 1,400 for 2 sides) using sterile needles.",
    inDepthDescription: [
      "Two flat cartilage piercings (Rs. 1,400 for 2 sides) custom-angled with sterile hollow needles."
    ],
    careTips: [
      "Spray saline solution daily."
    ]
  },
  {
    id: "14",
    slug: "rook-piercing",
    name: "ROOK PIERCING (1 SIDE)",
    price: "Rs. 800",
    type: "ear",
    diagramType: "ear-rook",
    duration: "20 – 30 Minutes",
    healingTime: "6 – 9 Months",
    painLevel: "Moderate (6/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Vertical upper inner cartilage ridge piercing (Rs. 800 for 1 side) using sterile needle.",
    inDepthDescription: [
      "The rook piercing passes vertically through the inner ridge of cartilage (Rs. 800 for 1 side). Pierced with sterile hollow needle."
    ],
    careTips: [
      "Avoid touching or moving the barbell."
    ]
  },
  {
    id: "15",
    slug: "daith-piercing",
    name: "DAITH PIERCING (1 SIDE)",
    price: "Rs. 800",
    type: "ear",
    diagramType: "ear-daith",
    duration: "25 – 35 Minutes",
    healingTime: "6 – 9 Months",
    painLevel: "Moderate (6/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Innermost cartilage fold piercing (Rs. 800 for 1 side) performed with sterile needle.",
    inDepthDescription: [
      "Passes through the innermost cartilage fold above the ear canal (Rs. 800 for 1 side). Pierced with single-use sterile hollow needle."
    ],
    careTips: [
      "Clean with saline solution using cotton swabs gently."
    ]
  },
  {
    id: "16",
    slug: "combo-ear-lobe-rook-piercing",
    name: "COMBO: EAR LOBE + ROOK PIERCING (2 SIDES)",
    price: "Rs. 1,400",
    type: "combo",
    diagramType: "combo-lobe-rook",
    duration: "35 – 45 Minutes",
    healingTime: "Cartilage: 6-9 Mos | Lobe: 4-6 Wks",
    painLevel: "Moderate (5/10)",
    technique: "Lobe (Gunshot) + Rook (Sterile Needle)",
    shortDescription: "Dual combo pairing an ear lobe and a rook cartilage piercing (Rs. 1,400 for 2 piercings).",
    inDepthDescription: [
      "Combination package pairing lower lobe with upper inner rook (Rs. 1,400 for 2 piercings)."
    ],
    careTips: [
      "Follow aftercare for both lobe and cartilage zones."
    ]
  },
  {
    id: "17",
    slug: "combo-ear-lobe-tragus-piercing",
    name: "COMBO: EAR LOBE + TRAGUS PIERCING (2 SIDES)",
    price: "Rs. 1,400",
    type: "combo",
    diagramType: "combo-lobe-tragus",
    duration: "35 – 45 Minutes",
    healingTime: "Tragus: 3-6 Mos | Lobe: 4-6 Wks",
    painLevel: "Mild (4/10)",
    technique: "Lobe (Gunshot) + Tragus (Sterile Needle)",
    shortDescription: "Combo pairing an ear lobe with a tragus piercing (Rs. 1,400 for 2 piercings).",
    inDepthDescription: [
      "Pairs lower lobe with central tragus stud (Rs. 1,400 for 2 piercings)."
    ],
    careTips: [
      "Avoid earbuds during tragus healing."
    ]
  },
  {
    id: "18",
    slug: "combo-helix-conch-piercing",
    name: "COMBO: HELIX + CONCH PIERCING (2 SIDES)",
    price: "Rs. 1,400",
    type: "combo",
    diagramType: "combo-helix-conch",
    duration: "40 – 50 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Moderate (5/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Dual cartilage combo connecting outer helix and inner conch (Rs. 1,400 for 2 piercings).",
    inDepthDescription: [
      "Combines upper helix rim with central conch bowl (Rs. 1,400 for 2 piercings) using sterile needles."
    ],
    careTips: [
      "Do not sleep on the pierced ear."
    ]
  },
  {
    id: "19",
    slug: "combo-helix-rook-piercing",
    name: "COMBO: HELIX + ROOK PIERCING (2 SIDES)",
    price: "Rs. 1,400",
    type: "combo",
    diagramType: "combo-helix-rook",
    duration: "40 – 50 Minutes",
    healingTime: "6 – 9 Months",
    painLevel: "Moderate (6/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "High-cartilage combo pairing upper helix and inner rook fold (Rs. 1,400 for 2 piercings).",
    inDepthDescription: [
      "Upper cartilage curation combining outer helix line with inner rook structure (Rs. 1,400 for 2 piercings)."
    ],
    careTips: [
      "Keep touchless and clean."
    ]
  },
  {
    id: "20",
    slug: "combo-helix-tragus-piercing",
    name: "COMBO: HELIX + TRAGUS PIERCING (2 SIDES)",
    price: "Rs. 1,400",
    type: "combo",
    diagramType: "combo-helix-tragus",
    duration: "40 – 50 Minutes",
    healingTime: "4 – 6 Months",
    painLevel: "Moderate (5/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Balanced package pairing top helix with front tragus stud (Rs. 1,400 for 2 piercings).",
    inDepthDescription: [
      "Frames ear top to center (Rs. 1,400 for 2 piercings) using sterile needles."
    ],
    careTips: [
      "Clean both locations thoroughly."
    ]
  },
  {
    id: "21",
    slug: "combo-ear-lobe-conch-piercing",
    name: "COMBO: EAR LOBE + CONCH PIERCING (2 SIDES)",
    price: "Rs. 1,400",
    type: "combo",
    diagramType: "combo-lobe-conch",
    duration: "35 – 45 Minutes",
    healingTime: "Conch: 4-6 Mos | Lobe: 4-6 Wks",
    painLevel: "Mild (4/10)",
    technique: "Lobe (Gunshot) + Conch (Sterile Needle)",
    shortDescription: "Combo pairing lower ear lobe with central conch cartilage (Rs. 1,400 for 2 piercings).",
    inDepthDescription: [
      "Connects soft lower lobe with center conch bowl (Rs. 1,400 for 2 piercings)."
    ],
    careTips: [
      "Follow standard saline aftercare."
    ]
  },
  {
    id: "25",
    slug: "eyebrow-piercing",
    name: "EYEBROW PIERCING (1 SIDE)",
    price: "Rs. 800",
    type: "facial",
    diagramType: "eyebrow",
    duration: "20 – 30 Minutes",
    healingTime: "2 – 3 Months",
    painLevel: "Low (3/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Vertical eyebrow ridge piercing (Rs. 800 for 1 side) performed with sterile needle.",
    inDepthDescription: [
      "Placed along eyebrow ridge using curved titanium barbell (Rs. 800 for 1 side) with single-use sterile needle."
    ],
    careTips: [
      "Avoid makeup or facial creams near the brow area."
    ]
  },
  {
    id: "26",
    slug: "2x-eyebrow-piercing",
    name: "2X EYEBROW PIERCING (2 SIDES)",
    price: "Rs. 1,400",
    type: "facial",
    diagramType: "eyebrow-2x",
    duration: "30 – 40 Minutes",
    healingTime: "2 – 3 Months",
    painLevel: "Mild (4/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Double parallel eyebrow piercings (Rs. 1,400 for 2 sides/placements) with sterile needles.",
    inDepthDescription: [
      "Two side-by-side eyebrow piercings (Rs. 1,400 for 2 sides/placements) aligned precisely."
    ],
    careTips: [
      "Clean with saline solution daily."
    ]
  },
  {
    id: "32",
    slug: "nose-piercing",
    name: "NOSE PIERCING (1 SIDE)",
    price: "Rs. 800",
    type: "facial",
    diagramType: "nose",
    duration: "15 – 20 Minutes",
    healingTime: "2 – 4 Months",
    painLevel: "Low (3/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Classic nostril piercing (Rs. 800 for 1 side) performed with sterile hollow needle.",
    inDepthDescription: [
      "Classic nostril placement (Rs. 800 for 1 side). Pierced with implant-grade sterile hollow needle for smooth healing."
    ],
    careTips: [
      "Avoid snagging with towels while drying face.",
      "Spray saline twice daily."
    ]
  },
  {
    id: "33",
    slug: "belly-button-piercing",
    name: "BELLY BUTTON PIERCING (1 SIDE)",
    price: "Rs. 800",
    type: "body",
    diagramType: "belly-button",
    duration: "20 – 30 Minutes",
    healingTime: "4 – 9 Months",
    painLevel: "Mild (4/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Classic navel piercing (Rs. 800 for 1 side) performed with sterile curved barbell needle.",
    inDepthDescription: [
      "Placed through the top skin lip of the navel (Rs. 800 for 1 side) using curved titanium navel barbell with sterile hollow needle."
    ],
    careTips: [
      "Avoid high-waisted tight pants during initial months.",
      "Clean after workouts or sweating."
    ]
  },
  {
    id: "34",
    slug: "septum-piercing",
    name: "SEPTUM PIERCING (1 SIDE)",
    price: "Rs. 800",
    type: "facial",
    diagramType: "septum",
    duration: "20 – 30 Minutes",
    healingTime: "2 – 3 Months",
    painLevel: "Mild (4/10)",
    technique: "Sterile Needle Piercing",
    shortDescription: "Septum sweet spot piercing (Rs. 800 for 1 side) performed with sterile needle.",
    inDepthDescription: [
      "Pierced through the delicate 'sweet spot' membranous tissue inside the nose (Rs. 800 for 1 side) using sterile hollow needle."
    ],
    careTips: [
      "Soak nose tip in warm saline solution.",
      "Do not touch or twist septum ring."
    ]
  },
  {
    id: "35",
    slug: "combo-ear-lobe-helix-piercing",
    name: "COMBO: EAR LOBE + HELIX PIERCING (2 SIDES)",
    price: "Rs. 1,400",
    type: "combo",
    diagramType: "combo-lobe-helix",
    duration: "35 – 45 Minutes",
    healingTime: "Helix: 3-6 Mos | Lobe: 4-6 Wks",
    painLevel: "Mild (4/10)",
    technique: "Lobe (Gunshot) + Helix (Sterile Needle)",
    shortDescription: "Dual combo pairing ear lobe and helix cartilage (Rs. 1,400 for 2 piercings).",
    inDepthDescription: [
      "Combines lower lobe placement with upper helix rim accent (Rs. 1,400 for 2 piercings)."
    ],
    careTips: [
      "Follow aftercare for both locations."
    ]
  },
  {
    id: "29",
    slug: "jewelry-removal",
    name: "JEWELRY REMOVAL SERVICE",
    price: "Rs. 400",
    type: "service",
    diagramType: "removal",
    duration: "15 Minutes",
    healingTime: "Immediate",
    painLevel: "None (0/10)",
    technique: "In-Studio Professional Removal",
    shortDescription: "Professional in-studio assistance to safely remove or assist with stuck jewelry.",
    inDepthDescription: [
      "Professional in-studio assistance to safely remove tight, stuck, or difficult body jewelry."
    ],
    careTips: [
      "Apply soothing ointment if skin is irritated."
    ]
  }
];

export function getPiercingBySlug(slug: string): PiercingItem | undefined {
  return PIERCINGS_DATA.find((p) => p.slug === slug);
}
