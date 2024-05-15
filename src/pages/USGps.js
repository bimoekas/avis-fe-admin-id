import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import UG from "../components/usa/UG";
import Title from "../Title";

const USGps = () => {
  Title("GPS Navigation");
  return (
    <>
      <HeaderOne />
      <UG />
      <FooterOne />
    </>
  );
};

export default USGps;
