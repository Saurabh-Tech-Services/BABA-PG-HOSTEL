import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { RoomShowcase, RoomComparison } from "@/components/site/RoomShowcase";
import { FinalCta } from "@/components/site/Sections";
import { pageHead, breadcrumbSchema } from "@/lib/seo";

const title = "Rooms & Sharing Options | BABA PG & HOSTEL";
const description =
  "Double sharing AC & Non-AC rooms in Dankaur with bed, mattress, study desk, food & daily essentials included.";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    ...pageHead({ title, description, path: "/rooms" }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema("Rooms", "/rooms")) },
    ],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Rooms"
          title="Comfortable Rooms Designed for Everyday Living"
          description="Currently we offer double-sharing rooms for boys, with a choice of AC or non-AC."
        />
        <RoomShowcase />
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Compare"
          title="AC vs Non-AC Double Sharing"
          description="The same room and the same inclusions — the difference is air conditioning."
        />
        <RoomComparison />
      </Section>

      <FinalCta />
    </>
  );
}
