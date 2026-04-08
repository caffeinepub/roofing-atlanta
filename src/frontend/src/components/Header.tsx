import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronRight, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, PHONE_HREF, PHONE_NUMBER } from "../constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (prevPathRef.current !== location.pathname) {
    prevPathRef.current = location.pathname;
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        data-ocid="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card border-b border-border shadow-md"
            : "bg-card border-b border-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group min-w-0">
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-8 rounded bg-primary flex items-center justify-center flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="w-5 h-5 text-primary-foreground"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 12L12 3l9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="font-display font-bold text-lg text-foreground leading-tight">
                    Roofing<span className="text-accent"> Atlanta</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    location.pathname === link.href
                      ? "text-accent bg-accent/10"
                      : "text-foreground/80 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={PHONE_HREF}
                data-ocid="header-phone-cta"
                className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                {PHONE_NUMBER}
              </a>
              <Button
                asChild
                variant="default"
                className="btn-primary"
                data-ocid="header-estimate-cta"
              >
                <Link to="/contact">
                  Get Free Estimate <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={PHONE_HREF}
                data-ocid="mobile-phone-cta"
                className="flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-2 rounded-lg text-sm font-semibold transition-smooth"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xs:inline">Call Now</span>
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md text-foreground hover:bg-muted transition-colors"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
          onKeyUp={(e) => e.key === "Escape" && setMenuOpen(false)}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 md:hidden bg-card border-b border-border shadow-xl transition-all duration-300 ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
        data-ocid="mobile-menu"
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-accent bg-accent/10"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-border">
            <Button
              asChild
              className="w-full btn-primary"
              data-ocid="mobile-estimate-cta"
            >
              <Link to="/contact">Get Your Free Estimate</Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
