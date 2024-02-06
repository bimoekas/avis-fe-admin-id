import React from "react";

const FuelOptions = () => {
  return (
    <>
      <section className="border-top border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-avis py-3">
                  <li className="breadcrumb-item">Cars & Services</li>
                  <li className="breadcrumb-item">Products & Services</li>
                  <li className="breadcrumb-item link-avis" aria-current="page">
                    Fuel Options
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-2">
          <div className="row py-3">
            <div className="col-12">
              <h3 className="text-up text-black fw-normal">
                Save time with Fuel Up Front
              </h3>
              <p className="text-avis mt-2">
                When you collect your Avis hire car it will have a full tank of
                petrol. Return it with a full tank after your trip and there’s
                nothing to pay.
              </p>
              <p className="text-avis mt-2">
                To take the hassle out of refuelling, we also offer other fuel
                options. You could choose Fuel Up Front and order a full tank of
                petrol or diesel , or select EZ Fuel when you pick up your
                vehicle, which suits shorter journeys.
              </p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-12">
              <p className="text-avis mt-2">
                Read on to see which Avis fuel option works best for you.
              </p>
              <h3 className="text-up text-black fw-normal">
                Fuel options from Avis
              </h3>
              <h3 className="text-up text-black fw-normal mt-2">
                Bring Back Full
              </h3>
              <p className="text-avis mt-2">
                No charge – even if you took the Fuel Up Front or EZ Fuel
                options below when you picked up your car. Simply return the car
                with a full tank of fuel.
              </p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-12">
              <h3 className="text-up text-black fw-normal">Fuel Up Front</h3>
              <p className="text-avis mt-2">
                Buy a full tank of fuel upfront – at the average market pump
                price – so you don’t have to refuel before you return the
                vehicle.
              </p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-12">
              <h3 className="text-up text-black fw-normal">EZ Fuel</h3>
              <p className="text-avis mt-2">
                Driving for 75 miles (120km) or less? For a pre-paid flat fee,
                Avis will take care of the refuelling.
              </p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-12">
              <h3 className="text-up text-black fw-normal">Pay On Return</h3>
              <p className="text-avis mt-2">
                If you haven't got time to refuel and haven’t taken Fuel Up
                Front, we can do it for you. But this is the most expensive
                option.
              </p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-12">
              <h3 className="text-up text-black fw-normal">The small print</h3>
              <ul>
                <li className="text-avis mt-2">
                  • When you pick up your vehicle from an Avis hire station, our
                  rental sales agent will explain the options to you and arrange
                  the one that best suits your requirements.
                </li>
                <li className="text-avis mt-2">
                  • With <b>Fuel Up Front</b>, no refund is given for any unused
                  fuel unless you <b>Bring Back Full</b>. If you return your car
                  with a partially full tank you will not be entitled to a
                  refund.
                </li>
                <li className="text-avis mt-2">
                  • For <b>Pay On Return</b>, the price includes both the cost
                  of the fuel and a re-fuelling service surcharge, but you will
                  only pay for the litres of fuel you use. (Check with a member
                  of staff when collecting your hire car to confirm what the
                  charges will be.)
                </li>
                <li className="text-avis mt-2">
                  • With <b>EZ Fuel</b> Avis will refuel your vehicle for only
                  £12 plus VAT if you have travelled 75 miles/120km or less. If
                  you fill up anyway, bring the receipt when you drop the
                  vehicle off and we'll refund this fee.
                </li>
                <li className="text-avis mt-2">
                  • Prices quoted are for rentals collected from "Standard"
                  locations. Rentals from "Premium" locations will be higher.
                  Please check the prices during the booking process.
                </li>
                <li className="text-avis mt-2">
                  • For rentals in Cyprus, drivers who wish to{" "}
                  <b>Bring Back Full</b> (with no extra charge) must produce a
                  receipt from a petrol station within a 10km (6.2-mile) radius
                  of the Avis rental station. If the tank isn't full, missing
                  fuel is charged at local pump prices and a Refuelling Service
                  Charge of 20.25 euros (inclusing VAT) will be applied.{" "}
                  <b>Fuel Up Front</b> is also available in Cyprus.
                </li>
                <li className="text-avis mt-2">
                  • For rentals in Malta and Gozo, all hire cars come with half
                  a tank of fuel. At the rental station drivers can purchase{" "}
                  <b>Fuel Up Front</b> (fuel is offered at local pump prices) or{" "}
                  <b>Bring Back Half-Full</b> at no extra charge. To Bring Back
                  Half-Full, renters must return the car with a half-tank of
                  fuel (a deposit will be charged at pick-up and deducted once
                  the vehicle is returned refuelling as agreed). If the tank is
                  less than half-full, missing fuel is charged at local pump
                  prices and a Refuelling Service Charge of 25 euros (including
                  VAT) will be applied.
                </li>
                <li className="text-avis mt-2">
                  • Please take note that fuel policies are differ by country.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FuelOptions;
