import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { SERVICE_LABELS } from "../constants";
import { ServiceType } from "../types";
import type { GalleryItem } from "../types";

// ── Data ─────────────────────────────────────────────────────────────────────

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Full Roof Replacement",
    location: "Buckhead, Atlanta",
    serviceType: ServiceType.Replacement,
    beforeImage:
      "/assets/generated/before-after-roof-replacement.dim_900x600.jpg",
    afterImage: "/assets/generated/roofing-buckhead-home.dim_800x600.jpg",
    description:
      "Complete architectural shingle replacement on a classic Buckhead estate. Upgraded to GAF Timberline HDZ with a 50-year manufacturer warranty.",
  },
  {
    id: "g2",
    title: "Seamless Gutter Installation",
    location: "Sandy Springs, GA",
    serviceType: ServiceType.Gutters,
    beforeImage:
      "/assets/generated/gutter-installation-atlanta.dim_800x600.jpg",
    afterImage: "/assets/generated/gutter-installation-atlanta.dim_800x600.jpg",
    description:
      "Full seamless aluminum gutter installation with LeafFilter guards. Eliminated recurring foundation water intrusion for a Sandy Springs family.",
  },
  {
    id: "g3",
    title: "Emergency Storm Tarping",
    location: "Midtown, Atlanta",
    serviceType: ServiceType.Emergency,
    beforeImage: "/assets/generated/emergency-roof-tarping.dim_800x600.jpg",
    afterImage: "/assets/generated/emergency-roof-tarping.dim_800x600.jpg",
    description:
      "Same-day emergency response after a severe thunderstorm. Tarped 1,200 sq ft of exposed decking before interior damage occurred.",
  },
  {
    id: "g4",
    title: "Hail Damage Repair",
    location: "Buckhead, Atlanta",
    serviceType: ServiceType.Repair,
    beforeImage: "/assets/generated/roofing-buckhead-home.dim_800x600.jpg",
    afterImage:
      "/assets/generated/before-after-roof-replacement.dim_900x600.jpg",
    description:
      "Insurance-assisted hail damage repair. Replaced 22 damaged shingles and resealed all chimney flashing and valley intersections.",
  },
  {
    id: "g5",
    title: "Commercial TPO Replacement",
    location: "Dunwoody, GA",
    serviceType: ServiceType.Replacement,
    beforeImage:
      "/assets/generated/before-after-roof-replacement.dim_900x600.jpg",
    afterImage: "/assets/generated/roofing-buckhead-home.dim_800x600.jpg",
    description:
      "Full TPO membrane replacement on a 4,500 sq ft commercial building — completed on schedule with zero disruption to daily operations.",
  },
  {
    id: "g6",
    title: "Gutter Repair & Downspouts",
    location: "Roswell, GA",
    serviceType: ServiceType.Gutters,
    beforeImage:
      "/assets/generated/gutter-installation-atlanta.dim_800x600.jpg",
    afterImage: "/assets/generated/gutter-installation-atlanta.dim_800x600.jpg",
    description:
      "Repaired sagging gutters, replaced 3 damaged sections, and added 4 extended downspouts to redirect water away from the foundation.",
  },
  {
    id: "g7",
    title: "Wind Damage Emergency Tarp",
    location: "Alpharetta, GA",
    serviceType: ServiceType.Emergency,
    beforeImage: "/assets/generated/emergency-roof-tarping.dim_800x600.jpg",
    afterImage:
      "/assets/generated/before-after-roof-replacement.dim_900x600.jpg",
    description:
      "Emergency overnight tarping after wind damage, followed by full repair within 48 hours. We handled the entire insurance claim process.",
  },
  {
    id: "g8",
    title: "Chimney Leak Repair",
    location: "Druid Hills, Atlanta",
    serviceType: ServiceType.Repair,
    beforeImage: "/assets/generated/roofing-buckhead-home.dim_800x600.jpg",
    afterImage:
      "/assets/generated/before-after-roof-replacement.dim_900x600.jpg",
    description:
      "Diagnosed and permanently resolved a chronic chimney leak. Replaced all step flashing and counter flashing with custom-bent copper.",
  },
  {
    id: "g9",
    title: "Architectural Shingle Upgrade",
    location: "Marietta, GA",
    serviceType: ServiceType.Replacement,
    beforeImage:
      "/assets/generated/before-after-roof-replacement.dim_900x600.jpg",
    afterImage: "/assets/generated/roofing-buckhead-home.dim_800x600.jpg",
    description:
      "Tear-off and full replacement with CertainTeed Landmark Pro shingles. Dramatically improved curb appeal and increased home value.",
  },
];

