import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Twitter, Phone, Mail, MapPin, ArrowRight, List, MapPinned } from "lucide-react";
import { hostel, navLinks, telHref } from "@/data/hostel";
import { locationPages } from "@/data/locations";
import { Button } from "@/components/ui/button";

export function Footer() {
  const socials = [
    { key: "facebook", url: hostel.social.facebook, Icon: Facebook, label: "Facebook" },
    { key: "instagram", url: hostel.social.instagram, Icon: Instagram, label: "Instagram" },
    { key: "twitter", url: hostel.social.twitter, Icon: Twitter, label: "Twitter" },
    { key: "youtube", url: hostel.social.youtube, Icon: Youtube, label: "YouTube" },
  ];

  return (
    <footer className="bg-brand text-brand-foreground">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/apple-touch-icon.png"
              alt="BABA PG & HOSTEL logo"
              width={48}
              height={48}
              loading="lazy"
              className="h-12 w-12 rounded-xl bg-brand-foreground object-contain p-1"
            />
            <p className="text-lg font-bold">BABA PG &amp; HOSTEL</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-brand-foreground/75">
            Comfortable boys PG &amp; hostel accommodation in Jaat Colony, Dankaur, Greater Noida. Double-sharing AC
            &amp; non-AC rooms with food included, close to Galgotias and NIU.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ key, url, Icon, label }) => (
              <a
                key={key}
                href={url || "#"}
                {...(url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full bg-brand-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
            <List className="h-4 w-4" aria-hidden="true" />
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm text-brand-foreground/80">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="group flex items-center gap-2 transition-colors hover:text-accent">
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                  <span className="group-hover:text-accent">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
            <MapPinned className="h-4 w-4" aria-hidden="true" />
            Locations
          </p>
          <ul className="mt-4 space-y-2 text-sm text-brand-foreground/80">
            {locationPages.map((l) => (
              <li key={l.slug}>
                <Link
                  to="/location/$slug"
                  params={{ slug: l.slug }}
                  className="transition-colors hover:text-accent"
                >
                  {l.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-brand-foreground/80">
            <li className="flex flex-wrap items-start gap-x-2 gap-y-1">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="flex flex-wrap gap-x-1">
                {hostel.phones.map((p, i) => (
                  <span key={p}>
                    {i > 0 ? <span className="mr-1">/</span> : null}
                    <a href={telHref(p)} className="transition-colors hover:text-accent">
                      {p}
                    </a>
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${hostel.email}`} className="break-all transition-colors hover:text-accent">
                {hostel.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <address className="not-italic leading-relaxed text-brand-foreground/70">
                {hostel.address.street}, {hostel.address.locality}, {hostel.address.city}, {hostel.address.district},{" "}
                {hostel.address.state} – {hostel.address.pincode}
              </address>
            </li>
          </ul>

          <div className="mt-6">
            <Button asChild className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
              <Link to="/book-now">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-foreground/15">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-brand-foreground/70 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 BABA PG &amp; HOSTEL. All Rights Reserved. Designed &amp; developed by{" "}
            <a
              href="https://gu-saurabh.site"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent"
            >
              Saurabh Kumar
            </a>
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
