import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import OptionHeader from "../common/header/OptionHeader";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import Banner from "../components/rent/Banner";
import ChooseCar from "../components/rent/ChooseCar";
import FindOut from "../components/rent/FindOut";

const SuvCar = () => {
  const breadcrumb = ["Cars", "SUV"];
  return (
    <>
      <HeaderOne />
      <OptionHeader />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <Banner rent={"Rent a SUV"} image="banner.webp" type="rentType" />
      <ChooseCar
        item={"SUV"}
        desc={
          "SUV rentals from Budget are great for families and medium to large travel groups. SUV car rental sizes range from midsize to full-size and also include crossover SUVs, which means there are seating possibilities for 5 to 8 people, depending on the model. Make sure to consider the number of people you will be traveling with and the amount of luggage space needed before booking your reservation. Because availability at each location varies, we cannot guarantee a specific model, but we’re confident you will love any SUV in the Budget fleet. Browse the SUV rental groups below to select which type of SUV you would like to rent."
        }
      />
      <FindOut
        title={"Find Out Which Small Car Rentals are Available"}
        desc1={
          "Fill out the form on this page to book your reservation today! Enter your dates, times, and pickup and drop-off locations to see which car groups are available when you need a rental. Book early and take advantage of deals and discounts!"
        }
        desc2={
          "Vehicle make, model, trim, features and color are not guaranteed and are subject to location and availability. Vehicle features are subject to change based on the vehicle model-year."
        }
      />
      <FooterOne />
    </>
  );
};

export default SuvCar;
