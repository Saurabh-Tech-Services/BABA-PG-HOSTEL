import { Link } from "@tanstack/react-router";
import { MapPin, UtensilsCrossed, Snowflake, IndianRupee, GraduationCap, PhoneCall, Phone, Quote } from "lucide-react";
import foodMess from "@/assets/food.png";
import { Section, SectionHeading } from "./Section";
import { Button } from "@/components/ui/button";
import { hostel, reviews, telHref, whatsappHref } from "@/data/hostel";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function FoodSection() {
  return (
    <Section tone="surface">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <img
          src={foodMess}
          alt="Food facility at BABA PG & HOSTEL — homely Indian meal"
          width={1408}
          height={1008}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-3xl border border-border object-cover shadow-card"
        />
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Meals</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Food Included With Your Stay</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Food is included with the accommodation, making everyday living simpler and more
            convenient. Breakfast, lunch and dinner are part of the monthly rent, so there is no
            separate mess bill to plan for.
          </p>
          <p className="mt-4 inline-block rounded-xl border border-dashed border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            Weekly menu coming soon
          </p>
        </div>
      </div>
    </Section>
  );
}

const whyItems = [
  { Icon: MapPin, title: "Convenient Location", text: "Located in Jaat Colony, Dankaur." },
  {
    Icon: UtensilsCrossed,
    title: "Food Included",
    text: "Food/mess is included with accommodation.",
  },
  { Icon: Snowflake, title: "Flexible Room Choice", text: "AC and non-AC double-sharing options." },
  {
    Icon: IndianRupee,
    title: "Transparent Pricing",
    text: "Clear monthly pricing and refundable security deposit.",
  },
  {
    Icon: GraduationCap,
    title: "Student-Friendly Location",
    text: "Conveniently positioned for students attending nearby colleges and universities.",
  },
  { Icon: PhoneCall, title: "Easy Communication", text: "Call or WhatsApp directly for enquiries." },
];

export function WhyChooseUs() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why us"
        title="Why Students Choose BABA PG & HOSTEL"
        description="Straightforward accommodation with the essentials handled, close to where students study."
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyItems.map(({ Icon, title, text }) => (
          <li
            key={title}
            className="rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-0.5"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/12 text-accent">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="Reviews"
        title="What Students Say"
        description="Genuine feedback from residents will be published here."
      />
      {reviews.length ? (
        <ul className="grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <Quote className="h-5 w-5 text-accent" aria-hidden="true" />
              <p className="mt-3 text-sm leading-relaxed">{r.text}</p>
              <p className="mt-4 text-sm font-semibold">{r.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-border bg-card p-10 text-center">
          <Quote className="mx-auto h-7 w-7 text-muted-foreground" aria-hidden="true" />
          <p className="mt-4 font-medium">Student reviews will appear here.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            We only publish genuine reviews shared by our residents.
          </p>
        </div>
      )}
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section tone="brand" className="py-0 pt-14 md:py-0 md:pt-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Looking for a Comfortable Boys PG in Dankaur?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-brand-foreground/80">
          Contact BABA PG &amp; HOSTEL to enquire about room availability, pricing and your
          preferred move-in date.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <Button
            asChild
            size="lg"
            className="w-full bg-accent font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto"
          >
            <Link to="/book-now">Book Your Room</Link>
          </Button>
          <div className="flex w-full justify-center gap-3 sm:w-auto">
            <Button
              asChild
              size="lg"
              className="bg-whatsapp font-semibold text-whatsapp-foreground hover:bg-whatsapp/90"
            >
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                WhatsApp Us
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
        </div>
        <p className="mt-6 text-sm text-brand-foreground/70">
          Double Sharing | AC &amp; Non-AC | Food Included
        </p>
      </div>
    </Section>
  );
}

export function LocalSeoContent() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">Boys Hostel &amp; PG in Dankaur</h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            BABA PG &amp; HOSTEL is a boys PG and hostel on Atta Road in Jaat Colony, Dankaur, part
            of the Greater Noida region of Gautam Buddha Nagar, Uttar Pradesh. The property is
            aimed at students and working individuals who want a simple, comfortable place to stay
            close to their college or workplace, without the effort of arranging furniture, meals
            and daily upkeep separately.
          </p>
          <p>
            Accommodation is currently offered as double-sharing rooms, available in both non-AC and
            AC options. A non-AC double-sharing room is ₹8,000 per month and an AC double-sharing
            room is ₹12,000 per month. Both options include food, so breakfast, lunch and dinner do
            not have to be budgeted or organised separately. A refundable security deposit of
            ₹4,000 applies. Pricing is published openly on this website so residents and parents can
            compare options before visiting.
          </p>
          <p>
            Each room comes with a bed and mattress, along with study-friendly furniture such as a
            table and chair. Everyday essentials are handled for you: Wi-Fi, electricity with power
            backup, RO drinking water, geyser, housekeeping, room cleaning, laundry with a washing
            machine, and CCTV covering the premises. There is a common area for residents, and
            parking is available on site.
          </p>
          <p>
            Location is one of the main reasons students look at accommodation in Dankaur. BABA PG
            &amp; HOSTEL is conveniently placed for students studying at Galgotias University, Noida
            International University (NIU) and GL Bajaj College, all of which are nearby. That makes
            the daily commute short and predictable, which matters during exam weeks and long lab
            days. The surrounding Jaat Colony area is a residential neighbourhood with everyday
            shops and transport connections towards Greater Noida.
          </p>
          <p>
            If you are searching for a boys hostel in Dankaur, a boys PG near Galgotias University,
            or student accommodation near NIU and GL Bajaj College, the simplest next step is to
            call or message us. We can confirm current availability for double-sharing rooms, answer
            questions about food and facilities, and arrange a visit so you can see the rooms in
            person before deciding.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
            <Link to="/book-now">Check Availability</Link>
          </Button>
          <Button asChild variant="outline" className="font-semibold">
            <a href={`mailto:${hostel.email}`}>Email Us</a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
