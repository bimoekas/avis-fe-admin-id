import React from "react";
import { Link } from "react-router-dom";

export default class HeroThree extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".slider-carousel").length) {
      $(".slider-carousel").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        loop: true,
        margin: 0,
        nav: true,
        singleItem: true,
        smartSpeed: 500,
        autoplay: false,
        autoplayTimeout: 6000,
        navText: [
          '<span className="icon-left-arrow"></span>',
          '<span className="icon-next"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1024: {
            items: 1,
          },
        },
      });
    }

    if ($(".tabs-box").length) {
      $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));

        if ($(target).is(":visible")) {
          return false;
        } else {
          target
            .parents(".tabs-box")
            .find(".tab-buttons")
            .find(".tab-btn")
            .removeClass("active-btn");
          $(this).addClass("active-btn");
          target
            .parents(".tabs-box")
            .find(".tabs-content")
            .find(".tab")
            .fadeOut(0);
          target
            .parents(".tabs-box")
            .find(".tabs-content")
            .find(".tab")
            .removeClass("active-tab");
          $(target).fadeIn(300);
          $(target).addClass("active-tab");
        }
      });
    }

    $("select").niceSelect();
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="banner-one banner-one--two banner-one--two--three">
          <div
            className="banner-one--two--three-shape"
            style={{
              backgroundImage:
                "url(" +
                publicUrl +
                "assets/images/shapes/banner-v3-bottom-shape.png)",
            }}
          ></div>
          <div className="banner-one__inner">
            {/* Start Banner Two Single */}
            <div className="banner-one--two__single">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(" +
                    publicUrl +
                    "assets/images/backgrounds/banner-v2-bg3.jpg)",
                }}
              ></div>
              <div className="auto-container">
                <div className="banner-one__content">
                  <div className="title">
                    <h2>Find your Most Suitable Property</h2>
                  </div>
                  <div className="text">
                    <p>
                      Huge number of propreties availabe here for buy, and sell,
                      also you can find here co-living property, So you have
                      lots of opportunity
                    </p>
                  </div>

                  {/* Start Banner One Tab Box */}
                  <div className="banner-one__tab-box">
                    <div className="row">
                      <div className="col-xl-12">
                        {/* Start Banner One Tab Content Item */}
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
                                            placeholder="What are you looking for?"
                                            name="name"
                                          />
                                        </div>
                                      </li>

                                      <li>
                                        <div className="comment-form__input-box">
                                          <div className="icon">
                                            <span className="icon-pin"></span>
                                          </div>
                                          <input
                                            type="text"
                                            placeholder="Location"
                                            name="name"
                                          />
                                        </div>
                                      </li>

                                      <li>
                                        <div className="comment-form__input-box clearfix">
                                          <div className="icon">
                                            <span className="icon-list"></span>
                                          </div>
                                          <div className="select-box">
                                            <select className="selectmenu wide">
                                              <option selected="selected">
                                                All Categories
                                              </option>
                                              <option>Shops</option>
                                              <option>Hotels</option>
                                              <option>Restaurants</option>
                                            </select>
                                          </div>
                                        </div>
                                      </li>

                                      <li>
                                        <button
                                          className="thm-btn comment-form__btn"
                                          type="submit"
                                        >
                                          Search
                                          <span className="icon-search"></span>
                                        </button>
                                      </li>
                                    </ul>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Banner One Tab Content Item */}
                      </div>
                    </div>
                  </div>
                  {/* End Banner One Tab Box Tab Box */}

                  <div className="banner-one__categories">
                    <div className="title">
                      <h4>
                        Just looking around ? Use quick search by category :
                      </h4>
                    </div>
                    <ul className="banner-one__categories-list">
                      <li className="banner-one__categories-list-item">
                        <div className="inner">
                          <div className="icon">
                            <span className="icon-hotels"></span>
                          </div>
                          <p>
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              Hotels
                            </Link>
                          </p>
                        </div>
                      </li>

                      <li className="banner-one__categories-list-item">
                        <div className="inner">
                          <div className="icon">
                            <span className="icon-drink"></span>
                          </div>
                          <p>
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              Events
                            </Link>
                          </p>
                        </div>
                      </li>

                      <li className="banner-one__categories-list-item">
                        <div className="inner">
                          <div className="icon">
                            <span className="icon-shopping-cart"></span>
                          </div>
                          <p>
                            <Link to={process.env.PUBLIC_URL + `/`}>Shops</Link>
                          </p>
                        </div>
                      </li>

                      <li className="banner-one__categories-list-item">
                        <div className="inner">
                          <div className="icon">
                            <span className="icon-big-cheeseburger"></span>
                          </div>
                          <p>
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              Restaurants
                            </Link>
                          </p>
                        </div>
                      </li>

                      <li className="banner-one__categories-list-item">
                        <div className="inner">
                          <div className="icon">
                            <span className="icon-dumbbell"></span>
                          </div>
                          <p>
                            <Link to={process.env.PUBLIC_URL + `/`}>
                              Fitness
                            </Link>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Start Banner One Two Three Img */}
                <div
                  className="banner-one--two--three-img wow slideInRight"
                  data-wow-delay="500ms"
                  data-wow-duration="2500ms"
                >
                  <img
                    src={
                      publicUrl + "assets/images/resources/banner-v3-img1.png"
                    }
                    alt="#"
                  />
                </div>
                {/* End Banner One Two Three Img */}
              </div>
            </div>
            {/* End Banner Two Single */}
          </div>
        </section>
        {/* Start Banner Two */}
      </>
    );
  }
}
