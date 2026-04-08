import Types "types/leads";
import LeadsApi "mixins/leads-api";
import List "mo:core/List";

actor {
  let quotes = List.empty<Types.QuoteSubmission>();
  let bookings = List.empty<Types.BookingRequest>();
  var nextQuoteId : Nat = 0;
  var nextBookingId : Nat = 0;

  include LeadsApi(quotes, bookings, nextQuoteId, nextBookingId);
};
