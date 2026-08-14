import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { FacilitiesGrid } from "@/components/site/FacilitiesGrid";
import { FoodSection, FinalCta } from "@/components/site/Sections";
import { pageHead, breadcrumbSchema } from "@/lib/seo";

const title = "Facilities | Wi-Fi, Food, Laundry & CCTV — BABA PG & HOSTEL Dankaur";
const description =
  "Facilities at BABA PG & HOSTEL, Dankaur: Wi-Fi, power backup, RO water, geyser, housekeeping, laundry, CCTV, common area, parking and food included with your stay.";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    ...pageHead({ title, description, path: "/facilities" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema("Facilities", "/facilities")),
      },
    ],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Facilities"
          title="Everything You Need for a Comfortable Stay"
          description="Practical, everyday facilities for students and working residents in Dankaur."
        />
        <FacilitiesGrid />
      </Section>
      <FoodSection />
      <FinalCta />
    </>
  );
}
