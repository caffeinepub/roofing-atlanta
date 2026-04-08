import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_HOURS,
  PHONE_HREF,
  PHONE_NUMBER,
  SERVICE_OPTIONS,
} from "../constants";
import { useSubmitQuote } from "../hooks/useQueries";
import { ServiceType } from "../types";

interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  serviceType: ServiceType;
  description: string;
}

export function ContactPage() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    phone: "",
    email: "",
    serviceType: ServiceType.Repair,
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const submitQuote = useSubmitQuote();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitQuote.mutateAsync(form);
    setSubmitted(true);
  };

  const CONTACT_INFO = [
    {
      id: "c-phone",
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: PHONE_NUMBER,
      href: PHONE_HREF,
    },
    {
      id: "c-email",
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: BUSINESS_EMAIL,
      href: `mailto:${BUSINESS_EMAIL}`,
    },
    {
      id: "c-address",
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: BUSINESS_ADDRESS,
      href: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS_ADDRESS)}`,
    },
    {
      id: "c-hours",
      icon: <Clock className="w-5 h-5" />,
      label: "Hours",
      value: BUSINESS_HOURS,
      href: null,
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
            Get In Touch
          </Badge>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            Contact Roofing Atlanta
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto">
            Ready for a free estimate? Have questions? We're here Mon–Sat from
            7am to 6pm — and 24/7 for emergencies.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="bg-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                Reach Us Directly
              </h2>
              <div className="space-y-4 mb-8">
                {CONTACT_INFO.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 items-start"
                    data-ocid={item.id}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wide mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          className="text-foreground font-medium hover:text-accent transition-colors break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Box */}
              <div
                className="bg-primary rounded-xl p-6"
                data-ocid="emergency-contact-box"
              >
                <h3 className="font-display font-bold text-primary-foreground text-lg mb-2">
                  <span aria-hidden="true">🚨</span>
                  <span className="sr-only">Emergency:</span> Emergency? Call
                  Now.
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Storm damage doesn't wait. Our emergency response team is
                  available 24 hours a day, 7 days a week.
                </p>
                <a
                  href={PHONE_HREF}
                  data-ocid="contact-emergency-phone"
                  className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-lg font-bold transition-smooth hover:opacity-90 w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-elevated p-6 md:p-8" data-ocid="contact-form">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h2 className="font-display font-bold text-2xl text-foreground mb-2">
                    Message Sent!
                  </h2>
                  <p className="text-muted-foreground">
                    Thanks, {form.name}! We'll follow up within the hour during
                    business hours. For urgent needs, call us directly at{" "}
                    <a
                      href={PHONE_HREF}
                      className="text-accent font-semibold hover:underline"
                    >
                      {PHONE_NUMBER}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display font-bold text-xl text-foreground mb-1">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground text-sm mb-5">
                    Free estimates. No pressure. Response in under 1 hour.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium text-foreground mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="John Smith"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          data-ocid="contact-name-input"
                          className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-sm font-medium text-foreground mb-1"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          placeholder="(404) 555-0000"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          data-ocid="contact-phone-input"
                          className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        data-ocid="contact-email-input"
                        className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        Service Needed *
                      </label>
                      <select
                        id="contact-service"
                        required
                        value={form.serviceType}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            serviceType: e.target.value as ServiceType,
                          })
                        }
                        data-ocid="contact-service-select"
                        className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        Tell Us About Your Roof
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        placeholder="Describe the issue, damage, or project you need help with..."
                        value={form.description}
                        onChange={(e) =>
                          setForm({ ...form, description: e.target.value })
                        }
                        data-ocid="contact-message-input"
                        className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitQuote.isPending}
                      data-ocid="contact-submit-btn"
                      className="w-full btn-primary py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitQuote.isPending
                        ? "Sending..."
                        : "Send Message & Get Free Estimate →"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
