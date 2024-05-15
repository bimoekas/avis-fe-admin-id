import React from "react";

const ASCAR = ({ title, description, image, color }) => {
  return (
    <div className={`${color} luxury-cars pt-3 pb-5`}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className={image == "" ? "col" : "col-md-8"}>
            <h3 className="mb-2 text-up text-black">{title}</h3>
            <p className="text-avis">{description}</p>
            <button className="btn btn-avis py-2 mt-2">SEE DETAILS</button>
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

export default ASCAR;
