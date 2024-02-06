import React from "react";
import FindOut from "../rent/FindOut";
import Truck from "./Truck";

const TruckContainer = () => {
  return (
    <div className="container pb-5">
      <div className="row mb-5">
        <Truck
          image={"pickup1.webp"}
          title={"Midsize Pickup Truck Rentals"}
          desc={
            "A midsize pickup truck like the Toyota Tacoma and similar models offer all the functionality of a full-size truck in more compact and drivable package."
          }
          button={"Midsize Pickup"}
        />
        <Truck
          image={"pickup2.webp"}
          title={"Full-Size Pickup Truck Rentals"}
          desc={
            "Get maximum power and cargo space when you drive a full-size pickup truck rental like the Ram Rebel or similar model."
          }
          button={"Full-Size Pickup"}
        />
        <Truck
          image={"jeep.webp"}
          title={"Jeep Rentals"}
          desc={
            "Rent a Jeep Wrangler from Budget and enjoy the freedom to go anywhere you want in this rugged, reliable 4x4."
          }
          button={"Jeep"}
        />
        <Truck
          image={"truck1.webp"}
          title={"Moving Trucks"}
          desc={
            "If you’re moving the contents of an entire room, apartment, or house, pack everything into a 12-, 16-, or 26-foot Budget Moving Truck."
          }
          button={"Budget Truck"}
        />
      </div>
      <FindOut
        title={"Find Out Which Pickup Truck Rentals are Available"}
        desc1={
          "Budget makes it easy to get started with your pickup truck rental reservation. Simply fill out the form on this page to find out which truck rentals are available at your pickup location during your planned rental period. Don’t delay, availability varies by location and demand."
        }
        desc2={
          "Vehicle make, model, trim, features and color are not guaranteed and are subject to location and availability. Vehicle features are subject to change based on the vehicle model-year."
        }
      />
    </div>
  );
};

export default TruckContainer;
