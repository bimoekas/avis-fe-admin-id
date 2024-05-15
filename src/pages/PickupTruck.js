import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import OptionHeader from "../common/header/OptionHeader";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import Banner from "../components/rent/Banner";
import ChooseCar from "../components/rent/ChooseCar";
import FindOut from "../components/rent/FindOut";

const PickupTruck = () => {
  const breadcrumb = ["Cars", "Pickup Truck"];
  return (
    <>
      <HeaderOne optionHeader={true} scroll={true} />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <Banner
        rent={"Rent a Pickup Truck"}
        image="banner.webp"
        type="rentType"
      />
      <ChooseCar
        item={"Pickup Truck"}
        desc={
          "When you’re looking for a powerful vehicle built for adventure on any road, there’s nothing like a pickup truck to meet your travel needs. Budget offers a variety of pickup trucks at our locations nationwide. Rent a pickup truck for an upcoming move, or take a pickup truck on a camping trip. Keep reading to learn more about your pickup truck rental options."
        }
      />
      <FooterOne />
    </>
  );
};

export default PickupTruck;
