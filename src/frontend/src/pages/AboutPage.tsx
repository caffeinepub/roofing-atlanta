import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Award,
  ChevronRight,
  Clock,
  MapPin,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { BUSINESS_ADDRESS, PHONE_HREF, PHONE_NUMBER } from "../constants";

const TEAM_MEMBERS = [
  {
    id: "t1",
    name: "David Harrington",
    role: "Founder & Master Roofer",
    since: "Est. 2002",
    bio: "David founded Roofing Atlanta after 10 years working for national contractors. His hands-on approach and commitment to quality set the standard for every job we do.",
  },
  {
    id: "t2",
    name: "Michael Reyes",
    role: "Lead Estimator",
    since: "With us since 2010",
    bio: "Michael has helped over 1,200 Atlanta homeowners navigate storm damage claims. He works directly with insurance adjusters to maximize your coverage.",
  },
  {
    id: "t3",
    name: "James Carter",
    role: "Commercial Projects Manager",
    since: "With us since 2015",
    bio: "James oversees all commercial roofing projects from TPO systems to standing seam metal. He ensures minimal disruption to your business operations.",
  },
];

const MILESTONES = [
  { year: "2002", event: "Founded in Buckhead by David Harrington" },
  { year: "2008", event: "Became certified GAF Master Elite contractor" },
  { year: "2012", event: "Expanded to full commercial services" },
  { year: "2017", event: "Reached 1,000 completed roofing projects" },
  { year: "2020", event: "Launched 24/7 emergency response division" },
  { year: "2024", event: "Surpassed 200 five-star Google reviews" },
];

const STATS = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "2,400+",
    label: "Projects Completed",
  },
  {
    icon: <Star className="w-6 h-6" />,
    value: "5.0",
    label: "Average Star Rating",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: "20+",
    label: "Years in Business",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    value: "15+",
    label: "Service Area Cities",
  },
];

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
            Our Story
          </Badge>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            Atlanta's Trusted Roofers Since 2002
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            We're not just contractors — we're your neighbors. Roofing Atlanta
            has been serving the Buckhead community and Metro Atlanta with
            integrity, craftsmanship, and care.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
                data-ocid={`about-stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="flex justify-center mb-2 text-accent-foreground/80">
                  {stat.icon}
                </div>
                <p className="font-display font-bold text-3xl text-accent-foreground">
                  {stat.value}
                </p>
                <p className="text-accent-foreground/80 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">
                Our Mission
              </Badge>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5">
                Roofing Done Right, Every Time
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Roofing Atlanta was founded in 2002 by David Harrington with a
                  simple belief: Atlanta homeowners deserve a roofing contractor
                  they can truly trust. Not just someone who shows up and gets
                  the job done, but a partner who treats their home like their
                  own.
                </p>
                <p>
                  Over the past 20+ years, we've built that reputation — one
                  roof at a time. From emergency tarping after a midnight storm
                  call to complete roof replacements for Buckhead's finest
                  estates, we approach every project with the same level of
                  professionalism and care.
                </p>
                <p>
                  As a local, family-run business based at {BUSINESS_ADDRESS},
                  we live and work in the same communities we serve. That means
                  our reputation is everything to us.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/assets/generated/roofing-buckhead-home.dim_800x600.jpg"
                alt="Roofing Atlanta team at work"
                className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-muted/40 py-14 border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">
              Credentials
            </Badge>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
              Licensed, Certified & Fully Insured
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "GAF Master Elite",
                detail:
                  "Earned by the top 3% of roofing contractors nationwide",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "GA Licensed",
                detail:
                  "Georgia Residential & Commercial Contractor Lic. #RBP-2847",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "A+ BBB Rating",
                detail:
                  "Accredited member of the Better Business Bureau since 2006",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "HAAG Certified",
                detail:
                  "Certified storm damage inspectors for insurance claims",
              },
            ].map((cert) => (
              <div
                key={cert.title}
                className="card-elevated p-5 text-center"
                data-ocid={`cert-${cert.title.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  {cert.icon}
                </div>
                <h3 className="font-display font-semibold text-foreground text-base mb-1">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {cert.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">
              Our Team
            </Badge>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
              Meet the Roofing Atlanta Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="card-elevated p-6"
                data-ocid={`team-member-${member.id}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-display font-bold text-2xl text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-semibold mb-1">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-xs mb-3">
                  {member.since}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/40 py-14 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">
              Milestones
            </Badge>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
              Our Journey
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-6">
              {MILESTONES.map((m) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-display font-bold text-xs">
                    {m.year.slice(2)}
                  </div>
                  <div className="pt-2 min-w-0">
                    <span className="text-accent font-bold text-sm">
                      {m.year} —{" "}
                    </span>
                    <span className="text-foreground text-sm">{m.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl text-primary-foreground mb-3">
            Ready to Work With Atlanta's Best?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Get a free inspection and experience the Roofing Atlanta difference
            firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-semibold transition-smooth hover:opacity-90"
              data-ocid="about-phone-cta"
            >
              {PHONE_NUMBER}
            </a>
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/booking" data-ocid="about-booking-cta">
                Book Free Inspection <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
