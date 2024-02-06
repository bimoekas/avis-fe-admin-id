import React from "react";
import { Link } from "react-router-dom";

const OptionHeader = () => {
  return (
    <section className="option-header">
      <div className="pb-3">
        <div className="row">
          <div className="col-sm-10 col-md-3 pt-3 pe-sm-0 pe-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your pick-up location or zip code"
            />
          </div>
          <div className="col-sm-3 pt-3 pe-sm-0 pe-2 ps-3 ps-sm-1 d-md-block d-none">
            <input type="date" className="form-control" />
          </div>
          <div className="col-sm-3 pt-3 pe-sm-0 pe-2 ps-3 ps-sm-1 d-md-block d-none">
            <input type="time" className="form-control" />
          </div>
          <div className="col-sm-2 ps-3 ps-sm-1 pt-3 pe-sm-3 pe-2">
            <button
              className="btn btn-primary form-control"
              type="submit"
              style={{
                backgroundColor: "rgb(212, 0, 42)",
                border: "1px solid rgb(212, 0, 42)",
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptionHeader;
