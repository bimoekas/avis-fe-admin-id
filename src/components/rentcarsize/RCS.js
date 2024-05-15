import React from "react";
import { Link } from "react-router-dom";

export default class RCS extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myStyle = {
      backgroundImage:
        "url(" + publicUrl + "assets/images/resources/rentcarsize.webp)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "200px",
    };
    return (
      <>
        {/* <section style={{backgroundColor:"#3e3e3e"}}>
                    <div className='container-fluid pb-3'>
                        <div className='row'>
                            <div className='col-sm-4 pt-3 pe-0'>
                                <input type="text" className='form-control input-avis py-2' placeholder='Enter your pick-up location or zip code' />
                            </div>
                            <div className='col-sm-3 pt-3 ps-0 pe-0'>
                                <input type="date" className='form-control input-avis py-2'/>
                            </div>
                            <div className='col-sm-3 pt-3 pe-0 ps-0'>
                                <input type="time" className='form-control input-avis py-2'/>
                            </div>
                            <div className='col-sm-2 ps-1 pt-3'>
                                <button className="btn btn-avis2 form-control py-2" type="submit">Continue</button>
                            </div>
                        </div>
                    </div>
                </section> */}
        <section className="border-top border-bottom">
          <div className="container">
            <div className="row py-3">
              <div className="col-xl-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Cars</a>
                    </li>
                    <li
                      className="breadcrumb-item link-avis"
                      aria-current="page"
                    >
                      Car or Sedans
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section style={myStyle}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12 pt-5">
                <h2 className="text-up text-white">Sedan Or Car Rentals</h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xl-7 text-end"></div>
              <div
                className="col-xl-5 text-end"
                style={{ marginTop: "-150px" }}
              >
                <img
                  className="img-fluid"
                  src={publicUrl + "assets/images/resources/rentcarsize2.avif"}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h1 className="text-up text-black fw-normal">
                  Find the Perfect Car for Your Upcoming Trip
                </h1>
                <p className="text-avis mt-2">
                  Cars, also known as sedans, are perfect for most trips because
                  of their great fuel economy, ease of maneuvering, and
                  affordable rental rates. In the Avis fleet, you’ll find sedans
                  of all sizes, so the ideal car rental is always waiting for
                  you. Seat up to 5 passengers, stow your luggage, and still
                  feel comfortable as you travel around town or down the
                  highway. Browse the car fleet below, featuring sedans of all
                  sizes, then reserve the car rental that fits your needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light mt-3">
          <div className="container">
            <div className="row py-4">
              <div className="col-sm-8 align-self-center">
                <h2 className="link-avis text-up">Economy Car Rentals</h2>
                <p className="mt-2">
                  If you’re traveling alone or with just a few passengers, save
                  on gas with a small car rental like a Kia Rio or a similar
                  model.
                </p>
                <button className="btn btn-avis py-2 text-up">
                  See Car Details
                </button>
              </div>
              <div className="col-sm-4">
                <img
                  className="img-fluid"
                  src={publicUrl + "assets/images/resources/rentcarsize2.avif"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light mt-3">
          <div className="container">
            <div className="row py-4">
              <div className="col-sm-8 align-self-center">
                <h2 className="link-avis text-up">Economy Car Rentals</h2>
                <p className="mt-2">
                  If you’re traveling alone or with just a few passengers, save
                  on gas with a small car rental like a Kia Rio or a similar
                  model.
                </p>
                <button className="btn btn-avis py-2 text-up">
                  See Car Details
                </button>
              </div>
              <div className="col-sm-4">
                <img
                  className="img-fluid"
                  src={publicUrl + "assets/images/resources/rentcarsize2.avif"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light mt-3">
          <div className="container">
            <div className="row py-4">
              <div className="col-sm-8 align-self-center">
                <h2 className="link-avis text-up">Economy Car Rentals</h2>
                <p className="mt-2">
                  If you’re traveling alone or with just a few passengers, save
                  on gas with a small car rental like a Kia Rio or a similar
                  model.
                </p>
                <button className="btn btn-avis py-2 text-up">
                  See Car Details
                </button>
              </div>
              <div className="col-sm-4">
                <img
                  className="img-fluid"
                  src={publicUrl + "assets/images/resources/rentcarsize2.avif"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light mt-3">
          <div className="container">
            <div className="row py-4">
              <div className="col-sm-8 align-self-center">
                <h2 className="link-avis text-up">Economy Car Rentals</h2>
                <p className="mt-2">
                  If you’re traveling alone or with just a few passengers, save
                  on gas with a small car rental like a Kia Rio or a similar
                  model.
                </p>
                <button className="btn btn-avis py-2 text-up">
                  See Car Details
                </button>
              </div>
              <div className="col-sm-4">
                <img
                  className="img-fluid"
                  src={publicUrl + "assets/images/resources/rentcarsize2.avif"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light mt-3">
          <div className="container">
            <div className="row py-4">
              <div className="col-sm-8 align-self-center">
                <h2 className="link-avis text-up">Economy Car Rentals</h2>
                <p className="mt-2">
                  If you’re traveling alone or with just a few passengers, save
                  on gas with a small car rental like a Kia Rio or a similar
                  model.
                </p>
                <button className="btn btn-avis py-2 text-up">
                  See Car Details
                </button>
              </div>
              <div className="col-sm-4">
                <img
                  className="img-fluid"
                  src={publicUrl + "assets/images/resources/rentcarsize2.avif"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-3">
          <div className="container">
            <div className="row py-4">
              <div className="col-sm-12">
                <p className="text-avis">
                  <i>
                    Vehicle make, model, trim, features and color are not
                    guaranteed and are subject to location and availability.
                    Vehicle features are subject to change based on the vehicle
                    model-year.
                  </i>
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
