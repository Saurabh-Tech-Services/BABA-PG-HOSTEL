import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function Gallery({ limit }: { limit?: number }) {
  const [active, setActive] = useState<GalleryItem | null>(null);
  const categories = ["All", ...Array.from(new Set(galleryItems.map((i) => i.category)))];
  const [filter, setFilter] = useState("All");

  const items = galleryItems
    .filter((i) => filter === "All" || i.category === filter)
    .slice(0, limit ?? galleryItems.length);

  return (
    <div>
      {limit ? null : (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                filter === c
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border bg-card hover:border-accent hover:text-accent",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {items.map((item) =>
          item.src ? (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-card"
                aria-label={`View larger: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1400}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-brand/90 to-brand/0 px-3 py-3 text-left text-sm font-medium text-brand-foreground opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                >
                  {item.category}
                </span>
              </button>
            </li>
          ) : (
            <li
              key={item.id}
              className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-surface p-4 text-center"
            >
              <ImageIcon className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
              <span className="text-sm font-medium">{item.category}</span>
              <span className="text-xs text-muted-foreground">Photos coming soon</span>
            </li>
          ),
        )}
      </ul>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl overflow-hidden p-0">
          <DialogTitle className="sr-only">{active?.alt ?? "Gallery image"}</DialogTitle>
          {active?.src ? (
            <img src={active.src} alt={active.alt} className="h-auto w-full object-contain" />
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
