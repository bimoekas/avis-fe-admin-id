import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import ET from "../components/usa/ET";
import Title from "../Title";

const USAviseToll = () => {
  Title("Avis e-Toll");
  return (
    <>
      <HeaderOne />
      <ET />
      <FooterOne />
    </>
  );
};

export default USAviseToll;
