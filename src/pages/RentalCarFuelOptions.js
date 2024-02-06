import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import OfferDetails from "../components/fuel/FuelOptions";
import Title from "../Title";

const RentalCarFuelOptions = () => {
  Title("Fuel Options");
  return (
    <>
      <HeaderOne />
      <OfferDetails />
      <FooterOne />
    </>
  );
};

export default RentalCarFuelOptions;
