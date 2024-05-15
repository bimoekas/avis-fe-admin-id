import React from "react";
import { Link } from "react-router-dom";

const Truck = (props) => {
  return (
    <div className="col-md-6">
      <img
        src={`${process.env.PUBLIC_URL}/assets/cars-budget/${props.image}`}
        alt="truck"
        className="img-fluid"
      />
      <h4 className="mb-3">{props.title}</h4>
      <p className="mb-4">{props.desc}</p>
      <Link
        className="d-flex justify-content-center"
        to={`${process.env.PUBLIC_URL}/car-explore`}
      >
        <button className="btnCar">See {props.button} Details</button>
      </Link>
    </div>
  );
};

export default Truck;
