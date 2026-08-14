import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { PricingCards } from "@/components/site/PricingCards";
import { RoomComparison } from "@/components/site/RoomShowcase";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { FinalCta } from "@/components/site/Sections";
import { pageHead, breadcrumbSchema } from "@/lib/seo";

const title = "Pricing & Plans | BABA PG & HOSTEL Dankaur";
const description =
  "Transparent boys PG pricing in Dankaur: ₹8,000 Non-AC & ₹12,000 AC double sharing with food included & refundable deposit.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    ...pageHead({ title, description, path: "/pricing" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema("Pricing", "/pricing")),
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Pricing"
          title="Simple & Transparent Pricing"
          description="Monthly rent with food included — pricing is published openly, no form required."
        />
        <PricingCards />
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Compare" title="What's Included in Each Option" />
        <RoomComparison />
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Pricing Questions" />
        <FaqAccordion />
      </Section>

      <FinalCta />
    </>
  );
}
