import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Phone,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { PHONE_HREF, PHONE_NUMBER, SERVICE_OPTIONS } from "../constants";
import { useSubmitBooking } from "../hooks/useQueries";
import { ServiceType } from "../types";

const TIME_SLOTS = ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];

const TRUST_POINTS = [
  {
    icon: Star,
    title: "Free Estimates",
    desc: "No charge, no obligation — just an honest assessment from certified experts.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    desc: "GA Lic. #RBP-2847. Fully insured so your property and our team are always protected.",
  },
  {
    icon: Zap,
    title: "Same-Day Availability",
    desc: "Emergency response available. Most inspections scheduled within 24 hours.",
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    desc: "We stand behind every job with a lifetime labor warranty and quality materials.",
  },
];

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function CalendarPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (date: string) => void;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [viewDate, setViewDate] = useState(() => {
    const d = new Date(today);
    d.setDate(1);
    return d;
  });

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const prevMonth = () => {
    const d = new Date(viewDate);
    d.setMonth(d.getMonth() - 1);
    setViewDate(d);
  };

  const nextMonth = () => {
    const d = new Date(viewDate);
    d.setMonth(d.getMonth() + 1);
    setViewDate(d);
  };

  const isPrevDisabled = () => {
    return (
      viewDate.getFullYear() < tomorrow.getFullYear() ||
      (viewDate.getFullYear() === tomorrow.getFullYear() &&
        viewDate.getMonth() <= tomorrow.getMonth())
    );
  };

  const isDisabled = (day: number) => {
    const d = new Date(year, month, day);
    return d < tomorrow || d.getDay() === 0;
  };

  const isSelected = (day: number) => {
    const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return value === iso;
  };

  const isToday = (day: number) => {
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  };

  const handleSelect = (day: number) => {
    if (isDisabled(day)) return;
    const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    onChange(iso);
  };

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-background">
      {/* Month nav */}
      <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
        <button
          type="button"
          onClick={prevMonth}
          disabled={isPrevDisabled()}
          aria-label="Previous month"
          className="p-1 rounded hover:bg-primary-foreground/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="font-display font-semibold text-sm">
          {MONTH_NAMES[month]} {year}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          aria-label="Next month"
          className="p-1 rounded hover:bg-primary-foreground/10 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 bg-muted/50">
        {DAYS.map((d) => (
          <div
            key={d}
            className="text-center text-xs font-semibold text-muted-foreground py-2"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Date grid */}
      <div className="grid grid-cols-7 gap-px bg-border p-px">
        {cells.map((day, i) => (
          <div
            key={day === null ? `empty-${i}` : `day-${day}`}
            className="bg-background"
          >
            {day === null ? (
              <div className="h-9" />
            ) : (
              <button
                type="button"
                disabled={isDisabled(day)}
                onClick={() => handleSelect(day)}
                aria-label={`Select ${MONTH_NAMES[month]} ${day}, ${year}`}
                className={[
                  "w-full h-9 text-sm rounded-sm transition-colors font-body",
                  isSelected(day)
                    ? "bg-accent text-accent-foreground font-bold"
                    : isToday(day)
                      ? "border border-primary text-primary font-semibold hover:bg-primary/10"
                      : isDisabled(day)
                        ? "text-muted-foreground/40 cursor-not-allowed"
                        : "text-foreground hover:bg-accent/15 hover:text-foreground cursor-pointer",
                ].join(" ")}
              >
                {day}
              </button>
            )}
          </div>
        ))}
      </div>

      {value && (
        <div className="px-4 py-2 bg-accent/10 border-t border-border text-xs font-medium text-accent text-center">
          Selected: {formatDisplayDate(value)}
        </div>
      )}
    </div>
  );
}

