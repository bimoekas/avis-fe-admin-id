import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import PS from "../components/productserviceusa/PS";
import Title from "../Title";

const ProductServiceUsa = () => {
  Title("Car Rental Products and Services For Rentals in the USA and Canada");
  return (
    <>
      <HeaderOne />
      <PS />
      <FooterOne />
    </>
  );
};

export default ProductServiceUsa;