type FilterType = "all" | ServiceType;

const FILTERS: { value: FilterType; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: ServiceType.Repair, label: SERVICE_LABELS[ServiceType.Repair] },
  {
    value: ServiceType.Replacement,
    label: SERVICE_LABELS[ServiceType.Replacement],
  },
  { value: ServiceType.Gutters, label: SERVICE_LABELS[ServiceType.Gutters] },
  {
    value: ServiceType.Emergency,
    label: SERVICE_LABELS[ServiceType.Emergency],
  },
];

const SERVICE_BADGE_COLORS: Record<ServiceType, string> = {
  [ServiceType.Repair]: "bg-primary/10 text-primary border-primary/20",
  [ServiceType.Replacement]: "bg-accent/10 text-accent border-accent/20",
  [ServiceType.Gutters]: "bg-secondary text-secondary-foreground border-border",
  [ServiceType.Emergency]:
    "bg-destructive/10 text-destructive border-destructive/20",
};

// ── Gallery Card ──────────────────────────────────────────────────────────────

interface GalleryCardProps {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
}

function GalleryCard({ item, onOpen }: GalleryCardProps) {
  return (
    <button
      type="button"
      className="card-elevated overflow-hidden group cursor-pointer text-left w-full"
      onClick={() => onOpen(item)}
      aria-label={`View ${item.title} project in ${item.location}`}
      data-ocid={`gallery-item-${item.id}`}
    >
      {/* Before / After thumbnails */}
      <div className="grid grid-cols-2 h-48 relative overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={item.beforeImage}
            alt={`Before — ${item.title}`}
            loading="lazy"
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
          <span className="absolute bottom-2 left-2 text-xs font-bold uppercase tracking-wider bg-foreground/75 text-background px-2 py-0.5 rounded">
            Before
          </span>
        </div>
        <div className="relative overflow-hidden border-l border-card">
          <img
            src={item.afterImage}
            alt={`After — ${item.title}`}
            loading="lazy"
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
          <span className="absolute bottom-2 right-2 text-xs font-bold uppercase tracking-wider bg-accent text-accent-foreground px-2 py-0.5 rounded">
            After
          </span>
        </div>
        {/* Center divider */}
        <div
          className="absolute inset-y-0 left-1/2 w-0.5 bg-card z-10 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Card body */}
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-semibold text-base leading-snug text-card-foreground group-hover:text-primary transition-colors duration-200 min-w-0">
            {item.title}
          </h3>
          <Badge
            variant="outline"
            className={`shrink-0 text-xs ${SERVICE_BADGE_COLORS[item.serviceType]}`}
          >
            {SERVICE_LABELS[item.serviceType]}
          </Badge>
        </div>
        <p className="text-xs font-medium text-muted-foreground">
          {item.location}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>
      </div>
    </button>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const item = items[currentIndex];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <dialog
      open
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4 w-full h-full max-w-none m-0 border-0"
      onClick={onClose}
      onKeyUp={(e) => e.key === "Enter" && onClose()}
      aria-label={`Lightbox: ${item.title}`}
      data-ocid="lightbox-overlay"
    >
      {/* Panel — stop click propagation */}
      <div
        className="relative bg-card rounded-xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyUp={(e) => e.stopPropagation()}
        role="presentation"
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 bg-foreground/60 text-background rounded-full p-1.5 hover:bg-foreground/80 transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close lightbox"
          data-ocid="lightbox-close"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Before / After full-size */}
        <div className="grid grid-cols-2 min-h-0" style={{ maxHeight: "56vh" }}>
          <div className="relative overflow-hidden">
            <img
              src={item.beforeImage}
              alt={`Before — ${item.title}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 text-sm font-bold uppercase tracking-wider bg-foreground/80 text-background px-3 py-1 rounded">
              Before
            </span>
          </div>
          <div className="relative overflow-hidden border-l-2 border-card">
            <img
              src={item.afterImage}
              alt={`After — ${item.title}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 right-3 text-sm font-bold uppercase tracking-wider bg-accent text-accent-foreground px-3 py-1 rounded">
              After
            </span>
          </div>
        </div>

        {/* Caption */}
        <div className="p-5 flex items-start justify-between gap-4 border-t border-border">
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h2 className="font-display font-bold text-lg text-card-foreground">
                {item.title}
              </h2>
              <Badge
                variant="outline"
                className={`text-xs ${SERVICE_BADGE_COLORS[item.serviceType]}`}
              >
                {SERVICE_LABELS[item.serviceType]}
              </Badge>
            </div>
            <p className="text-sm font-medium text-muted-foreground mb-2">
              {item.location}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
          <span className="shrink-0 text-xs text-muted-foreground font-medium tabular-nums">
            {currentIndex + 1}&nbsp;/&nbsp;{items.length}
          </span>
        </div>

        {/* Prev */}
        <button
          type="button"
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="absolute left-3 top-[28%] -translate-y-1/2 bg-card/80 text-card-foreground rounded-full p-2 shadow hover:bg-card transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous project"
          data-ocid="lightbox-prev"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={onNext}
          disabled={currentIndex === items.length - 1}
          className="absolute right-3 top-[28%] -translate-y-1/2 bg-card/80 text-card-foreground rounded-full p-2 shadow hover:bg-card transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next project"
          data-ocid="lightbox-next"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </dialog>
  );
}

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.serviceType === activeFilter);

  const openLightbox = useCallback(
    (item: GalleryItem) => {
      const idx = filtered.findIndex((g) => g.id === item.id);
      setLightboxIndex(idx >= 0 ? idx : null);
    },
    [filtered],
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null && i < filtered.length - 1 ? i + 1 : i,
    );
  }, [filtered.length]);

  return (
    <div>
      {/* ── Header ── */}
      <section className="bg-primary py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
            Our Work
          </Badge>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            Our Recent Projects –<br className="hidden sm:block" /> Buckhead
            &amp; Metro Atlanta
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            See the quality of our craftsmanship firsthand. Every project
            features real before &amp; after photos so you know exactly what to
            expect.
          </p>
        </div>
      </section>

      {/* ── Sticky filter bar ── */}
      <div className="bg-card border-b border-border sticky top-16 md:top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className="flex items-center gap-2 overflow-x-auto py-3"
            role="tablist"
            aria-label="Filter by service type"
            data-ocid="gallery-filters"
            style={{ scrollbarWidth: "none" }}
          >
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                role="tab"
                aria-selected={activeFilter === f.value}
                onClick={() => setActiveFilter(f.value)}
                data-ocid={`gallery-filter-${f.value}`}
                className={[
                  "shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  activeFilter === f.value
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground",
                ].join(" ")}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <section className="bg-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-sm text-muted-foreground mb-6">
            Showing{" "}
            <strong className="text-foreground">{filtered.length}</strong>{" "}
            project{filtered.length !== 1 ? "s" : ""}
            {activeFilter !== "all" &&
              ` in ${SERVICE_LABELS[activeFilter as ServiceType]}`}
          </p>

          {filtered.length === 0 ? (
            <div
              className="text-center py-24 text-muted-foreground"
              data-ocid="gallery-empty"
            >
              <p className="text-5xl mb-4" aria-hidden="true">
                🏠
              </p>
              <p className="text-lg font-semibold text-foreground">
                No projects in this category yet.
              </p>
              <p className="text-sm mt-1">
                Check back soon — we're always adding new work.
              </p>
              <Button
                type="button"
                variant="outline"
                className="mt-6"
                onClick={() => setActiveFilter("all")}
              >
                View all projects
              </Button>
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="gallery-grid"
            >
              {filtered.map((item) => (
                <GalleryCard key={item.id} item={item} onOpen={openLightbox} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="bg-muted/40 border-t border-border py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
            Ready for Your Transformation?
          </h2>
          <p className="text-muted-foreground mb-6">
            Join hundreds of satisfied Atlanta homeowners. Get a free estimate
            today — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              className="btn-primary px-8 py-4 text-base"
              data-ocid="gallery-cta-booking"
            >
              <Link to="/booking">Schedule Free Inspection</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="px-8 py-4 text-base"
              data-ocid="gallery-cta-call"
            >
              <a href="tel:+14045557663">Call (404) 555-ROOF</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </div>
  );
}
