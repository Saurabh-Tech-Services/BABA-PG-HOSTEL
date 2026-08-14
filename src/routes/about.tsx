import { createFileRoute } from "@tanstack/react-router";
import commonArea from "@/assets/common.png";
import { Section, SectionHeading } from "@/components/site/Section";
import { WhyChooseUs, Testimonials, FinalCta } from "@/components/site/Sections";
import { hostel, fullAddress } from "@/data/hostel";
import { pageHead, breadcrumbSchema } from "@/lib/seo";

const title = "About Us | BABA PG & HOSTEL Dankaur";
const description =
  "About BABA PG & HOSTEL in Jaat Colony, Dankaur. Safe, comfortable boys accommodation near Galgotias & NIU with food included.";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageHead({ title, description, path: "/about" }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema("About", "/about")) },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="About"
          title="A Comfortable Place to Stay in Dankaur"
          description="BABA PG & HOSTEL provides boys accommodation in Jaat Colony, Dankaur, Greater Noida, designed for students and working individuals."
        />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={commonArea}
            alt="Common area at BABA PG & HOSTEL, boys hostel in Jaat Colony Dankaur"
            width={1400}
            height={1000}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl border border-border object-cover shadow-card"
          />
          <div className="space-y-4 text-muted-foreground">
            <p>
              We keep things straightforward: double-sharing rooms, a choice between AC and non-AC,
              food included in the monthly rent, and the everyday facilities residents actually
              need — Wi-Fi, power backup, RO water, housekeeping, laundry and CCTV on the premises.
            </p>
            <p>
              The property is on Atta Road in Jaat Colony, a residential pocket of Dankaur that is
              convenient for students attending nearby colleges and universities in the Greater
              Noida area.
            </p>
            <p>
              Enquiries are handled personally. Call or message on WhatsApp and we will confirm
              availability, pricing and a time to visit.
            </p>
            <dl className="grid gap-4 pt-2 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-4 shadow-card">
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Owner</dt>
                <dd className="mt-1 font-semibold text-foreground">{hostel.owner}</dd>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 shadow-card">
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Manager</dt>
                <dd className="mt-1 font-semibold text-foreground">{hostel.manager}</dd>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 shadow-card sm:col-span-2">
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Address</dt>
                <dd className="mt-1 font-medium text-foreground">{fullAddress}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <WhyChooseUs />
      <Testimonials />
      <FinalCta />
    </>
  );
}
