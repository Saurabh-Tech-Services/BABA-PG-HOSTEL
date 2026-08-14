import { Check, ShieldCheck } from "lucide-react";
import {
  roomPlans,
  formatPrice,
  whatsappHref,
  securityDeposit,
  acSecurityDeposit,
} from "@/data/hostel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingCards() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {roomPlans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "relative flex flex-col rounded-2xl border bg-card p-6 shadow-card sm:p-8",
              plan.popular ? "border-accent ring-1 ring-accent/40" : "border-border",
            )}
          >
            {plan.popular ? (
              <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
                Popular Choice
              </span>
            ) : null}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-brand">{formatPrice(plan.price)}</span>
              <span className="text-sm text-muted-foreground">/ month</span>
            </p>
            <ul className="mt-6 flex-1 space-y-3 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="mt-8 w-full bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
            >
              <a
                href={whatsappHref(
                  `Hello BABA PG & HOSTEL, I am interested in the ${plan.name} room. Please share availability.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire Now
              </a>
            </Button>
          </div>
        ))}
      </div>

      <p className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted-foreground">
        <ShieldCheck className="h-4 w-4 text-brand" aria-hidden="true" />
        Refundable Security Deposit: {formatPrice(securityDeposit.amount)} (Non-AC) /{" "}
        {formatPrice(acSecurityDeposit.amount)} (AC).
      </p>
    </>
  );
}
