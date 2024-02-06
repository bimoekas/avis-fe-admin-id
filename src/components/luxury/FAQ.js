import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="container pb-5">
      <h1>Frequently Asked Questions</h1>
      <p className="question mt-2 mb-2">How can I rent a luxury car?</p>
      <p>
        When you’re ready to start your reservation, simply fill out the form
        above with your planned pick up location and rental dates. Then secure
        an available vehicle.
      </p>
      <p className="question mt-2 mb-2">
        Where can I rent a luxury car from Budget?
      </p>
      <p>
        Budget offers luxury rental cars at select locations across the United
        States. If your travels take you to a Budget location that offers these
        premium rides, take advantage and treat yourself to a luxury sedan
        rental. Submit your preferred pickup location and date in the form above
        to see vehicle availability.
      </p>
      <p className="similar">Similar Car Options</p>
      <ul className="similarCarOpt ps-4">
        <li>
          <Link to={`${process.env.PUBLIC_URL}/car-explore`}>
            Explore Luxury Sports Sedans
          </Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/car-explore`}>
            Explore Full-Size Luxury Sedans
          </Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/car-explore`}>
            Explore MidSize Luxury Sedans
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
