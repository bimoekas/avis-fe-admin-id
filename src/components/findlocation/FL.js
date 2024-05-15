import React from "react";
import { Link } from "react-router-dom";

export default class FL extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myBgHead = {
      backgroundColor: "#eaeaea",
    };
    const myLink = {
      color: "rgb(237, 85, 5)",
    };
    const myPara = {
      lineHeight: "1.5",
      fontSize: "15px",
      color: "#fff",
    };
    const myBorder = {
      borderBottom: "2px solid #eaeaea",
    };
    return (
      <>
        <section style={myBgHead}>
          <div className="container py-3">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="text-black">SEARCH AVIS CAR RENTAL LOCATIONS</h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container py-5">
            <div className="row justify-content-md-center">
              <div className="col-lg-6 col-sm-12">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control input-avis"
                    placeholder="Search by Airport, City, Zip, Address or Attraction"
                  />
                  <span
                    className="input-group-text input-avis"
                    id="basic-addon2"
                  >
                    <i className="fa fa-location-arrow"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center mt-4">
              <div className="col-lg-6 col-sm-12 text-center">
                <button
                  className="btn"
                  style={{
                    backgroundColor: "rgb(0, 40, 95)",
                    color: "#fff",
                    padding: "0px 50px",
                    height: "50px",
                  }}
                >
                  FIND A LOCATION
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-4">
            <div className="row py-3" style={myBorder}>
              <div className="col-sm-6">
                <h3 className="text-black">LOCATION INDEX</h3>
              </div>
              <div className="col-sm-6">
                <select className="form-control">
                  <option>Browse by Your Contry</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-4">
            <div className="row mt-3">
              <div className="col-sm-12">
                <h5 className="link-avis">
                  <b>USA</b>
                </h5>
              </div>
            </div>
            <div className="row mt-3" style={myBorder}>
              <div className="col-sm-4 mt-2">
                <a href="#" className="link-avis">
                  Albania
                </a>
              </div>
              <div className="col-sm-4 mt-2">
                <a href="#" className="link-avis">
                  Albania
                </a>
              </div>
              <div className="col-sm-4 mt-2">
                <a href="#" className="link-avis">
                  Albania
                </a>
              </div>
              <div className="col-sm-4 mt-2">
                <a href="#" className="link-avis">
                  Albania
                </a>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-12">
                <h5 className="link-avis">
                  <b>CANADA</b>
                </h5>
              </div>
            </div>
            <div className="row mt-3" style={myBorder}>
              <div className="col-sm-4 mt-2">
                <a href="#" className="link-avis">
                  Albania
                </a>
              </div>
              <div className="col-sm-4 mt-2">
                <a href="#" className="link-avis">
                  Albania
                </a>
              </div>
              <div className="col-sm-4 mt-2">
                <a href="#" className="link-avis">
                  Albania
                </a>
              </div>
              <div className="col-sm-4 mt-2">
                <a href="#" className="link-avis">
                  Albania
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
