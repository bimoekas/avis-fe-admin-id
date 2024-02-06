import React from "react";

export default class UG extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myStyle = {
      backgroundImage:
        "url(" + publicUrl + "assets/images/resources/onewaycarrental1.webp)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "200px",
    };
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
                    <li className="breadcrumb-item">USA & Canada</li>
                    <li
                      className="breadcrumb-item link-avis"
                      aria-current="page"
                    >
                      GPS Navigation
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="banner-one" style={myStyle}>
          <div className="banner-one__inner py-4">
            <div className="container">
              <div className="banner-one__content text-center">
                <div className="title">
                  <h3 className="text-white text-up">
                    SAVE YOUR DATA - RESERVE WITH GPS
                  </h3>
                  <p className="text-white">
                    Navigate your trip without using your mobile data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-2">
            <div className="row py-3">
              <div className="col-12">
                <h3 className="text-up text-black fw-normal">DETAILS</h3>
                <p className="text-avis mt-2">
                  When travel takes you someplace new, there is no time to play
                  hunt-and-seek. With GPS you can look up addresses, hotels, and
                  attractions - without using your mobile data.
                </p>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-12">
                <h3 className="text-up text-black fw-normal link-avis">
                  <u>
                    <i>TERMS AND CONDITIONS</i>
                  </u>
                </h3>
                <p className="text-avis mt-2">
                  GPS Navigation Terms & Conditions:
                </p>
                <ul>
                  <li className="text-avis mt-2">
                    • Reliability of directions subject to timing of software
                    implementation as well as that of which has been provided by
                    the maker of the installed maps.
                  </li>
                  <li className="text-avis mt-2">
                    • I (renter) acknowledge that the rental vehicle may be
                    equipped with GPS which utilizes global positioning
                    satellites.
                  </li>
                  <li className="text-avis mt-2">
                    • I acknowledge that GPS may be limited by atmospheric or
                    topographical conditions.
                  </li>
                  <li className="text-avis mt-2">
                    • I further acknowledge that GPS may be rendered inoperative
                    if GPS is tampered with or destroyed and or damaged in an
                    accident or if the satellite systems are obstructed and
                    inoperative.
                  </li>
                  <li className="text-avis mt-2">
                    • Customer is responsible for all costs in the event of
                    lost, stolen or damaged GPS Unit and all of its components.
                  </li>
                  <li className="text-avis mt-2">
                    • Renter agrees to release and hold Avis harmless for any
                    GPS failures.{" "}
                  </li>
                  <li className="text-avis mt-2">
                    • GPS can be requested at rental counter.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
