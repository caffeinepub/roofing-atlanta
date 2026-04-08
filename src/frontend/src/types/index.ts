// Re-export backend types for use across the app
export { ServiceType, BookingStatus, QuoteStatus } from "../backend";
export type { QuoteSubmission, BookingRequest } from "../backend.d";

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: import("../backend").ServiceType;
  description: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceType: import("../backend").ServiceType;
  dateTime: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  serviceType: import("../backend").ServiceType;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  serviceType: import("../backend").ServiceType;
  beforeImage: string;
  afterImage: string;
  description: string;
}
