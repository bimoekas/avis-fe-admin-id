import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import Header from "../common/header/Header";
import FooterOne from "../common/footer/FooterOne";
import ContentCorporate from "../components/about/ContentCorporate";

const CorporateFacts = () => {
  const breadcrumb = ["About Avis", "Company Information", "Corporate Facts"];
  return (
    <>
      <HeaderOne />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <Header title="AVIS CORPORATE PROFILE" />
      <ContentCorporate />
      <FooterOne />
    </>
  );
};

export default CorporateFacts;
