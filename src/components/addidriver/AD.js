import React from "react";

const AD = () => {
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
                    Additional Drivers
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
              <p className="text-avis mt-2">Share the reins</p>
              <p className="text-avis mt-2">
                Only the main driver is covered to drive one of our rental
                vehicles but any number of additional drivers can be added to
                your booking.
              </p>
              <p className="text-avis mt-2">
                Additional drivers must stick to all the same terms and
                conditions as the main driver and are covered under the same
                rental agreement.
              </p>
              <p className="text-avis mt-2">
                The most important thing to remember: Every driver must bring
                along their driving licence, International Driving Permit and
                other documentations when the time comes to collect your hire
                car.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AD;
