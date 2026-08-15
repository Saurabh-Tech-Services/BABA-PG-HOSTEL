import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, User } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { LocationMap } from "@/components/site/LocationSection";
import { Button } from "@/components/ui/button";
import { hostel, fullAddress, telHref, whatsappHref } from "@/data/hostel";
import { pageHead, breadcrumbSchema } from "@/lib/seo";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

const title = "Contact Us | BABA PG & HOSTEL Dankaur";
const description =
  "Contact BABA PG & HOSTEL in Dankaur. Call or WhatsApp 9999645243 / 7037936443 for room booking & inquiries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageHead({ title, description, path: "/contact" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema("Contact", "/contact")),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Talk to BABA PG & HOSTEL"
          description="Call, WhatsApp or send us a message — we will get back with availability and details."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-lg font-semibold">BABA PG &amp; HOSTEL</h2>
              <address className="mt-2 text-sm not-italic leading-relaxed text-muted-foreground">
                {fullAddress}
              </address>

              <ul className="mt-5 space-y-3 text-sm">
                {hostel.phones.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                    <a href={telHref(p)} className="font-medium hover:text-accent">
                      {p}
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <WhatsAppIcon className="h-4 w-4 text-whatsapp" aria-hidden="true" />
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-accent"
                  >
                    WhatsApp {hostel.whatsapp}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                  <a href={`mailto:${hostel.email}`} className="break-all font-medium hover:text-accent">
                    {hostel.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <User className="h-4 w-4 text-brand" aria-hidden="true" />
                  Owner: {hostel.owner} · Manager: {hostel.manager}
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-brand font-semibold text-brand-foreground hover:bg-brand/90">
                  <a href={telHref(hostel.phones[0])}>Call Now</a>
                </Button>
                <Button
                  asChild
                  className="bg-whatsapp font-semibold text-whatsapp-foreground hover:bg-whatsapp/90"
                >
                  <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <EnquiryForm variant="contact" />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Find us" title="Location & Directions" />
        <LocationMap />
      </Section>
    </>
  );
}
