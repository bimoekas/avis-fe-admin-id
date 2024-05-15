import React from "react";

export default class ContentOne extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myStyle = {
      // backgroundImage: "url("+publicUrl+"assets/images/resources/img-3.webp)",
      position: "relative",
    };
    const topRight = {
      position: "absolute",
      top: "10%",
      right: "5%",
      maxWidth: "50%",
    };
    const myBorder = {
      borderBottom: "5px solid rgb(0, 40, 95)",
      width: "40%",
    };
    return (
      <>
        {/* Start Slogan One */}
        <section>
          <div className="container my-4">
            <div className="row" style={myStyle}>
              <div className="col-xl-12 px-3">
                <img
                  src={publicUrl + "assets/images/resources/img-3.webp"}
                  className="img-fluid"
                  alt="img-3"
                />
              </div>
              <div className="col-xl-12 p-0" style={topRight}>
                <h4 className="mb-3 text-black">AVIS 360</h4>
                <p className="mb-3 text-black">
                  Car Rental with reduced excess or zero excess.
                </p>
                <button className="btn btn-avis">Learn More</button>
              </div>
            </div>
          </div>
        </section>
        {/* End Slogan One */}
      </>
    );
  }
}
