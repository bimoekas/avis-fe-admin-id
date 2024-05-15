import React from "react";
import { Link } from "react-router-dom";

const Van = (props) => {
  return (
    <div className="col-md-4">
      <img
        src={`${process.env.PUBLIC_URL}/assets/cars-budget/${props.image}`}
        alt="van"
        className="img-fluid"
      />
      <Link className="yellow link" style={{ fontSize: "1.3rem" }}>
        {props.title}
      </Link>
      <p className="mt-3 mb-4">{props.desc}</p>
      <Link
        className="d-flex justify-content-center"
        to={`${process.env.PUBLIC_URL}/car-explore`}
      >
        <button className="btnCar">See {props.button} Details</button>
      </Link>
    </div>
  );
};

export default Van;
