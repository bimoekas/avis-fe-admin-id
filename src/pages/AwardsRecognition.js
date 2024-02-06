import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import Header from "../common/header/Header";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import ContentAwards from "../components/about/ContentAwards";

const AwardsRecognition = () => {
  const breadcrumb = [
    "About Avis",
    "Company Information",
    "Awards and Recognition",
  ];
  return (
    <>
      <HeaderOne />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <Header title="AWARDS AND RECOGNITION" />
      <ContentAwards />
      <FooterOne />
    </>
  );
};

export default AwardsRecognition;
