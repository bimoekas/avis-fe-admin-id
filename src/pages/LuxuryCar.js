import React from "react";
// import FeatureSelect from "../common/feature/FeatureSelect";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import OptionHeader from "../common/header/OptionHeader";
import HeroOne from "../components/hero/HeroOne";
import HeroTwo from "../components/hero/HeroTwo";
import Benefit from "../components/luxury/Benefit";
import BreadcrumbCar from "../components/luxury/BreadcrumbCar";
import FAQ from "../components/luxury/FAQ";
import LuxuryCarDetail from "../components/luxury/LuxuryCarDetail";
import InfoDetailCar from "../components/rent/InfoDetailCar";
import Jumbotron from "../components/rent/Jumbotron";

const LuxuryCar = () => {
  const breadcrumb = ["Car Guide", "USA", "Economy Car Rental"];
  return (
    <>
      <HeaderOne />
      <OptionHeader />
      <BreadcrumbCar breadcrumb={breadcrumb} />
      <Jumbotron
        title="Book a High-End Car Rental"
        subtitle="Chrysler 300 and Similar"
      />
      <InfoDetailCar seats="5" large="2" small="2" />
      <LuxuryCarDetail
        title={"High-End Car Rental Options From Budget"}
        description={
          "Choose a luxury rental car if you want to really upgrade your time on the road. Whether you’re on a business trip or special getaway, you will love having a high-end vehicle to get around in during your stay. Enjoy features a notch above your average rental car, like a strong engine, comfortable interior, and sleek, eye-catching body style. Budget has an all-star fleet of high-end, luxury rental cars, including the following and similar makes and models:"
        }
        image={""}
      />
      <LuxuryCarDetail
        title={"Chrysler 300"}
        description={
          "Enjoy the perks of a powerful engine, comfortable ride, and above-average sound system when you drive a Chrysler 300 LTD 3.6L rental from Budget."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car2.webp"}
        color={"bg-alicelightblue"}
      />
      <LuxuryCarDetail
        title={"Volvo XC60"}
        description={
          "Choose a Volvo XC60 rental and get a chic and stylish interior, high-performing brakes, and plenty of room to spread out and ride in comfort."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car3.webp"}
      />
      <LuxuryCarDetail
        title={"Buick LaCrosse"}
        description={
          "The Buick LaCrosse rental offers surprising agility, beautiful styling, and an easy-to-use infotainment system. You’ll love the luxurious and spacious cabin, too."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car4.webp"}
        color={"bg-alicelightblue"}
      />
      <LuxuryCarDetail
        title={"Lincoln MKT"}
        description={
          "Get the advantage of advanced safety features and a comfort-minded suspension system with a Lincoln MKT rental. Plenty of horsepower under the hood also makes it fun to drive."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car5.webp"}
      />
      <LuxuryCarDetail
        title={"Lincoln MKX"}
        description={
          "The Lincoln MKX rental from Budget provides plenty of desirable features, such as a touchscreen infotainment system, the rearview camera, and parking sensors."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car6.webp"}
        color={"bg-alicelightblue"}
      />
      <LuxuryCarDetail
        title={"Lincoln MKZ"}
        description={
          "With a Lincoln MKZ rental or Lincoln MKZ Hybrid, you’ll be driving a swift, responsive vehicle that delivers excellent handling and comfort."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car7.webp"}
      />
      <LuxuryCarDetail
        title={"Lincoln MKC"}
        description={
          "The quiet and spacious Lincoln MKC rental gives drivers a natural, easy driving experience, thanks to high-quality steering and an engine that performs on any road."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car8.webp"}
        color={"bg-alicelightblue"}
      />
      <LuxuryCarDetail
        title={"Lincoln Nautilus"}
        description={
          "You’ll enjoy the perfect balance of practicality and luxury in the Lincoln Nautilus rental from Budget, which features plenty of cargo space and great handling."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car9.webp"}
      />
      <LuxuryCarDetail
        title={"Cadillac XT5"}
        description={
          "With the keys to a Cadillac XT5 rental from Budget, you’ll enjoy an incredible driving experience, whether you’re heading on a long road trip or driving in winter weather."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car10.webp"}
        color={"bg-alicelightblue"}
      />
      <LuxuryCarDetail
        title={"INFINITI Q50"}
        description={
          "The INFINITI Q50 rental packs in excellent handling, a seven-speed transmission, and an eye-catching design, all in one stylish model."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car11.webp"}
      />
      <LuxuryCarDetail
        title={"INFINITI Q70"}
        description={
          "You’ll love the INFINITI Q70 rental for its powerful engine, unique curvy design, and loads of standard features, including an elite sound system and a pleasant sunroof."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car12.webp"}
        color={"bg-alicelightblue"}
      />
      <LuxuryCarDetail
        title={"INFINITI QX30"}
        description={
          "The INFINITI QX30 rental features quick acceleration, precise steering, and an easy-access hatchback cargo space, all in one comfortable crossover sedan."
        }
        image={process.env.PUBLIC_URL + "/assets/cars-budget/car13.webp"}
      />
      <div className="container">
        <i>
          Vehicle make, model, trim, features and color are not guaranteed and
          are subject to location and availability. Vehicles listed for this car
          group are subject to change at any time. Vehicle features are subject
          to change based on the vehicle model-year.
        </i>
      </div>
      <Benefit />
      <FAQ />
      <FooterOne />
    </>
  );
};

export default LuxuryCar;
