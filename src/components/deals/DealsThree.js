import React from "react";
import { Link } from "react-router-dom";

export default class DealsThree extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myStyle = {
      backgroundImage:
        "url(" + publicUrl + "assets/images/resources/partner-offer1.webp)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    const myIsi = {
      maxWidth: "30%",
      margin: "auto",
    };
    const myNav = {
      backgroundColor: "rgb(237, 85, 5)",
    };
    return (
      <>
        {/* Start Slogan One */}
        <section>
          <div className="container">
            <a href="#" className="row" style={myStyle}>
              <div className="col-xl-12 text-center pt-5 pb-5" style={myIsi}>
                <img
                  src={
                    publicUrl + "assets/images/resources/partner-offer2.avif"
                  }
                  className="img-fluid"
                />
                <button className="btn btn-dark mt-3">SAVE NOW</button>
              </div>
            </a>
          </div>
          <div className="container">
            <div className="row mt-4 border-bottom pb-3">
              <div className="col-lg-6 col-sm-12 ps-0">
                <h3 className="text-black">BEST CAR RENTAL DEALS IN THE US</h3>
              </div>
              <div className="col-lg-2 col-sm-4">
                <a
                  href={process.env.PUBLIC_URL + `/deals`}
                  className="text-black"
                >
                  US Offers
                </a>
              </div>
              <div className="col-lg-2 col-sm-4">
                <div className="dropdown">
                  <button
                    className="text-black dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    International
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href={process.env.PUBLIC_URL + `/international`}
                      >
                        All
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href={process.env.PUBLIC_URL + `/international`}
                      >
                        Australia
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href={process.env.PUBLIC_URL + `/international`}
                      >
                        New Zealand
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 pe-0">
                <a
                  href={process.env.PUBLIC_URL + `/partner-offers`}
                  className="text-black"
                >
                  Partner Offers
                </a>
              </div>
            </div>
          </div>
          <div className="container mt-4">
            <div className="row">
              <div className="col-xl-12 px-0">
                <div className="row">
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="blog-one__single">
                      <div className="blog-one__single-img">
                        <img
                          src={
                            publicUrl + "assets/images/resources/us-offer2.avif"
                          }
                          alt=""
                        />
                      </div>

                      <div className="blog-one__single-content text-center">
                        <p className="blog-one__single-content-tagline text-black">
                          Save up to 10% on rentals of 5 days or more{" "}
                        </p>
                        <div className="text" style={{ minHeight: "100px" }}>
                          <p>
                            Trust our rental cars to be ultra-clean and to have
                            a safe checkout experience.
                          </p>
                        </div>
                        <button className="btn btn-avis">Save Now</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="blog-one__single">
                      <div className="blog-one__single-img">
                        <img
                          src={
                            publicUrl + "assets/images/resources/us-offer3.avif"
                          }
                          alt=""
                        />
                      </div>

                      <div className="blog-one__single-content text-center">
                        <p className="blog-one__single-content-tagline text-black">
                          Save up to 10% on rentals of 5 days or more{" "}
                        </p>
                        <div className="text" style={{ minHeight: "100px" }}>
                          <p>
                            Trust our rental cars to be ultra-clean and to have
                            a safe checkout experience.
                          </p>
                        </div>
                        <button className="btn btn-avis">Save Now</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="blog-one__single">
                      <div className="blog-one__single-img">
                        <img
                          src={
                            publicUrl + "assets/images/resources/us-offer3.avif"
                          }
                          alt=""
                        />
                      </div>

                      <div className="blog-one__single-content text-center">
                        <p className="blog-one__single-content-tagline text-black">
                          Save up to 10% on rentals of 5 days or more{" "}
                        </p>
                        <div className="text" style={{ minHeight: "100px" }}>
                          <p>
                            Trust our rental cars to be ultra-clean and to have
                            a safe checkout experience.
                          </p>
                        </div>
                        <button className="btn btn-avis">Save Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Slogan One */}
      </>
    );
  }
}
