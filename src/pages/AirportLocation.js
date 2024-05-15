import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import AL from "../components/airportlocation/AL";
import Title from "../Title";

const AirportLocation = () => {
  Title("Airport Locations");
  return (
    <>
      <HeaderOne />
      <AL />
      <FooterOne />
    </>
  );
};

export default AirportLocation;
