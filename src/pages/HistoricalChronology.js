import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import ContentHistorical from "../components/about/ContentHistorical";
import Header from "../common/header/Header";

const HistoricalChronology = () => {
  const breadcrumb = [
    "About Avis",
    "Company Information",
    "Historical Chronology",
  ];

  return (
    <>
      <HeaderOne />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <Header title="AVIS HISTORY" />
      <ContentHistorical />
      <FooterOne />
    </>
  );
};

export default HistoricalChronology;
