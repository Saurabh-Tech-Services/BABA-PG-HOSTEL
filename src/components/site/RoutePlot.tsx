import { MapPin, Home, ArrowDown } from "lucide-react";
import type { TravelRoute } from "@/data/locations";
import { cn } from "@/lib/utils";

export function RoutePlot({ route, className }: { route: TravelRoute; className?: string }) {
  const featured = route.featured;

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-3xl border p-6 sm:p-8",
        featured
          ? "border-accent/60 bg-card shadow-card ring-1 ring-accent/25"
          : "border-border bg-card shadow-card",
        className,
      )}
    >
      {featured ? (
        <span className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
          Most used route
        </span>
      ) : null}

      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">From</p>
        <h3 className="mt-1 text-xl font-semibold sm:text-2xl">{route.from}</h3>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium">
          <span className="rounded-full bg-brand-soft px-3 py-1 text-brand">{route.distance}</span>
          {route.duration ? (
            <span className="rounded-full bg-surface px-3 py-1 text-muted-foreground">
              {route.duration}
            </span>
          ) : null}
        </div>
      </header>

      <ol className="relative mt-7 space-y-6 pl-9">
        <span
          aria-hidden="true"
          className={cn(
            "route-line absolute left-[13px] top-2 w-px origin-top",
            featured ? "bg-accent" : "bg-border",
          )}
          style={{ height: "calc(100% - 1rem)" }}
        />
        {route.steps.map((step, i) => (
          <li
            key={step.title}
            className="route-step relative"
            style={{ animationDelay: `${0.15 + i * 0.12}s` }}
          >
            <span
              className={cn(
                "absolute -left-9 grid h-7 w-7 place-items-center rounded-full border text-[11px] font-semibold",
                i === route.steps.length - 1
                  ? "border-accent bg-accent text-accent-foreground"
                  : featured
                    ? "border-accent/50 bg-card text-accent"
                    : "border-border bg-card text-muted-foreground",
              )}
            >
              {i === route.steps.length - 1 ? (
                <Home className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                i + 1
              )}
            </span>
            <p className="font-semibold leading-snug">{step.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
            {step.meta ? (
              <p
                className={cn(
                  "mt-2 inline-block rounded-md px-2 py-1 text-xs font-semibold",
                  featured ? "bg-accent/12 text-accent" : "bg-surface text-brand",
                )}
              >
                {step.meta}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </article>
  );
}

/** Compact horizontal route strip used on individual location pages. */
export function RouteStrip({ route }: { route: TravelRoute }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
        <h2 className="text-xl font-semibold">How to reach us from {route.from}</h2>
        <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
          {route.distance}
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
        {route.steps.map((step, i) => (
          <div
            key={step.title}
            className="route-step relative rounded-2xl border border-border bg-surface p-4"
            style={{ animationDelay: `${0.1 + i * 0.12}s` }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Step {i + 1}
            </span>
            <p className="mt-2 text-sm font-semibold leading-snug">{step.title}</p>
            <p className="mt-1 text-xs text-muted-foreground">{step.detail}</p>
            {step.meta ? (
              <p className="mt-2 text-xs font-semibold text-brand">{step.meta}</p>
            ) : null}
            {i < route.steps.length - 1 ? (
              <ArrowDown
                aria-hidden="true"
                className="absolute -bottom-3 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-card p-0.5 text-accent md:-right-4 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:-rotate-90"
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
