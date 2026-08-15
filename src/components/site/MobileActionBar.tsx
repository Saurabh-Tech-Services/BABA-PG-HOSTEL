import { Link } from "@tanstack/react-router";
import { Phone, CalendarCheck } from "lucide-react";
import { hostel, telHref, whatsappHref } from "@/data/hostel";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 text-xs font-semibold">
        <a
          href={telHref(hostel.phones[0])}
          className="flex flex-col items-center gap-1 py-3 text-brand"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 border-x border-border py-3 text-whatsapp"
        >
          <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </a>
        <Link
          to="/book-now"
          className="flex flex-col items-center gap-1 bg-accent py-3 text-accent-foreground"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          Book Now
        </Link>
      </div>
    </div>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BABA PG & HOSTEL on WhatsApp"
      className="fixed bottom-20 right-4 z-50 grid h-13 w-13 place-items-center rounded-full bg-whatsapp p-3.5 text-whatsapp-foreground shadow-float transition-transform hover:scale-110 active:scale-95 animate-float animate-pulse-glow md:bottom-6 md:right-6"
    >
      <WhatsAppIcon className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
