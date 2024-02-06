import React from "react";

const InfoDetailCar = (props) => {
  return (
    <div className="container pt-5">
      <div className="listInfo d-flex flex-wrap mt-5 pt-3 ps-4 pb-3 mb-3">
        <div className="me-5">
          <span className="me-1">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/icon/user.png"}
            />
          </span>
          {props.seats} Seats
        </div>
        <div className="me-5">
          <span className="me-1">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/icon/suitcase.png"}
            />
          </span>
          {props.large} Large Bag
        </div>
        <div className="me-5">
          <span className="me-1">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/icon/suitcase.png"}
            />
          </span>
          {props.small} Small Bag
        </div>
      </div>
    </div>
  );
};

export default InfoDetailCar;
