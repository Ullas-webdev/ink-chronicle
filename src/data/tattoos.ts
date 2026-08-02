export interface TattooItemData {
  id: string;
  name: string;
  category: string;
  image: string;
  briefDescription: string;
  fullDescription: string;
  specs: {
    style: string;
    placement: string;
    sessionDuration: string;
    painLevel: string;
    pricingNote: string;
  };
}

export const ALL_TATTOOS: TattooItemData[] = [
  {
    id: "cat-tattoos",
    name: "Cat Tattoos",
    category: "Animal Tattoos",
    image: "/tattoos/cat.jpg",
    briefDescription: "Elegant and subtle micro-realism portrait capturing the graceful, mysterious spirit and affection of felines.",
    fullDescription: "Cat tattoos symbolize independence, mystery, protection, and deep companionship. Executed in delicate single-needle fine linework or subtle micro-realism shading, this piece accentuates soft fur textures and expressive features.",
    specs: {
      style: "Fine Line / Micro-Realism",
      placement: "Forearm, Wrist, Ankle, Behind Ear",
      sessionDuration: "1.5 - 3 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation based on exact size and detail level."
    }
  },
  {
    id: "snake-tattoos",
    name: "Snake Tattoos",
    category: "Animal Tattoos",
    image: "/tattoos/snake.jpg",
    briefDescription: "Bold illustrative serpentine ink contouring dynamically across muscular anatomy.",
    fullDescription: "Representing rebirth, transformation, wisdom, and raw power, snake tattoos are timeless classics. Designed to flow naturally along body lines like chest, ribs, or full sleeves with intricate scale detailing.",
    specs: {
      style: "Blackwork / Illustrative Linework",
      placement: "Chest, Ribcage, Forearm, Thigh",
      sessionDuration: "3 - 5 Hours",
      painLevel: "Moderate",
      pricingNote: "Custom quote provided during consultation based on scale density and placement body contours."
    }
  },
  {
    id: "dog-tattoos",
    name: "Dog Tattoos",
    category: "Animal Tattoos",
    image: "/tattoos/dog.jpg",
    briefDescription: "Warm, rich portrait capturing unwavering loyalty, warmth, and lifelong companionship.",
    fullDescription: "A tribute to man's best friend, combining rich color tones or smooth black and grey shading with artistic foliage elements for a lasting homage to your faithful companion.",
    specs: {
      style: "Color Realism / Illustrative Portrait",
      placement: "Back, Calf, Bicep, Outer Thigh",
      sessionDuration: "4 - 6 Hours",
      painLevel: "Mild to Moderate",
      pricingNote: "Custom quote provided during consultation based on portrait size and color complexity."
    }
  },
  {
    id: "owl-tattoos",
    name: "Owl Tattoos",
    category: "Animal Tattoos",
    image: "/tattoos/owl.jpg",
    briefDescription: "Mystical nocturnal owl artwork with piercing focus and intricate feather geometry.",
    fullDescription: "Owls represent deep wisdom, intuition, transition, and night mystery. Rendered with high-contrast stippling and sharp linework to showcase every feather texture.",
    specs: {
      style: "Geometric / Blackwork",
      placement: "Forearm, Shoulder, Chest, Back",
      sessionDuration: "3 - 5 Hours",
      painLevel: "Mild to Moderate",
      pricingNote: "Custom quote provided during consultation based on detail and shading."
    }
  },
  {
    id: "lion-tattoos",
    name: "Lion Tattoos",
    category: "Animal Tattoos",
    image: "/tattoos/lion.jpg",
    briefDescription: "Majestic apex predator portrait embodying courage, royalty, strength, and leadership.",
    fullDescription: "Featuring bold crowned linework or realistic mane textures, lion tattoos command respect and signify inner strength and familial protection.",
    specs: {
      style: "Black & Grey Realism / Neotraditional",
      placement: "Upper Arm, Chest, Back, Thigh",
      sessionDuration: "4 - 7 Hours",
      painLevel: "Moderate",
      pricingNote: "Custom quote provided during consultation based on coverage size."
    }
  },
  {
    id: "turtle-tattoos",
    name: "Turtle Tattoos",
    category: "Animal Tattoos",
    image: "/tattoos/turtle.jpg",
    briefDescription: "Serene ocean sea turtle carrying ancient wisdom, endurance, and longevity.",
    fullDescription: "Sea turtles represent peaceful navigation through life's currents, resilience, and harmony with nature. Crafted with fine dotwork and fluid shell motifs.",
    specs: {
      style: "Dotwork / Fine Line Illustrative",
      placement: "Shoulder, Ankle, Ribs, Inner Arm",
      sessionDuration: "2 - 4 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "family-tattoos",
    name: "Family Tattoos",
    category: "Meanings Tattoos",
    image: "/tattoos/family.jpg",
    briefDescription: "Heartfelt symbolic artistry honoring ancestral bonds, heritage, and unconditional love.",
    fullDescription: "Family tattoos serve as a constant reminder of root origins, togetherness, and enduring love. Customized with family initials, dates, or symbolic tree motifs.",
    specs: {
      style: "Fine Line Script / Custom Symbolic",
      placement: "Forearm, Wrist, Collarbone, Ribs",
      sessionDuration: "2 - 4 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation based on custom elements."
    }
  },
  {
    id: "friendship-tattoos",
    name: "Friendship Tattoos",
    category: "Meanings Tattoos",
    image: "/tattoos/friendship.jpg",
    briefDescription: "Minimalist matching design celebrating unbreakable lifelong friendships.",
    fullDescription: "Designed for paired or solo wear, friendship tattoos symbolize shared memories, mutual trust, and soul connections that endure across distances.",
    specs: {
      style: "Minimalist / Fine Line",
      placement: "Wrist, Ankle, Finger, Behind Ear",
      sessionDuration: "1 - 2 Hours",
      painLevel: "Low",
      pricingNote: "Special rate available for paired duo sessions during consultation."
    }
  },
  {
    id: "love-tattoos",
    name: "Love Tattoos",
    category: "Meanings Tattoos",
    image: "/tattoos/love.jpg",
    briefDescription: "Poetic romantic imagery capturing devotion, passion, and emotional connection.",
    fullDescription: "Blending delicate line art with subtle botanical or typographic accents, love tattoos capture the timeless beauty of human affection.",
    specs: {
      style: "Fine Line / Micro-Realism",
      placement: "Forearm, Sternum, Wrist, Shoulder",
      sessionDuration: "1.5 - 3 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "strength-tattoos",
    name: "Strength Tattoos",
    category: "Meanings Tattoos",
    image: "/tattoos/strength.jpg",
    briefDescription: "Empowering geometric motif commemorating resilience and personal triumph.",
    fullDescription: "Designed for those who have overcome adversity, incorporating sharp geometric vectors, armor motifs, or motivational script.",
    specs: {
      style: "Geometric / Blackwork",
      placement: "Forearm, Spine, Bicep, Chest",
      sessionDuration: "2.5 - 5 Hours",
      painLevel: "Mild to Moderate",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "faith-tattoos",
    name: "Faith Tattoos",
    category: "Meanings Tattoos",
    image: "/tattoos/faith.jpg",
    briefDescription: "Serene spiritual ink reflecting hope, belief, and divine guidance.",
    fullDescription: "Capturing spiritual solace through clean geometric symmetry, subtle cross accents, or elegant typography.",
    specs: {
      style: "Fine Line / Minimalist",
      placement: "Wrist, Inner Arm, Collarbone, Spine",
      sessionDuration: "1.5 - 3 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "protection-tattoos",
    name: "Protection Tattoos",
    category: "Meanings Tattoos",
    image: "/tattoos/protection.jpg",
    briefDescription: "Ancient talismanic ink guarding against negativity and fostering peace.",
    fullDescription: "Drawing inspiration from sacred shields, protective eyes, and warding runes to create a personal armor of positive energy.",
    specs: {
      style: "Blackwork / Sacred Geometry",
      placement: "Upper Back, Chest, Forearm, Neck",
      sessionDuration: "2 - 4 Hours",
      painLevel: "Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "cross-tattoos",
    name: "Cross Tattoos",
    category: "Symbol Tattoos",
    image: "/tattoos/cross.jpg",
    briefDescription: "Timeless sacred symbol of faith, devotion, sacrifice, and redemption.",
    fullDescription: "From minimalist thin-line crosses to ornate baroque wood engravings, cross tattoos remain among the most revered symbols in ink history.",
    specs: {
      style: "Fine Line / Woodcut Blackwork",
      placement: "Forearm, Chest, Neck, Wrist",
      sessionDuration: "1.5 - 3.5 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "heart-tattoos",
    name: "Heart Tattoos",
    category: "Symbol Tattoos",
    image: "/tattoos/heart.jpg",
    briefDescription: "Expressive artistic heart emblem infused with fine linework and crimson color pops.",
    fullDescription: "Redefining traditional heart motifs with contemporary geometric flourishes, botanical surrounds, and watercolor splashes.",
    specs: {
      style: "Neotraditional / Fine Line",
      placement: "Forearm, Sternum, Ankle, Wrist",
      sessionDuration: "2 - 3.5 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "pirate-tattoos",
    name: "Pirate Tattoos",
    category: "Symbol Tattoos",
    image: "/tattoos/pirate.jpg",
    briefDescription: "Adventurous maritime ink celebrating freedom, rebellion, and high seas courage.",
    fullDescription: "Skulls, nautical compasses, ships, and anchors fused into a bold blackwork narrative of free spirit.",
    specs: {
      style: "Blackwork / Traditional",
      placement: "Forearm, Bicep, Calf, Shoulder",
      sessionDuration: "3 - 5 Hours",
      painLevel: "Mild to Moderate",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "book-tattoos",
    name: "Book Tattoos",
    category: "Symbol Tattoos",
    image: "/tattoos/book.jpg",
    briefDescription: "Literary artwork celebrating knowledge, storytelling, imagination, and truth.",
    fullDescription: "Open tome designs surrounded by celestial stars, ink drips, or botanical flora for writers, readers, and seekers of knowledge.",
    specs: {
      style: "Illustrative / Micro-Detail",
      placement: "Forearm, Inner Bicep, Ribs, Thigh",
      sessionDuration: "2 - 4 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "crown-tattoos",
    name: "Crown Tattoos",
    category: "Symbol Tattoos",
    image: "/tattoos/crown.jpg",
    briefDescription: "Royal emblem of self-sovereignty, dignity, power, and personal triumph.",
    fullDescription: "Detailed gemstone-encrusted crowns or sleek minimalist tiara contours reflecting inner leadership and self-worth.",
    specs: {
      style: "Black & Grey Realism / Fine Line",
      placement: "Wrist, Behind Ear, Chest, Forearm",
      sessionDuration: "2 - 4 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "vine-tattoos",
    name: "Vine Tattoos",
    category: "Nature Tattoos",
    image: "/tattoos/vine.jpg",
    briefDescription: "Organic flowing flora wrapping gracefully around bodily curves.",
    fullDescription: "Vines symbolize growth, endurance, connectedness, and life's winding journey. Designed to flow seamlessly along wrists, arms, or ankles.",
    specs: {
      style: "Botanical / Fine Line",
      placement: "Wrist, Forearm, Ankle, Collarbone",
      sessionDuration: "2 - 4 Hours",
      painLevel: "Low",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "rose-tattoos",
    name: "Rose Tattoos",
    category: "Nature Tattoos",
    image: "/tattoos/rose.jpg",
    briefDescription: "Classic botanical masterpiece symbolizing passion, delicate beauty, and thorns of resilience.",
    fullDescription: "Soft micro-shaded petals contrasting sharp thorns and dark leaves for an iconic floral statement piece.",
    specs: {
      style: "Black & Grey Realism / Botanical",
      placement: "Forearm, Hand, Shoulder, Thigh",
      sessionDuration: "3 - 5 Hours",
      painLevel: "Mild to Moderate",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "tree-tattoos",
    name: "Tree Tattoos",
    category: "Nature Tattoos",
    image: "/tattoos/tree.jpg",
    briefDescription: "Majestic Tree of Life celebrating deep roots, growth, and connection to nature.",
    fullDescription: "Silhouetted branches and intricate root structures illustrating grounding stability, wisdom, and life cycles.",
    specs: {
      style: "Illustrative / Dotwork",
      placement: "Forearm, Calf, Back, Spine",
      sessionDuration: "2.5 - 5 Hours",
      painLevel: "Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "cloud-tattoos",
    name: "Cloud Tattoos",
    category: "Nature Tattoos",
    image: "/tattoos/cloud.jpg",
    briefDescription: "Ethereal storm and sky clouds bringing atmosphere and emotional depth.",
    fullDescription: "Inspired by traditional Japanese storm clouds and modern fine-line atmosphere, clouds represent transition and high aspirations.",
    specs: {
      style: "Blackwork / Japanese Atmospheric",
      placement: "Sleeve, Chest, Shoulder, Back",
      sessionDuration: "3 - 6 Hours",
      painLevel: "Mild to Moderate",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "sun-tattoos",
    name: "Sun Tattoos",
    category: "Nature Tattoos",
    image: "/tattoos/sun.jpg",
    briefDescription: "Radiant celestial sunburst bestowing warmth, vitality, clarity, and new beginnings.",
    fullDescription: "Geometric solar rays and celestial faces celebrating energy, enlightenment, and daily renewal.",
    specs: {
      style: "Sacred Geometry / Fine Line",
      placement: "Upper Back, Chest, Forearm, Ankle",
      sessionDuration: "2 - 4 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "dragon-tattoos",
    name: "Dragon Tattoos",
    category: "Mythological Tattoos",
    image: "/tattoos/dragon.jpg",
    briefDescription: "Powerful mythic dragon coiling with fierce grace and elemental mastery.",
    fullDescription: "Symbolizing elemental power, wisdom, protection, and fierce independence. Intricately detailed scales and dynamic movement across large body surfaces.",
    specs: {
      style: "Irezumi / Illustrative Blackwork",
      placement: "Full Back, Sleeve, Thigh, Ribs",
      sessionDuration: "5 - 10 Hours",
      painLevel: "Moderate to High",
      pricingNote: "Custom quote provided during consultation based on multi-session scope."
    }
  },
  {
    id: "medusa-tattoos",
    name: "Medusa Tattoos",
    category: "Mythological Tattoos",
    image: "/tattoos/medusa.jpg",
    briefDescription: "Striking gorgon portrait representing survival, power, protection, and feminine strength.",
    fullDescription: "Subverting ancient myth into a modern symbol of resilience against trauma, Medusa's serpent hair and gaze command awe.",
    specs: {
      style: "Black & Grey Realism",
      placement: "Forearm, Thigh, Back, Bicep",
      sessionDuration: "4 - 7 Hours",
      painLevel: "Moderate",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "mermaid-tattoos",
    name: "Mermaid Tattoos",
    category: "Mythological Tattoos",
    image: "/tattoos/mermaid.jpg",
    briefDescription: "Enchanting siren of the deep sea personifying allure, mystery, and ocean freedom.",
    fullDescription: "Fluid water trails, shimmering scales, and ethereal underwater lighting capturing the romantic allure of maritime lore.",
    specs: {
      style: "Illustrative Realism",
      placement: "Thigh, Ribs, Arm, Back",
      sessionDuration: "4 - 6 Hours",
      painLevel: "Mild to Moderate",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "zeus-tattoos",
    name: "Zeus Tattoos",
    category: "Mythological Tattoos",
    image: "/tattoos/zeus.jpg",
    briefDescription: "Commanding Olympian deity wielding lightning bolts and divine authority.",
    fullDescription: "Neoclassical marble sculpture aesthetics with high-contrast lightning energy and storm clouds for a powerful mythological statement.",
    specs: {
      style: "Chiaroscuro Realism / Neoclassical",
      placement: "Full Sleeve, Chest, Back",
      sessionDuration: "5 - 8 Hours",
      painLevel: "Moderate",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "oni-tattoos",
    name: "Oni Tattoos",
    category: "Mythological Tattoos",
    image: "/tattoos/oni.jpg",
    briefDescription: "Fierce Japanese folklore demon mask warding off evil spirits and bad luck.",
    fullDescription: "Intense expressions, sharp horns, and dramatic shading inspired by traditional Noh theater and Irezumi art.",
    specs: {
      style: "Japanese Neotraditional",
      placement: "Forearm, Calf, Chest, Back",
      sessionDuration: "4 - 7 Hours",
      painLevel: "Moderate",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "phoenix-tattoos",
    name: "Phoenix Tattoos",
    category: "Mythological Tattoos",
    image: "/tattoos/phoenix.jpg",
    briefDescription: "Legendary firebird rising triumphantly from ashes into immortal rebirth.",
    fullDescription: "Radiant flame plumage and sweeping tail feathers symbolizing overcoming hardship, transformation, and immortal strength.",
    specs: {
      style: "Illustrative Black & Grey / Color",
      placement: "Spine, Back, Ribs, Sleeve",
      sessionDuration: "4 - 8 Hours",
      painLevel: "Moderate",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "star-tattoos",
    name: "Star Tattoos",
    category: "Spiritual Tattoos",
    image: "/tattoos/star.jpg",
    briefDescription: "Celestial compass stars guiding your path through dark skies.",
    fullDescription: "Minimalist constellation maps and north star vectors symbolizing hope, ambition, and divine guidance.",
    specs: {
      style: "Fine Line / Micro-Geometry",
      placement: "Wrist, Behind Ear, Collarbone, Ankle",
      sessionDuration: "1 - 2.5 Hours",
      painLevel: "Low",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "angel-tattoos",
    name: "Angel Tattoos",
    category: "Spiritual Tattoos",
    image: "/tattoos/angel.jpg",
    briefDescription: "Divine guardian wings embodying protection, grace, and spiritual ascension.",
    fullDescription: "Feathered wings and ethereal halo linework creating a sacred sanctuary of peace and heavenly protection.",
    specs: {
      style: "Fine Line Realism / Chiaroscuro",
      placement: "Back, Forearm, Chest, Shoulder",
      sessionDuration: "3 - 6 Hours",
      painLevel: "Mild to Moderate",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "jesus-tattoos",
    name: "Jesus Tattoos",
    category: "Religious Tattoos",
    image: "/tattoos/jesus.jpg",
    briefDescription: "Revered portrait of divine compassion, sacrifice, and unconditional love.",
    fullDescription: "Masterful Renaissance shading capturing serene expressions, crown of thorns, and sacred heart light rays.",
    specs: {
      style: "Renaissance Realism",
      placement: "Forearm, Bicep, Chest, Back",
      sessionDuration: "4 - 8 Hours",
      painLevel: "Moderate",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "bible-tattoos",
    name: "Bible Tattoos",
    category: "Religious Tattoos",
    image: "/tattoos/bible.jpg",
    briefDescription: "Holy scriptures and scripture verse linework grounded in divine truth.",
    fullDescription: "Fine-line calligraphy of cherished biblical verses coupled with open book and radiant light rays.",
    specs: {
      style: "Calligraphy Script / Fine Line",
      placement: "Forearm, Ribs, Spine, Wrist",
      sessionDuration: "2 - 4 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "dove-tattoos",
    name: "Dove Tattoos",
    category: "Religious Tattoos",
    image: "/tattoos/dove.jpg",
    briefDescription: "Peaceful white dove bearing olive branch of hope, purity, and Holy Spirit.",
    fullDescription: "Delicate wing feathers and soft cloud gradients representing peace, purity, and spiritual renewal.",
    specs: {
      style: "Fine Line / Micro-Realism",
      placement: "Wrist, Shoulder, Collarbone, Forearm",
      sessionDuration: "2 - 3.5 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "mandala-tattoos",
    name: "Mandala Tattoos",
    category: "Religious Tattoos",
    image: "/tattoos/mandala.jpg",
    briefDescription: "Intricate full-back lotus mandala geometry representing cosmic harmony and unity.",
    fullDescription: "Symmetrical concentric circles, lotus petals, and fine dotwork stippling creating a breathtaking meditative centerpiece across the back or sternum.",
    specs: {
      style: "Sacred Geometry / Dotwork",
      placement: "Full Back, Sternum, Shoulder, Thigh",
      sessionDuration: "6 - 10 Hours",
      painLevel: "Moderate to High",
      pricingNote: "Custom quote provided during consultation based on back scale."
    }
  },
  {
    id: "line-tattoos",
    name: "Line Tattoos",
    category: "Tribal Tattoos",
    image: "/tattoos/line.jpg",
    briefDescription: "Precision abstract linework with concentric circles and dotwork vectors.",
    fullDescription: "Minimalist yet complex architectural linework combining concentric balance with single-needle precision.",
    specs: {
      style: "Single Needle / Linework",
      placement: "Forearm, Spine, Bicep, Calf",
      sessionDuration: "2 - 4 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "arrow-tattoos",
    name: "Arrow Tattoos",
    category: "Tribal Tattoos",
    image: "/tattoos/arrow.jpg",
    briefDescription: "Sleek dagger arrow piercing through a crimson heart motif.",
    fullDescription: "Symbolizing focus, direction, resilience under pressure, and passionate vulnerability.",
    specs: {
      style: "Illustrative Linework",
      placement: "Forearm, Spine, Bicep, Ribs",
      sessionDuration: "2 - 3.5 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "triangle-tattoos",
    name: "Triangle Tattoos",
    category: "Tribal Tattoos",
    image: "/tattoos/triangle.jpg",
    briefDescription: "All-seeing eye framed inside sharp geometric diamond and triangle vectors.",
    fullDescription: "Representing perception, mind-body-spirit trinity, and structural balance through fine-line geometry.",
    specs: {
      style: "Geometric Micro-Realism",
      placement: "Forearm, Calf, Bicep, Back",
      sessionDuration: "2.5 - 4.5 Hours",
      painLevel: "Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "sacred-geometry-tattoos",
    name: "Sacred Geometry Tattoos",
    category: "Tribal Tattoos",
    image: "/tattoos/sacred-geometry.jpg",
    briefDescription: "Harmonic mandala compass grid reflecting cosmic proportions and balance.",
    fullDescription: "Mathematical symmetry inspired by golden ratio patterns, Flower of Life, and cosmic blueprints.",
    specs: {
      style: "Sacred Geometry / Dotwork",
      placement: "Chest, Back, Forearm, Thigh",
      sessionDuration: "4 - 7 Hours",
      painLevel: "Moderate",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "diamond-tattoos",
    name: "Diamond Tattoos",
    category: "Tribal Tattoos",
    image: "/tattoos/diamond.jpg",
    briefDescription: "Vibrant faceted gemstone gleaming with rich color blocking and bold outlines.",
    fullDescription: "Unbreakable strength and inner brilliance captured through stained-glass color facets and crisp linework.",
    specs: {
      style: "Neotraditional / Color Faceted",
      placement: "Forearm, Bicep, Ankle, Wrist",
      sessionDuration: "2.5 - 4 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "abstract-geometric-tattoo",
    name: "Abstract Geometric Tattoo",
    category: "Abstract Tattoos",
    image: "/tattoos/abstract-geometric.jpg",
    briefDescription: "Avant-garde back composition featuring vibrant geometric color fields and stippling.",
    fullDescription: "Modern art piece combining primary color blocks, intersecting lines, and fine dotwork texture across the spine.",
    specs: {
      style: "Abstract / Modern Art",
      placement: "Back, Chest, Sleeve, Thigh",
      sessionDuration: "4 - 7 Hours",
      painLevel: "Moderate",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "abstract-line-tattoo",
    name: "Abstract Line Tattoo",
    category: "Abstract Tattoos",
    image: "/tattoos/abstract-line.jpg",
    briefDescription: "Fine-line abstract compass with concentric orbit lines and dark shading accents.",
    fullDescription: "Pure linework exploration blending linear geometry with soft dotwork contrast for a refined modern aesthetic.",
    specs: {
      style: "Fine Line Linework",
      placement: "Forearm, Inner Arm, Calf, Back",
      sessionDuration: "2 - 4 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "abstract-liner-tattoo",
    name: "Abstract Liner Tattoo",
    category: "Abstract Tattoos",
    image: "/tattoos/abstract-liner.jpg",
    briefDescription: "High-expression cross-hatch portrait linework artwork.",
    fullDescription: "Dynamic sketch-style portrait rendering emotion and human form through expressive cross-hatching and contour lines.",
    specs: {
      style: "Sketch / Cross-hatch Linework",
      placement: "Forearm, Bicep, Back, Thigh",
      sessionDuration: "3 - 5 Hours",
      painLevel: "Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "abstract-minimalist-tattoo",
    name: "Abstract Minimalist Tattoo",
    category: "Abstract Tattoos",
    image: "/tattoos/abstract-minimalist.jpg",
    briefDescription: "Delicate single-needle spine compass tattoo with subtle orbit rings.",
    fullDescription: "Understated elegance placed along the neck and upper spine, designed for lovers of subtle, clean aesthetic ink.",
    specs: {
      style: "Minimalist / Single Needle",
      placement: "Upper Spine, Neck, Wrist, Ankle",
      sessionDuration: "1.5 - 3 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "abstract-watercolor-tattoo",
    name: "Abstract Watercolor Tattoo",
    category: "Abstract Tattoos",
    image: "/tattoos/abstract-watercolor.jpg",
    briefDescription: "Vibrant watercolor splash geometric back piece glowing with rich pigments.",
    fullDescription: "Fluid watercolor paint drips bleeding behind structured black geometry to create a painting on skin.",
    specs: {
      style: "Watercolor / Geometric Hybrid",
      placement: "Upper Back, Neck, Forearm, Ribs",
      sessionDuration: "3.5 - 6 Hours",
      painLevel: "Mild to Moderate",
      pricingNote: "Custom quote provided during consultation."
    }
  },
  {
    id: "abstract-shape-tattoos",
    name: "Abstract Shape Tattoos",
    category: "Abstract Tattoos",
    image: "/tattoos/abstract-shape.jpg",
    briefDescription: "Bauhaus-inspired colorful geometric shapes with dotwork contrast.",
    fullDescription: "Playful yet structured balance of curves, crescent shapes, and rich coral and forest green accents.",
    specs: {
      style: "Bauhaus / Graphic Abstract",
      placement: "Forearm, Bicep, Calf, Ankle",
      sessionDuration: "2.5 - 4.5 Hours",
      painLevel: "Low to Mild",
      pricingNote: "Custom quote provided during consultation."
    }
  }
];

export function getTattooById(id: string): TattooItemData | undefined {
  const normalizedId = id.toLowerCase().trim();
  
  // Direct match
  const match = ALL_TATTOOS.find((t) => t.id === normalizedId);
  if (match) return match;

  // Partial match by slug/name
  return ALL_TATTOOS.find((t) => 
    normalizedId.includes(t.id.replace("-tattoos", "")) || 
    t.id.includes(normalizedId) ||
    t.name.toLowerCase().includes(normalizedId)
  );
}
