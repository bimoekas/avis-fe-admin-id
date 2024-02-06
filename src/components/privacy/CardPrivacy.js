import React from "react";
import { Link } from "react-router-dom";

const CardPrivacy = (props) => {
  const handleClickScroll = (direct) => {
    const element = document.getElementById(direct);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="col-md-4 text-center mb-4">
      <Link
        className="text-secondary"
        onClick={(e) => {
          e.preventDefault();
          if (props.setOpenExpand) {
            props.setOpenExpand(false);
          }
          handleClickScroll(props.direct);
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/icon/${props.image}`}
          alt={props.image}
        />
        <p>{props.text}</p>
      </Link>
    </div>
  );
};

export default CardPrivacy;
