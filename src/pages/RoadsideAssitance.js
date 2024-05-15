import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import LandingSelectCar from "../components/road/LandingSelectCar";
import OfferDetails from "../components/road/OfferDetails";
import TermCondition from "../components/road/TermCondition";

const RoadsideAssitance = () => {
  const breadcrumb = ["Deals", "US Offers", "Extended Roadside Assistance"];
  return (
    <>
      <HeaderOne />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <LandingSelectCar
        title="Budget Rental Car Extended Roadside Assistance"
        sub="Enjoy a Safer Stress-Free Driving Experience!"
      />
      <OfferDetails />
      <TermCondition />
      <FooterOne />
    </>
  );
};

export default RoadsideAssitance;
