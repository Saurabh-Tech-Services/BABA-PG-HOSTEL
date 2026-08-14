/**
 * Location landing pages + travel routes to BABA PG & HOSTEL, Dankaur.
 * Distances and fares are approximate and easy to edit here.
 */

export type RouteStep = {
  title: string;
  detail: string;
  meta?: string;
};

export type TravelRoute = {
  from: string;
  slug: string;
  distance: string;
  duration?: string;
  featured?: boolean;
  steps: RouteStep[];
};

export type LocationPage = {
  slug: string;
  name: string;
  shortName: string;
  kind: "Area" | "Campus" | "Highway";
  distance: string;
  tagline: string;
  intro: string;
  sections: { heading: string; body: string }[];
  quickFacts: { label: string; value: string }[];
  keywords: string[];
  /** Drives the unique layout treatment of each page. */
  variant: "split" | "timeline" | "stacked" | "panel" | "editorial" | "grid" | "spotlight";
  accent: "brand" | "accent" | "surface";
};

export const travelRoutes: TravelRoute[] = [
  {
    from: "Galgotias University",
    slug: "galgotias",
    distance: "Around 1.5 Kms",
    duration: "5–7 minutes",
    featured: true,
    steps: [
      {
        title: "Exit the Galgotias University main gate",
        detail: "Walk out to the main road facing the campus entrance.",
        meta: "2 min walk",
      },
      {
        title: "Take an auto to Dankaur",
        detail: "Shared autos run continuously towards Dankaur town.",
        meta: "₹10 only",
      },
      {
        title: "Get down at Dankaur / Atta Road",
        detail: "Ask for Jaat Colony — the auto stand is a short walk away.",
        meta: "3 min ride",
      },
      {
        title: "Reach BABA PG & HOSTEL",
        detail: "Atta Road, Jaat Colony, Dankaur — call us and we will guide you in.",
        meta: "Arrived",
      },
    ],
  },
  {
    from: "New Delhi Railway Station",
    slug: "new-delhi",
    distance: "Around 60 Kms",
    duration: "1.5–2 hours",
    steps: [
      {
        title: "By Taxi — direct drop",
        detail: "Book a cab straight to Dankaur, Jaat Colony. Fastest option with luggage.",
        meta: "₹800–1000 (approx. $10)",
      },
      {
        title: "By Metro — Step 1",
        detail: "Board at New Delhi Metro Station.",
        meta: "Blue / Magenta interchange",
      },
      {
        title: "By Metro — Step 2",
        detail: "Travel up to Pari Chowk Metro Station, Greater Noida.",
        meta: "Aqua Line",
      },
      {
        title: "By Metro — Step 3",
        detail: "Take an auto from Pari Chowk to Dankaur.",
        meta: "₹50",
      },
      {
        title: "Reach BABA PG & HOSTEL",
        detail: "Atta Road, Jaat Colony, Dankaur, Greater Noida.",
        meta: "Arrived",
      },
    ],
  },
  {
    from: "Noida International University (NIU)",
    slug: "niu",
    distance: "Around 1.5 Kms",
    duration: "5–8 minutes",
    steps: [
      { title: "Exit NIU campus gate", detail: "Head towards the Yamuna Expressway service road.", meta: "2 min" },
      { title: "Take a shared auto to Dankaur", detail: "Autos towards Dankaur town run frequently.", meta: "₹10–20" },
      { title: "Walk to Jaat Colony", detail: "Atta Road, a short walk from the Dankaur stand.", meta: "Arrived" },
    ],
  },
  {
    from: "GL Bajaj College",
    slug: "gl-bajaj",
    distance: "Around 1 Km",
    duration: "4–6 minutes",
    steps: [
      { title: "Exit GL Bajaj main gate", detail: "Turn towards the Dankaur road.", meta: "1 min" },
      { title: "Auto or short walk", detail: "Autos are available; the walk is comfortable too.", meta: "₹10" },
      { title: "Reach Atta Road, Jaat Colony", detail: "BABA PG & HOSTEL is on Atta Road.", meta: "Arrived" },
    ],
  },
  {
    from: "Pari Chowk, Greater Noida",
    slug: "greater-noida",
    distance: "Around 12 Kms",
    duration: "25–30 minutes",
    steps: [
      { title: "Start at Pari Chowk", detail: "Main transport hub of Greater Noida.", meta: "Metro / bus" },
      { title: "Take an auto or cab to Dankaur", detail: "Direct autos towards Dankaur are easily available.", meta: "₹50" },
      { title: "Reach Jaat Colony", detail: "Atta Road, Dankaur.", meta: "Arrived" },
    ],
  },
  {
    from: "Yamuna Expressway",
    slug: "yamuna-expressway",
    distance: "Around 3 Kms from Dankaur interchange",
    duration: "8–10 minutes",
    steps: [
      { title: "Exit at the Dankaur interchange", detail: "Take the Dankaur exit from the Yamuna Expressway.", meta: "Exit point" },
      { title: "Drive towards Dankaur town", detail: "Straight run on the Dankaur link road.", meta: "5 min" },
      { title: "Turn onto Atta Road", detail: "Jaat Colony is on Atta Road, Dankaur.", meta: "Arrived" },
    ],
  },
  {
    from: "Noida (Sector 18 / City Centre)",
    slug: "noida",
    distance: "Around 40 Kms",
    duration: "1–1.5 hours",
    steps: [
      { title: "Board the Aqua Line", detail: "From Sector 51 / Noida Electronic City towards Depot Station.", meta: "Metro" },
      { title: "Get down at Pari Chowk", detail: "Main Greater Noida stop.", meta: "Aqua Line" },
      { title: "Auto to Dankaur", detail: "Direct autos from Pari Chowk to Dankaur.", meta: "₹50" },
      { title: "Reach BABA PG & HOSTEL", detail: "Atta Road, Jaat Colony, Dankaur.", meta: "Arrived" },
    ],
  },
];

