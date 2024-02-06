import React from "react";
import { Link } from "react-router-dom";

export default class Pro extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myStyle = {
      // backgroundImage: "url("+publicUrl+"assets/images/resources/productservice.avif)",
      // backgroundPosition: 'center',
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      // height: "200px"
    };
    const myHead = {
      fontSize: "18px",
    };
    const myCard = {
      backgroundColor: "#fff",
    };
    return (
      <>
        <section className="border-top border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 pt-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={`${process.env.PUBLIC_URL}/protection`}>
                        Products & Services
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item link-avis"
                      aria-current="page"
                    >
                      Protections & Coverages
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section style={myStyle}>
          <div className="container pt-3">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="text-black text-up pb-2">
                  Protections & Coverages
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-4" style={{ backgroundColor: "#eaeaea" }}>
          <div className="container">
            <div className="row pt-4">
              <div className="col-lg-4 col-sm-6 pe-5 pb-5">
                <Link
                  to={{
                    pathname: `${process.env.PUBLIC_URL}/protection/detail/Extended-Roadside-Assistance`,
                  }}
                  className="row"
                  style={myCard}
                >
                  <div className="col-12 p-3">
                    <label className="mb-2" style={myHead}>
                      <div className="row" style={{ cursor: "pointer" }}>
                        <div className="col-sm-3" style={{ cursor: "pointer" }}>
                          <img
                            className="img-fluid"
                            src={publicUrl + "assets/images/resources/RSN.avif"}
                            alt=""
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                        <div
                          className="col-sm-9 align-self-center text-black"
                          style={{ cursor: "pointer" }}
                        >
                          Extended Roadside Assistance
                        </div>
                      </div>
                    </label>
                    <label
                      className="text-avis mt-2 text-black"
                      style={{ cursor: "pointer" }}
                    >
                      For the ultimate safe driving experience, add Extended
                      Roadside Assistance to your Avis reservation. Extended
                      Roadside Assistance from Avis will provide you with fast,
                      reliable emergency road hazard assistance.
                    </label>
                  </div>
                  <div className="col-12 p-3 text-end">
                    <label className="link-avis" style={{ cursor: "pointer" }}>
                      Learn More{" "}
                    </label>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6 pe-5 pb-5">
                <Link
                  to={{
                    pathname: `${process.env.PUBLIC_URL}/protection/detail/Loss-Damage-Waiver-(LDW)`,
                  }}
                  className="row"
                  style={myCard}
                >
                  <div className="col-12 p-3">
                    <label className="mb-2" style={myHead}>
                      <div className="row" style={{ cursor: "pointer" }}>
                        <div className="col-sm-3" style={{ cursor: "pointer" }}>
                          <img
                            className="img-fluid"
                            src={
                              publicUrl +
                              "assets/images/resources/protection-ldw.avif"
                            }
                            alt=""
                          />
                        </div>
                        <div
                          className="col-sm-9 align-self-center text-black"
                          style={{ cursor: "pointer" }}
                        >
                          Loss Damage Waiver (LDW)
                        </div>
                      </div>
                    </label>
                    <label
                      className="text-avis mt-2 text-black"
                      style={{ cursor: "pointer" }}
                    >
                      Avis offers LDW, an option that relieves you of financial
                      responsibility if the rental car is damaged or stolen.
                    </label>
                  </div>
                  <div className="col-12 p-3 text-end">
                    <label className="link-avis" style={{ cursor: "pointer" }}>
                      Learn More{" "}
                    </label>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6 pe-5 pb-5">
                <Link
                  to={{
                    pathname: `${process.env.PUBLIC_URL}/protection/detail/Personal-Accident-Insurance-(PAI)`,
                  }}
                  className="row"
                  style={myCard}
                >
                  <div className="col-12 p-3">
                    <label className="mb-2" style={myHead}>
                      <div className="row" style={{ cursor: "pointer" }}>
                        <div className="col-sm-3" style={{ cursor: "pointer" }}>
                          <img
                            className="img-fluid"
                            src={publicUrl + "assets/images/resources/PAI.png"}
                            alt=""
                          />
                        </div>
                        <div
                          className="col-sm-9 align-self-center text-black"
                          style={{ cursor: "pointer" }}
                        >
                          Personal Accident Insurance (PAI)
                        </div>
                      </div>
                    </label>
                    <label
                      className="text-avis mt-2 text-black"
                      style={{ cursor: "pointer" }}
                    >
                      Protects you and your passengers with insurance and
                      medical coverage, in case of an accident.
                    </label>
                  </div>
                  <div className="col-12 p-3 text-end">
                    <label className="link-avis" style={{ cursor: "pointer" }}>
                      Learn More{" "}
                    </label>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6 pe-5 pb-5">
                <Link
                  to={{
                    pathname: `${process.env.PUBLIC_URL}/protection/detail/Personal-Effect-Insurance-(PEP)`,
                  }}
                  className="row"
                  style={myCard}
                >
                  <div className="col-12 p-3">
                    <label className="mb-2" style={myHead}>
                      <div className="row" style={{ cursor: "pointer" }}>
                        <div className="col-sm-3" style={{ cursor: "pointer" }}>
                          <img
                            className="img-fluid"
                            src={publicUrl + "assets/images/resources/PEP.png"}
                            alt=""
                          />
                        </div>
                        <div
                          className="col-sm-9 align-self-center text-black"
                          style={{ cursor: "pointer" }}
                        >
                          Personal Effect Insurance (PEP)
                        </div>
                      </div>
                    </label>
                    <label
                      className="text-avis mt-2 text-black"
                      style={{ cursor: "pointer" }}
                    >
                      Covers your personal belongings during your trip.
                    </label>
                  </div>
                  <div className="col-12 p-3 text-end">
                    <label className="link-avis" style={{ cursor: "pointer" }}>
                      Learn More{" "}
                    </label>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6 pe-5 pb-5">
                <Link
                  to={{
                    pathname: `${process.env.PUBLIC_URL}/protection/detail/Additional-Liability-Insurance-(ALI)`,
                  }}
                  className="row"
                  style={myCard}
                >
                  <div className="col-12 p-3">
                    <label className="mb-2" style={myHead}>
                      <div className="row" style={{ cursor: "pointer" }}>
                        <div className="col-sm-3" style={{ cursor: "pointer" }}>
                          <img
                            className="img-fluid"
                            src={publicUrl + "assets/images/resources/ALI.avif"}
                            alt=""
                          />
                        </div>
                        <div
                          className="col-sm-9 align-self-center text-black"
                          style={{ cursor: "pointer" }}
                        >
                          Additional Liability Insurance (ALI)
                        </div>
                      </div>
                    </label>
                    <label
                      className="text-avis mt-2 text-black"
                      style={{ cursor: "pointer" }}
                    >
                      ALI is excess automobile liability insurance that protects
                      you and all authorized drivers against third-party bodily
                      injury and property-damage claims
                    </label>
                  </div>
                  <div className="col-12 p-3 text-end">
                    <label className="link-avis" style={{ cursor: "pointer" }}>
                      Learn More{" "}
                    </label>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-sm-6 pe-5 pb-5">
                <Link
                  to={{
                    pathname: `${process.env.PUBLIC_URL}/protection/detail/Emergency-Sickness-Plan-(ESP)`,
                  }}
                  className="row"
                  style={myCard}
                >
                  <div className="col-12 p-3">
                    <label className="mb-2" style={myHead}>
                      <div className="row" style={{ cursor: "pointer" }}>
                        <div className="col-sm-3" style={{ cursor: "pointer" }}>
                          <img
                            className="img-fluid"
                            src={
                              publicUrl +
                              "assets/images/resources/ESP_Icon.avif"
                            }
                            alt=""
                          />
                        </div>
                        <div
                          className="col-sm-9 align-self-center text-black"
                          style={{ cursor: "pointer" }}
                        >
                          Emergency Sickness Plan (ESP)
                        </div>
                      </div>
                    </label>
                    <label
                      className="text-avis mt-2 text-black"
                      style={{ cursor: "pointer" }}
                    >
                      ESP provides international renters visiting the U.S. with
                      coverage for medical expenses resulting from sickness.
                    </label>
                  </div>
                  <div className="col-12 p-3 text-end">
                    <label className="link-avis" style={{ cursor: "pointer" }}>
                      Learn More{" "}
                    </label>
                  </div>
                </Link>
              </div>
            </div>
            <div className="container flex row pt-4">
              <hr className="col-sm-12" />
            </div>
            <div className="row pt-4">
              <h4 className="text-up text-black fw-normal">
                For rentals in the rest of the world.
              </h4>
              <p className="">
                For complete peace of mind during your rental, we offer a
                variety of additional cover packages to reduce your excess, or
                to protect and support you in the event of an accident or
                vehicle breakdown.
              </p>
              <p className="">
                At the rental counter, you can add the additional cover for your
                car rental.
              </p>
            </div>
            <div className="col-12 mt-4 p-3" style={myCard}>
              <label className="mb-2">
                <div className="row">
                  <div className="col-sm-12 align-self-center text-black">
                    Collision Damage Waiver (CDW) and Super Collision Damage
                    Waiver (SCDW)
                  </div>
                </div>
              </label>
              <label className="text-avis mt-2 text-black">
                CDW reduces your excess which means if there's new,
                non-negligent damage to the outer body of the vehicle, you will
                pay a significantly reduced cost, if any cost at all. SCDW
                reduces the excess further, in some countries it is zero excess.
                Once selected, this product will be added to your rental
                agreement at the beginning of your rental with any associated
                costs already quoted to you. This will be charged to your
                payment card at the end of your rental along with any other
                rental charges. Local terms and conditions apply.
              </label>
            </div>
            <div className="col-12 mt-4 p-3" style={myCard}>
              <label className="mb-2">
                <div className="row">
                  <div className="col-sm-12 align-self-center text-black">
                    Theft Protection (TP) and Super Theft Protection (STP)
                  </div>
                </div>
              </label>
              <label className="text-avis mt-2 text-black">
                TP reduces your excess which means if your rental vehicle is
                stolen, you will pay a significantly reduced cost, if any cost
                at all. STP reduces the excess further, in some countries it is
                zero excess. Check the excess amount indicated on your rental
                agreement to learn the maximum amount the driver would be liable
                for in the event that the vehicle is stolen. Once selected, this
                product will be added to your rental agreement at the beginning
                of your rental with any associated costs already quoted to you.
                This will be charged to your payment card at the end of your
                rental along with any other rental charges. Local terms and
                conditions apply.
              </label>
            </div>
            <div className="col-12 mt-4 p-3" style={myCard}>
              <label className="mb-2">
                <div className="row">
                  <div className="col-sm-12 align-self-center text-black">
                    Roadside Assistance Plus (RSN)
                  </div>
                </div>
              </label>
              <label className="text-avis mt-2 text-black">
                RSN is our Roadside Safety Net product. In addition to the
                standard breakdown assistance included with your rental, our
                Roadside Assistance Plus (or Premium Roadside Assistance)
                service covers any non-mechanical issue you may face. This
                product removes ancillary costs that may be associated with a
                vehicle breakdown, such as jump starts or towing fees. When
                selected, RSN will be included on your signed rental agreement
                at the beginning of your rental. It will be charged at the end
                of the rental along with any outstanding rental charges. Local
                terms and conditions apply.
              </label>
            </div>
            <div className="col-12 mt-4 p-3" style={myCard}>
              <label className="mb-2">
                <div className="row">
                  <div className="col-sm-12 align-self-center text-black">
                    Personal Accident Insurance (PAI) or Super Personal Accident
                    Insurance (SPAI)
                  </div>
                </div>
              </label>
              <label className="text-avis mt-2 text-black">
                PAI can provides you with additional cover following an
                accident, including emergency medical care, transportation, lost
                luggage and cover for unexpected costs. We’ve partnered with
                insurance company in rental country to offer you and your
                passengers first-class protection for personal injury and
                emergency medical support and transport.
              </label>
            </div>
            <div className="col-12 mt-4 p-3" style={myCard}>
              <label className="mb-2">
                <div className="row">
                  <div className="col-sm-12 align-self-center text-black">
                    Windscreen Cover (WDW)
                  </div>
                </div>
              </label>
              <label className="text-avis mt-2 text-black">
                Windscreen Protection reduces your windscreen excess to zero
                which means if there's new, non-negligent damage to the
                windscreen of the vehicle, you will pay a significantly reduced
                cost, if any cost at all. Once selected, this product will be
                added to your rental agreement at the beginning of your rental
                with any associated costs already quoted to you. This will be
                charged to your payment card at the end of your rental along
                with any other rental charges.
              </label>
            </div>
          </div>
        </section>
      </>
    );
  }
}
