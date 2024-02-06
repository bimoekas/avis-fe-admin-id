import React from "react";
import PR from "../components/deals/PR";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import Title from "../Title";

const Promotion = () => {
  Title("Avis Promotion");
  return (
    <>
      <HeaderOne />
      <PR />
      <FooterOne />
    </>
  );
};

export default Promotion;
