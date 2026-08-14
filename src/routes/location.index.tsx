import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Route as RouteIcon, MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { FinalCta } from "@/components/site/Sections";
import { RoutePlot } from "@/components/site/RoutePlot";
import { travelRoutes, locationPages } from "@/data/locations";
import { fullAddress } from "@/data/hostel";
import { pageHead, breadcrumbSchema } from "@/lib/seo";

const title = "Location & Directions | BABA PG & HOSTEL";
const description =
  "Directions to BABA PG & HOSTEL on Atta Road, Jaat Colony, Dankaur near Galgotias University, NIU & GL Bajaj.";

export const Route = createFileRoute("/location/")({
  head: () => ({
    ...pageHead({ title, description, path: "/location" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema("Location", "/location")),
      },
    ],
  }),
  component: LocationIndex,
});

function LocationIndex() {
  const featured = travelRoutes.filter((r) => r.featured);
  const others = travelRoutes.filter((r) => !r.featured);

  return (
    <>
      <Section className="pb-8">
        <SectionHeading
          as="h1"
          eyebrow="Location & Routes"
          title="How to Reach BABA PG & HOSTEL, Dankaur"
          description={`We are at ${fullAddress}. Below are the exact routes students and families use to reach us — no maps required, just follow the steps.`}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((r) => (
            <RoutePlot key={r.slug} route={r} className="lg:col-span-2" />
          ))}
          {others.map((r) => (
            <RoutePlot key={r.slug} route={r} />
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Areas we serve"
          title="Location Pages"
          description="Detailed guides for every area and campus around BABA PG & HOSTEL."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locationPages.map((l) => (
            <li key={l.slug}>
              <Link
                to="/location/$slug"
                params={{ slug: l.slug }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent/60"
              >
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  {l.kind === "Highway" ? (
                    <RouteIcon className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  )}
                  {l.kind}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{l.shortName}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{l.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  {l.distance}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta />
    </>
  );
}
