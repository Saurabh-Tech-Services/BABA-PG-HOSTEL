import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Highlights } from "@/components/site/Highlights";
import { Section, SectionHeading } from "@/components/site/Section";
import { RoomShowcase } from "@/components/site/RoomShowcase";
import { PricingCards } from "@/components/site/PricingCards";
import { FacilitiesGrid } from "@/components/site/FacilitiesGrid";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { Gallery } from "@/components/site/Gallery";
import { NearbyPlaces, LocationMap } from "@/components/site/LocationSection";
import {
  FoodSection,
  WhyChooseUs,
  Testimonials,
  FinalCta,
  LocalSeoContent,
} from "@/components/site/Sections";
import { Button } from "@/components/ui/button";
import { pageHead, localBusinessSchema, faqSchema } from "@/lib/seo";
import { hostel, telHref } from "@/data/hostel";


const title = "BABA PG & HOSTEL | Boys PG & Hostel in Dankaur, Greater Noida";
const description =
  "BABA PG & HOSTEL offers comfortable boys PG and hostel accommodation in Jaat Colony, Dankaur, Greater Noida. Double-sharing AC & non-AC rooms, food included and convenient location near nearby colleges.";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({ title, description, path: "/" }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Highlights />

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              About us
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              A Comfortable Place to Stay in Dankaur
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              BABA PG &amp; HOSTEL provides boys accommodation in Jaat Colony, Dankaur, Greater
              Noida, designed for students and working individuals looking for comfortable and
              convenient accommodation.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Rooms are double-sharing, available in AC and non-AC options, with food included and
              the everyday facilities you need for a settled routine. The location is convenient for
              nearby colleges and universities, and enquiries are easy — simply call or message us
              on WhatsApp.
            </p>
            <Button asChild variant="outline" className="mt-6 font-semibold">
              <Link to="/about">More about us</Link>
            </Button>
          </div>
          <div className="p-0 sm:p-2">
            <h3 className="mb-6 text-center text-xl font-semibold">Meet Our Management</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {[hostel.management.owner, hostel.management.manager].map((person) => (
                <div
                  key={person.name}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={person.photo}
                    alt={`${person.name} — ${person.role} at BABA PG & HOSTEL`}
                    width={160}
                    height={160}
                    loading="lazy"
                    className="h-32 w-32 rounded-full border-4 border-accent/20 object-cover shadow-card"
                  />
                  <p className="mt-4 font-semibold">{person.name}</p>
                  <p className="text-sm text-accent">{person.role}</p>
                  <a
                    href={telHref(person.phone)}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    +91 {person.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>


      <Section id="rooms">
        <SectionHeading
          eyebrow="Rooms"
          title="Comfortable Rooms Designed for Everyday Living"
          description="Currently available: double sharing rooms with AC and non-AC options."
        />
        <RoomShowcase />
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple & Transparent Pricing"
          description="Monthly rent with food included. No hidden charges, no forms to see prices."
        />
        <PricingCards />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Facilities"
          title="Everything You Need for a Comfortable Stay"
          description="Daily essentials handled, so you can focus on studying and work."
        />
        <FacilitiesGrid />
        <div className="mt-8 text-center">
          <Button asChild className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
            <Link to="/book-now">Enquire Now</Link>
          </Button>
        </div>
      </Section>

      <FoodSection />
      <WhyChooseUs />

      <Section tone="surface">
        <SectionHeading
          eyebrow="Location"
          title="Stay Close to Your College"
          description="Conveniently located for students studying at Galgotias University, Noida International University and GL Bajaj College."
        />
        <NearbyPlaces />
        <div className="mt-8">
          <LocationMap />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Gallery"
          title="A Look Around the Hostel"
          description="Photographs of the property. Actual hostel images will be added as they are shared."
        />
        <Gallery limit={6} />
        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="font-semibold">
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </Section>

      <LocalSeoContent />

      <Section tone="surface">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <FaqAccordion />
      </Section>

      <Testimonials />
      <FinalCta />
    </>
  );
}
