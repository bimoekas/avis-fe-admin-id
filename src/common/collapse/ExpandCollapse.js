import React, { useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";
import CollapseItemFour from "./CollapseItemFour";
import CollapseItemOne from "./CollapseItemOne";
import CollapseItemThree from "./CollapseItemThree";
import CollapseItemTwo from "./CollapseItemTwo";

const ExpandCollapse = ({ item, text }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    item == "One" ? setOpen(true) : setOpen(false);
  }, []);

  return (
    <div className="row">
      <button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="text-start mb-4"
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/icon/arrow.png`}
          alt="arrow"
          width={10}
          className={`expand ${open ? "active" : ""} me-1`}
        />
        <span className="text-expand">{text}</span>
      </button>
      {item == "One" ? (
        <CollapseItemOne open={open} />
      ) : item == "Two" ? (
        <CollapseItemTwo open={open} />
      ) : item == "Three" ? (
        <CollapseItemThree open={open} />
      ) : (
        <CollapseItemFour open={open} />
      )}
    </div>
  );
};

export default ExpandCollapse;
