import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { Gallery } from "@/components/site/Gallery";
import { FinalCta } from "@/components/site/Sections";
import { pageHead, breadcrumbSchema } from "@/lib/seo";

const title = "Gallery | Rooms, Mess & Common Areas — BABA PG & HOSTEL Dankaur";
const description =
  "Photo gallery of BABA PG & HOSTEL in Jaat Colony, Dankaur — rooms, dining, common areas and facilities of our boys PG in Greater Noida.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    ...pageHead({ title, description, path: "/gallery" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema("Gallery", "/gallery")),
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Gallery"
          title="A Look Around BABA PG & HOSTEL"
          description="Browse by category. Sections marked 'coming soon' will be updated with actual hostel photographs."
        />
        <Gallery />
      </Section>
      <FinalCta />
    </>
  );
}
