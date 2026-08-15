import { MapPin, GraduationCap, Navigation, ExternalLink } from "lucide-react";
import { hostel, fullAddress, nearbyPlaces } from "@/data/hostel";
import { Button } from "@/components/ui/button";

export function NearbyPlaces() {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {nearbyPlaces.map((p) => (
        <li
          key={p.name}
          className="rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-0.5"
        >
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
          {p.distance ? (
            <p className="mt-3 inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-brand">
              {p.distance}
            </p>
          ) : (
            <p className="mt-3 text-xs font-medium text-brand">Easy access</p>
          )}
        </li>
      ))}
    </ul>
  );
}

type LocationMapProps = {
  /** "static" shows an image with an interactive Google Maps pointer badge (home page). "embed" renders interactive Google Maps iframe (contact page). */
  variant?: "static" | "embed";
};

export function LocationMap({ variant = "static" }: LocationMapProps) {
  const mapsUrl = hostel.googleMapsUrl;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
        <div>
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-xl font-semibold">Our Address</h3>
          <address className="mt-3 text-sm not-italic leading-relaxed text-muted-foreground">
            {fullAddress}
          </address>
          <p className="mt-4 text-sm text-muted-foreground">
            Atta Road, Jaat Colony, Dankaur — conveniently located for students attending Galgotias University, Noida International University (NIU), and GL Bajaj College.
          </p>
        </div>

        {mapsUrl ? (
          <div className="mt-6 pt-4 border-t border-border/70">
            <Button asChild className="bg-brand font-semibold text-brand-foreground hover:bg-brand/90">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="mr-2 h-4 w-4" aria-hidden="true" />
                Get Directions on Google Maps
              </a>
            </Button>
          </div>
        ) : null}
      </div>

      {variant === "embed" && hostel.googleMapsEmbedUrl ? (
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card min-h-[320px] lg:min-h-[380px]">
          <iframe
            title="BABA PG & HOSTEL Google Maps Location"
            src={hostel.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            className="h-full min-h-[320px] w-full border-0 lg:min-h-[380px]"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : (
        <a
          href={mapsUrl || "https://maps.app.goo.gl/A6EXEkKn4o4pkCD27"}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block min-h-[280px] overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-xl sm:min-h-[320px]"
          aria-label="Open BABA PG & HOSTEL on Google Maps"
        >
          <img
            src={hostel.staticMapImage || "/home.jpg"}
            alt="BABA PG & HOSTEL location map in Dankaur"
            width={1000}
            height={700}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/20 to-transparent transition-opacity group-hover:from-brand/95" />

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-xl bg-background/95 px-3.5 py-2 text-xs font-semibold text-foreground shadow-float backdrop-blur transition-transform group-hover:scale-105">
              <span className="flex h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>See on Google Maps</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
            </div>

            <span className="hidden sm:inline-flex rounded-full bg-brand/90 px-3 py-1 text-xs font-medium text-brand-foreground">
              Tap to open
            </span>
          </div>
        </a>
      )}
    </div>
  );
}
