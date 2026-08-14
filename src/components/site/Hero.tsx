import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Check } from "lucide-react";
import bgImg from "@/assets/bg.jpg";
import { hostel, highlights, telHref, whatsappHref } from "@/data/hostel";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand text-brand-foreground">
      <img
        src={bgImg}
        alt="BABA PG & HOSTEL boys hostel building in Jaat Colony, Dankaur"
        width={1600}
        height={1008}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-brand/70" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-28">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-foreground/10 px-4 py-1.5 text-xs font-medium ring-1 ring-brand-foreground/20">
          <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          Jaat Colony, Dankaur, Greater Noida
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
          BABA PG &amp; HOSTEL
        </h1>
        <p className="mt-4 max-w-2xl text-xl font-medium text-accent sm:text-2xl">
          Comfortable Boys PG &amp; Hostel in Dankaur
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-foreground/85 sm:text-lg">
          Affordable and comfortable boys accommodation in Jaat Colony, Dankaur, Greater Noida, with
          food, essential facilities and convenient access to nearby colleges and universities.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/book-now">Book Your Room</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-whatsapp font-semibold text-whatsapp-foreground hover:bg-whatsapp/90"
          >
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-brand-foreground/40 bg-transparent font-semibold text-brand-foreground hover:bg-brand-foreground/10 hover:text-brand-foreground"
          >
            <a href={telHref(hostel.phones[0])}>
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
          </Button>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-brand-foreground/85">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
