import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import VMC from "../components/viewmodifycancel/vmc";
import Title from "../Title";

const ViewModifyCancel = () => {
  Title("Reservation Confirmation/Cancellation");
  return (
    <>
      <HeaderOne />
      <VMC />
      <FooterOne />
    </>
  );
};

export default ViewModifyCancel;
