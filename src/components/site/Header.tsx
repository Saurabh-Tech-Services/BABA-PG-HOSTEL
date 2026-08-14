import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { hostel, navLinks, telHref, whatsappHref } from "@/data/hostel";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:h-20">
        <Link to="/" className="flex items-center gap-3" aria-label={`${hostel.name} home`}>
          <img
            src="/apple-touch-icon.png"
            alt="BABA PG & HOSTEL logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl object-contain"
          />
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-wide text-brand sm:text-base">
              BABA PG &amp; HOSTEL
            </span>
            <span className="block text-[11px] text-muted-foreground">Boys PG · Dankaur</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" size="icon" aria-label="Chat on WhatsApp">
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" aria-label={`Call ${hostel.phones[0]}`}>
            <a href={telHref(hostel.phones[0])}>
              <Phone className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/book-now">Book Now</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background px-4 pb-5 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-accent" }}
                  className="block border-b border-border/60 py-3 text-base font-medium"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="mt-4 w-full bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/book-now" onClick={() => setOpen(false)}>
              Book Now
            </Link>
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
