import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import Pro from "../components/protection/Pro";
import Title from "../Title";

const Protection = () => {
  Title("Protection");
  return (
    <>
      <HeaderOne />
      <Pro />
      <FooterOne />
    </>
  );
};

export default Protection;
