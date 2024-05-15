import React from "react";

const OfferDetails = () => {
  return (
    <div className="container">
      <hr />
      <h3>Offer Details</h3>
      <p className="mt-3 mb-3">
        In Summary: Budget offers several refueling options, whether you choose
        to do it yourself or prefer to leave the hassle to us.
      </p>
      <b className="mt-3">Fuel Plans</b>
      <p className="mt-3 mb-3">
        Pay in advance for a full tank of fuel and bring the car back empty. Our
        rates for this option are comparable to the current local retail pump
        price, and you should bring the car back as close to empty as possible,
        because no credit will be given for unused fuel.
      </p>
      <b className="mt-3">EZFuel™</b>
      <p className="mt-3 mb-3">
        If you don’t choose the Fuel Service Option and you bring the car back
        less than full, you’ll pay a fuel service charge. If you drive 75 miles
        or more, depending on whether or not you bought fuel during your rental,
        this charge will be a per-mile or per-gallon rate and will be stated on
        your rental agreement. At most locations, if you drive less than 75
        miles, an automatic USD $15.99 ($17.99 if you rent the vehicle in
        California) EZFuel service charge will be applied, which can be avoided
        if you’ve purchased fuel and provide us with a receipt.
      </p>
      <b className="mt-3">Self Refueling</b>
      <p className="mt-3 mb-3">
        If you aren't sure how far you'll be driving, but plan to stop for gas,
        don't accept the Fuel Service Option. Simply bring the car back full,
        provide a receipt for your gas purchase, and you’ll avoid any refueling
        service charge.
      </p>
      <b>Refueling Service</b>
      <p className="mt-3 mb-5">
        Refueling Service is the ultimate convenience because you simply return
        the car with less fuel in the tank than when you picked it up, and pay a
        service charge for the fuel used. We’ll do the rest!
      </p>
    </div>
  );
};

export default OfferDetails;
