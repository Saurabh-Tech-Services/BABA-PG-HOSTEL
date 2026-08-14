import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { hostel } from "@/data/hostel";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy Policy | BABA PG & HOSTEL Dankaur",
      description:
        "How BABA PG & HOSTEL, Dankaur handles the information you share through enquiry forms, phone calls and WhatsApp messages.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section>
      <SectionHeading as="h1" align="left" eyebrow="Legal" title="Privacy Policy" />
      <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          BABA PG &amp; HOSTEL collects only the details you choose to share with us — such as your
          name, phone number, WhatsApp number, email address and enquiry details — so that we can
          respond to your accommodation enquiry.
        </p>
        <p>
          This information is used solely to contact you about room availability, pricing and your
          stay. We do not sell or rent your details to third parties.
        </p>
        <p>
          Enquiries submitted through this website are delivered to {hostel.email}. If you would
          like your enquiry details removed from our records, contact us on {hostel.phones[0]} or by
          email and we will remove them.
        </p>
        <p>
          This website may use basic analytics provided by our hosting platform to understand how
          visitors use the site. Any questions about this policy can be sent to {hostel.email}.
        </p>
      </div>
    </Section>
  );
}
