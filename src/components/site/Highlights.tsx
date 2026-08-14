import { BedDouble, UtensilsCrossed, Snowflake, ShieldCheck, MapPin, PhoneCall } from "lucide-react";
import { Section } from "./Section";

const items = [
  { Icon: BedDouble, title: "Double Sharing", text: "Comfortable double-sharing accommodation" },
  { Icon: UtensilsCrossed, title: "Food Included", text: "Food/mess included with your stay" },
  { Icon: Snowflake, title: "AC & Non-AC", text: "Choose according to your preference" },
  { Icon: ShieldCheck, title: "Secure Stay", text: "CCTV and essential security facilities" },
  { Icon: MapPin, title: "Dankaur Location", text: "Jaat Colony, Dankaur" },
  { Icon: PhoneCall, title: "Easy Enquiry", text: "Call or WhatsApp directly" },
];

export function Highlights() {
  return (
    <Section className="!py-10 md:!py-12">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ Icon, title, text }) => (
          <li
            key={title}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-transform hover:-translate-y-0.5"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-semibold">{title}</span>
              <span className="mt-1 block text-sm text-muted-foreground">{text}</span>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
