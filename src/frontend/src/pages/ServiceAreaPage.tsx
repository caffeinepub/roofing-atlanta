import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, ChevronRight, MapPin, Phone } from "lucide-react";
import {
  BUSINESS_ADDRESS,
  PHONE_HREF,
  PHONE_NUMBER,
  SERVICE_AREAS,
} from "../constants";

const AREA_DETAILS = [
  {
    id: "buckhead",
    name: "Buckhead",
    description:
      "Our home base. We serve all of Buckhead including Piedmont Road, Peachtree Road, West Paces Ferry, and the surrounding neighborhoods.",
    zipCodes: ["30305", "30342", "30327"],
    highlight: true,
  },
  {
    id: "midtown",
    name: "Midtown Atlanta",
    description:
      "Serving Midtown homeowners and commercial properties from 10th Street to Ponce de Leon.",
    zipCodes: ["30309", "30308"],
    highlight: false,
  },
  {
    id: "sandy-springs",
    name: "Sandy Springs",
    description:
      "Full service coverage across Sandy Springs including Roswell Rd, Hammond Dr, and all residential areas.",
    zipCodes: ["30328", "30350", "30338"],
    highlight: false,
  },
  {
    id: "dunwoody",
    name: "Dunwoody",
    description:
      "Serving Dunwoody's premier neighborhoods including Perimeter area, Vermack Rd, and Mt. Vernon Rd.",
    zipCodes: ["30338", "30346"],
    highlight: false,
  },
  {
    id: "alpharetta",
    name: "Alpharetta & Roswell",
    description:
      "Full roofing services for Alpharetta and Roswell homeowners and commercial properties.",
    zipCodes: ["30004", "30009", "30022", "30075"],
    highlight: false,
  },
  {
    id: "druid-hills",
    name: "Druid Hills & Decatur",
    description:
      "Historic neighborhoods deserve expert care. We have extensive experience with older home roofing systems.",
    zipCodes: ["30307", "30030", "30033"],
    highlight: false,
  },
];

export function ServiceAreaPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
            Coverage
          </Badge>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            We Serve Metro Atlanta
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-6">
            Based in Buckhead at {BUSINESS_ADDRESS}, we serve homeowners and
            businesses throughout Metro Atlanta.
          </p>
          <a
            href={PHONE_HREF}
            data-ocid="service-area-phone-cta"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-smooth hover:opacity-90"
          >
            <Phone className="w-4 h-4" />
            {PHONE_NUMBER}
          </a>
        </div>
      </section>

      {/* Map Visual */}
      <section className="bg-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map placeholder with real-looking stats */}
            <div className="relative">
              <img
                src="/assets/generated/atlanta-buckhead-skyline.dim_1200x600.jpg"
                alt="Atlanta Buckhead service area"
                className="rounded-xl shadow-xl w-full object-cover aspect-video"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-lg p-4 border border-border shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="font-display font-semibold text-foreground text-sm">
                    Headquarters
                  </span>
                </div>
                <p className="text-muted-foreground text-xs">
                  {BUSINESS_ADDRESS}
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  Serving 25-mile radius across Metro Atlanta
                </p>
              </div>
            </div>

            {/* All Cities List */}
            <div>
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">
                Service Coverage
              </Badge>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                All Cities We Serve
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We serve over 15 cities and communities in Metro Atlanta. If you
                don't see your city listed, give us a call — we likely cover
                your area.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                {SERVICE_AREAS.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 py-2 px-3 rounded-lg bg-muted/50"
                    data-ocid={`service-area-${area.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className="btn-primary"
                data-ocid="service-area-estimate-cta"
              >
                <Link to="/contact">
                  Get a Free Estimate <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Area Details */}
      <section className="bg-muted/40 py-12 md:py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">
              Local Expertise
            </Badge>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
              Neighborhood Coverage Details
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {AREA_DETAILS.map((area) => (
              <div
                key={area.id}
                data-ocid={`area-detail-${area.id}`}
                className={`card-elevated p-5 ${area.highlight ? "border-accent/50 bg-accent/5" : ""}`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-display font-semibold text-foreground text-base">
                    {area.name}
                  </h3>
                  {area.highlight && (
                    <Badge className="bg-accent/20 text-accent border-accent/30 text-xs flex-shrink-0">
                      Home Base
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {area.zipCodes.map((zip) => (
                    <span
                      key={zip}
                      className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded font-mono"
                    >
                      {zip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="bg-primary py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-3">
            Storm in Your Area?{" "}
            <span className="text-accent">We're On Call.</span>
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Our 24/7 emergency response team covers all service areas. Don't
            wait — call now.
          </p>
          <a
            href={PHONE_HREF}
            data-ocid="service-area-emergency-cta"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg transition-smooth hover:opacity-90"
          >
            <Phone className="w-5 h-5" />
            {PHONE_NUMBER}
          </a>
        </div>
      </section>
    </div>
  );
}
