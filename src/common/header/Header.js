import React from "react";

const Header = (props) => {
  return (
    <div className="container py-5">
      <h1 className="text-dark">{props.title}</h1>
      <p className="link-avis">{props.subtitle}</p>
    </div>
  );
};

export default Header;
