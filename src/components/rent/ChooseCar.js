import React from "react";
import SuvCar from "../../pages/SuvCar";
import TruckContainer from "../pickup/TruckContainer";
import SuvContainer from "../suv/SuvContainer";
import VanContainer from "../van/VanContainer";
import Car from "./Car";
import CarContainer from "./CarContainer";

const ChooseCar = (props) => {
  return (
    <>
      <div className="container pt-5">
        <h1 className="mb-3">{`Which ${props.item} is Right for You?`}</h1>
        <p>{props.desc}</p>
      </div>
      {props.item == "Car" ? (
        <CarContainer />
      ) : props.item == "Van" ? (
        <VanContainer />
      ) : props.item == "SUV" ? (
        <SuvContainer />
      ) : (
        <TruckContainer />
      )}
    </>
  );
};

export default ChooseCar;
