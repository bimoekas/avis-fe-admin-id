import React from "react";
import { Link } from "react-router-dom";
import List from "./List";

const ContentSiteMap = () => {
  return (
    <>
      <h2 className="mb-3 text-dark">SITE MAP</h2>
      <hr />
      <h3 className="link-avis">RESERVATION</h3>
      <div className="siteMapList row pt-3 pb-4">
        <div className="col-md-4">
          <p>
            <Link to={"/makereservation"}>Make a Reservation</Link>
          </p>
          <p>
            <Link to={"/view-cancel"}>
              Reservation Confirmation/Cancellation
            </Link>
          </p>
          <p>
            <a
              href="https://www.avis.com/en/reservation/get-e-receipt"
              target="_blank"
              rel="noreferrer"
            >
              Reservation Confirmation/Cancellation
            </a>
          </p>
        </div>
      </div>

      <hr />
      <h3 className="link-avis">Events and Specials</h3>
      <div className="siteMapList row pt-3 pb-4">
        <div className="col-md-4">
          <p>
            <Link to={"/promotion"}>Promotion</Link>
          </p>
        </div>
      </div>

      <hr />
      <h3 className="link-avis">Locations</h3>
      <div className="siteMapList row pt-3 pb-4">
        <div className="col-md-4">
          <p>
            <Link to={"/findlocation"}>Find a Location</Link>
          </p>
          <p>
            <Link to={"/airportlocation"}>Top Airport Locations</Link>
          </p>
        </div>
      </div>

      <hr />
      <h3 className="link-avis">CARS & SERVICES</h3>
      <div className="siteMapList row pt-3 pb-4">
        <div className="col-md-4">
          <p>
            <Link to={"/carguides"}>Car Guides</Link>
          </p>
          <p>
            <Link to={"/productservice"}>Product & Services</Link>
          </p>
          <p>
            <Link to={"/protection"}>Protections and Coverage</Link>
          </p>
          <p>
            <Link to={"/program"}>Programs</Link>
          </p>
        </div>
      </div>

      <hr />
      <h3 className="link-avis">Help</h3>
      <div className="siteMapList row pt-3 pb-4">
        <div className="col-md-4">
          <p>
            <a href="https://faq.avis.co.uk/" target="_blank" rel="noreferrer">
              Faqs
            </a>
          </p>
          <p>
            <Link to={"/contact-us"}>Contact Us</Link>
          </p>
          <p>
            <Link to={"/view-cancel"}>Reservation/Cancellation</Link>
          </p>
          <p>
            <a
              href="https://www.avis.co.uk/TermsAndCondition"
              target="_blank"
              rel="noreferrer"
            >
              Rental Location Terms and Conditions
            </a>
          </p>
          <p>
            <Link>Subscribe to Our Newsletter</Link>
          </p>
        </div>
      </div>

      <hr />
      <h3 className="link-avis">Miles Points Partners</h3>
      <div className="siteMapList row pt-3 pb-4">
        <div className="col-md-4">
          <p>
            <Link to={"/program"}>Qatar Airways</Link>
          </p>
          <p>
            <Link to={"/program"}>Singapore Airline</Link>
          </p>
          <p>
            <Link to={"/program"}>Master Card</Link>
          </p>
          <p>
            <Link to={"/program"}>Visa Card</Link>
          </p>
        </div>
      </div>

      <hr />
      <h3 className="link-avis">Company Info</h3>
      <div className="siteMapList row pt-3 pb-4">
        <div className="col-md-4">
          <p>
            <Link to={"/about-avis"}>About Avis</Link>
          </p>
          <p>
            <Link to={"/sitemap"}>Site Map</Link>
          </p>
        </div>
      </div>

      <hr />
      <h3 className="link-avis">Security & Privacy</h3>
      <div className="siteMapList row pt-3 pb-4">
        <div className="col-md-4">
          <p>
            <Link to={"/terms-of-use"}>Term of Use</Link>
          </p>
          <p>
            <Link to={"/privacy-notice"}>Privacy Notice</Link>
          </p>
          <p>
            <Link to={"/copyright-notice"}>Copyright Notices</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContentSiteMap;
