import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export interface QuoteSubmission {
    id: bigint;
    status: QuoteStatus;
    serviceType: ServiceType;
    name: string;
    description: string;
    email: string;
    timestamp: Timestamp;
    phone: string;
}
export interface BookingRequest {
    id: bigint;
    status: BookingStatus;
    serviceType: ServiceType;
    name: string;
    email: string;
    address: string;
    timestamp: Timestamp;
    phone: string;
    dateTime: string;
}
export enum BookingStatus {
    pending = "pending",
    confirmed = "confirmed"
}
export enum QuoteStatus {
    new_ = "new",
    contacted = "contacted"
}
export enum ServiceType {
    Repair = "Repair",
    Replacement = "Replacement",
    Gutters = "Gutters",
    Emergency = "Emergency"
}
export interface backendInterface {
    getBookings(): Promise<Array<BookingRequest>>;
    getQuotes(): Promise<Array<QuoteSubmission>>;
    submitBooking(name: string, phone: string, email: string, address: string, serviceType: ServiceType, dateTime: string): Promise<bigint>;
    submitQuote(name: string, phone: string, email: string, serviceType: ServiceType, description: string): Promise<bigint>;
}
