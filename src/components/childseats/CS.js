import React from "react";
import { Link } from "react-router-dom";

const CS = () => {
  return (
    <>
      <section className="border-top border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-avis py-3">
                  <li className="breadcrumb-item">Cars & Services</li>
                  <li className="breadcrumb-item">Products & Services</li>
                  <li className="breadcrumb-item link-avis" aria-current="page">
                    Child Seats
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-2">
          <div className="row py-3">
            <div className="col-12">
              <p className="text-avis mt-2">
                Avis stocks a range of quality baby, infant and child seats to
                fit the younger members of your family.
              </p>
              <p className="text-avis mt-2">
                Rules and regulations for child seats and seat options available
                vary by country. We recommend that you check the rental{" "}
                <a
                  href="https://www.avis.co.uk/TermsAndCondition"
                  target="_blank"
                  rel="noreferrer"
                  className="link-avis"
                >
                  Terms and Conditions
                </a>{" "}
                for more details.
              </p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-12">
              <p className="text-avis mt-2">
                <b>In general -</b>
              </p>
              <p className="text-avis mt-2">
                Baby seat is typically suitable for a child from birth to 12
                months old and weighting not more than 13 kilos.
              </p>
              <p className="text-avis mt-2">
                Infant seat is typically suitable for a child aged 9 months to 4
                years old and weighing between 9 to 18 kilos.
              </p>
              <p className="text-avis mt-2">
                Child seat is typically suitable for a child aged 4 to 11 years
                old and weighing between 15 to 36 kilos, Booster seat is
                typically suitable for a child aged 8 to 11 years old and
                weighing between 20 and 40 kilos.
              </p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-12">
              <p className="text-avis mt-2">
                Please note that the explanation above may not be the same for
                all countries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CS;
