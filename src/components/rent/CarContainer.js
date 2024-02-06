import React from "react";
import Car from "./Car";

const CarContainer = () => {
  return (
    <div className="carsContainer">
      <div className="container">
        <Car
          image={`${process.env.PUBLIC_URL}/assets/cars-budget/economy.webp`}
          title="Economy Car"
          description="Rent an economy car rental like the Kia Rio and similar models for the perfect small car rental for a trip for one or two."
          button="Economy Car"
        />
        <Car
          image={`${process.env.PUBLIC_URL}/assets/cars-budget/compact.webp`}
          title="Compact Car"
          description="Compact car rentals like the Kia Soul and similar models are fuel-efficient, easy to handle, and fun to drive."
          button="Compact Car"
        />
        <Car
          image={`${process.env.PUBLIC_URL}/assets/cars-budget/intermediate.webp`}
          title="Midsize or Intermediate Car"
          description="Midsize and intermediate car rentals like the Toyota Corolla and similar models are great when you need to commute with a small group."
          button="Midsize Car"
        />
        <Car
          image={`${process.env.PUBLIC_URL}/assets/cars-budget/standard.webp`}
          title="Standard Car"
          description="The Volkswagen Jetta and standard car models provide the room you’ll need to enjoy a weekend trip."
          button="Standard Car"
        />
        <Car
          image={`${process.env.PUBLIC_URL}/assets/cars-budget/full-size.webp`}
          title="Full-Size Car"
          description="Full-size car rentals like the Toyota Camry and similar full-size sedans have lots of legroom, perfect for a road trip."
          button="Full-Size Car"
        />
        <Car
          image={`${process.env.PUBLIC_URL}/assets/cars-budget/premium.webp`}
          title="Premium Car"
          description="Premium car rentals include the Volkswagen Passat and similar models. Enjoy smooth and quiet driving on the way to your destination."
          button="Premium Car"
        />
        <Car
          image={`${process.env.PUBLIC_URL}/assets/cars-budget/hybrid.webp`}
          title="Hybrid Car"
          description="Hybrid car rentals like the Toyota Prius Hybrid and similar models provide fuel efficiency, style, and lots of fun on the road."
          button="Hybrid Car"
        />
        <Car
          image={`${process.env.PUBLIC_URL}/assets/cars-budget/luxury.webp`}
          title="Luxury Rental Cars"
          description="The Chrysler 300 and similar luxury rental car models are comfortable, classy, high-performance vehicles built to impress."
          button="Luxury Rental Cars"
        />
        <Car
          image={`${process.env.PUBLIC_URL}/assets/cars-budget/luxury-sports.webp`}
          title="Luxury Sports Sedan"
          description="Drive a Mercedes-Benz C300 or similar luxury sports sedan when you rent from this car group. These models are posh and powerful, making them the perfect vacation vehicle."
          button="Luxury Sports Sedan"
        />
        <Car
          image={`${process.env.PUBLIC_URL}/assets/cars-budget/full-size-luxury.webp`}
          title="Full-Size Luxury Sedan"
          description="Full-size luxury sedan rentals like the Lincoln Continental and similar full-size car rental models are great for family vacations, romantic weekends, and business trips."
          button="Full-Size Luxury Sedan"
        />
      </div>
    </div>
  );
};

export default CarContainer;
