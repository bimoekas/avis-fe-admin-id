import React from "react";
import { Link } from "react-router-dom";

const ContentMission = () => {
  return (
    <div className="container pb-4">
      <p className="mb-3">Read what Avis is all about!</p>
      <h5 className="mb-3 text-dark">Our Vision</h5>
      <p className="mb-3">
        "We will lead our industry by defining service excellence and building
        unmatched customer loyalty."
      </p>
      <h5 className="mb-3 text-dark">Our Mission</h5>
      <p className="mb-3">
        "We will ensure a stress-free car rental experience by providing
        superior services that cater to our customers' individual needs...always
        conveying the 'We Try Harder®' spirit with knowledge, caring and a
        passion for excellence."
      </p>
      <h5 className="mb-3 text-dark">Our Values</h5>
      <p className="text-dark">
        <b>Integrity</b>
      </p>
      <ul className="similarCarOpt ps-5 mb-3">
        <li>
          We will honor all commitments to our customers, employees and
          shareholders.
        </li>
        <li>
          We will conduct business with unwavering high standards of honesty,
          trust, professionalism and ethical behavior.
        </li>
        <li>
          We will communicate openly and frequently, sharing what we know, when
          we know it.
        </li>
      </ul>
      <p className="text-dark">
        <b>Respect for the Individual</b>
      </p>
      <ul className="similarCarOpt ps-5 mb-3">
        <li>
          We will treat each person with whom we work with respect,
          professionalism and dignity.
        </li>
        <li>
          We will communicate expectations to employees, and provide honest and
          timely feedback on performance.
        </li>
        <li>
          We will embrace a diversity of ideas, cultures, ethnicities, and
          backgrounds to enhance our promise and value to customers.
        </li>
        <li>
          We will provide career development opportunities for employees who
          show initiative, and performance results to help them individually
          manage their careers to maximize their potential.
        </li>
      </ul>
      <p className="text-dark">
        <b>Quality</b>
      </p>
      <ul className="similarCarOpt ps-5 mb-3">
        <li>We will place the interests of our customers first.</li>
        <li>
          We will be dedicated to providing an individualized rental experience
          that assures customer satisfaction and earns the unwavering loyalty of
          our customers
        </li>
        <li>
          We will ensure that the "We Try Harder®" philosophy underlies
          everything we do and shines through in our service to customers.
        </li>
      </ul>
      <p className="text-dark">
        <b>Teamwork</b>
      </p>
      <ul className="similarCarOpt ps-5 mb-3">
        <li>
          We will work as one cohesive team from the smallest unit to the
          organization as a whole.
        </li>
        <li>
          We will develop and retain leaders who continually raise the bar,
          provide direction, remove barriers and empower people to successfully
          accomplish goals.
        </li>
        <li>
          We will maintain a caring and supportive work environment that fosters
          a sharing of ideas, skills and resources.
        </li>
      </ul>
      <p className="text-dark">
        <b>Growth and Profitability</b>
      </p>
      <ul className="similarCarOpt ps-5 mb-3">
        <li>
          We will be dedicated to continuous innovation and pursue new ideas and
          opportunities to accelerate profitable growth.
        </li>
        <li>
          We will deliver value in all we do to assure consistently high returns
          to our shareholders.
        </li>
        <li>
          We will recognize and reward excellent performance, which drives
          superior results.
        </li>
      </ul>
      <p className="text-dark">
        <b>Community Responsibility</b>
      </p>
      <ul className="similarCarOpt ps-5 mb-3">
        <li>
          We will be active participants in our communities and encourage
          employee involvement in civic and charitable activities.
        </li>
        <li>
          We will be role model business leaders in the countries and
          communities in which we operate.
        </li>
        <li>
          We will develop and implement business practices consistent with
          safeguarding the environment.
        </li>
      </ul>
      <Link className="btn btn-avis mt-4 d-inline-block">
        Make a Reservation
      </Link>
    </div>
  );
};

export default ContentMission;
