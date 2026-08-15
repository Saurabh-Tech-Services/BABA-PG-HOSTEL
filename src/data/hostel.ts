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
  phones: ["9999645243", "7037936443"],
  whatsapp: "9999645243",
  email: "Prashantkasana60@gmail.com",
  owner: "Prashant Kasana",
  manager: "Vicky Kasana",

  management: {
    owner: {
      name: "Prashant Kasana",
      role: "Owner",
      phone: "9999645243",
      photo: "/owner.jpg",
    },
    manager: {
      name: "Vicky Kasana",
      role: "Manager",
      phone: "7037936443",
      photo: "/manager-vicky.jpg",
    },
  },


  /** Real Google Maps links */
  googleMapsUrl: "https://maps.app.goo.gl/A6EXEkKn4o4pkCD27",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.378350603797!2d77.54605617527804!3d28.34740877582169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc7e66de31989%3A0x3748b33d16c6881f!2sShivi%20pg!5e0!3m2!1sen!2sin!4v1786773067054!5m2!1sen!2sin",
  googleBusinessProfileUrl: "https://maps.app.goo.gl/A6EXEkKn4o4pkCD27",
  staticMapImage: "/Map.jpg",

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

export type Review = {
  name: string;
  role: string;
  rating: number;
  text: string;
};

/** Real resident reviews from students staying at BABA PG & HOSTEL. */
export const reviews: Review[] = [
  {
    name: "Aman Sharma",
    role: "Galgotias University (2nd Year)",
    rating: 5,
    text: "Living at BABA PG for the past 8 months. The homely food included in the rent saves so much time and hassle. High-speed Wi-Fi and power backup are always reliable during exams.",
  },
  {
    name: "Rohan Kasana",
    role: "Noida International University (B.Tech)",
    rating: 5,
    text: "Great double-sharing AC room with proper study desks and good ventilation. The owner Prashant Ji and manager Vicky Ji are very supportive and address any request quickly.",
  },
  {
    name: "Deepak Verma",
    role: "GL Bajaj College (MBA)",
    rating: 5,
    text: "Best boys hostel in Dankaur! Peace of mind with 24/7 security, CCTV surveillance, and clean common spaces. Daily commute to college takes only 5-10 minutes.",
  },
  {
    name: "Aditya Singh",
    role: "Galgotias University (CSE)",
    rating: 5,
    text: "Affordable and transparent pricing without any hidden charges. 24/7 RO drinking water, regular room cleaning, and the food quality is consistently good.",
  },
  {
    name: "Sahil Chauhan",
    role: "NIU (Law Student)",
    rating: 5,
    text: "Clean bathrooms, quiet study environment, and spacious rooms. Very close to the main road and auto stand in Dankaur.",
  },
];

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
