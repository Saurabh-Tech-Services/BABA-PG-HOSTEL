import { hostel, fullAddress, roomPlans, formatPrice } from "@/data/hostel";

const SITE_ORIGIN = (import.meta.env.VITE_SITE_ORIGIN || "https://shivibabapg.com").replace(/\/$/, "");

export const ogImages = {
  primary: `${SITE_ORIGIN}/og-image.jpg`,
  alt: `${SITE_ORIGIN}/og-image.jpg`,
};

type SeoArgs = {
  title: string;
  description: string;
  path: string;
  ogType?: string;
  image?: string;
};

export function pageHead({ title, description, path, ogType = "website", image = ogImages.primary }: SeoArgs) {
  const fullUrl = path.startsWith("http") ? path : `${SITE_ORIGIN}${path.startsWith("/") ? "" : "/"}${path}`;
  const fullImageUrl = image.startsWith("http") ? image : `${SITE_ORIGIN}${image.startsWith("/") ? "" : "/"}${image}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:site_name", content: hostel.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: fullUrl },
      { property: "og:image", content: fullImageUrl },
      { property: "og:image:secure_url", content: fullImageUrl },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: `${hostel.name} — Boys PG & Hostel in Dankaur` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: fullImageUrl },
    ],
    links: [{ rel: "canonical", href: fullUrl }],
  };
}


export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LodgingBusiness", "LocalBusiness"],
  name: hostel.name,
  description:
    "Boys PG and hostel accommodation in Jaat Colony, Dankaur, Greater Noida with AC and non-AC double sharing rooms and food included.",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${hostel.address.street}, ${hostel.address.locality}`,
    addressLocality: hostel.address.city,
    addressRegion: hostel.address.state,
    postalCode: hostel.address.pincode,
    addressCountry: "IN",
  },
  telephone: hostel.phones.map((p) => `+91${p}`),
  email: hostel.email,
  url: "/",
  priceRange: `${formatPrice(Math.min(...roomPlans.map((r) => r.price)))} - ${formatPrice(Math.max(...roomPlans.map((r) => r.price)))} per month`,
  areaServed: ["Dankaur", "Greater Noida", "Gautam Buddha Nagar"],
};

export const breadcrumbSchema = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name, item: path },
  ],
});

export const faqs = [
  {
    q: "What type of hostel is BABA PG & HOSTEL?",
    a: `${hostel.name} is a boys hostel/PG located in Jaat Colony, Dankaur.`,
  },
  {
    q: "What room options are available?",
    a: "Currently, double-sharing accommodation is available with AC and non-AC options.",
  },
  {
    q: "What is the monthly rent?",
    a: "Non-AC double sharing is ₹8,000/month and AC double sharing is ₹12,000/month.",
  },
  { q: "Is food included?", a: "Yes, food is included." },
  { q: "What is the security deposit?", a: "The security deposit is ₹4,000 and is refundable." },
  { q: "Where is BABA PG & HOSTEL located?", a: `It is located at ${fullAddress}.` },
  {
    q: "Is it suitable for students?",
    a: "The hostel is located near educational institutions including Galgotias University, NIU and GL Bajaj College.",
  },
  {
    q: "How can I enquire about availability?",
    a: `Visitors can call ${hostel.phones[0]} / ${hostel.phones[1]} or contact the hostel through WhatsApp at ${hostel.whatsapp}.`,
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
