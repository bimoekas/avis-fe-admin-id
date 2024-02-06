import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import Banner from "../components/rent/Banner";
import ContentSiteMap from "../components/site-map/ContentSiteMap";
import Title from "../Title";

const SiteMap = () => {
  Title("Site Map");
  return (
    <>
      <HeaderOne />
      <Banner
        rent="LET US GET YOU WHERE YOU'RE GOING."
        image="bg-sitemap.webp"
        type="text-dark"
      />
      <div className="container py-5 mt-5">
        <ContentSiteMap />
      </div>
      <FooterOne />
    </>
  );
};

export default SiteMap;
