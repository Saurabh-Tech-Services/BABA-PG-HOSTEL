import {
  Wifi,
  Zap,
  BatteryCharging,
  Snowflake,
  Fan,
  ShowerHead,
  Droplets,
  GlassWater,
  Bath,
  Sun,
  BookOpen,
  BedDouble,
  Armchair,
  Coffee,
  UtensilsCrossed,
  Soup,
  Sparkles,
  Shirt,
  WashingMachine,
  Brush,
  Cctv,
  ShieldCheck,
  Users,
  Car,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { facilityGroups } from "@/data/hostel";

const icons: Record<string, LucideIcon> = {
  "Wi-Fi": Wifi,
  "24/7 Electricity": Zap,
  "Power Backup": BatteryCharging,
  "Air Conditioning": Snowflake,
  Fan: Fan,
  Geyser: ShowerHead,
  "Drinking Water": GlassWater,
  "RO Water": Droplets,
  "Attached Bathroom": Bath,
  "Common Bathroom": Bath,
  Balcony: Sun,
  "Study Table": BookOpen,
  Bed: BedDouble,
  Mattress: BedDouble,
  "Table & Chair": Armchair,
  Breakfast: Coffee,
  Lunch: UtensilsCrossed,
  Dinner: Soup,
  "Food Included in Rent": UtensilsCrossed,
  Housekeeping: Sparkles,
  Laundry: Shirt,
  "Washing Machine": WashingMachine,
  "Room Cleaning": Brush,
  CCTV: Cctv,
  "Safe & Secure Environment": ShieldCheck,
  "Common Area": Users,
  Parking: Car,
};

export function FacilitiesGrid() {
  const items = facilityGroups.flatMap((group) => group.items);

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {items.map((item) => {
        const Icon = icons[item] ?? Check;
        return (
          <div
            key={item}
            className="flex items-center gap-2.5 rounded-xl border border-border bg-card p-3 shadow-card"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-xs font-medium leading-tight">{item}</span>
          </div>
        );
      })}
    </div>
  );
}
