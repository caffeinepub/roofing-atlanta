import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, ShieldCheck, Star, ThumbsUp } from "lucide-react";
import { REVIEWS } from "../constants";
import type { ReviewItem } from "../types";

const LICENSE_BADGES = [
  {
    id: "ga-license",
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Georgia Roofing License",
    detail: "#RBP-2847",
    sub: "State Licensed Contractor",
  },
  {
    id: "gaf-elite",
    icon: <Award className="w-7 h-7" />,
    title: "GAF Master Elite",
    detail: "Certified",
    sub: "Top 3% Nationwide",
  },
  {
    id: "bbb",
    icon: <ThumbsUp className="w-7 h-7" />,
    title: "BBB A+ Accredited",
    detail: "Since 2006",
    sub: "Better Business Bureau",
  },
  {
    id: "storm",
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Storm Damage",
    detail: "Specialist",
    sub: "HAAG Certified Inspector",
  },
];

const WARRANTY_BENEFITS = [
  "Lifetime warranty on all labor",
  "GAF System Plus limited material warranty",
  "Transferable coverage — adds home resale value",
  "Workmanship defects covered at no extra cost",
  "Annual roof check included for 3 years",
  "Insurance claim filing assistance",
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-4 h-4 ${s <= rating ? "fill-accent text-accent" : "text-border"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <div
      className="card-elevated p-5 flex flex-col h-full"
      data-ocid={`trust-review-${review.id}`}
    >
      <StarRating rating={review.rating} />
      <p className="text-foreground text-sm leading-relaxed flex-1 mt-3 mb-4">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="border-t border-border pt-3">
        <p className="font-semibold text-foreground text-sm">{review.name}</p>
        <p className="text-muted-foreground text-xs">
          {review.location} &middot; {review.date}
        </p>
      </div>
    </div>
  );
}

export function TrustSection() {
  return (
    <div data-ocid="trust-section">
      {/* Google Reviews */}
      <section className="bg-background py-16 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">
              Customer Reviews
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-5 h-5 fill-accent text-accent"
                  aria-hidden="true"
                />
              ))}
              <span className="text-muted-foreground font-medium ml-1">
                5.0 Average &middot; Google Reviews
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Licensing Badges */}
      <section className="bg-primary py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <Badge className="bg-accent/20 text-accent border-accent/30 mb-3">
              Credentials
            </Badge>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground">
              Licensed, Certified &amp; Fully Insured
            </h2>
            <p className="text-primary-foreground/70 mt-2 max-w-lg mx-auto text-sm">
              We meet and exceed every standard Atlanta homeowners should expect
              from a roofing contractor.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {LICENSE_BADGES.map((badge) => (
              <div
                key={badge.id}
                data-ocid={`license-badge-${badge.id}`}
                className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-5 text-center hover:bg-primary-foreground/15 transition-smooth"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/20 text-accent flex items-center justify-center mx-auto mb-3">
                  {badge.icon}
                </div>
                <h3 className="font-display font-semibold text-primary-foreground text-sm leading-snug">
                  {badge.title}
                </h3>
                <p className="text-accent font-bold text-sm">{badge.detail}</p>
                <p className="text-primary-foreground/60 text-xs mt-0.5">
                  {badge.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifetime Labor Warranty */}
      <section className="bg-muted/40 py-14 md:py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">
                Our Promise
              </Badge>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Lifetime Labor <span className="text-accent">Warranties</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every roof we install or replace comes with our industry-leading
                lifetime warranty — covering both labor and materials. We stand
                behind our work, period.
              </p>
              <p className="text-muted-foreground text-sm">
                As a GAF Master Elite Certified contractor, we're authorized to
                offer the strongest material warranties available in the
                industry, backed by GAF's financial strength.
              </p>
            </div>
            <div
              className="card-elevated p-6 border-accent/30 bg-card"
              data-ocid="warranty-card"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    What's Covered
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    Roofing Atlanta Lifetime Warranty
                  </p>
                </div>
              </div>
              <ul className="space-y-2.5" aria-label="Warranty benefits list">
                {WARRANTY_BENEFITS.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2.5"
                    data-ocid={`warranty-benefit-${benefit.toLowerCase().replace(/\s+/g, "-").slice(0, 30)}`}
                  >
                    <CheckCircle
                      className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-foreground text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Warranty transferable to new homeowners. Ask your estimator
                  for full warranty documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
