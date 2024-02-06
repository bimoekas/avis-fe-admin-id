import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import FP from "../components/usa/FP";
import Title from "../Title";

const USFuelPlans = () => {
  Title("Fuel Plans");
  return (
    <>
      <HeaderOne />
      <FP />
      <FooterOne />
    </>
  );
};

export default USFuelPlans;
