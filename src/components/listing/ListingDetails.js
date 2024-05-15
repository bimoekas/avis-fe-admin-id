import React from "react";
import { Link } from "react-router-dom";
import ListingLocationContacts from "../sidebar/ListingLocationContacts";
import ListingSimilarListings from "../sidebar/ListingSimilarListings";
import ListingTags from "../sidebar/ListingTags";
import ListingWorkingHours from "../sidebar/ListingWorkingHours";

export default class ListingDetails extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".thm-owl__carousel").length) {
      $(".thm-owl__carousel").owlCarousel({
        loop: true,
        autoplay: false,
        margin: 30,
        nav: false,
        dots: false,
        smartSpeed: 500,
        autoplayTimeout: 10000,
        navText: [
          '<span className="fa fa-angle-left"></span>',
          '<span className="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 2,
          },
          1200: {
            items: 2,
          },
        },
      });
    }

    if ($(".progress-levels .progress-box .bar-fill").length) {
      $(".progress-box .bar-fill").each(
        function () {
          $(".progress-box .bar-fill").appear(function () {
            var progressWidth = $(this).attr("data-percent");
            $(this).css("width", progressWidth + "%");
          });
        },
        {
          accY: 0,
        }
      );
    }

    if ($(".count-box").length) {
      $(".count-box").appear(
        function () {
          var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

          if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
              countNum: $t.find(".count-text").text(),
            }).animate(
              {
                countNum: n,
              },
              {
                duration: r,
                easing: "linear",
                step: function () {
                  $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function () {
                  $t.find(".count-text").text(this.countNum);
                },
              }
            );
          }
        },
        {
          accY: 0,
        }
      );
    }
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        {/* Start Listings Details Page */}
        <section className="listings-details-page">
          <div className="container">
            <div className="row">
              {/* Start Listings Details Page Content */}
              <div className="col-xl-8 col-lg-7">
                <div className="listings-details-page__content">
                  <div className="listings-details-page__content-img1">
                    <img
                      src={
                        publicUrl +
                        "assets/images/resources/listings_details-img1.jpg"
                      }
                      alt="#"
                    />
                  </div>

                  <div className="listings-details-page__content-text-box1">
                    <h3>Description</h3>
                    <p className="text1">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>

                    <p className="text2">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy. Various versions have evolved over the
                      years, sometimes by accident, sometimes on purpose
                      (injected humour and the like).
                    </p>

                    <div className="btn-box">
                      <Link
                        to={process.env.PUBLIC_URL + `/`}
                        className="thm-btn"
                      >
                        Visit Website
                      </Link>
                    </div>
                  </div>

                  <div className="listings-details-page__content-listing-features">
                    <h3>Listing Features</h3>
                    <ul>
                      <li>
                        <div className="inner">
                          <div className="icon">
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              {" "}
                              <span className="icon-wifi"></span>
                            </Link>
                          </div>

                          <div className="text">
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              {" "}
                              Free WiFi
                            </Link>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="icon">
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              {" "}
                              <span className="icon-parking"></span>
                            </Link>
                          </div>

                          <div className="text">
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              {" "}
                              Free Parking
                            </Link>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="icon">
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              {" "}
                              <span className="icon-love"></span>
                            </Link>
                          </div>

                          <div className="text">
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              {" "}
                              Pet Friendly
                            </Link>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="icon">
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              {" "}
                              <span className="icon-shopping-cart"></span>
                            </Link>
                          </div>

                          <div className="text">
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              {" "}
                              Online Ordering
                            </Link>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="icon">
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              {" "}
                              <span className="fa fa-users"></span>
                            </Link>
                          </div>

                          <div className="text">
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              Group Visits
                            </Link>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="icon">
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              {" "}
                              <span className="fa fa-cloud"></span>
                            </Link>
                          </div>

                          <div className="text">
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              {" "}
                              Air Conditioned
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="listings-details-page__content-gallery">
                    <h3>Gallery</h3>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="owl-carousel owl-theme thm-owl__carousel listings-details-page__content-gallery--carousel">
                          <div className="listings-details-page__content-gallery-single">
                            <div className="listings-details-page__content-gallery-single-img">
                              <img
                                src={
                                  publicUrl +
                                  "assets/images/resources/listings_details-img2.jpg"
                                }
                                alt="#"
                              />
                              <div className="listings-details-page__content-gallery-single-img-link">
                                <a
                                  className="img-popup"
                                  href={
                                    publicUrl +
                                    "assets/images/resources/listings_details-img2.jpg"
                                  }
                                >
                                  <span className="icon-plus"></span>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="listings-details-page__content-gallery-single">
                            <div className="listings-details-page__content-gallery-single-img">
                              <img
                                src={
                                  publicUrl +
                                  "assets/images/resources/listings_details-img3.jpg"
                                }
                                alt="#"
                              />
                              <div className="listings-details-page__content-gallery-single-img-link">
                                <a
                                  className="img-popup"
                                  href={
                                    publicUrl +
                                    "assets/images/resources/listings_details-img3.jpg"
                                  }
                                >
                                  <span className="icon-plus"></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="review_and_progress_bar">
                    <div className="review_box">
                      <div className="review_box_details">
                        <h2>4.5</h2>
                        <div className="review-count">
                          <Link to={process.env.PUBLIC_URL + `/`}>
                            <i className="icon-star"></i>
                          </Link>
                          <Link to={process.env.PUBLIC_URL + `/`}>
                            <i className="icon-star"></i>
                          </Link>
                          <Link to={process.env.PUBLIC_URL + `/`}>
                            <i className="icon-star"></i>
                          </Link>
                          <Link to={process.env.PUBLIC_URL + `/`}>
                            <i className="icon-star"></i>
                          </Link>
                          <Link
                            to={process.env.PUBLIC_URL + `/`}
                            className="clr-gray"
                          >
                            <i className="icon-star-1"></i>
                          </Link>
                        </div>
                        <p>48 Total Reviews</p>
                      </div>
                    </div>
                    <div className="progress_bar">
                      <div className="progress-levels">
                        {/* Skill Box */}
                        <div className="progress-box">
                          <div className="text">Rating</div>
                          <div className="inner count-box">
                            <div className="bar">
                              <div className="bar-innner">
                                <div className="skill-percent">
                                  <span
                                    className="count-text"
                                    data-speed="3000"
                                    data-stop="95"
                                  >
                                    0
                                  </span>
                                  <span className="percent">%</span>
                                </div>
                                <div
                                  className="bar-fill"
                                  data-percent="95"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Skill Box */}
                        <div className="progress-box">
                          <div className="text">Hospitality</div>
                          <div className="inner count-box">
                            <div className="bar">
                              <div className="bar-innner">
                                <div className="skill-percent">
                                  <span
                                    className="count-text"
                                    data-speed="3000"
                                    data-stop="85"
                                  >
                                    0
                                  </span>
                                  <span className="percent">%</span>
                                </div>
                                <div
                                  className="bar-fill"
                                  data-percent="85"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Skill Box */}
                        <div className="progress-box">
                          <div className="text">Services</div>
                          <div className="inner count-box">
                            <div className="bar">
                              <div className="bar-innner">
                                <div className="skill-percent">
                                  <span
                                    className="count-text"
                                    data-speed="3000"
                                    data-stop="75"
                                  >
                                    0
                                  </span>
                                  <span className="percent">%</span>
                                </div>
                                <div
                                  className="bar-fill"
                                  data-percent="75"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Skill Box */}
                        <div className="progress-box marb">
                          <div className="text">Pricing</div>
                          <div className="inner count-box">
                            <div className="bar">
                              <div className="bar-innner">
                                <div className="skill-percent">
                                  <span
                                    className="count-text"
                                    data-speed="3000"
                                    data-stop="65"
                                  >
                                    0
                                  </span>
                                  <span className="percent">%</span>
                                </div>
                                <div
                                  className="bar-fill"
                                  data-percent="65"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="comment-one listings-details-page__content-comment">
                    <h3 className="comment-one__title">Comments(02)</h3>
                    <div className="comment-one__single">
                      <div className="comment-one__image">
                        <img
                          src={publicUrl + "assets/images/blog/comment-1-1.png"}
                          alt=""
                        />
                      </div>
                      <div className="comment-one__content">
                        <h3>Dani Smith</h3>
                        <span>11 jun, 2022</span>
                        <p>
                          Lorem Ipsum available, but the majority have suffered
                          alteration in some form If you are going to use a
                          passage of Lorem Ipsum, you need
                        </p>
                        <ul className="reviews-box">
                          <li>
                            <span className="icon-star"></span>
                          </li>
                          <li>
                            <span className="icon-star"></span>
                          </li>
                          <li>
                            <span className="icon-star"></span>
                          </li>
                          <li>
                            <span className="icon-star"></span>
                          </li>
                          <li>
                            <span className="icon-star-1"></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="comment-one__single comment-one__single--two">
                      <div className="comment-one__image">
                        <img
                          src={publicUrl + "assets/images/blog/comment-1-2.png"}
                          alt=""
                        />
                      </div>
                      <div className="comment-one__content">
                        <h3>Robin Wiliam</h3>
                        <span>14 dec 2022</span>
                        <p>
                          Lorem Ipsum available, but the majority have suffered
                          alteration in some form If you are going to use a
                          passage of Lorem Ipsum, you need
                        </p>

                        <ul className="reviews-box">
                          <li>
                            <span className="icon-star"></span>
                          </li>
                          <li>
                            <span className="icon-star"></span>
                          </li>
                          <li>
                            <span className="icon-star"></span>
                          </li>
                          <li>
                            <span className="icon-star"></span>
                          </li>
                          <li>
                            <span className="icon-star-1"></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="comment-form listings-details-page__content-form">
                    <h3 className="comment-form__title">Add Review</h3>
                    <form
                      action="#"
                      className="comment-one__form contact-form-validated"
                      novalidate="novalidate"
                    >
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="comment-form__input-box">
                            <input
                              type="text"
                              placeholder="Full name"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="comment-form__input-box">
                            <input
                              type="email"
                              placeholder="Email Address"
                              name="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="comment-form__input-box text-message-box">
                            <textarea
                              name="message"
                              placeholder="Comments"
                            ></textarea>
                          </div>
                          <div className="comment-form__btn-box">
                            <button
                              type="submit"
                              className="comment-form__btn thm-btn"
                            >
                              Post Comment
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* End Listings Details Page Content */}

              {/* Start Listings Details Page Sidebar */}
              <div className="col-xl-4 col-lg-5">
                <div className="listings-details-page__sidebar">
                  <ListingWorkingHours />
                  <ListingLocationContacts />
                  <ListingSimilarListings />
                  <ListingTags />
                </div>
              </div>
              {/* End Listings Details Page Sidebar */}
            </div>
          </div>
        </section>
        {/* End Listings Details Page */}
      </>
    );
  }
}
