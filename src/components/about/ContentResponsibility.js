import React from "react";
import { Link } from "react-router-dom";

const ContentResponsibility = () => {
  return (
    <div className="container pb-4">
      <h5 className="text-dark mb-2">
        Avis strives to be a strong community leader!
      </h5>
      <p className="mb-2">
        As an international corporation -- and as a local business in the
        neighborhoods in which we operate -- Avis strives to be a strong
        community leader and role model. Avis is committed to both corporate and
        employee involvement in civic as well as charitable activities. Our
        corporate responsibility extends beyond philanthropy and volunteerism to
        include consistent adherence to business practices that are friendly to
        customers, employees, and the environment.
      </p>
      <Link className="btn btn-avis mt-4 d-inline-block">
        Make a Reservation
      </Link>
    </div>
  );
};

export default ContentResponsibility;
