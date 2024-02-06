import React from "react";
import { Link } from "react-router-dom";

export default class AP extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myBg = {
      backgroundImage:
        "url(" + publicUrl + "assets/images/resources/avis-prefered1.avif)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "300px",
    };
    return (
      <>
        <section style={myBg}>
          <div className="container">
            <div className="row">
              <div className="col-sm-8 mt-5">
                <h1 className="text-white text-up">
                  Welcome to the Avis Preferred Program
                </h1>
                <p className="text-avis text-white">
                  Explore Preferred benefits and perks.
                </p>
              </div>
              <div className="col-sm-4 text-end mt-5">
                <button className="btn btn-avis py-2 text-up">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-3">
            <div
              className="row p-5"
              style={{ boxShadow: "1px 1px 10px 1px #3e3e3e" }}
            >
              <div className="col-sm-4 text-center">
                <h3 className="text-white text-up link-avis fw-normal">
                  EARN POINTS
                </h3>
                <p className="text-avis mt-2">
                  Earn Avis Preferred Points for every qualifying dollar you
                  spend.
                </p>
              </div>
              <div className="col-sm-4 text-center">
                <h3 className="text-white text-up link-avis fw-normal">
                  EARN POINTS
                </h3>
                <p className="text-avis mt-2">
                  Earn Avis Preferred Points for every qualifying dollar you
                  spend.
                </p>
              </div>
              <div className="col-sm-4 text-center">
                <h3 className="text-white text-up link-avis fw-normal">
                  EARN POINTS
                </h3>
                <p className="text-avis mt-2">
                  Earn Avis Preferred Points for every qualifying dollar you
                  spend.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="text-white link-avis fw-normal">
                  How to Earn Points
                </h3>
                <p className="text-avis mt-2">
                  Accumulate points for every qualifying dollar you spend. Plus,
                  accelerate your earnings when you get to a higher level of
                  membership.
                </p>
                <p className="text-avis mt-2">
                  Select a membership below to learn more.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <img
                        className="px-5 py-4"
                        style={{ maxWidth: "300px" }}
                        src={
                          publicUrl +
                          "assets/images/resources/avis-prefered2.png"
                        }
                      />
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      <img
                        className="px-5 py-4"
                        style={{ maxWidth: "300px" }}
                        src={
                          publicUrl +
                          "assets/images/resources/avis-prefered2.png"
                        }
                      />
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      <img
                        className="px-5 py-4"
                        style={{ maxWidth: "300px" }}
                        src={
                          publicUrl +
                          "assets/images/resources/avis-prefered2.png"
                        }
                      />
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="row mt-2">
                      <div className="col-3">
                        <img
                          className="img-fluid"
                          src={
                            publicUrl +
                            "assets/images/resources/avis-prefered.avif"
                          }
                        />
                        <table className="table text-center w-100 mt-2">
                          <tbody>
                            <tr>
                              <th className="bg-light">
                                FOR $1 SPENT ON RENTAL
                              </th>
                              <th className="link-avis">1 Point </th>
                            </tr>
                            <tr>
                              <th className="bg-light">
                                FOR $1 SPENT ON ACCESSORY
                              </th>
                              <th className="link-avis">2 Point </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-9">
                        <p className="fw-bold">
                          As a Preferred Member, you earn a minimum of 100
                          points every rental.
                        </p>
                        <p>
                          <span className="link-avis fa fa-box me-2"></span>
                          Redeem points for rentals and accessories.
                        </p>
                        <p>
                          <span className="link-avis fa fa-box me-2"></span>
                          Redeem points for rentals and accessories.
                        </p>
                        <p>
                          <span className="link-avis fa fa-box me-2"></span>
                          Redeem points for rentals and accessories.
                        </p>
                        <p>
                          <span className="link-avis fa fa-box me-2"></span>
                          Redeem points for rentals and accessories.
                        </p>
                        <p className="fw-bold mt-2">
                          Plus, earn 100 bonus points when you rent within the
                          first three months of joining.
                        </p>
                        <p>
                          <button className="btn btn-avis py-2 mt-2">
                            Enroll Now
                          </button>
                        </p>
                        <p>
                          <a href="#" className="link-avis">
                            Terms and Conditions
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-12 py-2 px-4 bg-primary text-white text-center">
                        Every Avis Preferred rental gets you closer to a higher
                        level of membership with even greater rental car
                        rewards.
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="row mt-2">
                      <div className="col-9">
                        <p className="fw-bold">
                          As a Preferred Member, you earn a minimum of 100
                          points every rental.
                        </p>
                        <p>
                          <span className="link-avis fa fa-box me-2"></span>
                          Redeem points for rentals and accessories.
                        </p>
                        <p>
                          <span className="link-avis fa fa-box me-2"></span>
                          Redeem points for rentals and accessories.
                        </p>
                        <p>
                          <span className="link-avis fa fa-box me-2"></span>
                          Redeem points for rentals and accessories.
                        </p>
                        <p>
                          <span className="link-avis fa fa-box me-2"></span>
                          Redeem points for rentals and accessories.
                        </p>
                        <p className="fw-bold mt-2">
                          Plus, earn 100 bonus points when you rent within the
                          first three months of joining.
                        </p>
                        <p>
                          <button className="btn btn-avis py-2 mt-2">
                            Enroll Now
                          </button>
                        </p>
                        <p>
                          <a href="#" className="link-avis">
                            Terms and Conditions
                          </a>
                        </p>
                      </div>
                      <div className="col-3">
                        <img
                          className="img-fluid"
                          src={
                            publicUrl +
                            "assets/images/resources/avis-prefered.avif"
                          }
                        />
                        <table className="table text-center w-100 mt-2">
                          <tbody>
                            <tr>
                              <th className="bg-light">
                                FOR $1 SPENT ON RENTAL
                              </th>
                              <th className="link-avis">1 Point </th>
                            </tr>
                            <tr>
                              <th className="bg-light">
                                FOR $1 SPENT ON ACCESSORY
                              </th>
                              <th className="link-avis">2 Point </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-12 py-2 px-4 bg-primary text-white text-center">
                        Every Avis Preferred rental gets you closer to a higher
                        level of membership with even greater rental car
                        rewards.
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div className="row mt-2">
                      <div className="col-3">
                        <img
                          className="img-fluid"
                          src={
                            publicUrl +
                            "assets/images/resources/avis-prefered.avif"
                          }
                        />
                        <table className="table text-center w-100 mt-2">
                          <tbody>
                            <tr>
                              <th className="bg-light">
                                FOR $1 SPENT ON RENTAL
                              </th>
                              <th className="link-avis">1 Point </th>
                            </tr>
                            <tr>
                              <th className="bg-light">
                                FOR $1 SPENT ON ACCESSORY
                              </th>
                              <th className="link-avis">2 Point </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-9">
                        <p className="fw-bold">
                          As a Preferred Member, you earn a minimum of 100
                          points every rental.
                        </p>
                        <p>
                          <span className="link-avis fa fa-box me-2"></span>
                          Redeem points for rentals and accessories.
                        </p>
                        <p>
                          <span className="link-avis fa fa-box me-2"></span>
                          Redeem points for rentals and accessories.
                        </p>
                        <p>
                          <span className="link-avis fa fa-box me-2"></span>
                          Redeem points for rentals and accessories.
                        </p>
                        <p>
                          <span className="link-avis fa fa-box me-2"></span>
                          Redeem points for rentals and accessories.
                        </p>
                        <p className="fw-bold mt-2">
                          Plus, earn 100 bonus points when you rent within the
                          first three months of joining.
                        </p>
                        <p>
                          <button className="btn btn-avis py-2 mt-2">
                            Enroll Now
                          </button>
                        </p>
                        <p>
                          <a href="#" className="link-avis">
                            Terms and Conditions
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-12 py-2 px-4 bg-primary text-white text-center">
                        Every Avis Preferred rental gets you closer to a higher
                        level of membership with even greater rental car
                        rewards.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="text-black text-up">
                  Redeem Points for rewards
                </h3>
                <p className="text-avis mt-2">
                  Redeem points for rental day rewards and accessories.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-6 text-center">
                <h5 className="text-black text-up">REWARD DAYS STARTS</h5>
                <h4 className="text-white text-up link-avis mt-2">
                  700 POINTS
                </h4>
                <h5 className="text-black text-up mt-2">
                  WITH NO BLACKOUT DATES
                </h5>
              </div>
              <div className="col-sm-6 text-center">
                <h5 className="text-black text-up">REWARD DAYS STARTS</h5>
                <h4 className="text-white text-up link-avis mt-2">
                  700 POINTS
                </h4>
                <h5 className="text-black text-up mt-2">
                  WITH NO BLACKOUT DATES
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12">
                <p className="text-black fw-bold">
                  Reward days are grouped into four levels, based on the
                  standard base rate*, car class and location of your rental.
                </p>
                <p className="text-black fw-normal">
                  The table below indicates the points required per day for
                  reward days.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12">
                <table className="table text-center">
                  <thead className="table-light">
                    <tr>
                      <th>REWARD DAY LEVEL </th>
                      <th>STANDARD BASE RATE* </th>
                      <th>POINTS PER DAY </th>
                    </tr>
                  </thead>
                  <tbody className="fw-normal">
                    <tr>
                      <th>LEVEL 1 </th>
                      <th className="link-avis">UP TO $50 </th>
                      <th className="link-avis">700 </th>
                    </tr>
                    <tr>
                      <th>LEVEL 1 </th>
                      <th className="link-avis">UP TO $50 </th>
                      <th className="link-avis">700 </th>
                    </tr>
                    <tr>
                      <th>LEVEL 1 </th>
                      <th className="link-avis">UP TO $50 </th>
                      <th className="link-avis">700 </th>
                    </tr>
                    <tr>
                      <th>LEVEL 1 </th>
                      <th className="link-avis">UP TO $50 </th>
                      <th className="link-avis">700 </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-5 mb-3">
            <div className="row">
              <div className="col-sm-8">
                <p className="text-black fw-normal text-avis">
                  * Standard base rate does not include any Avis Worldwide
                  Discount (AWD), special rates, or any other offers.{" "}
                </p>
                <p className="text-black fw-normal text-avis">
                  * All dollar values shown are in US Dollars.{" "}
                </p>
              </div>
              <div className="col-sm-4 text-end">
                <button className="btn btn-avis py-2 text-up">
                  Enroll in Avis Preferre
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
