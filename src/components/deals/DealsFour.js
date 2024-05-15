import React from "react";
import { Link } from "react-router-dom";

export default class DealsOne extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myStyle = {
      backgroundImage:
        "url(" + publicUrl + "assets/images/resources/us-offer1.webp)",
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
            <div className="row mt-4 border-bottom pb-3">
              <div className="col-lg-5 col-sm-12 ps-0">
                <h3 className="text-black">AVIS 360</h3>
              </div>
              <div className="col-lg-2 col-sm-3">
                <a
                  href={process.env.PUBLIC_URL + `/deals`}
                  className="text-black"
                >
                  US Offers
                </a>
              </div>
              <div className="col-lg-2 col-sm-3">
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
                        href={
                          process.env.PUBLIC_URL + `/promotion/international`
                        }
                      >
                        All
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href={
                          process.env.PUBLIC_URL + `/promotion/international`
                        }
                      >
                        Australia
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href={
                          process.env.PUBLIC_URL + `/promotion/international`
                        }
                      >
                        New Zealand
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-3">
                <a
                  href={process.env.PUBLIC_URL + `/promotion/partner-offers`}
                  className="text-black"
                >
                  Partner Offers
                </a>
              </div>
              <div className="col-lg-1 col-sm-3 pe-0">
                <a
                  href={process.env.PUBLIC_URL + `/promotion/avis360`}
                  className="text-black"
                >
                  Avis 360
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
                          Car Rental with reduced excess or zero excess.
                        </p>
                        <div className="text" style={{ minHeight: "100px" }}>
                          <p>
                            Whether you need a car for a few days, a weekend or
                            2 weeks, with Avis 360° you don't have to worry
                            about your rental.
                          </p>
                        </div>
                        <Link
                          to={process.env.PUBLIC_URL + `/promotion/avis360`}
                          className="btn btn-avis"
                        >
                          Save Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row mt-3">
              <div className="col-sm-12 text-avis">
                <p>
                  Who doesn’t like saving money, especially when that money
                  could go towards a souvenir or even dinner? Avis knows
                  traveling can be expensive, and to help you make the most of
                  your travel budget, we’ve provided a variety of car rental
                  specials and discounts on already affordable rentals. Whether
                  you want reliable car rental promotions you can use again and
                  again or last-minute car rental deals for weekend getaways,
                  you’re sure to find Avis car rental coupons to match your
                  transportation needs. When you make your reservation, the
                  savings will apply automatically and show up in your rate
                  summary. Some car rental special offers do not apply to all
                  car groups, and there may be blackout days or restrictions.
                  Book a vehicle today and save on your upcoming trip with Avis
                  car rental coupons.
                </p>
                <p className="mt-3">
                  Our car rental deals don’t stop at the US border so feel free
                  to take advantage of our competitive promotions on your next
                  international trip. Discover deals and coupons for car rentals
                  in different parts of the world, such as Asia, Australia,
                  Canada, Europe, Latin America, and New Zealand. Why not save
                  on your whole traveling experience? Combine Preferred Member
                  discounts with other promotions from our partners that help
                  you enjoy the best hotels and top tourist destinations. Of
                  course, we couldn’t forget the discount for our loyal AARP
                  members. And as a token of gratitude, there are always
                  discounts available for active military members and veterans.
                </p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-12 text-avis">
                <h2 className="text-black">CAR RENTAL DEALS FAQs</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                        style={{ textTransform: "uppercase" }}
                      >
                        How do I get the best deal on a rental car?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body text-avis">
                        There are a couple of different ways to get the best
                        deal on a rental car. First thing’s first, scroll over
                        to our “Offers” tab, for Avis car rental coupons. Once
                        you are on the “US Offers” page, you’ll find a variety
                        of coupons and car rental promotions. Another way to
                        save on your upcoming rental is to take advantage of the
                        Avis Best Price Pledge. The Avis Best Price Pledge is
                        our promise to match lower Avis rental prices on third
                        party websites while giving you an additional discount.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        style={{ textTransform: "uppercase" }}
                      >
                        How do I find the least expensive rental car?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body text-avis">
                        When looking for rental car special offers and other
                        ways to cut down on rental costs, there are three main
                        tips to remember. <br />
                        1. Pay Now: Avis provides you with the option to “Pay
                        Now” so you can pay the rental cost when making a
                        reservation rather than during pick-up. When you choose
                        to pay now instead of later you can save up to 30% on
                        your rental rates. <br />
                        2. Compare Prices: To compare prices of different
                        vehicles, you will need to fill out the reservation form
                        and click “Select My Car.” Once you have input your
                        travel dates and locations and submitted the form,
                        you’ll be able to scroll through available rental
                        options and prices. Smaller vehicles, like economy
                        models, are typically less expensive. You can also go
                        back and change dates and locations on the reservation
                        form to see if prices rise or drop. <br />
                        3. Plan Ahead: Typically car rental prices go up as the
                        reservation date approaches. Make a reservation in
                        advance to lock in your price. Round-trip rentals also
                        tend to be less expensive, so keep that in mind when
                        making travel plans.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                        style={{ textTransform: "uppercase" }}
                      >
                        What time of day is best to rent a car?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body text-avis">
                        Avis Car Rental inventory is always subject to vehicle
                        availability and it is best to call your location ahead
                        of time if you do not have a reservation, but generally
                        the largest vehicle selection is right when Avis opens.
                        Before you show up, check your local Avis office for
                        their car rental hours. You can always make a same-day
                        reservation, as long as it is at least one hour before
                        your pickup time.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                        style={{ textTransform: "uppercase" }}
                      >
                        Is it less expensive to rent a car online or in person?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body text-avis">
                        Although car rental rates vary from day to day, you will
                        generally find better deals if you go to rent a car
                        online rather than in person. Most of our car rental
                        specials are only available online and if you choose
                        “Pay Now” when making an online reservation you can save
                        up to 30% on rates. However, every so often you may be
                        able to find last-minute car rental deals in person.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                        style={{ textTransform: "uppercase" }}
                      >
                        Is it less expensive to rent a car at the airport or
                        offsite?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body text-avis">
                        When comparing rates straight across, it can sometimes
                        be more economical to rent a car offsite rather than at
                        an airport. However, if you take other expenses into
                        consideration, like taxis or rideshares, they can end up
                        being around the same price. For those wanting to rent a
                        car from Avis at an airport, look for coupons and
                        discounts to sweeten the deal.
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
