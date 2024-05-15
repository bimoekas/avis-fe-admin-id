import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import OptionHeader from "../common/header/OptionHeader";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import Banner from "../components/rent/Banner";
import ChooseCar from "../components/rent/ChooseCar";

const VanCar = () => {
  const breadcrumb = ["Cars", "Vans"];
  return (
    <>
      <HeaderOne />
      <OptionHeader />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <Banner rent={"Rent a Van"} image="banner.webp" type="rentType" />
      <ChooseCar
        item={"Van"}
        desc={
          "A van rental is the perfect choice for anyone looking to travel with a large group. Whether you’re vacationing with your family, taking a business trip with coworkers, or touring with friends, you’ll love having the space and convenience of a van. Choose a minivan rental to easily accommodate child safety seats, or opt for passenger van rentals to keep a group of up to 15 people together on the road. Learn more about van options from Budget below."
        }
      />
      <FooterOne />
    </>
  );
};

export default VanCar;
