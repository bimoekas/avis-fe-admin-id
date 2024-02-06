import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import GuaranteeForm from "../components/guarantee/GuaranteeForm";
import { Link } from "react-router-dom";

const BestPriceGuaranteeForm = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const breadcrumb = [
    "Products & Services",
    "Services",
    "Best Price Guarantee",
    "Best Price Guarantee Claim Form",
  ];
  return (
    <>
      <HeaderOne />
      <div className="container py-5">
        <img
          src={publicUrl + "assets/images/resources/best-price.webp"}
          className="justify-content-center"
          width={200}
        />
        <h1 className="text-dark mt-5 mb-5">
          AVIS BEST PRICE PLEDGE CLAIM FORM
        </h1>
        <p className="mb-3">
          Avis provides a rate guarantee to customers who book direct. If you
          book a prepaid rental on Avis.com and find a lower qualifying
          published Avis rate on another site within 24 hours of booking, you
          can submit the claim form below. If approved, Avis will match the base
          rate and give you an additional 10% off your prepaid rental.
        </p>
        <p className="mb-5">
          Kindly fill out the fields below. Upon submitting this form, our
          customer care team will review your information and will notify of you
          of approval within 2 business days.
        </p>
        <GuaranteeForm />
        <hr />
        <div className="d-flex justify-content-between align-items-center pt-3">
          <Link className="link-avis">Cancel</Link>
          <button className="btn btn-avis">SUBMIT CLAIM</button>
        </div>
      </div>
      <FooterOne />
    </>
  );
};

export default BestPriceGuaranteeForm;
