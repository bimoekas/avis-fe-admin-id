import React from "react";
import { useParams } from "react-router-dom";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import DP from "../components/detailprotection/DP";
import Title from "../Title";

const DetailProtection = () => {
  const params = useParams();
  const data = params.slug.replace(/-/g, " ");
  Title(`Protection Detail ${data}`);
  return (
    <>
      <HeaderOne />
      <DP data={data} />
      <FooterOne />
    </>
  );
};

export default DetailProtection;
