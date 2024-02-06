import React from "react";
import { Link } from "react-router-dom";

export default class PS extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myStyle = {
      backgroundImage:
        "url(" + publicUrl + "assets/images/resources/productservice.avif)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "250px",
    };
    const myLink = {
      color: "rgb(237, 85, 5)",
    };
    const myPara = {
      lineHeight: "1.5",
      fontSize: "15px",
      color: "#000",
    };
    const myHead = {
      fontSize: "18px",
    };
    const myCard = {
      backgroundColor: "#fff",
    };
    const myParas = {
      lineHeight: "1.5",
      height: "150px",
      fontSize: "15px",
      color: "#000",
    };
    return (
      <>
        <section style={myStyle}>
          <div className="container pt-5">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="text-white">Car Rental Products and Services</h1>
                <p className="text-white">
                  Learn more about Avis products that make your rental
                  experience easier and fun.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ backgroundColor: "#eaeaea" }}>
          <div className="container">
            <div className="row pt-3">
              <div className="col-lg-4 col-sm-6 pe-5 pb-5">
                <Link
                  to={`${process.env.PUBLIC_URL}/productservice/usa`}
                  className="row"
                  style={myCard}
                >
                  <div className="col-12 p-3">
                    <h5 className="mb-2 text-black">
                      Products & Services For Rentals in the USA and Canada
                    </h5>
                    <label
                      className="text-avis"
                      style={{ minHeight: "150px", cursor: "pointer" }}
                    >
                      Discover specific products and services that will enhance
                      your Avis car rental experience in the USA and Canada.
                    </label>
                  </div>
                  <div className="col-12 pb-3 pe-3 text-end">
                    <label className="link-avis">Learn More </label>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6 pe-5 pb-5">
                <Link
                  to={`${process.env.PUBLIC_URL}/productservice/additional-driver`}
                  className="row"
                  style={myCard}
                >
                  <div className="col-12 p-3">
                    <h5 className="mb-2 text-black">Additional drivers</h5>
                    <label
                      className="text-avis"
                      style={{ minHeight: "150px", cursor: "pointer" }}
                    >
                      Share the drive with someone else to ease those long hours
                      on the road. Adding more drivers means they're covered to
                      share the reins under your agreement.
                    </label>
                  </div>
                  <div className="col-12 pb-3 pe-3 text-end">
                    <label className="link-avis">Learn More </label>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6 pe-5 pb-5">
                <Link
                  to={`${process.env.PUBLIC_URL}/productservice/child-seats`}
                  className="row"
                  style={myCard}
                >
                  <div className="col-12 p-3">
                    <h5 className="mb-2 text-black">Child seats</h5>
                    <label
                      className="text-avis"
                      style={{ minHeight: "150px", cursor: "pointer" }}
                    >
                      We stock quality baby, infant and child seats. These are
                      subject to availability at counter.
                    </label>
                  </div>
                  <div className="col-12 pb-3 pe-3 text-end">
                    <label className="link-avis">Learn More </label>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6 pe-5 pb-5">
                <Link
                  to={`${process.env.PUBLIC_URL}/productservice/fuel-option`}
                  className="row"
                  style={myCard}
                >
                  <div className="col-12 p-3">
                    <h5 className="mb-2 text-black">Fuel options</h5>
                    <label
                      className="text-avis"
                      style={{ minHeight: "150px", cursor: "pointer" }}
                    >
                      Running low on fuel or time? Avis takes care of all your
                      refuelling needs ... if you want us to
                    </label>
                  </div>
                  <div className="col-12 pb-3 pe-3 text-end">
                    <label className="link-avis">Learn More </label>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6 pe-5 pb-5">
                <Link
                  to={`${process.env.PUBLIC_URL}/productservice/onewaycarrental`}
                  className="row"
                  style={myCard}
                >
                  <div className="col-12 p-3">
                    <h5 className="mb-2 text-black">One-Way Rental</h5>
                    <label
                      className="text-avis"
                      style={{ minHeight: "150px", cursor: "pointer" }}
                    >
                      Go from A to B without having to double back to where you
                      started, simply to return your hire car.
                    </label>
                  </div>
                  <div className="col-12 pb-3 pe-3 text-end">
                    <label className="link-avis">Learn More </label>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
