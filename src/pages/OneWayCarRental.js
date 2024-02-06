import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import OWCR from "../components/onewaycarrental/OWCR";
import Title from "../Title";

const OneWayCarRental = () => {
  Title("One-Way Car Rental");
  return (
    <>
      <HeaderOne />
      <OWCR />
      <FooterOne />
    </>
  );
};

export default OneWayCarRental;
