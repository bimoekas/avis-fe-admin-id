import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import OfferDetails from "../components/childseats/CS";
import Title from "../Title";

const ChildSeats = () => {
  Title("Child Seats");
  return (
    <>
      <HeaderOne />
      <OfferDetails />
      <FooterOne />
    </>
  );
};

export default ChildSeats;
