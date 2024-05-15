import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import Header from "../common/header/Header";
import Team from "../components/about/Team";

const RentalExecutiveTeam = () => {
  const breadcrumb = ["About Avis", "Company Information", "Executive Bios"];
  return (
    <>
      <HeaderOne />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <Header title="THE AVIS TEAM" />
      <Team />
      <FooterOne />
    </>
  );
};

export default RentalExecutiveTeam;
