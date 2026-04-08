import Common "common";

module {
  public type Timestamp = Common.Timestamp;

  public type ServiceType = {
    #Repair;
    #Replacement;
    #Gutters;
    #Emergency;
  };

  public type QuoteStatus = {
    #new_;
    #contacted;
  };

  public type BookingStatus = {
    #pending;
    #confirmed;
  };

  public type QuoteSubmission = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    serviceType : ServiceType;
    description : Text;
    status : QuoteStatus;
    timestamp : Timestamp;
  };

  public type BookingRequest = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    address : Text;
    serviceType : ServiceType;
    dateTime : Text;
    status : BookingStatus;
    timestamp : Timestamp;
  };
};
