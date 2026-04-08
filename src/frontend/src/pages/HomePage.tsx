import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  ChevronRight,
  Clock,
  Droplets,
  Home,
  Phone,
  Shield,
  Star,
  Wrench,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { TrustSection } from "../components/TrustSection";
import {
  PHONE_HREF,
  PHONE_NUMBER,
  SERVICE_OPTIONS,
  TRUST_BADGES,
} from "../constants";
import { useSubmitQuote } from "../hooks/useQueries";
import { ServiceType } from "../types";

const SERVICE_CARDS = [
  {
    id: "repair",
    title: "Roof Repair",
    description:
      "Fast, reliable repairs for leaks, missing shingles, storm damage, and more. We diagnose the problem and fix it right.",
    icon: <Wrench className="w-6 h-6" />,
    serviceType: ServiceType.Repair,
    href: "/services",
  },
  {
    id: "replacement",
    title: "Roof Replacement",
    description:
      "Complete roof replacement using premium architectural shingles with lifetime warranty on labor and materials.",
    icon: <Home className="w-6 h-6" />,
    serviceType: ServiceType.Replacement,
    href: "/services",
  },
  {
    id: "commercial",
    title: "Commercial Roofing",
    description:
      "Flat roof systems, TPO, EPDM, and metal roofing for commercial properties. Minimal disruption to your business.",
    icon: <Building2 className="w-6 h-6" />,
    serviceType: ServiceType.Replacement,
    href: "/services",
  },
  {
    id: "emergency",
    title: "Emergency Tarping",
    description:
      "24/7 emergency response for storm damage. We'll protect your home immediately and work with your insurance.",
    icon: <Zap className="w-6 h-6" />,
    serviceType: ServiceType.Emergency,
    href: "/services",
  },
  {
    id: "gutters",
    title: "Gutter Installation",
    description:
      "Seamless aluminum and copper gutters, guards, and downspouts. Keep water away from your foundation.",
    icon: <Droplets className="w-6 h-6" />,
    serviceType: ServiceType.Gutters,
    href: "/services",
  },
  {
    id: "inspection",
    title: "Free Inspections",
    description:
      "Comprehensive roof inspections with detailed reports. We help you navigate insurance claims after storm damage.",
    icon: <Shield className="w-6 h-6" />,
    serviceType: ServiceType.Repair,
    href: "/booking",
  },
];

const WHY_CHOOSE = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Licensed & Fully Insured",
    desc: "GA Lic. #RBP-2847. Full liability and workers' comp coverage.",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "5-Star Google Rated",
    desc: "Over 200 verified reviews. Consistent excellence since 2002.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Same-Day Response",
    desc: "Emergency calls answered within the hour, 7 days a week.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Lifetime Warranty",
    desc: "We back our work with a lifetime warranty on labor and materials.",
  },
];

interface QuoteFormState {
  name: string;
  phone: string;
  email: string;
  serviceType: ServiceType;
  description: string;
}

