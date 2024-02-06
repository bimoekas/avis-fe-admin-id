import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import Title from "../Title";

const ContactUs = () => {
  const breadcrumb = ["Help", "Contact Us"];
  Title("Contact Us");
  return (
    <>
      <HeaderOne />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <div className="container py-3">
        <h1 className="mb-3 text-black text-up">CONTACT US</h1>
        <h2
          className="text-avis mb-4"
          style={{ fontWeight: "600", color: "black" }}
        >
          Contact Us For More Information
        </h2>
        <a href="mailto:sales@avis-id.com">
          <h3
            className="text-avis mb-2 email-link"
            style={{ fontWeight: "400" }}
          >
            sales@avis-id.com
          </h3>
        </a>
      </div>
      <FooterOne />
    </>
  );
};

export default ContactUs;
