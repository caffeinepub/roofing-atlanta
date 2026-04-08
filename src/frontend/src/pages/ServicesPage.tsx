import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Droplets,
  Phone,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { PHONE_HREF, PHONE_NUMBER } from "../constants";

interface ServiceCard {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
}

const SERVICES: ServiceCard[] = [
  {
    id: "repair",
    icon: <Wrench className="w-9 h-9" aria-hidden="true" />,
    title: "Roof Repair",
    description:
      "Missing shingles, stubborn leaks, or fresh storm damage — our GAF-certified technicians diagnose and fix roofing problems fast, using manufacturer-approved materials for a repair that truly lasts. Most jobs completed same day or next day.",
    features: [
      "Shingle & flashing repair",
      "Leak detection & sealing",
      "Emergency same-day service",
    ],
    ctaLabel: "Get a Quote",
  },
  {
    id: "replacement",
    icon: <Shield className="w-9 h-9" aria-hidden="true" />,
    title: "Roof Replacement",
    description:
      "A full tear-off and new installation by GAF Master Elite® certified roofers. We use premium architectural shingles engineered for Atlanta's climate, backed by a 25+ year manufacturer warranty and our lifetime labor guarantee.",
    features: [
      "GAF Master Elite® certified",
      "25+ year material warranty",
      "Lifetime labor warranty",
    ],
    ctaLabel: "Get a Quote",
  },
  {
    id: "gutters",
    icon: <Droplets className="w-9 h-9" aria-hidden="true" />,
    title: "Gutter Installation",
    description:
      "Protect your home's foundation and landscaping with seamless gutters custom-fabricated on-site for a perfect, leak-free fit. We install aluminum and copper gutters with optional guards to keep debris out year-round.",
    features: [
      "Seamless aluminum & copper",
      "Custom on-site fabrication",
      "Gutter guards available",
    ],
    ctaLabel: "Learn More",
  },
  {
    id: "emergency",
    icon: <Zap className="w-9 h-9" aria-hidden="true" />,
    title: "Emergency Tarping",
    description:
      "Storm damage doesn't wait — neither do we. Our emergency crew is on call 24/7 to tarp your roof and board up openings within hours of a storm, stopping further water intrusion while we coordinate your insurance claim.",
    features: [
      "24/7 storm response",
      "Insurance coordination",
      "Priority repair scheduling",
    ],
    ctaLabel: "Call Now",
  },
];

export function ServicesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-label text-accent mb-3 tracking-widest">
            Metro Atlanta Roofing Experts
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4 leading-tight">
            Our Roofing Services
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Serving Buckhead, Midtown, Sandy Springs, and all of Metro Atlanta —
            residential and commercial roofing solutions backed by
            industry-leading warranties.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold transition-smooth hover:opacity-90 focus:ring-2 focus:ring-accent focus:ring-offset-2"
              data-ocid="services-phone-cta"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {PHONE_NUMBER}
            </a>
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/booking" data-ocid="services-book-cta">
                Schedule Free Inspection
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services 2×2 Grid */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                data-ocid={`service-card-${service.id}`}
                className="card-elevated flex flex-col p-8 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 transition-smooth group-hover:bg-primary/20">
                  {service.icon}
                </div>

                {/* Headline */}
                <h2 className="font-display font-bold text-2xl text-foreground mb-3">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Feature bullets */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                        aria-hidden="true"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className="btn-primary w-full justify-center"
                  data-ocid={`service-cta-${service.id}`}
                >
                  <Link
                    to={service.id === "emergency" ? "/contact" : "/booking"}
                  >
                    {service.ctaLabel}
                    <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-muted/40 border-t border-border py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "15+", label: "Years in Atlanta" },
              { value: "2,400+", label: "Projects Completed" },
              { value: "5.0★", label: "Google Rating" },
              { value: "Lifetime", label: "Labor Warranty" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-bold text-3xl text-accent">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-3">
            Not Sure What You Need?
          </h2>
          <p className="text-primary-foreground/80 mb-7">
            Our free inspection takes 30 minutes and comes with a detailed
            written report — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="btn-primary px-8 py-4 text-base"
              data-ocid="services-bottom-cta"
            >
              <Link to="/booking">Book a Free Inspection</Link>
            </Button>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm font-medium"
              data-ocid="services-bottom-phone"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Or call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
