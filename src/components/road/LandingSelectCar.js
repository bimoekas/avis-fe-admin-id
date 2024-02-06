import React from "react";
import { Link } from "react-router-dom";

export default class LandingSelectCar extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".slider-bg-slide").length) {
      $(".slider-bg-slide").each(function () {
        var Self = $(this);
        var bgSlideOptions = Self.data("options");
        var bannerTwoSlides = Self.vegas(bgSlideOptions);
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
        {/* Start Banner One */}
        <section className="bg-white">
          <div className="banner-one__inner">
            <div className="container">
              <div className="banner-one__content text-center">
                <div className="title">
                  <h1>{this.props.title}</h1>
                  <h5 className="mt-3 yellow">{this.props.sub}</h5>
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
                              <div
                                className="banner-one__tab-content-places"
                                style={{ backgroundColor: "#ed5505" }}
                              >
                                <div className="row">
                                  <div className="col-xl-12">
                                    <div className="banner-one__tab-content-places-form">
                                      <form
                                        action="#"
                                        className="comment-one__form contact-form-validated"
                                        novalidate="novalidate"
                                      >
                                        <ul className="roadsideList">
                                          <li className="py-3 px-2">
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
                                          <li className="py-3 px-2">
                                            <div className="comment-form__input-box">
                                              {/* <div className="icon">
                                                    <span className="icon-pin"></span>
                                                </div> */}
                                              <input
                                                type="date"
                                                placeholder="Location"
                                                name="name"
                                              />
                                            </div>
                                          </li>

                                          <li className="py-3 px-2">
                                            <div className="comment-form__input-box clearfix">
                                              {/* <div className="icon">
                                                    <span className="icon-list"></span>
                                                </div> */}
                                              {/* <div className="select-box">
                                                    <select className="selectmenu wide">
                                                        <option selected="selected">
                                                            All Categories</option>
                                                        <option>Shops
                                                        </option>
                                                        <option>Hotels
                                                        </option>
                                                        <option>Restaurants
                                                        </option>
                                                    </select>
                                                </div> */}
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
                          {/* End Tab */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Banner One Tab Box Tab Box */}

                <div className="banner-one__categories">
                  <div className="title">
                    <button className="btnCar" type="submit">
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
