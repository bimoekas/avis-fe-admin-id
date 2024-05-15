import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import Header from "../common/header/Header";
import ContentResponsibility from "../components/about/ContentResponsibility";

const CorporateResponsibility = () => {
  const breadcrumb = [
    "About Avis",
    "Company Information",
    "Corporate Responsibility",
  ];
  return (
    <>
      <HeaderOne />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <Header title="AVIS CORPORATE SOCIAL RESPONSIBILITY" />
      <ContentResponsibility />
      <FooterOne />
    </>
  );
};

export default CorporateResponsibility;
