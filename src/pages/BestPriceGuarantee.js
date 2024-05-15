import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import { Link } from "react-router-dom";

const BestPriceGuarantee = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const breadcrumb = [
    "Products & Services",
    "Services",
    "Best Price Guarantee",
  ];
  return (
    <>
      <HeaderOne />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <div className="container py-4">
        <div className="text-center">
          <img
            src={publicUrl + "assets/images/resources/best-price.webp"}
            className="justify-content-center"
          />
        </div>
        <h2 className="mt-5 mb-3 text-dark">
          FIND THE BEST RENTAL CAR RATES WITH AVIS
        </h2>
        <p className="mb-3">
          Book your car rental with <Link className="link-avis">Pay Now</Link>{" "}
          on Avis.com. If you find a lower qualifying Avis rate published on
          another site, submit this form and we will match the base rate and
          give you an additional 10% off your rental. “Base rate” includes only
          the base time and mileage charges and does not include any other
          charges for fees including, but not limited to, taxes, fuel,
          surcharges, or optional products.
        </p>
        <h4 className="link-avis mb-3">To Qualify</h4>
        <ul className="similarCarOpt ps-4 mb-3">
          <li>
            You must book your Avis.com prepaid rental at least 72 hours in
            advance of pick up.
          </li>
          <li>
            The submitted comparison base rate must be found within 24 hours of
            booking your Avis rental
          </li>
          <li>
            The comparison base rate must have the same reservation dates and
            times, pick-up and drop-off locations, and rental car type as your
            prepaid Avis rental
          </li>
        </ul>
        <h4 className="link-avis mb-3">Exceptions:</h4>
        <ul className="similarCarOpt ps-4 mb-3">
          <li>
            Car rental rates from other car rental companies (including but not
            limited to Budget, National, Enterprise, Alamo, Sixt, Dollar,
            Payless, etc) do not qualify.
          </li>
          <li>
            Rates obtained through the use of discounts, coupons, upgrade
            offers, pre-negotiated (e.g., group, government, corporate, tour,
            insurance replacement rentals) or similar rates do not qualify.
          </li>
          <li>
            Car rental included as part of a package rate (e.g. airfare + hotel
            + car rental, hotel + car rental, airfare + car rental) does not
            qualify.
          </li>
          <li>
            Car rental rates found on an auction or wholesale websites which do
            not display the name of the car rental company until after purchase,
            do not qualify.
          </li>
          <li>
            Car rental rates found on an auction or wholesale websites which do
            not display the name of the car rental company until after purchase,
            do not qualify.
          </li>
          <li>
            Car rental rates obtained from Avis.com that requires a member login
            order to obtain the rate do not qualify.
          </li>
        </ul>
        <div className="text-center mb-3">
          <Link
            className="btn btn-avis"
            to={
              publicUrl +
              "products-and-services/services/best-rate-guarantee/best-rate-claim-form"
            }
          >
            BEST RATE GUARANTEE FORM
          </Link>
        </div>
        <hr />
        <h4 className="link-avis mt-5 mb-3">TERMS AND CONDITIONS</h4>
        <p className="mb-3">
          Applies to rentals at participating locations in the United States. A
          prepaid reservation must be completed at least 72 hours in advance of
          your rental by going directly to Avis.com and booking the lowest
          available rate for that rental car type. You must also provide us with
          evidence of the source of the lower rate on the claim form, to include
          but not be limited to:
        </p>
        <ol className="mb-3">
          <li>Rental and return date and time;</li>
          <li>Pick-up and return location (must be same location);</li>
          <li>Vehicle type;</li>
          <li>Lower fare amount; and</li>
          <li>Website address.</li>
        </ol>
        <p className="mb-3">
          From the evidence provided, we must be able to verify the lower online
          published rate is not available at Avis.com. We will verify the
          comparison rental car rate within 48 hours of receiving your claim and
          notify you of the results via email. If the evidence provided is
          insufficient to verify the claim, we will contact you to provide us
          with additional evidence as necessary. If additional evidence is
          required, it must be provided in a timely manner or your claim may not
          be verified before your rental.
        </p>
        <p className="mb-3">
          If approved, the lower rate and 10% discount will be processed within
          ten (10) corporate business days from our receipt of your claim.
        </p>
        <p className="mb-3">
          Avis reserves the right to modify the Best Rate Guarantee terms or to
          restrict its availability to any person, at any time, for any or no
          reason, and without prior notice or liability. Avis reserves the right
          to deny or reject a claim as a result of an Avis or third-party
          printing, technical, or other error, or where such claim is, in our
          sole discretion, made fraudulently or in bad faith. The failure by
          Avis to enforce any term or condition herein shall not constitute a
          waiver of that or any other term or condition.
        </p>
      </div>
      <FooterOne />
    </>
  );
};

export default BestPriceGuarantee;
