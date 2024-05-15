import React from "react";
import Header from "../common/header/Header";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import ContentMission from "../components/about/ContentMission";

const Mission = () => {
  const breadcrumb = [
    "About Avis",
    "Company Information",
    "Avis Mission and Values",
  ];
  return (
    <>
      <HeaderOne />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <Header title="MISSION AND VALUES" />
      <ContentMission />
      <FooterOne />
    </>
  );
};

export default Mission;
