import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default class FooterOne extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        {/* Start Footer One */}
        <footer className="footer-one">
          <div className="footer-one__top">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="footer-one__top-inner">
                    <div className="row">
                      <div
                        className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="footer-widget__column footer-widget__services">
                          <h2 className="footer-widget__title">
                            MILES POINTS PARTNERS
                          </h2>
                          <ul className="footer-widget__services-list">
                            <li className="footer-widget__services-list-item">
                              <Link to={`${process.env.PUBLIC_URL}/program`}>
                                Qatar Airways
                              </Link>
                            </li>
                            <li className="footer-widget__services-list-item">
                              <Link to={`${process.env.PUBLIC_URL}/program`}>
                                Singapore Airline
                              </Link>
                            </li>
                            <li className="footer-widget__services-list-item">
                              <Link to={`${process.env.PUBLIC_URL}/program`}>
                                Master Card
                              </Link>
                            </li>
                            <li className="footer-widget__services-list-item">
                              <Link to={`${process.env.PUBLIC_URL}/program`}>
                                Visa Card
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="footer-widget__column footer-widget__services">
                          <h2 className="footer-widget__title">COMPANY INFO</h2>
                          <ul className="footer-widget__services-list">
                            <li className="footer-widget__services-list-item">
                              <Link to={`${process.env.PUBLIC_URL}/about-avis`}>
                                About Avis
                              </Link>
                            </li>
                            <li className="footer-widget__services-list-item">
                              <Link to={`${process.env.PUBLIC_URL}/sitemap`}>
                                Site Map
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="footer-widget__column footer-widget__services">
                          <h2 className="footer-widget__title">
                            SECURITY &amp; PRIVACY
                          </h2>
                          <ul className="footer-widget__services-list">
                            <li className="footer-widget__services-list-item">
                              <Link
                                to={`${process.env.PUBLIC_URL}/terms-of-use`}
                              >
                                Term of Use
                              </Link>
                            </li>
                            <li className="footer-widget__services-list-item">
                              <Link
                                to={`${process.env.PUBLIC_URL}/privacy-notice`}
                              >
                                Privacy Notice
                              </Link>
                            </li>
                            <li className="footer-widget__services-list-item">
                              <Link
                                to={`${process.env.PUBLIC_URL}/copyright-notice`}
                              >
                                Copyright Notices
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Start Footer One Bottom */}
          <div
            className="footer-one__bottom clearfix"
            style={{ backgroundColor: "#3a3a3a" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="footer-one__bottom-inner text-center">
                    <div className="footer-one__bottom-text">
                      <p>
                        Copyright © 2022{" "}
                        <Link to={process.env.PUBLIC_URL + `/`}>Avis.</Link> All
                        Rights Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Footer One Bottom */}
        </footer>
        {/* End Footer One */}
      </>
    );
  }
}
