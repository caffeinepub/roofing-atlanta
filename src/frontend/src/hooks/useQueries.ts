import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type {
  BookingRequest,
  QuoteSubmission,
  ServiceType,
} from "../backend.d";

export function useGetQuotes() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<QuoteSubmission[]>({
    queryKey: ["quotes"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getQuotes();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetBookings() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<BookingRequest[]>({
    queryKey: ["bookings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBookings();
    },
    enabled: !!actor && !isFetching,
  });
}

interface SubmitQuoteParams {
  name: string;
  phone: string;
  email: string;
  serviceType: ServiceType;
  description: string;
}

export function useSubmitQuote() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (params: SubmitQuoteParams) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitQuote(
        params.name,
        params.phone,
        params.email,
        params.serviceType,
        params.description,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quotes"] });
    },
  });
}

interface SubmitBookingParams {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceType: ServiceType;
  dateTime: string;
}

export function useSubmitBooking() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (params: SubmitBookingParams) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitBooking(
        params.name,
        params.phone,
        params.email,
        params.address,
        params.serviceType,
        params.dateTime,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}
