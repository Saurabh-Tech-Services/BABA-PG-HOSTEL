import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { FacilitiesGrid } from "@/components/site/FacilitiesGrid";
import { FoodSection, FinalCta } from "@/components/site/Sections";
import { pageHead, breadcrumbSchema } from "@/lib/seo";

const title = "Facilities & Amenities | BABA PG & HOSTEL";
const description =
  "Amenities at BABA PG Dankaur: Wi-Fi, 24/7 power backup, RO water, laundry, CCTV, home-cooked food & parking.";

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
