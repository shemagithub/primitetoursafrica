import heroGorilla from "@/assets/hero-gorilla.jpg";
import chimpNyungwe from "@/assets/chimp-nyungwe.jpg";
import goldenMonkey from "@/assets/golden-monkey.jpg";
import rwandaSafari from "@/assets/rwanda-safari.jpg";
import heroVolcanoes from "@/assets/hero-volcanoes.jpg";
import birding from "@/assets/birding.jpg";
import gorillaFamily from "@/assets/gorilla-family.jpg";
import gorillaEyes from "@/assets/gorilla-eyes.jpg";
import trekkersForest from "@/assets/trekkers-forest.jpg";
import rwandaHills from "@/assets/rwanda-hills.jpg";
import safariLodge from "@/assets/safari-lodge.jpg";
import kigaliSkyline from "@/assets/kigali-skyline.jpg";

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  body: string;
}

export interface Tour {
  id: string;
  title: string;
  park: string;
  duration: string;
  price: string;
  description: string;
  longDescription: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  difficulty: string;
  bestTime: string;
  groupSize: string;
  image: string;
  gallery: GalleryImage[];
  featured: boolean;
}

export const tours: Tour[] = [
  {
    id: "gorilla-trekking",
    title: "Gorilla Trekking",
    park: "Volcanoes National Park",
    duration: "1-3 Days",
    price: "From $1,500/person (Permit)",
    description:
      "Rwanda's iconic mountain gorilla experience. Trek through bamboo forests to spend a life-changing hour with a habituated gorilla family.",
    longDescription:
      "Stand face to face with one of the world's last remaining mountain gorilla populations in the mist-shrouded Virunga volcanoes. Led by expert trackers and park rangers, you'll hike through bamboo zones and dense montane forest until you reach a habituated family — then spend a full, unforgettable hour observing silverbacks, mothers, and playful juveniles in their natural habitat. Every permit directly funds conservation and community development.",
    highlights: [
      "One hour with a habituated mountain gorilla family",
      "Expert local trackers and park ranger guides",
      "Volcanoes National Park — home to Dian Fossey's legacy",
      "Optional golden monkey add-on or cultural village visit",
      "Luxury lodge or boutique guesthouse accommodation",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Briefing",
        body: "Private transfer from Kigali to Volcanoes National Park. Evening briefing at park headquarters covering trekking etiquette, what to expect, and group assignment for the following day.",
      },
      {
        day: 2,
        title: "Gorilla Trek",
        body: "Early morning trek (2–6 hours depending on family location). One magical hour with the gorillas, followed by certificate presentation and return to lodge. Optional afternoon at Iby'Iwacu cultural village.",
      },
      {
        day: 3,
        title: "Departure or Extension",
        body: "Leisurely breakfast and scenic drive back to Kigali, or extend with golden monkey trekking, Bisoke volcano hike, or a second gorilla trek.",
      },
    ],
    inclusions: [
      "Gorilla trekking permit ($1,500 value)",
      "Professional guide and park ranger fees",
      "Accommodation (1-2 nights)",
      "All meals during the safari",
      "Private 4x4 transport",
      "Bottled water in vehicle",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses and tips",
      "Visa fees",
      "Optional activities not listed",
    ],
    difficulty: "Moderate — 2 to 6 hours trekking at 2,500–4,000m altitude",
    bestTime: "June–September & December–February (dry seasons)",
    groupSize: "Maximum 8 trekkers per gorilla family",
    image: heroGorilla,
    gallery: [
      { src: heroGorilla, caption: "Silverback in the mist — Volcanoes NP" },
      { src: gorillaFamily, caption: "A habituated gorilla family at rest" },
      { src: gorillaEyes, caption: "An unforgettable close encounter" },
      { src: heroVolcanoes, caption: "The Virunga volcano skyline" },
      { src: trekkersForest, caption: "Trekking through bamboo forest" },
      { src: safariLodge, caption: "Luxury lodge with volcano views" },
    ],
    featured: true,
  },
  {
    id: "chimp-trekking",
    title: "Chimpanzee Trekking",
    park: "Nyungwe Forest",
    duration: "2-4 Days",
    price: "From $200/person",
    description:
      "Track our closest living relatives through the oldest rainforest in central Africa, home to vibrant biodiversity.",
    longDescription:
      "Nyungwe Forest National Park is one of Africa's oldest rainforests — a cathedral of ancient trees where chimpanzees, colobus monkeys, and over 300 bird species thrive. Follow experienced trackers through moss-covered trails as chimpanzee calls echo through the canopy. The experience is raw, immersive, and unlike anything on the savanna.",
    highlights: [
      "Track wild chimpanzees in ancient montane rainforest",
      "Canopy walkway — 70m above the forest floor",
      "13 primate species including colobus monkeys",
      "Over 300 bird species for enthusiasts",
      "Tea plantation visits in surrounding highlands",
    ],
    itinerary: [
      {
        day: 1,
        title: "Journey to Nyungwe",
        body: "Scenic drive from Kigali through rolling tea country to Nyungwe. Check in at forest lodge and evening orientation on chimp tracking protocols.",
      },
      {
        day: 2,
        title: "Chimpanzee Trek",
        body: "Pre-dawn departure to track chimpanzee communities. Trek 2–4 hours through dense forest. Afternoon canopy walkway experience suspended above the treetops.",
      },
      {
        day: 3,
        title: "Forest Exploration",
        body: "Optional colobus monkey trek, waterfall hike, or birding walk. Visit a local tea cooperative before returning to Kigali.",
      },
    ],
    inclusions: [
      "Chimpanzee trekking permit",
      "Canopy walkway entry",
      "Expert guide and park fees",
      "Accommodation and meals",
      "Private transport",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses and tips",
      "Visa fees",
    ],
    difficulty: "Moderate — steep, muddy trails in humid forest conditions",
    bestTime: "Year-round; chimps easier to track in wet season (more fruit)",
    groupSize: "Maximum 8 trekkers per group",
    image: chimpNyungwe,
    gallery: [
      { src: chimpNyungwe, caption: "Chimpanzee in Nyungwe's ancient canopy" },
      { src: trekkersForest, caption: "Deep forest trekking trails" },
      { src: rwandaHills, caption: "Rolling hills of tea country" },
      { src: rwandaSafari, caption: "Nyungwe's lush rainforest" },
      { src: birding, caption: "Albertine Rift endemic species" },
    ],
    featured: false,
  },
  {
    id: "golden-monkey",
    title: "Golden Monkey Trekking",
    park: "Volcanoes National Park",
    duration: "1-2 Days",
    price: "From $100/person",
    description:
      "Observe the playful, endemic golden monkeys as they leap through the bamboo zone of the Virunga volcanoes.",
    longDescription:
      "The golden monkey is endemic to the Virunga massif — a dazzling, acrobatic primate found only in the bamboo forests of Rwanda, Uganda, and DRC. This shorter trek is perfect as a standalone experience or as an add-on to gorilla trekking, offering lighter hiking and incredible photographic opportunities as troops leap between bamboo stems.",
    highlights: [
      "Endemic golden monkey species — found nowhere else on Earth",
      "Shorter, less strenuous trek than gorilla tracking",
      "Perfect add-on to a gorilla safari",
      "Excellent photography in bamboo forest light",
      "Same stunning Virunga volcano backdrop",
    ],
    itinerary: [
      {
        day: 1,
        title: "Golden Monkey Trek",
        body: "Morning briefing and short trek (1–3 hours) into the bamboo zone. Spend up to one hour with a golden monkey troop. Afternoon at leisure or optional cultural visit.",
      },
      {
        day: 2,
        title: "Return to Kigali",
        body: "Relaxed morning at lodge with volcano views. Scenic transfer back to Kigali with optional stop at the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund.",
      },
    ],
    inclusions: [
      "Golden monkey trekking permit",
      "Park ranger and guide fees",
      "Accommodation (1 night)",
      "Meals and private transport",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses and tips",
      "Visa fees",
    ],
    difficulty: "Easy to moderate — 1 to 3 hours on bamboo forest trails",
    bestTime: "Year-round; dry seasons offer clearer volcano views",
    groupSize: "Maximum 8 trekkers per group",
    image: goldenMonkey,
    gallery: [
      { src: goldenMonkey, caption: "Golden monkey leaping through bamboo" },
      { src: heroVolcanoes, caption: "Virunga peaks at dawn" },
      { src: trekkersForest, caption: "Light-filled bamboo zone trails" },
      { src: gorillaFamily, caption: "Primate country — Volcanoes NP" },
    ],
    featured: false,
  },
  {
    id: "rwanda-grand",
    title: "Rwanda Grand Safari",
    park: "Multiple Parks",
    duration: "7 Days",
    price: "From $3,500/person",
    description:
      "The ultimate journey: gorillas, chimps, Akagera savanna safari, and a poignant Kigali cultural tour.",
    longDescription:
      "This is Rwanda in full — from the misty volcanoes of the north to the ancient rainforest of Nyungwe and the sweeping savannas of Akagera. Over seven days you'll encounter mountain gorillas, chimpanzees, the Big Five, and the resilient spirit of Kigali. Every transfer, lodge, and guide is handpicked for seamless luxury.",
    highlights: [
      "Mountain gorilla trekking in Volcanoes NP",
      "Chimpanzee tracking in Nyungwe Forest",
      "Big Five game drives in Akagera National Park",
      "Kigali Genocide Memorial and city tour",
      "Handpicked luxury lodges throughout",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kigali Arrival",
        body: "Airport meet-and-greet, city tour including Genocide Memorial and local craft markets. Welcome dinner at a premier Kigali restaurant.",
      },
      {
        day: 2,
        title: "Transfer to Volcanoes",
        body: "Drive to Volcanoes National Park through the Land of a Thousand Hills. Lodge check-in and trekking briefing.",
      },
      {
        day: 3,
        title: "Gorilla Trek",
        body: "Full gorilla trekking experience with one hour with a habituated family. Afternoon at leisure.",
      },
      {
        day: 4,
        title: "Nyungwe Forest",
        body: "Scenic transfer to Nyungwe. Canopy walkway and forest lodge arrival.",
      },
      {
        day: 5,
        title: "Chimpanzee Trek",
        body: "Morning chimp tracking in Nyungwe. Afternoon birding or waterfall walk.",
      },
      {
        day: 6,
        title: "Akagera Safari",
        body: "Transfer to Akagera National Park. Afternoon and evening game drives — lions, elephants, giraffes, and hippos.",
      },
      {
        day: 7,
        title: "Departure",
        body: "Morning game drive, then return to Kigali for international departure.",
      },
    ],
    inclusions: [
      "Gorilla and chimpanzee permits",
      "Akagera park fees and game drives",
      "6 nights luxury accommodation",
      "All meals and private 4x4 transport",
      "Expert guide throughout",
      "Kigali city tour",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses and tips",
      "Visa fees",
      "Optional golden monkey trek",
    ],
    difficulty: "Moderate — multiple trekking days at varying altitudes",
    bestTime: "June–September & December–February",
    groupSize: "Private or small groups up to 6 guests",
    image: rwandaSafari,
    gallery: [
      { src: rwandaSafari, caption: "Akagera savanna at golden hour" },
      { src: safariLodge, caption: "Handpicked luxury lodges" },
      { src: heroGorilla, caption: "Mountain gorilla trekking" },
      { src: chimpNyungwe, caption: "Chimpanzee tracking in Nyungwe" },
      { src: kigaliSkyline, caption: "Kigali city tour & memorial" },
      { src: rwandaHills, caption: "The Land of a Thousand Hills" },
    ],
    featured: true,
  },
  {
    id: "east-africa-combo",
    title: "East Africa Combo",
    park: "Rwanda, Uganda, Kenya",
    duration: "10 Days",
    price: "From $6,000/person",
    description:
      "Cross borders to experience Rwanda's gorillas, Uganda's wildlife, and the sweeping plains of Kenya's Masai Mara.",
    longDescription:
      "The definitive East African adventure. Begin with Rwanda's mountain gorillas, cross into Uganda's Queen Elizabeth National Park for tree-climbing lions and Kazinga Channel boat safaris, then fly to Kenya's Masai Mara for the Great Migration spectacle. Three countries, three ecosystems, one extraordinary journey.",
    highlights: [
      "Rwanda gorilla trekking — Volcanoes NP",
      "Uganda tree-climbing lions in Queen Elizabeth NP",
      "Kazinga Channel hippo and buffalo boat cruise",
      "Masai Mara game drives and optional hot air balloon",
      "Cross-border logistics fully handled",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kigali Arrival",
        body: "Welcome to Rwanda. Transfer to hotel and evening briefing on the 10-day journey ahead.",
      },
      {
        day: 2,
        title: "Gorilla Trek",
        body: "Full day gorilla trekking experience in Volcanoes National Park.",
      },
      {
        day: 3,
        title: "Cross to Uganda",
        body: "Scenic drive across the border to Queen Elizabeth National Park, Uganda.",
      },
      {
        day: 4,
        title: "Queen Elizabeth Safari",
        body: "Morning game drive for tree-climbing lions. Afternoon Kazinga Channel boat safari.",
      },
      {
        day: 5,
        title: "Transfer & Flight",
        body: "Drive to Entebbe and fly to Nairobi, Kenya.",
      },
      {
        day: 6,
        title: "Masai Mara",
        body: "Fly to the Masai Mara. Afternoon game drive on the savanna.",
      },
      {
        day: 7,
        title: "Full Day Safari",
        body: "Sunrise and sunset game drives. Optional hot air balloon at dawn.",
      },
      {
        day: 8,
        title: "Mara Exploration",
        body: "Full day on the Mara — big cats, wildebeest herds, and Maasai village visit.",
      },
      {
        day: 9,
        title: "Return to Nairobi",
        body: "Morning game drive, fly back to Nairobi. Farewell dinner.",
      },
      {
        day: 10,
        title: "Departure",
        body: "Transfer to airport for international departure.",
      },
    ],
    inclusions: [
      "Gorilla permit (Rwanda)",
      "All park fees across three countries",
      "Domestic flights (Uganda–Kenya)",
      "9 nights premium accommodation",
      "All meals and private transport",
      "Expert multi-country guide team",
    ],
    exclusions: [
      "International flights",
      "Travel insurance and visas (3 countries)",
      "Hot air balloon safari (optional)",
      "Personal expenses and tips",
    ],
    difficulty: "Moderate to active — long travel days and trekking",
    bestTime: "July–October for Great Migration in the Mara",
    groupSize: "Private or small groups up to 6 guests",
    image: heroVolcanoes,
    gallery: [
      { src: heroVolcanoes, caption: "Rwanda's Virunga volcanoes" },
      { src: rwandaSafari, caption: "Cross-border safari adventure" },
      { src: safariLodge, caption: "Premium camps across East Africa" },
      { src: heroGorilla, caption: "Rwanda gorilla trekking" },
      { src: chimpNyungwe, caption: "Uganda's Queen Elizabeth NP" },
      { src: trekkersForest, caption: "Masai Mara game drives" },
    ],
    featured: false,
  },
  {
    id: "birding-safari",
    title: "Birding Safari",
    park: "Nyungwe & Akagera",
    duration: "5 Days",
    price: "From $450/person",
    description:
      "A specialized tour tracking over 290 bird species across Rwanda's diverse ecosystems.",
    longDescription:
      "Rwanda packs extraordinary avian diversity into a country smaller than Maryland. From Albertine Rift endemics in Nyungwe's ancient forest to waterbirds and raptors on Akagera's lakes and savannas, this specialist itinerary is led by expert birding guides with quality optics provided.",
    highlights: [
      "290+ bird species across two distinct ecosystems",
      "Albertine Rift endemics — including Rockefeller's sunbird",
      "Nyungwe Forest and Akagera National Park",
      "Expert ornithologist guide with quality optics",
      "Shoebill stork excursion (seasonal, Uganda day trip optional)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Nyungwe",
        body: "Transfer from Kigali to Nyungwe Forest. Afternoon introductory birding walk around lodge grounds.",
      },
      {
        day: 2,
        title: "Nyungwe Forest Birding",
        body: "Full day forest birding — target Albertine Rift endemics, turacos, and hornbills. Canopy walkway for canopy species.",
      },
      {
        day: 3,
        title: "Nyungwe Deep Forest",
        body: "Early morning birding on forest trails. Afternoon transfer toward Akagera.",
      },
      {
        day: 4,
        title: "Akagera Wetlands & Savanna",
        body: "Lake Ihema boat safari for waterbirds, papyrus gonolek, and fish eagles. Afternoon savanna raptor watch.",
      },
      {
        day: 5,
        title: "Final Birding & Departure",
        body: "Morning birding session. Return to Kigali with species checklist review.",
      },
    ],
    inclusions: [
      "Expert birding guide",
      "Quality binoculars (loan)",
      "All park and activity fees",
      "4 nights accommodation",
      "All meals and transport",
      "Printed species checklist",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal binoculars (optional)",
      "Visa fees",
    ],
    difficulty: "Easy to moderate — early starts, varied terrain",
    bestTime: "November–April for migratory species; year-round for endemics",
    groupSize: "Small groups up to 6 birders",
    image: birding,
    gallery: [
      { src: birding, caption: "Endemic species in Nyungwe Forest" },
      { src: chimpNyungwe, caption: "Forest canopy birding" },
      { src: rwandaHills, caption: "Albertine Rift landscapes" },
      { src: rwandaSafari, caption: "Akagera wetland species" },
      { src: trekkersForest, caption: "Expert-guided ornithology walks" },
    ],
    featured: false,
  },
];

export const customTourOption = {
  id: "custom",
  name: "Custom Itinerary",
  location: "Your Vision",
  price: "TBD",
  img: trekkersForest,
};

export function getTourById(id: string): Tour | undefined {
  return tours.find((t) => t.id === id);
}

export function getContactTourOptions() {
  return [
    ...tours.map((t) => ({
      id: t.id,
      name: t.title,
      location: t.park,
      price: t.price.replace("/person (Permit)", "").replace("/person", ""),
      img: t.image,
    })),
    customTourOption,
  ];
}
