import React from "react";

const LuxuryCarDetail = ({ title, description, image, color }) => {
  return (
    <div className={`${color} luxury-cars pt-3 pb-5`}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className={image == "" ? "col" : "col-md-8"}>
            <h3 className="mb-2">{title}</h3>
            <p>{description}</p>
          </div>
          {image == "" ? (
            ""
          ) : (
            <div className="col-md-4 text-center">
              <img src={image} className="img-fluid" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LuxuryCarDetail;
