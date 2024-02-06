import React from "react";
// import FeatureSelect from "../common/feature/FeatureSelect";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import AS from "../components/avissignature/AS";
import ASE from "../components/avissignature/ASE";
import ASCAR from "../components/avissignature/ASCAR";

const AvisSignature = () => {
  const breadcrumb = ["Car Guide", "USA", "Economy Car Rental"];
  return (
    <>
      <HeaderOne />
      <AS />
      <ASCAR
        title={"Chrysler 300"}
        description={
          "Enjoy the perks of a powerful engine, comfortable ride, and above-average sound system when you drive a Chrysler 300 LTD 3.6L rental from Budget."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car2.webp"}
      />
      <ASCAR
        title={"Volvo XC60"}
        description={
          "Choose a Volvo XC60 rental and get a chic and stylish interior, high-performing brakes, and plenty of room to spread out and ride in comfort."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car3.webp"}
      />
      <ASCAR
        title={"Buick LaCrosse"}
        description={
          "The Buick LaCrosse rental offers surprising agility, beautiful styling, and an easy-to-use infotainment system. You’ll love the luxurious and spacious cabin, too."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car4.webp"}
      />
      <ASCAR
        title={"Lincoln MKT"}
        description={
          "Get the advantage of advanced safety features and a comfort-minded suspension system with a Lincoln MKT rental. Plenty of horsepower under the hood also makes it fun to drive."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car5.webp"}
      />
      <ASCAR
        title={"Lincoln MKX"}
        description={
          "The Lincoln MKX rental from Budget provides plenty of desirable features, such as a touchscreen infotainment system, the rearview camera, and parking sensors."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car6.webp"}
      />
      <ASE />
      <FooterOne />
    </>
  );
};

export default AvisSignature;