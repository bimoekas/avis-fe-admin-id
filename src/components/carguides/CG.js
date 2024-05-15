import React from "react";
import { Link } from "react-router-dom";

export default class CG extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myBg = {
      backgroundImage:
        "url(" + publicUrl + "assets/images/resources/car-guide1.avif)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "250px",
    };
    const myText = {
      color: "#000",
    };
    const myLink = {
      color: "rgb(237, 85, 5)",
    };
    const myPara = {
      lineHeight: "1.5",
      fontSize: "15px",
    };
    return (
      <>
        {/* Start Slogan One */}
        <section className="container-fluid mt-5" style={myBg}>
          <div className="row justify-content-md-center">
            <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
              <h1 className="ms-5 ps-4 text-up text-white">Avis Car Guide</h1>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#eaeaea" }}>
          <div className="container">
            <div className="row pt-3">
              <div className="col-lg-3">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Showing:
                  </span>
                  <select className="form-control">
                    <option>All Vehicles</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon2">
                    View Cars in:
                  </span>
                  <select className="form-control">
                    <option>U.S.A.</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "rgb(210, 210, 210)" }}>
          <div className="container">
            <div className="row pt-3 pb-3">
              <div className="col-lg-6 col-sm-12 mb-4">
                <div className="col-sm-12" style={{ backgroundColor: "#fff" }}>
                  <div className="row py-4 px-2">
                    <div className="col-sm-6">
                      <p style={{ fontSize: "20px" }}>Minivan</p>
                      <p style={{ fontSize: "15px" }}>
                        Chrysler Pacifica or similar{" "}
                      </p>
                    </div>
                    <div className="col-sm-6 text-end">
                      <button className="link-avis">Vehicle Info </button>
                    </div>
                  </div>
                  <div className="row px-2">
                    <img
                      className="col-sm-12"
                      src={publicUrl + "assets/images/resources/cars1.avif"}
                    />
                  </div>
                  <div className="row px-2 pb-3">
                    <div className="col-sm-12 text-center">
                      <a href="#">
                        <button className="btn btn-avis align-self-center">
                          Reserve
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 mb-4">
                <div className="col-sm-12" style={{ backgroundColor: "#fff" }}>
                  <div className="row py-4 px-2">
                    <div className="col-sm-6">
                      <p style={{ fontSize: "20px" }}>Minivan</p>
                      <p style={{ fontSize: "15px" }}>
                        Chrysler Pacifica or similar{" "}
                      </p>
                    </div>
                    <div className="col-sm-6 text-end">
                      <button className="link-avis">Vehicle Info </button>
                    </div>
                  </div>
                  <div className="row px-2">
                    <img
                      className="col-sm-12"
                      src={publicUrl + "assets/images/resources/cars1.avif"}
                    />
                  </div>
                  <div className="row px-2 pb-3">
                    <div className="col-sm-12 text-center">
                      <a href="#">
                        <button className="btn btn-avis align-self-center">
                          Reserve
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 mb-4">
                <div className="col-sm-12" style={{ backgroundColor: "#fff" }}>
                  <div className="row py-4 px-2">
                    <div className="col-sm-6">
                      <p style={{ fontSize: "20px" }}>Minivan</p>
                      <p style={{ fontSize: "15px" }}>
                        Chrysler Pacifica or similar{" "}
                      </p>
                    </div>
                    <div className="col-sm-6 text-end">
                      <button className="link-avis">Vehicle Info </button>
                    </div>
                  </div>
                  <div className="row px-2">
                    <img
                      className="col-sm-12"
                      src={publicUrl + "assets/images/resources/cars1.avif"}
                    />
                  </div>
                  <div className="row px-2 pb-3">
                    <div className="col-sm-12 text-center">
                      <a href="#">
                        <button className="btn btn-avis align-self-center">
                          Reserve
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container pt-3">
            <div className="row">
              <div className="col-sm-12">
                <p
                  className="mb-3 text-up text-black"
                  style={{ fontSize: "25px" }}
                >
                  AVIS CAR RENTAL OPTIONS
                </p>
                <p className="mb-3 text-avis">
                  No matter your circumstances, you can find affordable car
                  rental options at Avis. Sedans are always a great option,
                  especially for saving on gas, but sometimes you need more
                  storage room, comfort, seating, power—and the list goes on.
                  Browse through rental car classes like:
                </p>
                <ol className="ps-3 mb-3 text-avis">
                  <li>
                    <Link
                      to={`${process.env.PUBLIC_URL}/suv-rental`}
                      className="link-avis"
                    >
                      SUVs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${process.env.PUBLIC_URL}/van-rental`}
                      className="link-avis"
                    >
                      Vans
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${process.env.PUBLIC_URL}/pickup-truck-rent`}
                      className="link-avis"
                    >
                      Pickup trucks
                    </Link>
                  </li>
                </ol>
                <p className="mb-3 text-avis">
                  Choose from various rental car types with confidence knowing
                  that Avis regularly adds new vehicles to the fleet and
                  meticulously maintains every car. Avis offers a wide variety
                  of rental car categories; browse our Chevrolet lineup to see
                  many of the exciting rental options available to you. Find the
                  best of the best in our luxury car rentals, which frequently
                  feature premium options like heated seats and state-of-the-art
                  infotainment systems. Available vehicles from our rental car
                  list vary by location and reservation date, but the sooner you
                  book, the more options you’ll have. Discover the available
                  cars in your area by adding in your destination, pickup date,
                  and return date. Browse and book a car rental with Avis online
                  today.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End Slogan One */}
      </>
    );
  }
}
