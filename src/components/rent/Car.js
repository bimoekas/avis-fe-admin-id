import React from "react";
import { Link } from "react-router-dom";

const Car = (props) => {
  return (
    <div className="chooseRent row mt-5 align-items-center">
      <div className="col-md-5">
        <img src={props.image} className="img-fluid" />
      </div>
      <div className="col-md-7 ps-5">
        <h2 className="mb-3">
          <Link to={`${process.env.PUBLIC_URL}/car-explore`}>{`${
            props.title == "Luxury Rental Cars"
              ? "Luxury Rental Cars"
              : props.title + " Rentals"
          }`}</Link>
        </h2>
        <p className="mb-3">{props.description}</p>
        <Link
          to={`${process.env.PUBLIC_URL}/car-explore`}
        >{`See ${props.button} Details`}</Link>
      </div>
    </div>
  );
};

export default Car;
