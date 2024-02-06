import React from "react";
import { Link } from "react-router-dom";

export default class HeroOne extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        {/* Start Banner One */}
        <section
          className="banner-one"
          style={{ backgroundImage: "linear-gradient(#be0026, #9b001e)" }}
        >
          <div className="banner-one__inner py-4">
            <div className="container">
              <div className="banner-one__content text-center">
                <div className="title">
                  <h3 style={{ color: "#fff" }}>
                    FIND YOUR BEST CAR RENTAL WITH AVIS
                  </h3>
                </div>

                {/* Start Banner One Tab Box */}
                <div className="banner-one__tab-box">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="banner-one__tab tabs-box">
                        <div className="tabs-content">
                          {/* Start Tab */}
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
                                                className="form-control"
                                                placeholder="Enter your pick-up location or zip code"
                                                style={{ height: "50px" }}
                                              />
                                            </div>
                                          </li>
                                          <li>
                                            <div className="comment-form__input-box">
                                              <input
                                                type="date"
                                                className="form-control"
                                                style={{ height: "50px" }}
                                              />
                                            </div>
                                          </li>

                                          <li>
                                            <div className="comment-form__input-box clearfix">
                                              <input
                                                type="time"
                                                className="form-control"
                                                style={{ height: "50px" }}
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
                          {/* End Tab */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Banner One Tab Box Tab Box */}

                <div className="banner-one__categories">
                  <div className="title">
                    {/* <h4>Just looking around ? Use quick search by category :</h4> */}
                    <button className="btn btn-avis-black" type="submit">
                      Select My Car
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Banner One */}
      </>
    );
  }
}
