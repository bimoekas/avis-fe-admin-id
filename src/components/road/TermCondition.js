import React, { useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";

const TermCondition = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div className="container mt-5">
      <button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="text-start mb-4"
      >
        <span className="yellow me-1">Terms and Conditions</span>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/icon/arrow.png`}
          alt="arrow"
          width={10}
          className={`expand ${open ? "active" : ""}`}
        />
      </button>
      <Collapse in={open}>
        <div className="row example-collapse-text mb-5">
          <p>
            Extended Roadside Assistance is available at all participating
            Budget locations in the U.S., Canada, Puerto Rico and U.S. Virgin
            Islands. The daily service charge for Roadside Assistance is subject
            to change. Prohibited use of the vehicle will void this option. In
            such a case, emergency road hazard assistance will be delivered, but
            standard charges for services such as lost keys, fuel delivery, etc.
            may apply.
          </p>
        </div>
      </Collapse>
    </div>
  );
};

export default TermCondition;
