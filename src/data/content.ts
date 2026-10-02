export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  details: string;
  image: string;
  category: string;
}

export interface WorkItem {
  id: string;
  category: "Residential" | "Commercial" | "Water Heaters" | "Drain & Sewer" | "Remodels";
  title: string;
  location: string;
  image: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  service: string;
}

export const BUSINESS_INFO = {
  name: "Plumbing Pure",
  founder: "Alexei Doubianski",
  founded: "2016",
  experienceYears: "20+",
  phone: "(415) 715-9933",
  phoneRaw: "4157159933",
  email: "alexei@plumbingpure.com",
  address: "319 27th Ave, San Francisco, CA 94121",
  serviceArea: "San Francisco & Marin County",
  coreMessage: "Straightforward plumbing. Done right.",
  supportingMessage: "Residential, commercial, and emergency plumbing across San Francisco and Marin County."
};

export const ASSET_IMAGES = {
  hero: `${import.meta.env.BASE_URL}images/hero_plumbing_architectural_1790874543321.jpg`,
  waterHeater: `${import.meta.env.BASE_URL}images/water_heater_mechanical_1790874557196.jpg`,
  drainCleaning: `${import.meta.env.BASE_URL}images/drain_cleaning_equipment_1790874569052.jpg`,
  piping: `${import.meta.env.BASE_URL}images/pipework_plumbing_detail_1790874578618.jpg`,
  remodeling: `${import.meta.env.BASE_URL}images/remodel_bathroom_luxury_1790874589220.jpg`
};

export const SERVICES: ServiceItem[] = [
  {
    id: "emergency",
    num: "01",
    title: "Emergency Plumbing",
    shortDesc: "Fast help when something can't wait.",
    details: "Rapid diagnosis and direct remediation for burst supply lines, active leaks, sewer backups, and urgent valve failures.",
    image: ASSET_IMAGES.piping,
    category: "Urgent"
  },
  {
    id: "water-heaters",
    num: "02",
    title: "Water Heaters",
    shortDesc: "Installation, repair, and replacement.",
    details: "High-efficiency tankless units, standard gas & electric tanks, recirculation pumps, and precision venting.",
    image: ASSET_IMAGES.waterHeater,
    category: "Specialty"
  },
  {
    id: "drain-cleaning",
    num: "03",
    title: "Drain Cleaning",
    shortDesc: "Clear stubborn clogs and slow drains.",
    details: "Heavy-duty electric snaking, mainline video camera scoping, and hydro-jetting for clear sewer laterals.",
    image: ASSET_IMAGES.drainCleaning,
    category: "Drainage"
  },
  {
    id: "sewer-piping",
    num: "04",
    title: "Sewer & Piping",
    shortDesc: "Repairs, replacement, and underground piping.",
    details: "Copper repiping, earthquake shut-off valves, PRV regulators, sewer lateral repairs, and trenchless solutions.",
    image: ASSET_IMAGES.piping,
    category: "Infrastructure"
  },
  {
    id: "fixtures",
    num: "05",
    title: "Fixtures",
    shortDesc: "Faucets, toilets, and plumbing fixtures.",
    details: "Installation of architectural wall-mounted faucets, concealed toilet tanks, vessel sinks, and thermostatic shower valves.",
    image: ASSET_IMAGES.hero,
    category: "Interior"
  },
  {
    id: "remodeling",
    num: "06",
    title: "Remodeling",
    shortDesc: "Plumbing work for kitchens, bathrooms, and renovations.",
    details: "Comprehensive rough-in and finish plumbing for historic SF Victorian, Edwardian, and modern architectural renovations.",
    image: ASSET_IMAGES.remodeling,
    category: "Renovation"
  }
];

export const TRUST_PILLARS = [
  {
    num: "01",
    title: "CLEAR COMMUNICATION",
    desc: "No unnecessary confusion."
  },
  {
    num: "02",
    title: "HONEST ADVICE",
    desc: "Understand your options before deciding."
  },
  {
    num: "03",
    title: "EXPERIENCED SERVICE",
    desc: "Years of plumbing experience behind every job."
  },
  {
    num: "04",
    title: "LOCAL KNOWLEDGE",
    desc: "Serving San Francisco and Marin County."
  }
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "TALK",
    desc: "Tell us what you need."
  },
  {
    num: "02",
    title: "ASSESS",
    desc: "We understand the problem and options."
  },
  {
    num: "03",
    title: "SOLVE",
    desc: "We complete the work with care."
  },
  {
    num: "04",
    title: "FOLLOW THROUGH",
    desc: "We make sure everything is working properly."
  }
];

export const RECENT_WORK: WorkItem[] = [
  {
    id: "work-1",
    category: "Residential",
    title: "Presidio Heights Master Bath",
    location: "San Francisco",
    image: ASSET_IMAGES.hero,
    description: "Thermostatic rough-in with freestanding soaking tub and unlacquered brass exposed supply lines."
  },
  {
    id: "work-2",
    category: "Water Heaters",
    title: "Mill Valley Tankless Conversion",
    location: "Marin County",
    image: ASSET_IMAGES.waterHeater,
    description: "Multi-point continuous gas tankless system with dedicated recirculating loop."
  },
  {
    id: "work-3",
    category: "Drain & Sewer",
    title: "Richmond District Lateral Inspection",
    location: "San Francisco",
    image: ASSET_IMAGES.drainCleaning,
    description: "Full-line HD video camera diagnostic and heavy root clearout restoring full flow."
  },
  {
    id: "work-4",
    category: "Remodels",
    title: "Pacific Heights Victorian Renovation",
    location: "San Francisco",
    image: ASSET_IMAGES.remodeling,
    description: "Complete copper water line replumb, custom double vanity plumbing, and walk-in shower rough-ins."
  },
  {
    id: "work-5",
    category: "Commercial",
    title: "Sausalito Waterfront Mechanical",
    location: "Marin County",
    image: ASSET_IMAGES.piping,
    description: "Pressure reducing valve manifold, commercial grease trap connection, and backflow certification."
  }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: "t1",
    quote: "Alexei came out to diagnose a tricky leak in our 1920s Richmond flat that another company wanted to tear our entire wall down for. He located the exact fitting in minutes and fixed it cleanly.",
    author: "Julian M.",
    location: "Inner Richmond, San Francisco",
    service: "Leak Diagnosis & Piping"
  },
  {
    id: "t2",
    quote: "Straightforward communication from the first phone call. Replaced our failing 50-gallon water heater with a Navien tankless system. The copper work is like artwork.",
    author: "Elena R.",
    location: "Mill Valley, Marin County",
    service: "Tankless Water Heater Installation"
  },
  {
    id: "t3",
    quote: "Pure professionalism. Clean booties on inside, honest options with zero upselling, and fair pricing. The only plumber we call now.",
    author: "David K.",
    location: "Pacific Heights, San Francisco",
    service: "Drain Cleaning & Fixture Replacement"
  }
];

export const SERVICE_AREAS = {
  sf: [
    "Richmond District",
    "Sunset District",
    "Pacific Heights",
    "Marina",
    "Presidio Heights",
    "Noe Valley",
    "Mission District",
    "Potrero Hill",
    "Russian Hill",
    "Nob Hill",
    "SoMa",
    "Haight-Ashbury"
  ],
  marin: [
    "Sausalito",
    "Mill Valley",
    "Tiburon",
    "Corte Madera",
    "Larkspur",
    "San Rafael",
    "Ross",
    "San Anselmo",
    "Novato"
  ]
};
