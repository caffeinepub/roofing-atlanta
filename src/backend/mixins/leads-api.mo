import Types "../types/leads";
import LeadsLib "../lib/leads";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (
  quotes : List.List<Types.QuoteSubmission>,
  bookings : List.List<Types.BookingRequest>,
  nextQuoteId : Nat,
  nextBookingId : Nat,
) {
  public shared func submitQuote(
    name : Text,
    phone : Text,
    email : Text,
    serviceType : Types.ServiceType,
    description : Text,
  ) : async Nat {
    Runtime.trap("not implemented");
  };

  public shared func submitBooking(
    name : Text,
    phone : Text,
    email : Text,
    address : Text,
    serviceType : Types.ServiceType,
    dateTime : Text,
  ) : async Nat {
    Runtime.trap("not implemented");
  };

  public query func getQuotes() : async [Types.QuoteSubmission] {
    Runtime.trap("not implemented");
  };

  public query func getBookings() : async [Types.BookingRequest] {
    Runtime.trap("not implemented");
  };
};
