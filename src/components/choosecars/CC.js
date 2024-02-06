import React, { useEffect, useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { getToken } from '../../core/functions';
import avisInlusive from '../../avis_inclusive_country.json';

// export default 
class CCN extends React.Component {

    formatDate(va) {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const date = new Date(va);
        return date.toLocaleDateString(undefined, options);
    }

    gotoExtra(vehicle, cars, total, img, name, model, make) {
        this.props.navigate('/extra', {
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
                vehicle: vehicle,
                cars: cars,
                total: total,
                img: img,
                name: name,
                model: model,
                make: make,
                typeOrder: "PL"
            }
        });
    }
    render() {
        console.log("CARS AWD : " + this.props.carsAwd);
        let publicUrl = process.env.PUBLIC_URL + '/';
        const myLink = {
            color: "rgb(212, 0, 42)",
        };
        const myBorder = {
            borderBottom: "2px solid rgb(212, 0, 42)"
        }
        const myLinkDis = {
            color: "rgb(168, 168, 168)",
        };
        const myBorderDis = {
            borderBottom: "2px solid rgb(168, 168, 168)"
        }
        const btnLink = {
            backgroundColor: "rgb(212, 0, 42)",
            color: "rgb(255, 255, 255)",
            padding: "0px 50px",
            width: "45%"
            // height: "50px"
        }
        return (
            <>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <p style={myLinkDis}>1</p>
                                <p style={myBorderDis}></p>
                            </div>
                            <div className='col-sm-3'>
                                <p style={myLink}>2 Select a Car</p>
                                <p style={myBorder}></p>
                            </div>
                            <div className='col-sm-3'>
                                <p style={myLinkDis}>3</p>
                                <p style={myBorderDis}></p>
                            </div>
                            <div className='col-sm-3'>
                                <p style={myLinkDis}>4</p>
                                <p style={myBorderDis}></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='row mt-4'>
                            <div className='col-sm-6 col-lg-4'>
                                <p style={myLink}><b>Pick-Up</b></p>
                                <p>{this.props.before.location}</p>
                                <p><b>{this.props.before.time} {this.formatDate(this.props.before.date)}</b></p>
                            </div>
                            <div className='col-sm-6 col-lg-4 border-start'>
                                <p style={myLink}><b>Return</b></p>
                                <p>{this.props.before.location}</p>
                                <p><b>{this.props.before.return_time} {this.formatDate(this.props.before.return_date)}</b></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='row mt-4'>
                            <div className='col-sm-12 col-lg-12'>
                                <hr></hr>
                            </div>
                            {/* <div className='col-sm-6 col-lg-4'>
                                <a href="#" style={myLink}>Modify Rental Details</a>
                            </div> */}
                        </div>
                    </div>
                </section>
                <section style={{ backgroundColor: "#eaeaea" }}>
                    <div className='container'>
                        <div className='row pt-2'>
                            <div className='col-lg-3'>
                                <div className="input-group mb-2">
                                    <span className="input-group-text" id="basic-addon1">Showing:</span>
                                    <select className='form-control'>
                                        <option>All Vehicles</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className="input-group mb-2">
                                    <span className="input-group-text" id="basic-addon2">Sort by:</span>
                                    <select className='form-control'>
                                        <option>Low to High</option>
                                        <option>High to Low</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className="input-group mb-2">
                                    {/* <span className="input-group-text" id="basic-addon2">Add:</span> */}
                                    <input className='form-control' type='text' placeholder='Add Discount Code' />
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className="input-group mb-2">
                                    <span className="input-group-text" id="basic-addon2">Currency:</span>
                                    <select className='form-control'>
                                        <option>USD</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        {this.props.cars2.length > 0 ? (
                            this.props.cars2.map((ic, i) => (
                                <div className='row mt-4'>
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-sm-3'>
                                                <img src={ic.category.small_image_url} className="img-fluid" />
                                            </div>
                                            <div className='col-sm-3'>
                                                <p><h4 className='text-dark'>{ic.category.name}</h4></p>
                                                <p>{ic.category.make} {ic.category.model}</p>
                                                <p className='text-black'>
                                                    <img src="/assets/images/icon/user.png" /> {ic.capacity.seats}
                                                    <img src="/assets/images/icon/suitcase.png" className='ms-2' /> {ic.capacity.luggage_capacity.large_suitcase}L
                                                    <img src="/assets/images/icon/suitcase.png" className='ms-2' /> {ic.capacity.luggage_capacity.small_suitcase}S
                                                </p>
                                                <p>{ic.category.vehicle_transmission}</p>
                                                {/* <p><a href='#' style={myLink}>View Vehicle Information</a></p> */}
                                            </div>
                                            <div className='col-sm-6'>
                                                {this.props.before.countryPick == "US" ? (<>
                                                    <div className='row justify-content-between mt-4'>
                                                        <div className='col-sm-5'><h4 className='text-dark'>APA All Inclusive</h4></div>
                                                        <div className='col-sm-5'><h4 className='text-dark'>$ {ic.rate_totals.pay_later.reservation_total}</h4></div>
                                                        <div className='col-sm-1'><input type='radio' name='rate_code' className='form-check-input' value={"XX"} /></div>
                                                    </div>
                                                    <div className='row justify-content-between mt-4'>
                                                        <div className='col-sm-5'><h4 className='text-dark'>GPS Inclusive</h4></div>
                                                        <div className='col-sm-5'><h4 className='text-dark'>$ {ic.rate_totals.pay_later.reservation_total}</h4></div>
                                                        <div className='col-sm-1'><input type='radio' name='rate_code' className='form-check-input' value={"XX"} /></div>
                                                    </div>
                                                </>) : this.props.before.countryPick == "CA" ? (<div className='row justify-content-between mt-4'>
                                                    <div className='col-sm-5'><h4 className='text-dark'>APAC</h4></div>
                                                    <div className='col-sm-5'><h4 className='text-dark'>$ {ic.rate_totals.pay_later.reservation_total}</h4></div>
                                                    <div className='col-sm-1'><input type='radio' name='rate_code' className='form-check-input' value={"XX"} /></div>
                                                </div>) : this.props.carsAwd.length > 0 ? <>
                                                    <div className='row justify-content-between mt-4'>
                                                        <div className='col-sm-5'><h4 className='text-dark'>Avis Inclusive Rate</h4></div>
                                                        <div className='col-sm-5'><h4 className='text-dark'>$ {this.props.carsAwd.length > i ? this.props.carsAwd[i].rate_totals.pay_later.reservation_total : ''}</h4></div>
                                                        <div className='col-sm-1'><input type='radio' name='rate_code' className='form-check-input' value={"XX"} /></div>
                                                    </div>
                                                    <div className='row justify-content-between mt-4'>
                                                        <div className='col-sm-5'><h4 className='text-dark'>Basic Rate</h4></div>
                                                        <div className='col-sm-5'><h4 className='text-dark'>$ {ic.rate_totals.pay_later.reservation_total}</h4></div>
                                                        <div className='col-sm-1'><input type='radio' name='rate_code' className='form-check-input' value={"XX"} /></div>
                                                    </div>
                                                </> : <div className='row justify-content-between'><div className='col-sm-5'><h4 className='text-dark'>Basic Rate</h4></div>
                                                    <div className='col-sm-5'><h4 className='text-dark'>$ {ic.rate_totals.pay_later.reservation_total}</h4></div>
                                                    <div className='col-sm-1'><input type='radio' name='rate_code' className='form-check-input' value={"XX"} /></div></div>}

                                                {/* {this.props.before.countryPick == "CA" ? (<>
                                                    <div className='row justify-content-between mt-4'>
                                                        <div className='col-sm-5'><h4 className='text-dark'>Avis Inclusive Rate</h4></div>
                                                        <div className='col-sm-5'><h4 className='text-dark'>$ {ic.rate_totals.pay_later.reservation_total}</h4></div>
                                                        <div className='col-sm-1'><input type='radio' name='rate_code' className='form-check-input' value={"XX"} /></div>
                                                    </div>
                                                </>) : null}

                                                {this.props.before.countryPick != "US" && this.props.before.countryPick != "CA" ? (<div className='row justify-content-between mt-4'>
                                                    <div className='col-sm-5'><h4 className='text-dark'>Basic Rate</h4></div>
                                                    <div className='col-sm-5'><h4 className='text-dark'>$ {ic.rate_totals.pay_later.reservation_total}</h4></div>
                                                    <div className='col-sm-1'><input type='radio' name='rate_code' className='form-check-input' value={"XX"} /></div>
                                                </div>) : null} */}

                                                <div className='row justify-content-end mt-5'>
                                                    <button className="btn py-2" style={{ ...btnLink }} onClick={(e) => this.gotoExtra(ic, ic.rate_totals.pay_later.sipp_code, ic.rate_totals.pay_later.reservation_total, ic.category.small_image_url, ic.category.name, ic.category.model, ic.category.make)}>Choose</button>
                                                    {/* <button className="btn py-2" style={{ ...btnLink }} onClick={(e) => this.gotoExtra(ic, ic.rate_totals.pay_later.sipp_code, ic.rate_totals.pay_later.reservation_total, ic.category.small_image_url, ic.category.name, ic.category.model, ic.category.make)}>Pay Now</button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <hr></hr>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='row mt-4 py-4'><div className='col-sm-12 text-center'><h1 style={myLink}>{this.props.msgResult}</h1></div></div>
                        )}
                        {/* {Object.keys(this.props.cars).map((ic, i) => (
                        <div className='row mt-4'>
                            <div className='col-sm-12'>
                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <img src={process.env.PUBLIC_URL + "/assets/cars-budget/car2.webp"} className="img-fluid" />
                                    </div>
                                    <div className='col-sm-3'>
                                        <p><h4 className='text-dark'>{this.props.cars[ic].name}</h4></p>
                                        <p>Citreon C1 or similar</p>
                                        <p className='text-black'>
                                            <img src="/assets/images/icon/user.png" /> 5
                                            <img src="/assets/images/icon/suitcase.png" className='ms-2' /> 2L
                                            <img src="/assets/images/icon/suitcase.png" className='ms-2' /> 2S
                                        </p>
                                        <p>Manual Transmision</p>
                                        <p><a href='#' style={myLink}>View Vehicle Information</a></p>
                                    </div>
                                    <div className='col-sm-3'>
                                        {Object.keys(this.props.price).map((ip, j) => (
                                            <p>
                                                {
                                                    (() => {
                                                        if(this.props.price[ip].cars_id == ic && this.props.price[ip].active == 1) {
                                                            return (
                                                                <h4 className='text-dark'>{this.props.price[ip].basic_price}</h4>
                                                            )
                                                        } else {
                                                            return (
                                                                <p></p>
                                                            )
                                                        }
                                                    })()  
                                                }
                                            </p>
                                        ))}
                                        <button className="btn py-2" style={btnLink} onClick={(e)=>this.gotoExtra(this.props.cars[ic].cars_id)}>Pay Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12'>
                                <hr></hr>
                            </div>
                        </div>
                        ))} */}
                    </div>
                </section>
                {/* End Slogan One */}
            </>
        )
    }
}

function CC(props) {
    let navigate = useNavigate();
    const [cars, setCars] = useState([]);
    const [specs, setSpecs] = useState([]);
    const [price, setPrice] = useState([]);
    const [cars2, setCars2] = useState([]);
    const [carsAwd, setCarsAwd] = useState([]);
    const [res, setRes] = useState([]);
    const [msgResult, setMsgResult] = useState("Finding recommended cars for you...");
    const date1 = new Date(props.before.date);
    const date2 = new Date(props.before.return_date);;
    const iso1 = date1.toISOString();
    const iso2 = date2.toISOString();

    const getCars = () => {
        Axios.get('https://backend.avis-id.com/public/api/booking/car')
            .then(function (response) {
                // handle success
                // console.log(response.data);
                return response.data;
            })
            .then(function (data) {
                // handle success
                // console.log(data);
                setCars(data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    // Run Function when pages loaded
    useEffect(() => {
        getToken();
        // getCars()
        // Axios.get('https://backend.avis-id.com/public/api/booking/car')
        //     .then(function (response) {
        //         // handle success
        //         // console.log(response.data);
        //         return response.data;
        //     })
        //     .then(function (data) {
        //         // handle success
        //         // console.log(data);
        //         setCars(data.car);
        //         setPrice(data.price);
        //         setSpecs(data.spec);
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .finally(function () {
        //         // always executed
        //     });
        const token = getToken();
        Axios.get(
            'https://stage.abgapiservices.com/cars/catalog/v2/vehicles?brand=Avis&pickup_date=' + iso1.split('.', 1)[0] + '&pickup_location=' + props.before.location + '&membership_code=' + props.before.wizard_number + '&dropoff_date=' + iso2.split('.', 1)[0] + '&dropoff_location=' + props.before.return_location + '&country_code=' + props.before.country + '&coupon_code=' + props.before.coupon_code + '&transaction_id&member_code',
            {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('bebe'),
                    'client_id': '04e19f27'
                }
            },
        )
            .then(function (response) {
                // handle success
                // console.log(response.data);
                return response.data;
            })
            .then(function (data) {
                // handle success
                console.log("NO AWD LENGTH : " + data.vehicles.length);
                setCars2(data.vehicles);
                setRes(data.reservation);

                const findCountry = avisInlusive.find((item) => item.country_code == props.before.countryPick);

                console.log("FIND COUNTRY: ", findCountry);

                const ifReturnDateAndDroffDateIs1DaysBetween3days = (returnDate, dropoffDate) => {
                    const date1 = new Date(returnDate);
                    const date2 = new Date(dropoffDate);
                    const diffTime = Math.abs(date2 - date1);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    return diffDays;
                }
                console.log("FIND COUNTRY: ", findCountry);
                const dateDiff = ifReturnDateAndDroffDateIs1DaysBetween3days(props.before.date, props.before.return_date);

                if (findCountry != undefined && dateDiff >= 1 && dateDiff <= 13) {
                    // I017600
                    Axios.get(
                        'https://stage.abgapiservices.com/cars/catalog/v2/vehicles?brand=Avis&pickup_date=' + iso1.split('.', 1)[0] + '&pickup_location=' + props.before.location + '&membership_code=' + props.before.wizard_number + '&dropoff_date=' + iso2.split('.', 1)[0] + '&dropoff_location=' + props.before.return_location + '&country_code=' + props.before.country + '&discount_code=I017600' + '&coupon_code=' + props.before.coupon_code + '&transaction_id&member_code',
                        {
                            headers: {
                                'Accept': '*/*',
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + localStorage.getItem('bebe'),
                                'client_id': '04e19f27'
                            }
                        },
                    )
                        .then(function (response2) {
                            // handle success
                            // console.log(response2.data);
                            return response2.data;
                        })
                        .then(function (data2) {
                            // handle success
                            console.log("AWD LENGTH : " + data2.vehicles.length);
                            setCarsAwd(data2.vehicles);
                            // console.log(cars2);
                        }).catch(function (error2) {
                            // handle error
                            console.log("no awd");
                        })
                } else if (findCountry != undefined && dateDiff >= 14 && dateDiff <= 27) {
                    // I068100
                    Axios.get(
                        'https://stage.abgapiservices.com/cars/catalog/v2/vehicles?brand=Avis&pickup_date=' + iso1.split('.', 1)[0] + '&pickup_location=' + props.before.location + '&membership_code=' + props.before.wizard_number + '&dropoff_date=' + iso2.split('.', 1)[0] + '&dropoff_location=' + props.before.return_location + '&country_code=' + props.before.country + '&discount_code=I068100' + '&coupon_code=' + props.before.coupon_code + '&transaction_id&member_code',
                        {
                            headers: {
                                'Accept': '*/*',
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + localStorage.getItem('bebe'),
                                'client_id': '04e19f27'
                            }
                        },
                    )
                        .then(function (response2) {
                            // handle success
                            // console.log(response2.data);
                            return response2.data;
                        })
                        .then(function (data2) {
                            // handle success
                            console.log("AWD LENGTH : " + data2.vehicles.length);
                            setCarsAwd(data2.vehicles);
                            // console.log(cars2);
                        }).catch(function (error2) {
                            // handle error
                            console.log("no awd");
                        })
                } else {
                    console.log("NO AVIS INCLUSIVE FOR THIS COUNTRY");
                }

            })
            .catch(function (error) {
                // handle error
                setMsgResult("No cars available for your search criteria.");
                if (error.response.status == 401) {
                    window.location.reload();
                } else if (error.response.status == 400) {
                    setMsgResult(error.response.data.status.errors[0].details);
                }
            })
            .finally(function () {
                // always executed
            });
    }, [])
    return <CCN {...props} navigate={navigate} cars={cars} price={price} specs={specs} cars2={cars2} res={res} msgResult={msgResult} carsAwd={carsAwd} />
}

export default CC; 