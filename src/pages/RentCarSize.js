import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import RCS from "../components/rentcarsize/RCS";

const RentCarSize = () => {
  return (
    <>
      <HeaderOne optionHeader={true} scroll={false} />
      <RCS />
      <FooterOne />
    </>
  );
};

export default RentCarSize;