function formatDisplayDate(iso: string): string {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTH_NAMES[m - 1]} ${d}, ${y}`;
}

interface BookingFormState {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceType: ServiceType;
  date: string;
  time: string;
}

interface ValidationErrors {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  date?: string;
  time?: string;
}

export function BookingPage() {
  const [form, setForm] = useState<BookingFormState>({
    name: "",
    phone: "",
    email: "",
    address: "",
    serviceType: ServiceType.Repair,
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const submitBooking = useSubmitBooking();

  const validate = (): ValidationErrors => {
    const errs: ValidationErrors = {};
    if (!form.name.trim()) errs.name = "Full name is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address";
    if (!form.address.trim()) errs.address = "Property address is required";
    if (!form.date) errs.date = "Please select a date";
    if (!form.time) errs.time = "Please select a time slot";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const dateTime = `${form.date} ${form.time}`;
    await submitBooking.mutateAsync({ ...form, dateTime });
    setSubmitted(true);
  };

  const inputClass = (field?: string) =>
    `w-full px-3 py-2.5 rounded-lg border ${
      field ? "border-destructive ring-1 ring-destructive/30" : "border-input"
    } bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors`;

  if (submitted) {
    return (
      <div className="bg-background min-h-screen">
        {/* Success header */}
        <section className="bg-primary py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
              Booking Confirmed
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-3">
              You're All Set!
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
              Your inspection is scheduled. We'll confirm within 2 hours.
            </p>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="max-w-xl mx-auto px-4 sm:px-6">
            <div className="card-elevated p-8" data-ocid="booking-confirmation">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-2">
                  Your inspection is booked!
                </h2>
                <p className="text-muted-foreground text-sm">
                  We'll confirm your appointment within{" "}
                  <span className="text-foreground font-semibold">2 hours</span>{" "}
                  by phone and email.
                </p>
              </div>

              {/* Booking summary */}
              <div className="bg-muted/40 rounded-lg p-5 space-y-3 mb-6 border border-border">
                <h3 className="text-label text-muted-foreground mb-1">
                  Booking Summary
                </h3>
                {[
                  { label: "Name", value: form.name },
                  { label: "Phone", value: form.phone },
                  { label: "Email", value: form.email },
                  { label: "Property", value: form.address },
                  {
                    label: "Service",
                    value:
                      SERVICE_OPTIONS.find((o) => o.value === form.serviceType)
                        ?.label ?? form.serviceType,
                  },
                  {
                    label: "Date & Time",
                    value: `${formatDisplayDate(form.date)} at ${form.time}`,
                  },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between items-start gap-4 text-sm"
                  >
                    <span className="text-muted-foreground shrink-0 w-24">
                      {label}
                    </span>
                    <span className="text-foreground font-medium text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PHONE_HREF}
                  data-ocid="confirmation-call-btn"
                  className="flex-1 flex items-center justify-center gap-2 btn-primary"
                >
                  <Phone className="w-4 h-4" />
                  Call {PHONE_NUMBER}
                </a>
                <Button asChild variant="outline" className="flex-1">
                  <Link to="/" data-ocid="confirmation-home-btn">
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="bg-primary py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
            Free Inspection
          </Badge>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mb-4 leading-tight">
            Schedule Your Free Inspection
            <span className="block text-xl md:text-2xl font-normal text-primary-foreground/70 mt-2">
              On-Site Assessment by Certified Roofing Experts
            </span>
          </h1>
          <p className="text-primary-foreground/80 text-base max-w-xl mx-auto">
            Available Mon–Sat, 8am–5pm. Emergency slots available 7 days a week.
            No obligation, no pressure — just honest answers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            {["Free Estimate", "No Obligation", "Licensed & Insured"].map(
              (badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-primary-foreground/80 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-accent" />
                  {badge}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="card-elevated p-6 md:p-8" data-ocid="booking-form">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-xl text-foreground">
                  Book Your Free Inspection
                </h2>
                <p className="text-muted-foreground text-sm">
                  All fields are required. We'll call to confirm within 2 hours.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (errors.name)
                        setErrors({ ...errors, name: undefined });
                    }}
                    data-ocid="booking-name-input"
                    className={inputClass(errors.name)}
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    placeholder="(404) 555-0000"
                    value={form.phone}
                    onChange={(e) => {
                      setForm({ ...form, phone: e.target.value });
                      if (errors.phone)
                        setErrors({ ...errors, phone: undefined });
                    }}
                    data-ocid="booking-phone-input"
                    className={inputClass(errors.phone)}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="booking-email"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Email Address *
                </label>
                <input
                  id="booking-email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (errors.email)
                      setErrors({ ...errors, email: undefined });
                  }}
                  data-ocid="booking-email-input"
                  className={inputClass(errors.email)}
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="booking-address"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Property Address *
                </label>
                <input
                  id="booking-address"
                  type="text"
                  required
                  placeholder="123 Peachtree Rd NE, Atlanta, GA 30305"
                  value={form.address}
                  onChange={(e) => {
                    setForm({ ...form, address: e.target.value });
                    if (errors.address)
                      setErrors({ ...errors, address: undefined });
                  }}
                  data-ocid="booking-address-input"
                  className={inputClass(errors.address)}
                />
                {errors.address && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.address}
                  </p>
                )}
              </div>

              {/* Service type */}
              <div>
                <label
                  htmlFor="booking-service"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Service Needed *
                </label>
                <select
                  id="booking-service"
                  required
                  value={form.serviceType}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      serviceType: e.target.value as ServiceType,
                    })
                  }
                  data-ocid="booking-service-select"
                  className={inputClass()}
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Calendar */}
              <div>
                <p
                  id="calendar-label"
                  className="flex items-center gap-1.5 text-sm font-medium text-foreground mb-2"
                >
                  <Calendar className="w-4 h-4 text-primary" />
                  Select Inspection Date *
                </p>
                <CalendarPicker
                  value={form.date}
                  onChange={(date) => {
                    setForm({ ...form, date });
                    if (errors.date) setErrors({ ...errors, date: undefined });
                  }}
                />
                {errors.date && (
                  <p className="text-destructive text-xs mt-1">{errors.date}</p>
                )}
              </div>

              {/* Time slots */}
              <div>
                <p
                  id="time-label"
                  className="flex items-center gap-1.5 text-sm font-medium text-foreground mb-2"
                >
                  <Clock className="w-4 h-4 text-primary" />
                  Select Time Slot *
                </p>
                <div
                  className="grid grid-cols-5 gap-2"
                  data-ocid="time-slot-grid"
                >
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => {
                        setForm({ ...form, time: slot });
                        if (errors.time)
                          setErrors({ ...errors, time: undefined });
                      }}
                      data-ocid={`time-slot-${slot.replace(/[:\s]/g, "-")}`}
                      className={[
                        "py-2.5 px-1 rounded-lg border text-sm font-medium transition-smooth text-center",
                        form.time === slot
                          ? "bg-accent text-accent-foreground border-accent shadow-sm"
                          : "border-input text-foreground hover:border-primary hover:bg-primary/5",
                      ].join(" ")}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {errors.time && (
                  <p className="text-destructive text-xs mt-1">{errors.time}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitBooking.isPending}
                data-ocid="booking-submit-btn"
                className="w-full btn-primary py-4 text-base font-bold disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitBooking.isPending ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Booking Your Inspection...
                  </>
                ) : (
                  "Book My Inspection →"
                )}
              </button>

              <p className="text-muted-foreground text-xs text-center">
                Need immediate help? Call us:{" "}
                <a
                  href={PHONE_HREF}
                  className="text-accent font-semibold hover:underline"
                >
                  {PHONE_NUMBER}
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Reassurance Section */}
      <section className="bg-muted/40 py-12 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-2xl text-foreground mb-2">
              Why Book With Us?
            </h2>
            <p className="text-muted-foreground text-sm">
              Atlanta's most trusted roofing team — over 1,200 roofs repaired
              and replaced.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRUST_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="flex items-start gap-4 bg-card rounded-lg p-5 border border-border"
                  data-ocid={`trust-point-${point.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-primary py-10">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-display font-bold text-xl text-primary-foreground mb-2">
            Need Emergency Service?
          </h3>
          <p className="text-primary-foreground/70 text-sm mb-4">
            Storm damage? Don't wait — call us now for 24/7 emergency response.
          </p>
          <a
            href={PHONE_HREF}
            data-ocid="booking-emergency-cta"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-bold text-sm transition-smooth hover:opacity-90"
          >
            <Phone className="w-4 h-4" />
            Emergency: {PHONE_NUMBER}
          </a>
        </div>
      </section>
    </div>
  );
}
