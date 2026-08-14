import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { FinalCta } from "@/components/site/Sections";
import { RouteStrip } from "@/components/site/RoutePlot";
import { getLocation, locationPages, travelRoutes, type LocationPage } from "@/data/locations";
import { hostel, fullAddress } from "@/data/hostel";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/location/$slug")({
  loader: ({ params }) => {
    const location = getLocation(params.slug);
    if (!location) throw notFound();
    return { location };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Location not found | BABA PG & HOSTEL" }, { name: "robots", content: "noindex" }],
      };
    }
    const l = loaderData.location;
    const title = `PG & Hostel near ${l.name} | BABA PG & HOSTEL, Dankaur`;
    const description = `${l.tagline}. ${l.intro.slice(0, 120)}...`.replace(/\s+/g, " ");
    return {
      ...pageHead({ title, description, path: `/location/${params.slug}`, ogType: "article" }),
      meta: [
        ...pageHead({ title, description, path: `/location/${params.slug}` }).meta,
        { name: "keywords", content: l.keywords.join(", ") },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: `${hostel.name} — PG near ${l.name}`,
            description: l.intro,
            address: {
              "@type": "PostalAddress",
              streetAddress: `${hostel.address.street}, ${hostel.address.locality}`,
              addressLocality: hostel.address.city,
              addressRegion: hostel.address.state,
              postalCode: hostel.address.pincode,
              addressCountry: "IN",
            },
            telephone: hostel.phones.map((p) => `+91${p}`),
            email: hostel.email,
            areaServed: { "@type": "Place", name: l.name },
            url: `/location/${l.slug}`,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Location", item: "/location" },
              { "@type": "ListItem", position: 3, name: l.name, item: `/location/${l.slug}` },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: LocationNotFound,
  component: LocationDetail,
});

function LocationNotFound() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        title="Location not found"
        description="The page you are looking for does not exist. Browse all our location guides instead."
      />
      <div className="text-center">
        <Link to="/location" className="font-semibold text-accent hover:underline">
          View all locations
        </Link>
      </div>
    </Section>
  );
}

function Facts({ location, className }: { location: LocationPage; className?: string }) {
  return (
    <dl className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {location.quickFacts.map((f) => (
        <div key={f.label} className="rounded-2xl border border-border bg-card p-4 shadow-card">
          <dt className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</dt>
          <dd className="mt-1 font-semibold">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Keywords({ location }: { location: LocationPage }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {location.keywords.map((k) => (
        <li
          key={k}
          className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
        >
          {k}
        </li>
      ))}
    </ul>
  );
}

function Body({ location }: { location: LocationPage }) {
  const v = location.variant;

  if (v === "split") {
    return (
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-8">
          {location.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-2xl font-semibold">{s.heading}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
          <Facts location={location} className="sm:grid-cols-1" />
        </aside>
      </div>
    );
  }

  if (v === "timeline") {
    return (
      <div className="relative space-y-10 border-l-2 border-accent/30 pl-8">
        {location.sections.map((s, i) => (
          <div key={s.heading} className="route-step" style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="absolute -left-[11px] grid h-5 w-5 place-items-center rounded-full bg-accent text-accent-foreground">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
            </span>
            <h2 className="text-2xl font-semibold">{s.heading}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    );
  }

  if (v === "panel") {
    return (
      <div className="space-y-5">
        {location.sections.map((s, i) => (
          <div
            key={s.heading}
            className={cn(
              "rounded-3xl p-6 sm:p-8",
              i % 2 === 0 ? "bg-brand text-brand-foreground" : "border border-border bg-card shadow-card",
            )}
          >
            <h2 className="text-2xl font-semibold">{s.heading}</h2>
            <p className={cn("mt-3 leading-relaxed", i % 2 === 0 ? "text-brand-foreground/80" : "text-muted-foreground")}>
              {s.body}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (v === "stacked") {
    return (
      <div className="mx-auto max-w-3xl space-y-10">
        {location.sections.map((s, i) => (
          <div key={s.heading} className="border-b border-border pb-8 last:border-0">
            <span className="text-sm font-semibold text-accent">0{i + 1}</span>
            <h2 className="mt-2 text-2xl font-semibold">{s.heading}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    );
  }

  if (v === "editorial") {
    return (
      <div className="space-y-12">
        {location.sections.map((s, i) => (
          <div key={s.heading} className="grid gap-4 md:grid-cols-[220px_1fr]">
            <h2 className={cn("text-2xl font-semibold", i % 2 ? "text-brand" : "text-foreground")}>
              {s.heading}
            </h2>
            <p className="leading-relaxed text-muted-foreground md:border-l md:border-border md:pl-8">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (v === "grid") {
    return (
      <div className="grid gap-6 md:grid-cols-3">
        {location.sections.map((s) => (
          <div key={s.heading} className="rounded-3xl border border-border bg-surface p-6">
            <CheckCircle2 className="h-6 w-6 text-accent" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-semibold">{s.heading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {location.sections.map((s, i) => (
        <div
          key={s.heading}
          className={cn(
            "rounded-3xl border p-6 sm:p-10",
            i === 0 ? "border-accent/50 bg-accent/8" : "border-border bg-card shadow-card",
          )}
        >
          <h2 className={cn("font-semibold", i === 0 ? "text-3xl" : "text-2xl")}>{s.heading}</h2>
          <p className={cn("mt-3 leading-relaxed text-muted-foreground", i === 0 && "text-lg")}>
            {s.body}
          </p>
        </div>
      ))}
    </div>
  );
}

function LocationDetail() {
  const { location } = Route.useLoaderData();
  const route =
    travelRoutes.find((r) => r.slug === location.slug) ??
    travelRoutes.find((r) => r.slug === "greater-noida")!;
  const others = locationPages.filter((l) => l.slug !== location.slug);

  return (
    <>
      <Section className="pb-8" tone={location.accent === "surface" ? "surface" : "default"}>
        <Link
          to="/location"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All locations
        </Link>
        <div className="mt-6 max-w-3xl">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {location.kind} · {location.distance}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
            PG &amp; Hostel near {location.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{location.tagline}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{location.intro}</p>
        </div>
        {location.variant !== "split" ? <Facts location={location} className="mt-8 lg:grid-cols-4" /> : null}
      </Section>

      <Section className="pt-4">
        <Body location={location} />
      </Section>

      <Section tone="surface">
        <RouteStrip route={route} />
        <p className="mt-6 text-sm text-muted-foreground">
          Address: {fullAddress}
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Nearby" title="Other Locations We Serve" />
        <ul className="flex flex-wrap justify-center gap-3">
          {others.map((l) => (
            <li key={l.slug}>
              <Link
                to="/location/$slug"
                params={{ slug: l.slug }}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-card transition-colors hover:border-accent hover:text-accent"
              >
                {l.shortName}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Keywords location={location} />
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
