import React from "react";
import { Link } from "react-router-dom";

export default class FooterTwo extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        {/* Start Footer One */}
        <footer class="footer-one footer-one--two">
          <div class="footer-one__top">
            <div class="container">
              <div class="row">
                <div class="col-xl-12">
                  <div class="footer-one__top-inner">
                    <div class="row">
                      {/* Start Footer Widget Column */}
                      <div
                        class="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div class="footer-widget__column footer-widget__about">
                          <div class="footer-widget__about-logo">
                            <a href="index.html">
                              <img
                                src={
                                  publicUrl +
                                  "assets/images/resources/footer-logo.png"
                                }
                                alt=""
                              />
                            </a>
                          </div>
                          <ul class="footer-widget__about-contact-info">
                            <li>
                              <div class="icon">
                                <span class="fa fa-clock"></span>
                              </div>
                              <div class="text">
                                <p>
                                  Open Hours of Government: <br /> Mon - Fri:
                                  8.00 am. - 6.00 pm.
                                </p>
                              </div>
                            </li>

                            <li>
                              <div class="icon">
                                <span class="fa fa-map-marker"></span>
                              </div>
                              <div class="text">
                                <p> 13/A, Miranda Halim City.</p>
                              </div>
                            </li>

                            <li>
                              <div class="icon">
                                <span class="fa fa-phone rotate"></span>
                              </div>
                              <div class="text">
                                <p>
                                  <a href="tel:123456789">099 695 695 35</a>
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* End Footer Widget Column */}

                      {/* Start Footer Widget Column */}
                      <div
                        class="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div class="footer-widget__column footer-widget__services">
                          <h2 class="footer-widget__title">Services</h2>
                          <ul class="footer-widget__services-list">
                            <li class="footer-widget__services-list-item">
                              <Link to={process.env.PUBLIC_URL + `/`}>
                                Why choose us
                              </Link>
                            </li>
                            <li class="footer-widget__services-list-item">
                              <Link to={process.env.PUBLIC_URL + `/`}>
                                Our solutions
                              </Link>
                            </li>
                            <li class="footer-widget__services-list-item">
                              <Link to={process.env.PUBLIC_URL + `/`}>
                                Partners
                              </Link>
                            </li>
                            <li class="footer-widget__services-list-item">
                              <Link to={process.env.PUBLIC_URL + `/`}>
                                Core values
                              </Link>
                            </li>
                            <li class="footer-widget__services-list-item">
                              <Link to={process.env.PUBLIC_URL + `/`}>
                                Our projects
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* End Footer Widget Column */}

                      {/* Start Footer Widget Column */}
                      <div
                        class="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <div class="footer-widget__column footer-widget__link">
                          <h2 class="footer-widget__title">Quick Link</h2>
                          <ul class="footer-widget__link-list">
                            <li class="footer-widget__link-list-item">
                              <Link to={process.env.PUBLIC_URL + `/`}>
                                Residents
                              </Link>
                            </li>
                            <li class="footer-widget__link-list-item">
                              <Link to={process.env.PUBLIC_URL + `/`}>
                                Business
                              </Link>
                            </li>
                            <li class="footer-widget__link-list-item">
                              <Link to={process.env.PUBLIC_URL + `/`}>
                                Online Service
                              </Link>
                            </li>
                            <li class="footer-widget__link-list-item">
                              <Link to={process.env.PUBLIC_URL + `/`}>
                                Visiting
                              </Link>
                            </li>
                            <li class="footer-widget__link-list-item">
                              <Link to={process.env.PUBLIC_URL + `/`}>
                                Employment
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* End Footer Widget Column */}

                      {/* Start Footer Widget Column */}
                      <div
                        class="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp"
                        data-wow-delay="0.7s"
                      >
                        <div class="footer-widget__column footer-widget__map">
                          <h2 class="footer-widget__title">City Map</h2>
                          <div class="footer-widget__map-box">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                              class="footer-widget-map__one"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                      {/* End Footer Widget Column */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Start Footer One Bottom */}
          <div class="footer-one__bottom clearfix">
            <div class="container">
              <div class="row">
                <div class="col-xl-12">
                  <div class="footer-one__bottom-inner text-center">
                    <div class="footer-one__bottom-text">
                      <p>
                        Copyright © 2022{" "}
                        <Link to={process.env.PUBLIC_URL + `/`}>Korax.</Link>{" "}
                        All Rights Reserved.
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
