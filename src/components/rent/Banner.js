import React from "react";

const Banner = ({ rent, image, type }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let bannerImage =
    image == ""
      ? "#ed5505"
      : "url(" + publicUrl + "assets/cars-budget/" + image + ")";
  return (
    <div
      className="p-5"
      style={{
        background: `${bannerImage}`,
        position: "relative",
        height: "300px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container pt-5 pb-5">
        <h1 className={`${type}`}>{rent}</h1>
      </div>
      {image == "" ? (
        <img
          src={`${process.env.PUBLIC_URL}/assets/cars-budget/car-sitemap.webp`}
          alt="car"
          className="carSiteMap"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Banner;
