/**
 * Single source of truth for all BABA PG & HOSTEL business information.
 * Edit values here — every page reads from this file.
 */

export const hostel = {
  name: "BABA PG & HOSTEL",
  type: "Boys Hostel / PG",
  tagline: "Comfortable Boys PG & Hostel in Dankaur",
  address: {
    street: "Atta Road",
    locality: "Jaat Colony",
    city: "Dankaur",
    district: "Greater Noida, Gautam Buddha Nagar",
    state: "Uttar Pradesh",
    pincode: "203201",
    country: "India",
  },
  phones: ["7037936443", "9999645243"],
  whatsapp: "9999645243",
  email: "Prashantkasana60@gmail.com",
  owner: "Prashant Kasana",
  manager: "Vicky Kasana",

  management: {
    owner: {
      name: "Prashant Kasana",
      role: "Owner",
      phone: "7037936443",
      photo: "/src/assets/owner.jpg",
    },
    manager: {
      name: "Vicky Kasana",
      role: "Manager",
      phone: "9999645243",
      photo: "/src/assets/manager-vicky.jpg",
    },
  },


  /** Add the real links here when available — sections stay hidden until then. */
  googleMapsUrl: "",
  googleMapsEmbedUrl: "",
  googleBusinessProfileUrl: "",

  /** Only supplied links are rendered. */
  social: {
    instagram: "",
    facebook: "",
    twitter: "",
    youtube: "",
  },
} as const;

export const fullAddress = `${hostel.address.street}, ${hostel.address.locality}, ${hostel.address.city}, ${hostel.address.district.split(",")[0]}, ${hostel.address.state} – ${hostel.address.pincode}`;

export const securityDeposit = {
  amount: 4000,
  label: "₹4,000 Refundable Security Deposit",
};

export const acSecurityDeposit = {
  amount: 6000,
  label: "₹6,000 Refundable Security Deposit",
};

export type RoomPlan = {
  id: "non-ac" | "ac";
  name: string;
  shortName: string;
  price: number;
  popular?: boolean;
  features: string[];
};

export const roomPlans: RoomPlan[] = [
  {
    id: "non-ac",
    name: "Double Sharing — Non-AC",
    shortName: "Non-AC",
    price: 8000,
    features: [
      "Double sharing room",
      "Bed & mattress",
      "Fan",
      "Food included",
      "Essential daily facilities",
      securityDeposit.label,
    ],
  },
  {
    id: "ac",
    name: "Double Sharing — AC",
    shortName: "AC",
    price: 12000,
    popular: true,
    features: [
      "Double sharing room",
      "Air conditioning",
      "Bed & mattress",
      "Food included",
      "Essential daily facilities",
      acSecurityDeposit.label,
    ],
  },
];

export const formatPrice = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export type FacilityGroup = { group: string; items: string[] };

export const facilityGroups: FacilityGroup[] = [
  {
    group: "Comfort",
    items: ["Bed", "Mattress", "Fan", "Air Conditioning", "Geyser", "Study Table", "Table & Chair"],
  },
  {
    group: "Connectivity & Utilities",
    items: ["Wi-Fi", "24/7 Electricity", "Power Backup", "RO Water", "Drinking Water"],
  },
  {
    group: "Food",
    items: ["Breakfast", "Lunch", "Dinner", "Food Included in Rent"],
  },
  {
    group: "Cleaning",
    items: ["Housekeeping", "Laundry", "Washing Machine", "Room Cleaning"],
  },
  {
    group: "Safety",
    items: ["CCTV", "Safe & Secure Environment"],
  },
  {
    group: "Common Facilities",
    items: ["Common Area", "Balcony", "Attached Bathroom", "Common Bathroom", "Parking"],
  },
];

export type NearbyPlace = { name: string; note: string; distance?: string };

/** Distances are approximate — clear the `distance` field to hide it. */
export const nearbyPlaces: NearbyPlace[] = [
  { name: "GL Bajaj College", note: "Nearby college option", distance: "Approx. 1 km" },
  { name: "Galgotias University", note: "Nearby educational destination", distance: "Approx. 1.5 km" },
  {
    name: "Noida International University (NIU)",
    note: "Nearby university campus",
    distance: "Approx. 1.5 km",
  },
];

export const highlights = [
  "Boys Hostel",
  "Double Sharing",
  "Food Included",
  "AC & Non-AC Options",
  "₹4,000 Refundable Security",
];

/** Real student reviews go here — the section shows an empty state while this is empty. */
export const reviews: { name: string; text: string }[] = [];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Rooms", to: "/rooms" },
  { label: "Facilities", to: "/facilities" },
  { label: "Pricing", to: "/pricing" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const telHref = (phone: string) => `tel:+91${phone}`;

export const whatsappHref = (
  message = "Hello BABA PG & HOSTEL, I would like to enquire about room availability and pricing.",
) => `https://wa.me/91${hostel.whatsapp}?text=${encodeURIComponent(message)}`;
