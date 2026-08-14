import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Button } from "@/components/ui/button";
import { hostel, highlights, telHref, whatsappHref, formatPrice, roomPlans } from "@/data/hostel";
import { pageHead, breadcrumbSchema } from "@/lib/seo";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

const title = "Book Now | Enquire About a Room — BABA PG & HOSTEL Dankaur";
const description =
  "Send a booking enquiry to BABA PG & HOSTEL, Dankaur. Choose AC or non-AC double sharing, share your move-in date, or call and WhatsApp us directly.";

export const Route = createFileRoute("/book-now")({
  head: () => ({
    ...pageHead({ title, description, path: "/book-now" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema("Book Now", "/book-now")),
      },
    ],
  }),
  component: BookNowPage,
});

function BookNowPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="Booking"
        title="Book Your Stay at BABA PG & HOSTEL"
        description="Share a few details and we will confirm availability for your preferred room."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <EnquiryForm variant="booking" />

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="text-sm font-bold uppercase tracking-wider text-accent">
              Prefer to talk?
            </h2>
            <div className="mt-4 space-y-3">
              {hostel.phones.map((p) => (
                <Button
                  key={p}
                  asChild
                  variant="outline"
                  className="w-full justify-start font-semibold"
                >
                  <a href={telHref(p)}>
                    <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                    {p}
                  </a>
                </Button>
              ))}
              <Button
                asChild
                className="w-full bg-whatsapp font-semibold text-whatsapp-foreground hover:bg-whatsapp/90"
              >
                <a
                  href={whatsappHref(
                    "Hello BABA PG & HOSTEL, I am interested in booking a double-sharing room. Please share availability and further details.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                  WhatsApp Enquiry
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-accent">
              Rooms & Pricing
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {roomPlans.map((p) => (
                <li key={p.id} className="flex justify-between gap-3">
                  <span className="text-muted-foreground">{p.name}</span>
                  <span className="font-semibold">{formatPrice(p.price)}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-5 space-y-1.5 text-xs text-muted-foreground">
              {highlights.map((h) => (
                <li key={h}>• {h}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
