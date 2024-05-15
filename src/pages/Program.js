import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import Pr from "../components/program/Pr";
import Title from "../Title";

const Program = () => {
  Title("Program");
  return (
    <>
      <HeaderOne />
      <Pr />
      <FooterOne />
    </>
  );
};

export default Program;
