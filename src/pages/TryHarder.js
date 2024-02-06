import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";

const TryHarder = () => {
  return (
    <>
      <HeaderOne />
      <div className="container py-4 text-dark">
        <h1 className="text-dark mb-3">We Try Harder®</h1>
        <p className="mb-3">
          Avis has been a technology leader in the car rental industry for 50
          years and counting.
        </p>
        <p className="mb-3">
          Beginning in 1972, Avis introduced the first real-time reservation and
          information management system, Wizard®.
        </p>
        <p className="mb-3">
          Avis introduced the car rental industry’s first automated self-service
          check-in process, and Preferred counter bypass shortly thereafter.
        </p>
        <p className="mb-3">
          In 2009, Avis launched the United States' first-ever car rental app.
        </p>
        <p className="mb-3">
          Today, we continue to leverage mobile technology to empower travelers
          with QuickPass<sup>TM</sup> – a service that allows Avis Preferred
          members to control their own rental experience from start to finish.
          Customers can choose, exchange or upgrade their cars, and exit the lot
          by scanning a QR code at most major airport locations.{" "}
        </p>
        <p className="mb-3">
          Rent with Avis today, and see for yourself how we are reinventing the
          car rental experience.
        </p>
        <button className="btn btn-avis py-2 text-up mt-4">
          Make a Reservation
        </button>
      </div>
      <FooterOne />
    </>
  );
};

export default TryHarder;
