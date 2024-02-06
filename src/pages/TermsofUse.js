import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import ContentTermsofUse from "../components/terms/ContentTermsofUse";
import Title from "../Title";

const TermsofUse = () => {
  Title("Terms Of Use");
  return (
    <>
      <HeaderOne />
      <ContentTermsofUse />
      <FooterOne />
    </>
  );
};

export default TermsofUse;
