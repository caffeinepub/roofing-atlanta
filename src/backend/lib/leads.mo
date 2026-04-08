import Types "../types/leads";
import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";

module {
  public func submitQuote(
    quotes : List.List<Types.QuoteSubmission>,
    nextId : Nat,
    name : Text,
    phone : Text,
    email : Text,
    serviceType : Types.ServiceType,
    description : Text,
  ) : Nat {
    Runtime.trap("not implemented");
  };

  public func submitBooking(
    bookings : List.List<Types.BookingRequest>,
    nextId : Nat,
    name : Text,
    phone : Text,
    email : Text,
    address : Text,
    serviceType : Types.ServiceType,
    dateTime : Text,
  ) : Nat {
    Runtime.trap("not implemented");
  };

  public func getQuotes(quotes : List.List<Types.QuoteSubmission>) : [Types.QuoteSubmission] {
    Runtime.trap("not implemented");
  };

  public func getBookings(bookings : List.List<Types.BookingRequest>) : [Types.BookingRequest] {
    Runtime.trap("not implemented");
  };
};
