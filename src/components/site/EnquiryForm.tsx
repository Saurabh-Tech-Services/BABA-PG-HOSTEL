import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { hostel, roomPlans, whatsappHref } from "@/data/hostel";

const SERVICE_ID = import.meta.env["VITE_EMAILJS_SERVICE_ID"] as string | undefined;
const TEMPLATE_ID = import.meta.env["VITE_EMAILJS_TEMPLATE_ID"] as string | undefined;
const PUBLIC_KEY = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"] as string | undefined;

type Props = { variant?: "booking" | "contact" };

export function EnquiryForm({ variant = "booking" }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const isBooking = variant === "booking";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setStatus("sending");

    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: data.full_name,
            full_name: data.full_name,
            phone: data.phone,
            whatsapp: data.whatsapp || data.phone,
            email: data.email,
            form_type: isBooking ? "Room Booking Enquiry" : "General Contact Enquiry",
            preferred_room: data.preferred_room || "N/A",
            move_in_date: data.move_in_date || "Flexible / Not specified",
            persons: data.persons || "1",
            message: data.message || "No additional message provided.",
            to_email: hostel.email,
            site_name: hostel.name,
            submitted_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          },
          { publicKey: PUBLIC_KEY },
        );
        setStatus("sent");
        form.reset();
        return;
      } catch (err) {
        console.error("EmailJS submission error:", err);
        setStatus("error");
        return;
      }
    }

    // Fallback while email credentials are not configured: hand off to WhatsApp.
    const summary = Object.entries(data)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k.replace(/_/g, " ")}: ${v}`)
      .join("\n");
    window.open(
      whatsappHref(`Hello BABA PG & HOSTEL, I would like to enquire.\n\n${summary}`),
      "_blank",
      "noopener",
    );
    setStatus("sent");
    form.reset();
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-whatsapp/40 bg-whatsapp/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-whatsapp" aria-hidden="true" />
        <p className="mt-4 text-lg font-semibold">Thank you for your enquiry.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          BABA PG &amp; HOSTEL will contact you shortly.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="full_name" label="Full Name" required />
        <Field id="phone" label="Phone Number" type="tel" required pattern="[0-9+\s-]{10,15}" />
        {isBooking ? <Field id="whatsapp" label="WhatsApp Number" type="tel" /> : null}
        <Field id="email" label="Email" type="email" required />
        {isBooking ? (
          <>
            <div className="grid gap-2">
              <Label htmlFor="preferred_room">Preferred Room</Label>
              <select
                id="preferred_room"
                name="preferred_room"
                required
                className="h-10 rounded-md border border-input bg-background px-3 text-sm"
              >
                {roomPlans.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <Field id="move_in_date" label="Expected Move-in Date" type="date" />
            <Field id="persons" label="Number of Persons" type="number" min="1" defaultValue="1" />
          </>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">
          {isBooking ? "Message / Additional Requirements" : "Your Message"}
        </Label>
        <Textarea id="message" name="message" rows={4} />
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm text-destructive">
          Sorry, the enquiry could not be sent. Please call {hostel.phones[0]} or message us on
          WhatsApp.
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
      >
        {status === "sending" ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
        ) : null}
        {isBooking ? "Send Booking Enquiry" : "Send Message"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  ...props
}: { id: string; label: string } & React.ComponentProps<typeof Input>) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={id} {...props} />
    </div>
  );
}
