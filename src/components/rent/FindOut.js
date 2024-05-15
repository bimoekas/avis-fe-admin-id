import React from "react";

const FindOut = (props) => {
  return (
    <div className="pt-3 pb-5 bg-findOut mt-4">
      <div className="container">
        <h5 className="mb-2">{props.title}</h5>
        <p className="mb-2">{props.desc1}</p>
        <p className="mb-2">{props.desc2}</p>
      </div>
    </div>
  );
};

export default FindOut;
