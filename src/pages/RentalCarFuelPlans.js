import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import OfferDetails from "../components/fuel/OfferDetails";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import LandingSelectCar from "../components/road/LandingSelectCar";

const RentalCarFuelPlans = () => {
  const breadcrumb = ["Deals", "US Offers", "Rental Car Fuel Plans"];
  return (
    <>
      <HeaderOne />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <LandingSelectCar
        title="Budget Rental Car Fuel Plans"
        sub="The ultimate in convenience and choice"
      />
      <OfferDetails />
      <FooterOne />
    </>
  );
};

export default RentalCarFuelPlans;
