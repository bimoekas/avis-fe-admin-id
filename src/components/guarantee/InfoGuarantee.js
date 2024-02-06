import React from "react";
import { Link } from "react-router-dom";

const InfoGuarantee = () => {
  return (
    <>
      <p>
        Tired of shopping around for the lowest prices online? Now there's no
        need to spend hours browsing for savings – because if you find a Budget
        rate on another website that's lower than the prepay rate on Budget.com,
        we'll match the rate and give you an additional 10% off your prepaid
        Budget rental.
      </p>
      <h3 className="mt-3">How Our Rate Guarantee Works:</h3>
      <p className="mt-3">
        Book your rental car with <Link className="yellow link">Pay Now</Link>{" "}
        on Budget.com. If you find a better online rate than what you already
        booked at Budget.com, simply fill out the Best Rate Guarantee form and
        we will match the base rate and give you an additional 10% off your
        rental. “Base rate” is the base time and mileage charges and does not
        include any other charges for fees including, but not limited to, taxes,
        fuel, surcharges, or optional products..
      </p>
      <h3 className="mt-3">To qualify for the Budget Best Rate Guarantee:</h3>
      <ol className="similarCarOpt mt-3">
        <li>
          Your Budget.com prepaid rental must be booked at least 72 hours in
          advance of pick up.
        </li>
        <li>
          The lower base rate must be found within 24 hours of booking your
          Budget rental.
        </li>
        <li>
          The lower base rate must have the same reservation dates and times,
          pick-up and drop-off locations, and rental car type as your Budget
          rental.
        </li>
      </ol>
      <h3 className="mt-3">Exceptions:</h3>
      <ol className="similarCarOpt mt-3">
        <li>
          Car rental rates from other car rental companies (including but not
          limited to Avis, National, Enterprise, Alamo, Sixt, Dollar, Payless)
          do not qualify.
        </li>
        <li>
          Rates obtained through the use of discounts, coupons, upgrade offers,
          pre-negotiated (e.g., group, government, corporate, tour, insurance
          replacement rentals) or similar rates do not qualify.
        </li>
        <li>
          Car rental included as part of a package rate (e.g. airfare + hotel +
          car rental, hotel + car rental, airfare + car rental) do not qualify.
        </li>
        <li>
          Car rental rates found on an auction or wholesale websites which do
          not display the name of the car rental company until after purchase do
          not qualify.
        </li>
        <li>
          Car rental rates obtained from a website that requires a member login
          to obtain the rate do not qualify.
        </li>
        <li>
          Car rental rates obtained from Budget.com that requires a member login
          order to obtain the rate do not qualify.
        </li>
      </ol>
      <div className="text-center pt-4 pb-5">
        <Link className="btnCar d-inline-block">Best Rate Guarantee Form</Link>
      </div>
    </>
  );
};

export default InfoGuarantee;
