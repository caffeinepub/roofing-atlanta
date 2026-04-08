import { ServiceType } from "../types";

export const PHONE_NUMBER = "(404) 555-ROOF";
export const PHONE_HREF = "tel:+14045557663";
export const BUSINESS_ADDRESS = "3565 Piedmont Rd NE, Atlanta, GA 30305";
export const BUSINESS_HOURS = "Mon–Sat 7am–6pm";
export const BUSINESS_EMAIL = "info@roofingatlanta.com";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Service Area", href: "/service-area" },
  { label: "Contact", href: "/contact" },
];

export const SERVICE_LABELS: Record<ServiceType, string> = {
  [ServiceType.Repair]: "Roof Repair",
  [ServiceType.Replacement]: "Roof Replacement",
  [ServiceType.Gutters]: "Gutter Installation",
  [ServiceType.Emergency]: "Emergency Tarping",
};

export const SERVICE_OPTIONS = Object.entries(SERVICE_LABELS).map(
  ([value, label]) => ({
    value: value as ServiceType,
    label,
  }),
);

export const REVIEWS = [
  {
    id: "r1",
    name: "Marcus Thompson",
    location: "Buckhead, Atlanta",
    rating: 5,
    text: "Roofing Atlanta replaced our entire roof after the spring hail storm. They were professional, fast, and the crew cleaned up everything. Highly recommend!",
    date: "March 2026",
  },
  {
    id: "r2",
    name: "Jennifer Williams",
    location: "Midtown, Atlanta",
    rating: 5,
    text: "Called them at 7am after a branch fell on my roof. By 9am they had an emergency tarp in place and by end of day we had a full repair estimate. Phenomenal service.",
    date: "February 2026",
  },
  {
    id: "r3",
    name: "Robert & Sarah Davis",
    location: "Sandy Springs, GA",
    rating: 5,
    text: "Got three quotes and Roofing Atlanta was the most thorough and competitive. The new architectural shingles look amazing. Our neighbors keep complimenting the roof!",
    date: "January 2026",
  },
  {
    id: "r4",
    name: "Patricia Nguyen",
    location: "Dunwoody, GA",
    rating: 5,
    text: "They installed new gutters and downspouts throughout our home. The crew was courteous, efficient, and left everything spotless. Will use again!",
    date: "December 2025",
  },
];

export const TRUST_BADGES = [
  { id: "t1", label: "Licensed & Insured", detail: "GA Lic. #RBP-2847" },
  { id: "t2", label: "5-Star Rated", detail: "200+ Google Reviews" },
  { id: "t3", label: "Storm Specialists", detail: "Insurance Claims Expert" },
  { id: "t4", label: "Lifetime Warranty", detail: "Labor & Materials" },
];

export const SERVICE_AREAS = [
  "Buckhead",
  "Midtown",
  "Sandy Springs",
  "Dunwoody",
  "Roswell",
  "Alpharetta",
  "Johns Creek",
  "Peachtree City",
  "Marietta",
  "Smyrna",
  "Decatur",
  "Druid Hills",
];
