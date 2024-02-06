import React from "react";
import { Link } from "react-router-dom";

export default class Af extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="border-top border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 pt-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Programs</li>
                    <li
                      className="breadcrumb-item link-avis"
                      aria-current="page"
                    >
                      Avis Car Rental Affiliates Program
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row mt-3">
              <div className="col-sm-12 text-avis text-black">
                <h1 className="text-up text-black">
                  Avis Car Rental Affiliate Program
                </h1>
                <div className="text-avis mt-5">
                  <b className="mt-3">
                    Earn extra revenue by promoting the Avis Brands
                  </b>
                  <p className="mt-3">
                    Our car rental deals don’t stop at the US border so feel
                    free to take advantage of our competitive promotions on your
                    next international trip. Discover deals and coupons for car
                    rentals in different parts of the world, such as Asia,
                    Australia, Canada, Europe, Latin America, and New Zealand.
                    Why not save on your whole traveling experience? Combine
                    Preferred Member discounts with other promotions from our
                    partners that help you enjoy the best hotels and top tourist
                    destinations. Of course, we couldn’t forget the discount for
                    our loyal AARP members. And as a token of gratitude, there
                    are always discounts available for active military members
                    and veterans.
                  </p>
                </div>
                <div className="text-avis mt-5">
                  <b className="mt-3">Advertise on your web properties </b>
                  <p className="mt-3">
                    You will get access to a wide range of regularly updated
                    creative, links, and brand information to help you
                    successfully promote Avis on your website. We currently
                    provide banners in the most popular sizes, including; MPU,
                    vertical skyscrapers and horizontal leaderboards.
                  </p>
                  <p className="mt-3">
                    We run regular promotions to provide discounts for customers
                    and boost demand and conversion; alongside key promotions we
                    also offer bonus commission and will consider site tenancies
                    to help support key initiatives.
                  </p>
                  <p className="mt-3">
                    Up-to-date tracking through the Partnerize platform ensures
                    that all sales your website drive to Avis.com are reliably
                    tracked. You can see up-to-date information about how much
                    you have earned with Avis on our affiliate dashboard.
                  </p>
                </div>
                <div className="text-avis mt-5">
                  <b className="mt-3">How to Join</b>
                  <p className="mt-3">
                    If you’re already a publisher on the Partnerize (formerly
                    known as Performance Horizon) network then you should
                    contact the email below to be guested to the Avis Network.
                  </p>
                  <p className="mt-3">
                    Once invited you just need to log in, navigate to ‘Admin -
                    Campaign’, look for ‘Avis US’ and press ‘Join’. You’ll be
                    approved and get access to all the new information, offers
                    and creative.
                  </p>
                  <p className="mt-3">
                    If you need to sign up to the Partnerize network, click here
                    to join.{" "}
                  </p>
                  <p className="mt-3">
                    Once you have successfully signed up, you will receive an
                    automated email confirming your credentials and a link to
                    log into the platform. Within the console navigate to ‘Admin
                    - Campaign’ and search for Avis select the campaign you wish
                    to join and hit ‘Join’ & accept the T&Cs.
                  </p>
                </div>
                <div className="text-avis mt-5">
                  <h4 className="mt-3 text-black">Contact Us</h4>
                  <p className="mt-3">
                    If you’d like to discuss the affiliate strategy for Avis,
                    how you can get more involved in the Avis Affiliate program,
                    or if you have any questions about the Partnerize platform,
                    signing up or getting setupany opportunities that Avis may
                    be interested in; please contact the Avis team at
                    ABGAffiliateProgram@avisbudget.com
                  </p>
                  <p className="mt-3">
                    Please allow two to three days for a response during peak
                    times.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-12 text-avis">
                <b className="text-black">Avis Affiliates Program FAQs</b>
              </div>
            </div>
            <div className="row mt-2">
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
            <div className="row my-2">
              <div className="col-sm-12">
                <button className="btn btn-avis text-up">Enroll Today</button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
