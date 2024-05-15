import React, { useEffect, useState, Component } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { getToken } from "../../core/functions";

class EXN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extra: [],
    };
  }

  handleCheckboxChange = (event) => {
    if (event.target.checked) {
      if (!this.state.extra.includes(event.target.value)) {
        this.setState((prevState) => ({
          extra: [...prevState.extra, event.target.value],
        }));
      }
    } else {
      this.setState((prevState) => ({
        extra: prevState.extra.filter((val) => val !== event.target.value),
      }));
    }
  };

  formatDate(va) {
    const options = { month: "long", day: "numeric", year: "numeric" };
    const date = new Date(va);
    return date.toLocaleDateString(undefined, options);
  }

  gotoRev() {
    this.props.navigate("/reviewandbook", {
      state: {
        location: this.props.before.location,
        date: this.props.before.date,
        time: this.props.before.time,
        return_location: this.props.before.return_location,
        return_date: this.props.before.return_date,
        return_time: this.props.before.return_time,
        age: this.props.before.age,
        country: this.props.before.country,
        user_id: this.props.before.user_id,
        offer_code: this.props.before.offer_code,
        vehicle: this.props.before.vehicle,
        extra: this.state.extra,
        vehicle: this.props.before.vehicle,
        total: this.props.before.total,
        tax: this.props.tax,
        price: this.props.price,
        totalPrice: this.props.total,
        img: this.props.before.img,
        name: this.props.before.name,
        model: this.props.before.model,
        make: this.props.before.make,
      },
    });
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const myLink = {
      color: "rgb(212, 0, 42)",
    };
    const myBorder = {
      borderBottom: "2px solid rgb(212, 0, 42)",
    };
    const myLinkDis = {
      color: "rgb(168, 168, 168)",
    };
    const myBorderDis = {
      borderBottom: "2px solid rgb(168, 168, 168)",
    };
    const btnLink = {
      backgroundColor: "rgb(212, 0, 42)",
      color: "rgb(255, 255, 255)",
      padding: "0px 50px",
      // height: "50px"
    };
    return (
      <>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <p style={myLinkDis}>1</p>
                <p style={myBorderDis}></p>
              </div>
              <div className="col-sm-3">
                <p style={myLinkDis}>2</p>
                <p style={myBorderDis}></p>
              </div>
              <div className="col-sm-3">
                <p style={myLink}>3 Rental Option</p>
                <p style={myBorder}></p>
              </div>
              <div className="col-sm-3">
                <p style={myLinkDis}>4</p>
                <p style={myBorderDis}></p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row mt-4">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-6 border-bottom">
                    <div className="row text-black">
                      <div className="col-sm-6">
                        <p style={myLink}>Pick-Up</p>
                        <p>{this.props.before.location}</p>
                        <p>
                          <b>
                            {this.props.before.time}{" "}
                            {this.formatDate(this.props.before.date)}
                          </b>
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <p style={myLink}>Return</p>
                        <p>{this.props.before.location}</p>
                        <p>
                          <b>
                            {this.props.before.return_time}{" "}
                            {this.formatDate(this.props.before.return_date)}
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 border-start border-bottom">
                    <div className="row text-black">
                      <div className="col-sm-6">
                        <p>Base Rate</p>
                        <p style={myLink}>Taxes & Fees</p>
                        <p>Estimated Total</p>
                        <p style={myLink}>See Rate Terms</p>
                      </div>
                      <div className="col-sm-6 text-end">
                        <p>{this.props.price}</p>
                        <p>{this.props.tax}</p>
                        <p>
                          <b>{this.props.total}</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="row mt-2 text-black">
                      <div className="col-sm-3">
                        <img
                          src={this.props.before.img}
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-sm-9">
                        {/* <p><h5 className='text-dark'>{this.props.car.name}</h5></p> */}
                        <p>
                          <h5 className="text-dark">
                            {this.props.before.name}
                          </h5>
                        </p>
                        <p>
                          {this.props.before.make} {this.props.before.model}
                        </p>
                        <div className="col-sm-9">
                          <p>
                            <img src="/assets/images/icon/user.png" />{" "}
                            {this.props.before.vehicle.capacity.seats}
                            <img
                              src="/assets/images/icon/suitcase.png"
                              className="ms-2"
                            />{" "}
                            {
                              this.props.before.vehicle.capacity
                                .luggage_capacity.large_suitcase
                            }
                            L
                            <img
                              src="/assets/images/icon/suitcase.png"
                              className="ms-2"
                            />{" "}
                            {
                              this.props.before.vehicle.capacity
                                .luggage_capacity.large_suitcase
                            }
                            S
                          </p>
                          <p>
                            {
                              this.props.before.vehicle.category
                                .vehicle_transmission
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 border-start text-end text-success">
                    <p>Other Information</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row mt-4 py-4 border-top border-bottom">
              <div className="col-sm-4 align-self-center">
                <h4 className="text-dark">RECOMMENDED EXTRAS</h4>
              </div>
              <div className="col-sm-8 text-end">
                <button
                  className="btn py-2 me-3"
                  style={btnLink}
                  onClick={(e) => this.gotoRev()}
                >
                  Pay Later
                </button>
                <button
                  className="btn py-2"
                  style={btnLink}
                  onClick={(e) => this.gotoRev()}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row mt-4">
              <div className="col-sm-12">
                <h5>Equipment & Services</h5>
              </div>
            </div>
            {Object.keys(this.props.service).map((is, i) => (
              <div className="row mt-4">
                <div className="col-sm-1">
                  <img
                    className="pe-2 img-fluid"
                    src={
                      publicUrl + "assets/images/resources/protection-ldw.avif"
                    }
                  />
                </div>
                <div className="col-sm-8 align-self-center">
                  <b>{this.props.service[is].name}</b>
                  <p>{this.props.service[is].description}</p>
                </div>
                <div className="col-sm-3 align-self-center">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <div
                        className="input-group-text h-100"
                        style={{ backgroundColor: "rgb(212, 0, 42)" }}
                      >
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                          id={this.props.service[is].additional_feature_id}
                          value={this.props.service[is].additional_feature_id}
                          onChange={this.handleCheckboxChange}
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      readOnly="true"
                      value={this.props.service[is].basic_price}
                      style={{
                        backgroundColor: "rgb(212, 0, 42)",
                        color: "#fff",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* End Slogan One */}
      </>
    );
  }
}

function EX(props) {
  let navigate = useNavigate();
  const [service, setService] = useState([]);
  const [car, setCar] = useState([]);
  const [spec, setSpec] = useState([]);
  const [price, setPrice] = useState("");
  const [tax, setTax] = useState("");
  const [fee, setFee] = useState("");
  const [total, setTotal] = useState("");

  // Run Function when pages loaded
  useEffect(() => {
    // Axios.post(
    //     `${API_URL}/api/booking/extra`,
    //     // `${API_URL}/api/booking/extra`,
    //     {
    //         date: props.before.date,
    //         return_date: props.before.return_date,
    //         car: props.before.vehicle,
    //     },
    //     {
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + localStorage.getItem('token'),
    //         }
    //     },
    // ).then((res) => {
    //     setService(res.data.additional);
    //     setCar(res.data.car);
    //     setSpec(res.data.spec);
    //     setPrice(res.data.price);
    //     setTax(res.data.pajak);
    //     setFee(res.data.fee);
    //     setTotal(res.data.total);
    //     console.log(res);
    // });

    const token = getToken();
    Axios.post(
      "https://stage.abgapiservices.com/cars/catalog/v2/vehicles/rates",
      {
        product: {
          brand: "Avis",
        },
        reservation: {
          pickup_date: new Date(props.before.date)
            .toISOString()
            .split(".", 1)[0],
          pickup_location: props.before.location,
          dropoff_date: new Date(props.before.return_date)
            .toISOString()
            .split(".", 1)[0],
          dropoff_location: props.before.return_location == "" || props.before.return_location == null ? props.before.location : props.before.return_location,
          vehicle_sipp_code: props.before.vehicle?.category.sipp_code,
        },
        rate_totals: {
          rate: {
            country_code: props.before.country,
            rate_code:
              props.before.typeOrder == "PL"
                ? props.before.vehicle?.rate_totals?.pay_later?.rate_code
                : props.before.vehicle?.rate_totals?.pay_now?.rate_code,
            discount: {
              code: props.before.vehicle?.rate_totals?.rate?.discount?.code,
            },
            membership: {
              code: "",
            },
            coupon: {
              code: "",
            },
          },
        },
      },
      {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("bebe"),
          client_id: "04e19f27",
        },
      }
    )
      .then(function (response) {
        // handle success
        // console.log(response.data);
        return response.data;
      })
      .then(function (data) {
        // handle success
        console.log("DATA RATE REQ: " + data.reservation.rate_totals);
        setPrice(
          data.reservation.rate_totals?.rate.currency +
          " " +
          data.reservation.rate_totals.totals.vehicle_total
        );
        setTax(
          data.reservation.rate_totals.rate.currency +
          " " +
          data.reservation.rate_totals.totals.taxes_fees_total
        );
        setTotal(
          data.reservation.rate_totals.rate.currency +
          " " +
          data.reservation.rate_totals.totals.reservation_total
        );
        // setCars2(data.vehicles);
        // setRes(data.reservation);
        // console.log(cars2);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <EXN
      {...props}
      navigate={navigate}
      service={service}
      car={car}
      price={price}
      tax={tax}
      fee={fee}
      total={total}
    />
  );
}

export default EX;
