import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import Info from "../components/about/Info";
import Header from "../common/header/Header";

const CompanyInfo = () => {
  const breadcrumb = ["About Avis", "Company Information"];
  return (
    <>
      <HeaderOne />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <Header title="AVIS THE COMPANY" />
      <Info />
      <FooterOne />
    </>
  );
};

export default CompanyInfo;
