import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import PS from "../components/productservice/PS";
import Title from "../Title";

const ProductService = () => {
  Title("Product & Services");
  return (
    <>
      <HeaderOne />
      <PS />
      <FooterOne />
    </>
  );
};

export default ProductService;
