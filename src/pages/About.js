import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import Header from "../common/header/Header";
import ContentAbout from "../components/about/ContentAbout";
import Title from "../Title";

const About = () => {
  Title("About Avis");
  return (
    <>
      <HeaderOne />
      <Header title="ABOUT AVIS" />
      <ContentAbout />
      <FooterOne />
    </>
  );
};

export default About;
