import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import OptionHeader from "../common/header/OptionHeader";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import Banner from "../components/rent/Banner";
import ChooseCar from "../components/rent/ChooseCar";
import FindOut from "../components/rent/FindOut";

const RentalCarSizes = () => {
  const breadcrumb = ["Cars", "Small Car"];
  return (
    <>
      <HeaderOne />
      <OptionHeader />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <Banner rent="Rent a Car" image="banner.webp" type="rentType" />
      <ChooseCar
        item={"Car"}
        desc={
          "When choosing the perfect car or sedan rental option, it’s helpful to check out the variety of car types and sizes offered. Peruse the list of cars below before deciding which car group is right for you, keeping in mind your group size and travel itinerary. Each of these car groups will provide reliable transportation on the road. Book your rental reservation today and try out one of these stylish sedans on your next vacation. Learn more about our car fleet below."
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

export default RentalCarSizes;
