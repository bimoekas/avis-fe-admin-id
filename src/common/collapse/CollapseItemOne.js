import React from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

const CollapseItemOne = ({ open }) => {
  return (
    <Collapse in={open}>
      <div className="row example-collapse-text ps-5 mb-4 text-avis">
        <div className="col-6 mb-4 col-item"><b>Within a Country</b></div>
        <div className="col-6 mb-4 col-item"><b>Toll-Free Number</b></div>

        <div className="col-6 mb-4 col-item"><b>united States</b></div>
        <div className="col-6 mb-4 col-item"><b></b></div>

        <div className="col-6 mb-4 col-item">U.S. Reservations</div>
        <div className="col-6 mb-4 col-item">800-218-7992</div>

        <div className="col-6 mb-4 col-item">Reservations Outside The U.S.</div>
        <div className="col-6 mb-4 col-item">800-472-3325</div>

        <div className="col-6 mb-4 col-item">Roadside Assistance</div>
        <div className="col-6 mb-4 col-item">800-354-2847</div>

        <div className="col-6 mb-4 col-item">Customer Service</div>
        <div className="col-6 mb-4 col-item">800-214-6094</div>

        <div className="col-6 mb-4 col-item">Customer Service en Francais</div>
        <div className="col-6 mb-4 col-item">800-268-8991</div>

        <div className="col-6 mb-4 col-item">TTY/TTD (Headring Impaired)</div>
        <div className="col-6 mb-4 col-item">866-284-7669</div>

        {/* 
        <div className="col-4 col-item">test</div>
        <div className="col-4 col-item">test</div>
        <div className="col-4 col-item">test</div> */}
      </div>
    </Collapse>
  );
};

export default CollapseItemOne;
