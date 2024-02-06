import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import Title from "../Title";

const CopyrightNotice = () => {
  Title("Copyright Notice");
  return (
    <>
      <HeaderOne />
      <div className="container py-5">
        <h1 className="link-avis mb-5">COPYRIGHT NOTICES</h1>
        <p className="text-dark mb-3">
          Automotive Images, Copyright [2000 – 2019] izmo, Inc. All Rights
          Reserved. The automotive images contained herein are owned by izmo,
          Inc. and are protected under United States and international copyright
          law. Access to and use of these images is restricted by terms and
          conditions of a separate license agreement. Any unauthorized use,
          reproduction, distribution, recording or modification of these images
          is strictly prohibited.
        </p>
      </div>
      <FooterOne />
    </>
  );
};

export default CopyrightNotice;