export const locationPages: LocationPage[] = [
  {
    slug: "dankaur",
    name: "Dankaur",
    shortName: "Dankaur",
    kind: "Area",
    distance: "0 Km — we are here",
    variant: "split",
    accent: "brand",
    tagline: "Boys PG & hostel right inside Dankaur town",
    intro:
      "BABA PG & HOSTEL is located on Atta Road in Jaat Colony, Dankaur — a calm residential pocket of Gautam Buddha Nagar that has quietly become one of the most practical places to stay for students studying in Greater Noida.",
    sections: [
      {
        heading: "Why students choose Dankaur",
        body: "Dankaur sits between the Yamuna Expressway and the Greater Noida institutional belt, which means a student can live in an affordable, low-noise neighbourhood and still reach Galgotias University, Noida International University or GL Bajaj College in minutes. Daily essentials — chemists, stationery shops, tea stalls, ATMs and a local market — are all within walking distance of Jaat Colony, so residents rarely need to travel for routine needs.",
      },
      {
        heading: "Everyday living in Jaat Colony",
        body: "Jaat Colony is a residential lane rather than a commercial strip, so evenings stay quiet enough to study. Autos towards Dankaur bus stand and the nearby campuses run through the day, and the road is well used, which makes late returns from campus comfortable. Our building has CCTV coverage, power backup and RO water so the usual small-town concerns — power cuts and water quality — are already handled.",
      },
      {
        heading: "What we offer in Dankaur",
        body: "Double-sharing rooms in AC (₹12,000/month) and non-AC (₹8,000/month) formats, with breakfast, lunch and dinner included in the rent. Wi-Fi, housekeeping, laundry, geyser, study table and parking come as standard. A refundable security deposit of ₹4,000 applies to non-AC rooms and ₹6,000 to AC rooms.",
      },
    ],
    quickFacts: [
      { label: "Locality", value: "Jaat Colony, Atta Road" },
      { label: "District", value: "Gautam Buddha Nagar" },
      { label: "Pincode", value: "203201" },
      { label: "Nearest campuses", value: "Galgotias, NIU, GL Bajaj" },
    ],
    keywords: [
      "PG in Dankaur",
      "hostel in Dankaur",
      "boys PG Dankaur Greater Noida",
      "Dankaur hostel with food",
      "Jaat Colony PG",
    ],
  },
  {
    slug: "galgotias",
    name: "Galgotias University",
    shortName: "Galgotias",
    kind: "Campus",
    distance: "Around 1.5 Kms",
    variant: "timeline",
    accent: "accent",
    tagline: "A ₹10 auto ride from the Galgotias University gate",
    intro:
      "For Galgotias University students, BABA PG & HOSTEL is one of the closest boys accommodations you can find — roughly 1.5 kilometres from campus, reachable by a shared auto that costs about ₹10 and takes five minutes.",
    sections: [
      {
        heading: "Built around the Galgotias timetable",
        body: "Being this close to Galgotias University changes the day completely. Morning lectures do not require a 6 a.m. start, lab sessions that run late are not a transport problem, and a student can come back between classes for a meal or a nap. Meals are served on a schedule that suits campus hours, and food is already included in the monthly rent, so there is no separate mess bill to manage.",
      },
      {
        heading: "Getting to campus",
        body: "Step out of Jaat Colony onto Atta Road, take a shared auto towards Galgotias, and you are at the gate in a few minutes for around ₹10. In the reverse direction autos are equally frequent through the evening. Students who prefer their own two-wheeler can park on the premises.",
      },
      {
        heading: "Rooms for Galgotias students",
        body: "Double-sharing rooms only, so there is always a roommate to split study hours with but never a crowded dormitory. AC rooms at ₹12,000 and non-AC at ₹8,000 per month, both including three meals a day, Wi-Fi, housekeeping, laundry, RO water, power backup and CCTV security.",
      },
    ],
    quickFacts: [
      { label: "Distance", value: "Around 1.5 Kms" },
      { label: "Auto fare", value: "₹10 only" },
      { label: "Travel time", value: "5–7 minutes" },
      { label: "Rent", value: "₹8,000 / ₹12,000 per month" },
    ],
    keywords: [
      "PG near Galgotias University",
      "hostel near Galgotias University",
      "boys hostel near Galgotias",
      "Galgotias University accommodation Dankaur",
      "PG near Galgotias with food",
    ],
  },
  {
    slug: "niu",
    name: "Noida International University (NIU)",
    shortName: "NIU",
    kind: "Campus",
    distance: "Around 1.5 Kms",
    variant: "panel",
    accent: "brand",
    tagline: "Minutes from the NIU campus, on the Dankaur side",
    intro:
      "Noida International University sits on the Yamuna Expressway side of Dankaur, about 1.5 kilometres from Jaat Colony. That makes BABA PG & HOSTEL a realistic daily-commute option for NIU students who want a private, food-inclusive stay instead of a shared campus dorm.",
    sections: [
      {
        heading: "A short, cheap commute",
        body: "Shared autos run between the NIU stretch and Dankaur town all day for ₹10–20, and the ride takes under ten minutes. For students with classes spread across the day, being this close means fewer wasted hours and no dependence on long-distance transport.",
      },
      {
        heading: "Made for university routines",
        body: "Three meals a day are included, so the food budget is fixed and predictable. Wi-Fi covers the rooms for online submissions and recorded lectures, power backup keeps devices charged through cuts, and housekeeping plus laundry mean less time spent on chores during exam weeks.",
      },
      {
        heading: "Stay details",
        body: "Boys only, double sharing, AC or non-AC. ₹12,000 per month for AC and ₹8,000 for non-AC, with a refundable security deposit of ₹6,000 and ₹4,000 respectively. Visits can be arranged the same day over a call or WhatsApp message.",
      },
    ],
    quickFacts: [
      { label: "Distance", value: "Around 1.5 Kms" },
      { label: "Auto fare", value: "₹10–20" },
      { label: "Travel time", value: "5–8 minutes" },
      { label: "Food", value: "Included in rent" },
    ],
    keywords: [
      "PG near NIU",
      "hostel near Noida International University",
      "boys PG near NIU Dankaur",
      "NIU student accommodation",
      "PG near NIU with food",
    ],
  },
  {
    slug: "gl-bajaj",
    name: "GL Bajaj College",
    shortName: "GL Bajaj",
    kind: "Campus",
    distance: "Around 1 Km",
    variant: "stacked",
    accent: "surface",
    tagline: "The closest of our campus routes — about a kilometre away",
    intro:
      "GL Bajaj College is roughly a kilometre from Jaat Colony, Dankaur. It is close enough to walk on a good morning and a ₹10 auto ride otherwise, which makes BABA PG & HOSTEL one of the easiest boys PG options for GL Bajaj students.",
    sections: [
      {
        heading: "Walkable distance to college",
        body: "At about one kilometre, the commute stops being a factor in choosing where to live. Students who prefer walking can do it in fifteen minutes; the rest take a shared auto for ₹10. Either way, there is no daily travel cost worth budgeting for and no risk of missing a first-hour class.",
      },
      {
        heading: "Living arrangements",
        body: "Every room is double sharing with a bed, mattress, study table and chair, fan or AC depending on the plan, geyser access and an attached or common bathroom. Housekeeping runs regularly and laundry facilities are on site, so the room stays usable through a busy semester.",
      },
      {
        heading: "Food and daily costs",
        body: "Breakfast, lunch and dinner are part of the rent — ₹8,000 a month for non-AC and ₹12,000 for AC. There is no separate mess charge, no minimum-stay penalty in the pricing, and utilities such as electricity backup, Wi-Fi and RO drinking water are already covered.",
      },
    ],
    quickFacts: [
      { label: "Distance", value: "Around 1 Km" },
      { label: "On foot", value: "About 15 minutes" },
      { label: "Auto fare", value: "₹10" },
      { label: "Room type", value: "Double sharing, boys only" },
    ],
    keywords: [
      "PG near GL Bajaj College",
      "hostel near GL Bajaj Greater Noida",
      "boys PG GL Bajaj Dankaur",
      "GL Bajaj student hostel",
      "PG near GL Bajaj with food",
    ],
  },
  {
    slug: "greater-noida",
    name: "Greater Noida",
    shortName: "Greater Noida",
    kind: "Area",
    distance: "Around 12 Kms from Pari Chowk",
    variant: "editorial",
    accent: "brand",
    tagline: "An affordable base inside the Greater Noida education belt",
    intro:
      "Greater Noida's university corridor runs from Knowledge Park through Pari Chowk and out towards Dankaur. BABA PG & HOSTEL sits at the quieter end of that corridor, about 12 kilometres from Pari Chowk, offering Greater Noida rents that most in-city PGs cannot match.",
    sections: [
      {
        heading: "Why stay in Dankaur instead of the city core",
        body: "Rooms near Pari Chowk and Knowledge Park routinely cost more while offering the same double-sharing format. Staying in Dankaur keeps the monthly outgo at ₹8,000–₹12,000 with food included, and still leaves the main campuses within a short auto ride. For students on a fixed allowance, that difference covers a semester of books and travel.",
      },
      {
        heading: "Connectivity across Greater Noida",
        body: "Pari Chowk is the main hub — Aqua Line metro, city buses and long-distance cabs all converge there, and autos run between Pari Chowk and Dankaur for about ₹50. From Dankaur the Yamuna Expressway is minutes away, which makes weekend travel to Delhi, Agra or Mathura straightforward.",
      },
      {
        heading: "What residents get",
        body: "Double-sharing AC and non-AC rooms, three meals a day, Wi-Fi, 24/7 electricity with power backup, RO water, housekeeping, laundry, geyser, parking and CCTV. Enquiries and visits are handled directly by the owner and manager rather than a broker.",
      },
    ],
    quickFacts: [
      { label: "From Pari Chowk", value: "Around 12 Kms" },
      { label: "Auto fare", value: "₹50" },
      { label: "Metro", value: "Aqua Line to Pari Chowk" },
      { label: "Rent", value: "From ₹8,000 per month" },
    ],
    keywords: [
      "PG in Greater Noida",
      "boys hostel in Greater Noida",
      "affordable PG Greater Noida with food",
      "Greater Noida student accommodation Dankaur",
      "hostel near Pari Chowk",
    ],
  },
  {
    slug: "noida",
    name: "Noida",
    shortName: "Noida",
    kind: "Area",
    distance: "Around 40 Kms",
    variant: "grid",
    accent: "surface",
    tagline: "Connected to Noida by the Aqua Line and the Expressway",
    intro:
      "Noida is about 40 kilometres from Dankaur, connected by the Aqua Line metro through Pari Chowk and by road via the Noida–Greater Noida Expressway. Students and working residents who need occasional access to Noida find Dankaur a far cheaper place to actually live.",
    sections: [
      {
        heading: "The Noida commute, realistically",
        body: "From Jaat Colony, take an auto to Dankaur stand and continue to Pari Chowk for about ₹50, then board the Aqua Line towards Sector 51. The whole trip runs an hour to ninety minutes depending on connections. By road, the Yamuna Expressway into the Noida–Greater Noida Expressway is the fastest route by cab.",
      },
      {
        heading: "Who this suits",
        body: "Students attending Greater Noida campuses who visit Noida for internships, coaching or weekend plans, and residents who want Noida access without Noida rent. A double-sharing room here with all three meals included costs less than a bare room in most Noida sectors.",
      },
      {
        heading: "Included in the rent",
        body: "Meals, Wi-Fi, electricity with backup, RO drinking water, housekeeping, laundry, geyser and parking. Nothing is billed separately except the refundable security deposit — ₹4,000 for non-AC and ₹6,000 for AC rooms.",
      },
    ],
    quickFacts: [
      { label: "Distance", value: "Around 40 Kms" },
      { label: "Metro", value: "Aqua Line via Pari Chowk" },
      { label: "Travel time", value: "1–1.5 hours" },
      { label: "Rent advantage", value: "Food included, from ₹8,000" },
    ],
    keywords: [
      "PG near Noida for students",
      "affordable hostel near Noida",
      "Dankaur PG Noida connectivity",
      "boys PG Noida Greater Noida",
      "hostel near Aqua Line metro",
    ],
  },
  {
    slug: "yamuna-expressway",
    name: "Yamuna Expressway",
    shortName: "Yamuna Expressway",
    kind: "Highway",
    distance: "Around 3 Kms from the Dankaur interchange",
    variant: "spotlight",
    accent: "accent",
    tagline: "Three kilometres from the Dankaur interchange",
    intro:
      "The Yamuna Expressway passes right by Dankaur, and the interchange is roughly three kilometres from Jaat Colony. For families dropping a student off, or residents travelling home on weekends, that proximity removes most of the usual travel friction.",
    sections: [
      {
        heading: "Arriving by car",
        body: "Take the Dankaur exit from the Yamuna Expressway, drive into Dankaur town, and turn onto Atta Road for Jaat Colony. The final stretch takes under ten minutes and the road is usable at any hour. Parking is available on the premises for two-wheelers and visiting cars.",
      },
      {
        heading: "Weekend and holiday travel",
        body: "The Expressway connects Dankaur directly to Greater Noida and Delhi on one side and Mathura, Vrindavan and Agra on the other. Students heading home for a long weekend can board a bus or cab from the Dankaur side without first travelling into the city.",
      },
      {
        heading: "Staying close to the corridor",
        body: "The Expressway corridor around Dankaur is also where Noida International University and the newer institutional development sit, so a room here keeps both the highway and the campuses within a few minutes. Rooms are double sharing, boys only, with food included at ₹8,000 (non-AC) and ₹12,000 (AC) per month.",
      },
    ],
    quickFacts: [
      { label: "From interchange", value: "Around 3 Kms" },
      { label: "Drive time", value: "8–10 minutes" },
      { label: "Onward links", value: "Delhi, Agra, Mathura" },
      { label: "Parking", value: "Available on site" },
    ],
    keywords: [
      "PG near Yamuna Expressway",
      "hostel near Yamuna Expressway Dankaur",
      "accommodation near Dankaur interchange",
      "boys hostel Yamuna Expressway Greater Noida",
      "stay near Yamuna Expressway",
    ],
  },
];

export const getLocation = (slug: string) => locationPages.find((l) => l.slug === slug);
