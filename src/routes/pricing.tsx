import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { PricingCards } from "@/components/site/PricingCards";
import { RoomComparison } from "@/components/site/RoomShowcase";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { FinalCta } from "@/components/site/Sections";
import { pageHead, breadcrumbSchema } from "@/lib/seo";

const title = "Pricing | ₹8,000 Non-AC & ₹12,000 AC PG in Dankaur — BABA PG & HOSTEL";
const description =
  "Transparent monthly pricing for boys PG in Dankaur: ₹8,000 non-AC and ₹12,000 AC double sharing, food included, with a ₹4,000 refundable security deposit.";

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
