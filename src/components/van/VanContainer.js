import React from "react";
import FindOut from "../rent/FindOut";
import Van from "./Van";

const VanContainer = () => {
  return (
    <div className="container pb-5">
      <div className="row mb-5">
        <Van
          image={"van1.webp"}
          title={"Minivan Rentals"}
          desc={
            "Minivan rentals like the Chrysler Voyager and similar models can seat 7 people with ease and offer remote sliding doors for easy entry and exit."
          }
          button={"Minivan"}
        />
        <Van
          image={"van2.webp"}
          title={"12-Passenger Van Rentals"}
          desc={
            "Drive a Ford Transit 12-passenger van or similar model and enjoy a roomy ride with plenty of cargo space for luggage and souvenirs."
          }
          button={"12-Seater Van"}
        />
        <Van
          image={"van3.webp"}
          title={"15-Passenger Van Rentals"}
          desc={
            "The Chevrolet Express 15-passenger van rental is the best option for the biggest groups. It’s perfect for tour groups, school trips, and family reunions."
          }
          button={"15-Seater Van"}
        />
      </div>
      <FindOut
        title={"Find Out Which Van Rentals are Available"}
        desc1={
          "If you’re planning to rent a van from Budget, don’t wait to get started. We make it easy to complete your reservation and live up to our name with great rates offered every day. Simply fill out the form above with your preferred rental pickup and drop-off locations, dates, and times. Then you’ll be able to see the available vehicle options for your trip on the following page."
        }
        desc2={
          "Vehicle make, model, trim, features and color are not guaranteed and are subject to location and availability. Vehicle features are subject to change based on the vehicle model-year."
        }
      />
    </div>
  );
};

export default VanContainer;
