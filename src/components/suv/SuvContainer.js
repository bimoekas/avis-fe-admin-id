import React from "react";
import Car from "../rent/Car";

const SuvContainer = () => {
  return (
    <>
      <h3 className="mt-5 container">5-Passenger SUVs</h3>
      <div className="carsContainer">
        <div className="container">
          <Car
            image={`${process.env.PUBLIC_URL}/assets/cars-budget/suv1.webp`}
            title="Midsize or Intermediate SUV"
            description="The midsize or intermediate SUV rental fleet includes the Mazda CX-5 and similar 5-seat models."
            button="Intermediate SUV"
          />
          <Car
            image={`${process.env.PUBLIC_URL}/assets/cars-budget/suv2.webp`}
            title="Standard SUV"
            description="Standard SUV rentals include the Ford Edge and similar models. These vehicles are designed to provide both safety and style on the open road for 5 passengers."
            button="Standard SUV"
          />
          <Car
            image={`${process.env.PUBLIC_URL}/assets/cars-budget/suv3.webp`}
            title="Luxury Midsize Crossover"
            description="The luxury midsize crossover rental group includes the Jaguar F-Pace premium crossover SUV rental and similar models."
            button="Luxury Midsize Crossover"
          />
          <Car
            image={`${process.env.PUBLIC_URL}/assets/cars-budget/suv4.webp`}
            title="Luxury SUVs"
            description="Renting from this vehicle group will put you behind the wheel of a Cadillac Escalade luxury SUV that will make you feel like a million bucks."
            button="Luxury SUV"
          />
        </div>
      </div>
      <h3 className="mt-5 container">7-Passenger SUVs</h3>
      <div className="carsContainer">
        <div className="container">
          <Car
            image={`${process.env.PUBLIC_URL}/assets/cars-budget/suv5.webp`}
            title="Full-Size SUV"
            description="Full-size SUV rentals like the Chevy Tahoe and similar 7-seat models feature extra room in the seating and luggage area, making them a popular SUV car rental."
            button="Full-Size SUV"
          />
          <Car
            image={`${process.env.PUBLIC_URL}/assets/cars-budget/suv6.webp`}
            title="Standard Elite SUV"
            description="A standard elite SUV rental comes in models like the Nissan Pathfinder and similar 7-passenger SUVs that are built for any kind of adventure."
            button="Standard Elite 7-Seater SUV"
          />
          <Car
            image={`${process.env.PUBLIC_URL}/assets/cars-budget/suv7.webp`}
            title="Premium Elite SUV"
            description="A premium elite SUV rental from Budget is a GMC Yukon Denali or similar top-of-the-line SUV. Enjoy the upscale interior and premium features of this vehicle group."
            button="Premium Elite SUV"
          />
          <Car
            image={`${process.env.PUBLIC_URL}/assets/cars-budget/suv8.webp`}
            title="Luxury Crossover"
            description="The luxury crossover vehicle group includes models like the Range Rover Velar and other similar luxury SUV rentals. You’ll be turning heads and driving in style."
            button="Luxury Crossover"
          />
        </div>
      </div>
      <h3 className="mt-5 container">7-8 Passenger SUVs</h3>
      <div className="carsContainer">
        <div className="container">
          <Car
            image={`${process.env.PUBLIC_URL}/assets/cars-budget/suv9.webp`}
            title="Premium SUV"
            description="Enjoy a comfortable and quiet ride in a premium SUV car rental like the Ford Expedition or a similarly spacious premium model."
            button="Premium SUV"
          />
        </div>
      </div>
      <h3 className="mt-5 container mb-2">Similar Vehicle Options</h3>
      <p className="container similar">
        If you’re interested in renting an SUV for some kind of outdoor
        adventure then you are likely to love a Jeep rental.
      </p>
      <div className="carsContainer">
        <div className="container">
          <Car
            image={`${process.env.PUBLIC_URL}/assets/cars-budget/suv10.webp`}
            title="Jeep"
            description="Jeep rentals from Budget include the Jeep Wrangler and similar SUV car rental models suitable for driving on almost any terrain."
            button="Jeep"
          />
        </div>
      </div>
    </>
  );
};

export default SuvContainer;
