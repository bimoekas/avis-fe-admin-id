import React from "react";
import { Link, useNavigate } from "react-router-dom";

class PSN extends React.Component {
  detail(data) {
    this.props.navigate("/blankpage", {
      state: {
        data: data,
      },
    });
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myStyle = {
      backgroundImage:
        "url(" + publicUrl + "assets/images/resources/productservice.avif)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "250px",
    };
    const myLink = {
      color: "rgb(237, 85, 5)",
    };
    const myPara = {
      lineHeight: "1.5",
      fontSize: "15px",
      color: "#000",
    };
    const myHead = {
      fontSize: "18px",
    };
    const myCard = {
      backgroundColor: "#fff",
    };
    const myParas = {
      lineHeight: "1.5",
      height: "150px",
      fontSize: "15px",
      color: "#000",
    };
    return (
      <>
        <section style={myStyle}>
          <div className="container pt-5">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="text-white">
                  Car Rental Products and Services For Rentals in the USA and
                  Canada
                </h1>
                <p className="text-white">
                  Learn more about Avis products that make your rental
                  experience easier and fun.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ backgroundColor: "#eaeaea" }}>
          <div className="container">
            <div className="row pt-3">
              <div className="col-lg-4 col-sm-6 pe-5 pb-5">
                <Link
                  to={
                    process.env.PUBLIC_URL +
                    `/productservice/usa/gps-navigation`
                  }
                  className="row"
                  style={myCard}
                >
                  <div className="col-12 p-3">
                    <h5 className="mb-2 text-black">GPS Navigation</h5>
                    <label
                      className="text-avis"
                      style={{ minHeight: "150px", cursor: "pointer" }}
                    >
                      GPS Navigation lets you find every destination with ease.
                      Look up addresses & attractions at the touch of a button
                      on your rental car GPS unit. Pair with your mobile
                      device’s bluetooth for hands-free calling.
                    </label>
                  </div>
                  <div className="col-12 pb-3 pe-3 text-end">
                    <label className="link-avis">Learn More </label>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6 pe-5 pb-5">
                <Link
                  to={
                    process.env.PUBLIC_URL + `/productservice/usa/avis-e-toll`
                  }
                  className="row"
                  style={myCard}
                >
                  <div className="col-12 p-3">
                    <h5 className="mb-2 text-black">Avis e-Toll</h5>
                    <label
                      className="text-avis"
                      style={{ minHeight: "150px", cursor: "pointer" }}
                    >
                      Find out more about the special services available when
                      you Car Rental with Avis. From Avis Preferred to Avis
                      Cares, we offer an array of extras.
                    </label>
                  </div>
                  <div className="col-12 pb-3 pe-3 text-end">
                    <label className="link-avis">Learn More </label>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6 pe-5 pb-5">
                <Link
                  to={process.env.PUBLIC_URL + `/productservice/usa/fuel-plans`}
                  className="row"
                  style={myCard}
                >
                  <div className="col-12 p-3">
                    <h5 className="mb-2 text-black">Car Rental Fuel Plans</h5>
                    <label
                      className="text-avis"
                      style={{ minHeight: "150px", cursor: "pointer" }}
                    >
                      Avis offers a number of convenient car rental fuel plan
                      options. Pay in advance for a full tank of gas and bring
                      the car back empty or simply purchase a full tank just
                      before you return the car at your drop-off location.
                    </label>
                  </div>
                  <div className="col-12 pb-3 pe-3 text-end">
                    <label className="link-avis">Learn More </label>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

function PS(props) {
  let navigate = useNavigate();
  return <PSN {...props} navigate={navigate} />;
}

export default PS;
