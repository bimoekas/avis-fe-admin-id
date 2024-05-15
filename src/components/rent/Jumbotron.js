import React from "react";

const Jumbotron = (props) => {
  return (
    <div className="jumbotron pt-5 pb-5 mb-5">
      <div className="container pt-5 pb-4 d-none d-md-block">
        <h1 className="jumbotron-title">{props.title}</h1>
        <p className="jumbotron-subtitle">{props.subtitle}</p>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/assets/cars-budget/car1.webp"}
        alt="luxury-car"
        className="imgCar"
      />
    </div>
  );
};

export default Jumbotron;
