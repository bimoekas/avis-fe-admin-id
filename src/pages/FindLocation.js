import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import FL from "../components/findlocation/FL";
import Title from "../Title";

const FindLocation = () => {
  Title("Find Location");
  return (
    <>
      <HeaderOne />
      <FL />
      <FooterOne />
    </>
  );
};

export default FindLocation;
