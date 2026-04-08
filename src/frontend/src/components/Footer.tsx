import { Link } from "@tanstack/react-router";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_HOURS,
  NAV_LINKS,
  PHONE_HREF,
  PHONE_NUMBER,
} from "../constants";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? window.location.hostname
      : "roofingatlanta.com";

  return (
    <footer
      className="bg-primary text-primary-foreground"
      data-ocid="main-footer"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded bg-accent flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="w-5 h-5 text-accent-foreground"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 12L12 3l9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground">
                Roofing <span className="text-accent">Atlanta</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-5">
              Atlanta's most trusted roofing contractor. Serving Buckhead and
              Metro Atlanta with quality craftsmanship since 2002.
            </p>
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-accent text-accent" />
              ))}
              <span className="text-primary-foreground/80 text-sm ml-1">
                5.0 (200+ reviews)
              </span>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4 text-primary-foreground">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4 text-primary-foreground">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                "Roof Repair",
                "Roof Replacement",
                "Gutter Installation",
                "Emergency Tarping",
                "Storm Damage Inspection",
                "Commercial Roofing",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4 text-primary-foreground">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a href={PHONE_HREF} className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/80 text-sm group-hover:text-accent transition-colors">
                    {PHONE_NUMBER}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="flex items-start gap-3 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/80 text-sm group-hover:text-accent transition-colors break-all">
                    {BUSINESS_EMAIL}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  {BUSINESS_ADDRESS}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  {BUSINESS_HOURS}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-primary-foreground/50 text-xs text-center sm:text-left">
            © {year} Roofing Atlanta. All rights reserved. GA Lic. #RBP-2847.
          </p>
          <p className="text-primary-foreground/40 text-xs text-center">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
