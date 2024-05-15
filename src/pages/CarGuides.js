import React from "react";
import CG from "../components/carguides/CG";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import Title from "../Title";

const CarGuides = () => {
  Title("Car Guides");
  return (
    <>
      <HeaderOne />
      <CG />
      <FooterOne />
    </>
  );
};

export default CarGuides;
