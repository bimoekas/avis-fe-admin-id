import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <a
        className="card-link text-dark"
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="card-item p-4 bg-white d-flex flex-column justify-content-between">
          <div className="card-head">
            <h5 className="mb-3 text-dark">{props.title}</h5>
            <p className="card-description">{props.description}</p>
          </div>
          <div className="card-foot text-end">
            <p className="link-avis">
              Learn More
              <span>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/icon/arrow.png`}
                  alt="arrow"
                  width="10"
                  className="expand"
                />
              </span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
