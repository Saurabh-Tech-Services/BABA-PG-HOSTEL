import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import roomDouble from "@/assets/room.png";
import { formatPrice, roomPlans, whatsappHref } from "@/data/hostel";
import { Button } from "@/components/ui/button";

const roomFeatures = [
  "Double sharing",
  "AC option available",
  "Non-AC option available",
  "Bed & mattress",
  "Study table, table & chair",
  "Food included",
];

export function RoomShowcase() {
  return (
    <div className="grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-card lg:grid-cols-2">
      <img
        src={roomDouble}
        alt="Double sharing room at BABA PG & HOSTEL Dankaur"
        width={1400}
        height={1000}
        loading="lazy"
        className="h-64 w-full object-cover sm:h-80 lg:h-full"
      />
      <div className="p-6 sm:p-8 lg:py-10">
        <h3 className="text-2xl font-semibold">Double Sharing Room</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          A practical, comfortable room for two, available with or without air conditioning. Food is
          included in the monthly rent.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {roomFeatures.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-4">
          {roomPlans.map((p) => (
            <div key={p.id} className="rounded-xl border border-border bg-surface px-4 py-3">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {p.shortName}
              </p>
              <p className="text-lg font-bold text-brand">
                {formatPrice(p.price)}
                <span className="text-xs font-normal text-muted-foreground"> / month</span>
              </p>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild variant="outline" className="font-semibold">
            <Link to="/pricing">View Pricing</Link>
          </Button>
          <Button
            asChild
            className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/book-now">Book This Room</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="font-semibold text-whatsapp hover:bg-whatsapp/10 hover:text-whatsapp"
          >
            <a
              href={whatsappHref(
                "Hello BABA PG & HOSTEL, I am interested in booking a double-sharing room. Please share availability and further details.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function RoomComparison() {
  const rows = [
    { label: "Room Type", nonAc: "Double Sharing", ac: "Double Sharing" },
    { label: "Monthly Rent", nonAc: formatPrice(8000), ac: formatPrice(12000) },
    { label: "Air Conditioning", nonAc: "Not included", ac: "Included" },
    { label: "Food", nonAc: "Included", ac: "Included" },
    { label: "Security Deposit", nonAc: "₹4,000 Refundable", ac: "₹4,000 Refundable" },
  ];

  return (
    <>
      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-2xl border border-border md:block">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">AC and Non-AC double sharing room comparison</caption>
          <thead className="bg-brand text-brand-foreground">
            <tr>
              <th scope="col" className="px-6 py-4 font-semibold">
                Feature
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                Non-AC
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                AC
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.label} className={i % 2 ? "bg-surface" : "bg-card"}>
                <th scope="row" className="px-6 py-4 font-medium">
                  {r.label}
                </th>
                <td className="px-6 py-4 text-muted-foreground">{r.nonAc}</td>
                <td className="px-6 py-4 text-muted-foreground">{r.ac}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="grid gap-4 md:hidden">
        {(["nonAc", "ac"] as const).map((key) => (
          <div key={key} className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">
              {key === "ac" ? "AC" : "Non-AC"}
            </p>
            <dl className="mt-3 space-y-2 text-sm">
              {rows.map((r) => (
                <div key={r.label} className="flex justify-between gap-4 border-b border-border/60 pb-2">
                  <dt className="text-muted-foreground">{r.label}</dt>
                  <dd className="text-right font-medium">{r[key]}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </>
  );
}