export function HomePage() {
  const [form, setForm] = useState<QuoteFormState>({
    name: "",
    phone: "",
    email: "",
    serviceType: ServiceType.Repair,
    description: "Free inspection requested",
  });
  const [submitted, setSubmitted] = useState(false);
  const submitQuote = useSubmitQuote();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitQuote.mutateAsync(form);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden"
        data-ocid="hero-section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(/assets/generated/hero-roofing-atlanta.dim_1400x800.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-primary/75" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div>
              <Badge className="bg-accent/20 text-accent border-accent/30 mb-4 font-semibold">
                Buckhead's #1 Roofing Contractor
              </Badge>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
                Atlanta's Premier
                <br />
                <span className="text-accent">Roofing Specialists</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed max-w-lg">
                Quality you can stand under. Serving Buckhead, Midtown, and
                Metro Atlanta with 20+ years of trusted roofing expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={PHONE_HREF}
                  data-ocid="hero-phone-cta"
                  className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-semibold text-base transition-smooth hover:opacity-90 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                >
                  <Phone className="w-5 h-5" />
                  {PHONE_NUMBER}
                </a>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-6 py-3.5 text-base"
                >
                  <Link to="/booking" data-ocid="hero-booking-cta">
                    Schedule Inspection{" "}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3">
                {TRUST_BADGES.map((badge) => (
                  <div key={badge.id} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-primary-foreground text-sm font-semibold truncate">
                        {badge.label}
                      </p>
                      <p className="text-primary-foreground/60 text-xs truncate">
                        {badge.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead Form */}
            <div
              className="bg-card rounded-xl shadow-2xl p-6 md:p-8"
              data-ocid="hero-lead-form"
            >
              {submitted ? (
                <div className="text-center py-6">
                  <CheckCircle className="w-14 h-14 text-accent mx-auto mb-4" />
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    We'll Be In Touch!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Thank you. One of our roofing experts will contact you
                    within the hour.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display font-bold text-xl text-foreground mb-1">
                    Get Your Free Estimate
                  </h2>
                  <p className="text-muted-foreground text-sm mb-5">
                    No obligation. Response within 1 hour.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="hero-name"
                          className="block text-xs font-medium text-muted-foreground mb-1"
                        >
                          Your Name
                        </label>
                        <input
                          id="hero-name"
                          type="text"
                          placeholder="John Smith"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          data-ocid="quote-name-input"
                          className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="hero-phone"
                          className="block text-xs font-medium text-muted-foreground mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          id="hero-phone"
                          type="tel"
                          placeholder="(404) 555-0000"
                          required
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          data-ocid="quote-phone-input"
                          className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="hero-email"
                        className="block text-xs font-medium text-muted-foreground mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        id="hero-email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        data-ocid="quote-email-input"
                        className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hero-service"
                        className="block text-xs font-medium text-muted-foreground mb-1"
                      >
                        Service Type
                      </label>
                      <select
                        id="hero-service"
                        required
                        value={form.serviceType}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            serviceType: e.target.value as ServiceType,
                          })
                        }
                        data-ocid="quote-service-select"
                        className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      disabled={submitQuote.isPending}
                      data-ocid="quote-submit-btn"
                      className="w-full btn-primary text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitQuote.isPending
                        ? "Submitting..."
                        : "Get Your Free Estimate →"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="bg-background py-16 md:py-20"
        data-ocid="services-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">
              What We Do
            </Badge>
            <h2 className="text-h2 text-foreground mb-3">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Comprehensive roofing solutions for residential and commercial
              properties across Metro Atlanta.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CARDS.map((service) => (
              <Link
                key={service.id}
                to={service.href}
                data-ocid={`service-card-${service.id}`}
                className="card-elevated p-6 group cursor-pointer block"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200">
                  {service.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/40 py-16 md:py-20" data-ocid="why-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">
                Why Choose Us
              </Badge>
              <h2 className="text-h2 text-foreground mb-4">
                Atlanta Trusts Us With Their Most Important Asset
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                For over 20 years, Roofing Atlanta has been the go-to roofing
                contractor for Buckhead homeowners and commercial property
                managers. We bring professional craftsmanship, honest pricing,
                and neighborhood-level care to every job.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {WHY_CHOOSE.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm">
                        {item.title}
                      </p>
                      <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className="btn-secondary"
                data-ocid="why-learn-more-cta"
              >
                <Link to="/about">
                  About Roofing Atlanta{" "}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/roofing-buckhead-home.dim_800x600.jpg"
                alt="Beautiful home with new roof in Buckhead Atlanta"
                className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-display font-bold text-2xl text-foreground">
                  200+
                </p>
                <p className="text-muted-foreground text-xs">5-Star Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals: Reviews + Badges + Warranty */}
      <TrustSection />

      {/* CTA Banner */}
      <section className="bg-primary py-14" data-ocid="cta-banner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Storm Damage? <span className="text-accent">We Respond Fast.</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Don't wait — water damage escalates quickly. Call or book a same-day
            inspection right now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              data-ocid="cta-phone-btn"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg transition-smooth hover:opacity-90"
            >
              <Phone className="w-5 h-5" />
              {PHONE_NUMBER}
            </a>
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-base"
            >
              <Link to="/booking" data-ocid="cta-booking-btn">
                Book Free Inspection
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
