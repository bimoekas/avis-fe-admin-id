import React from "react";
import { Link } from "react-router-dom";

export default class HeroTwo extends React.Component {
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
        {/* Start Banner Two */}
        <section className="banner-one banner-one--two">
          <div className="banner-one__inner slider-carousel owl-carousel owl-theme">
            {/* Start Banner Two Single */}
            <div className="banner-one--two__single">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(" +
                    publicUrl +
                    "assets/images/backgrounds/banner-v2-bg1.jpg)",
                }}
              ></div>
              <div className="container">
                <div className="banner-one__content text-center">
                  <div className="title">
                    <h2>Find Your Nearby Hotels</h2>
                  </div>
                  <div className="text">
                    <p>
                      Find some of the best tips from around the city from our
                      partners and friends.
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
                                          data-loading-text="Please wait..."
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
              </div>
            </div>
            {/* End Banner Two Single */}

            {/* Start Banner Two Single */}
            <div className="banner-one--two__single">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(" +
                    publicUrl +
                    "assets/images/backgrounds/banner-v2-bg2.jpg)",
                }}
              ></div>
              <div className="container">
                <div className="banner-one__content text-center">
                  <div className="title">
                    <h2>Find Your Nearby Attractions</h2>
                  </div>
                  <div className="text">
                    <p>
                      Find some of the best tips from around the city from our
                      partners and friends.
                    </p>
                  </div>

                  {/* Start Banner One Tab Box */}
                  <div className="banner-one__tab-box">
                    <div className="row">
                      <div className="col-xl-12">
                        {/* Start Banner One Tab Content Item */}
                        <div className="banner-one__tab-content-item">
                          <div className="banner-one__tab-content-events">
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
                                            <span className="fas fa-handshake"></span>
                                          </div>
                                          <input
                                            type="text"
                                            placeholder="Event Name or Place"
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
                                                All Cities
                                              </option>
                                              <option>New York</option>
                                              <option>Dhaka</option>
                                              <option>Paris</option>
                                            </select>
                                          </div>
                                        </div>
                                      </li>

                                      <li>
                                        <div className="comment-form__input-box">
                                          <div className="icon">
                                            <span className="icon-calendar"></span>
                                          </div>
                                          <input
                                            type="text"
                                            name="form_subject"
                                            value=""
                                            placeholder="Select Date"
                                            id="datepicker"
                                          />
                                        </div>
                                      </li>

                                      <li>
                                        <button
                                          className="thm-btn comment-form__btn"
                                          type="submit"
                                          data-loading-text="Please wait..."
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
              </div>
            </div>
            {/* End Banner Two Single */}

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
              <div className="container">
                <div className="banner-one__content text-center">
                  <div className="title">
                    <h2>Find the best place to be</h2>
                  </div>
                  <div className="text">
                    <p>
                      ListingEasy is the hassle-free way of discovering the city
                    </p>
                  </div>

                  {/* Start Banner One Tab Box */}
                  <div className="banner-one__tab-box">
                    <div className="row">
                      <div className="col-xl-12">
                        {/* Start Banner One Tab Content Item */}
                        <div className="banner-one__tab-content-item">
                          <div className="banner-one__tab-content-restaurants">
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
                                            <span className="icon-big-cheeseburger"></span>
                                          </div>
                                          <input
                                            type="text"
                                            placeholder="Restaurant Name"
                                            name="name"
                                          />
                                        </div>
                                      </li>

                                      <li>
                                        <div className="comment-form__input-box">
                                          <div className="icon">
                                            <span className="icon-calendar"></span>
                                          </div>
                                          <input
                                            type="text"
                                            name="form_subject"
                                            value=""
                                            placeholder="Select Date"
                                            id="datepicker2"
                                          />
                                        </div>
                                      </li>

                                      <li>
                                        <div className="comment-form__input-box">
                                          <div className="icon">
                                            <span className="icon-user"></span>
                                          </div>
                                          <input
                                            type="number"
                                            placeholder="Persons"
                                            name="name"
                                          />
                                        </div>
                                      </li>

                                      <li>
                                        <button
                                          className="thm-btn comment-form__btn"
                                          type="submit"
                                          data-loading-text="Please wait..."
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
              </div>
            </div>
            {/* End Banner Two Single */}
          </div>
        </section>
        {/* End Banner Two */}
      </>
    );
  }
}
