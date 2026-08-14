import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { hostel } from "@/data/hostel";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms & Conditions | BABA PG & HOSTEL Dankaur",
      description:
        "Terms of use for the BABA PG & HOSTEL website, including how pricing and availability information is presented.",
      path: "/terms",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Section>
      <SectionHeading as="h1" align="left" eyebrow="Legal" title="Terms & Conditions" />
      <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          The information on this website — including room types, monthly rent, the refundable
          security deposit and facilities — is provided for general information about BABA PG &amp;
          HOSTEL, Jaat Colony, Dankaur.
        </p>
        <p>
          Submitting an enquiry through this website does not confirm a booking. A room is
          confirmed only after we speak with you and agree the details directly.
        </p>
        <p>
          Availability and pricing may change. Please confirm current details by calling{" "}
          {hostel.phones[0]} or {hostel.phones[1]}, or by messaging us on WhatsApp at{" "}
          {hostel.whatsapp}.
        </p>
        <p>
          Stay rules, notice periods and deposit refund conditions are shared directly by the
          hostel management at the time of booking.
        </p>
      </div>
    </Section>
  );
}
