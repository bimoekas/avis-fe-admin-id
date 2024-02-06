import React from "react";
import { Link } from "react-router-dom";

export default class OWCR extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myStyle = {
      backgroundImage:
        "url(" + publicUrl + "assets/images/resources/onewaycarrental1.webp)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "500px",
    };
    return (
      <>
        <section className="border-top border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb text-avis py-3">
                    <li className="breadcrumb-item">Products & Services</li>
                    <li className="breadcrumb-item">Services</li>
                    <li
                      className="breadcrumb-item link-avis"
                      aria-current="page"
                    >
                      One-Way Car Rental
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="banner-one" style={myStyle}>
          <div className="banner-one__inner py-4">
            <div className="container">
              <div className="banner-one__content text-center">
                <div className="title">
                  <h3 className="text-white text-up">
                    {" "}
                    One-Way Car Rental From Avis
                  </h3>
                </div>

                <div className="banner-one__tab-box">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="banner-one__tab tabs-box">
                        <div className="tabs-content">
                          <div className="tab active-tab" id="places">
                            <div className="banner-one__tab-content-item">
                              <div className="banner-one__tab-content-places">
                                <div className="row">
                                  <div className="col-xl-12">
                                    <div className="banner-one__tab-content-places-form">
                                      <form
                                        action="#"
                                        className="comment-one__form contact-form-validated"
                                        novalidate="novalidate"
                                      >
                                        <ul>
                                          <li>
                                            <div className="comment-form__input-box">
                                              <div className="icon">
                                                <span className="fas fa-keyboard"></span>
                                              </div>
                                              <input
                                                type="text"
                                                placeholder="Enter your pick-up location or zip code"
                                                name="name"
                                              />
                                            </div>
                                          </li>
                                          <li>
                                            <div className="comment-form__input-box">
                                              <input
                                                type="date"
                                                placeholder="Location"
                                                name="name"
                                              />
                                            </div>
                                          </li>

                                          <li>
                                            <div className="comment-form__input-box clearfix">
                                              <input
                                                type="time"
                                                placeholder="Location"
                                                name="name"
                                              />
                                            </div>
                                          </li>
                                        </ul>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="banner-one__categories">
                  <div className="title">
                    <button className="btn btn-avis-black" type="submit">
                      Select My Car
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-2">
            <div className="row py-3">
              <div className="col-12">
                <h3 className="text-up text-black fw-normal">
                  Want to go from A to B without having to double back to where
                  you started, simply to return your hire car?
                </h3>
                <p className="text-avis mt-2">
                  Hire a car in and drop it off in a different location that
                  suits your schedule.
                </p>
                <p className="text-avis mt-2">
                  One-way car rental with Avis makes it easy to go from A to B
                  without driving full circle.
                </p>
                <p className="text-avis mt-2">
                  Simply, pick up your vehicle from one of our offices and drop
                  it off at another location at the end of your trip.
                </p>
                <p className="text-avis mt-2">
                  It’s quick, easy and efficient, and it means you can plan your
                  journey exactly as you please.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-5">
            <div className="row py-3">
              <div className="col-12">
                <h3 className="text-up text-black fw-normal">
                  Why choose Avis for one-way car hire?
                </h3>
                <p className="text-avis mt-2">
                  The ticket to ultimate travel freedom, our one-way car hire is
                  refreshingly easy to book.
                </p>
                <p className="text-avis mt-2">
                  With a wide range of routes available across the continent,
                  you can:
                </p>
                <p className="text-avis mt-2">
                  • Collect your rental vehicle from one of our many offices
                  across Europe or other countries, and return it to us at your
                  final destination.
                </p>
                <p className="text-avis mt-2">
                  • Drop off your hire car at another office in the same city,
                  somewhere further afield in the same country, or even at one
                  of our offices in a different country.
                </p>
                <p className="text-avis mt-2">
                  Just specify your destination when you make your reservation,
                  one way rental will be included if the location offers such
                  service.
                </p>
                <p className="text-avis mt-2">
                  We have car hire locations at nearly every major airport on
                  the continent, as well as at most central train stations,
                  ferry ports and in convenient downtown locations too. Many of
                  our offices offer a 24-hour drop-off facility, which makes a
                  one-way car hire hassle-free and very user-friendly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
