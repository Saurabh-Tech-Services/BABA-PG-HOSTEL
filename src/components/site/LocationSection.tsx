import { MapPin, GraduationCap, Navigation } from "lucide-react";
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

export function LocationMap() {
  const mapsUrl = hostel.googleMapsUrl;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
          <MapPin className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-xl font-semibold">Our Address</h3>
        <address className="mt-3 text-sm not-italic leading-relaxed text-muted-foreground">
          {fullAddress}
        </address>
        <p className="mt-4 text-sm text-muted-foreground">
          Atta Road, Jaat Colony, Dankaur — convenient for students attending nearby colleges and
          universities in Greater Noida.
        </p>
        {mapsUrl ? (
          <Button asChild className="mt-6 bg-brand font-semibold text-brand-foreground hover:bg-brand/90">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="mr-2 h-4 w-4" aria-hidden="true" />
              Get Directions
            </a>
          </Button>
        ) : (
          <p className="mt-6 rounded-xl border border-dashed border-border bg-surface px-4 py-3 text-xs text-muted-foreground">
            Google Maps link will be added soon. Call or WhatsApp us for exact directions.
          </p>
        )}
      </div>

      {hostel.googleMapsEmbedUrl ? (
        <iframe
          title="BABA PG & HOSTEL location map"
          src={hostel.googleMapsEmbedUrl}
          loading="lazy"
          className="h-72 w-full rounded-2xl border border-border lg:h-full"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex h-72 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-surface p-6 text-center lg:h-full">
          <MapPin className="h-7 w-7 text-muted-foreground" aria-hidden="true" />
          <p className="font-medium">Map coming soon</p>
          <p className="max-w-xs text-sm text-muted-foreground">
            The Google Maps embed will appear here once the location link is added.
          </p>
        </div>
      )}
    </div>
  );
}
