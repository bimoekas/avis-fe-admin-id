import React, { useEffect, useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { API_URL } from '../../core/constant';

class RBN extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        }
    }

    formatDate(va) {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const date = new Date(va);
        return date.toLocaleDateString(undefined, options);
    }

    generateRandomNumbers() {
        var randomNumbers = [];
        for (var i = 0; i < 9; i++) {
            randomNumbers.push(Math.floor(Math.random() * 100)); // Adjust the range as needed
        }
        return randomNumbers;
    }

    gotoBook(e) {
        e.preventDefault();

        localStorage.setItem('brand', 'Avis')
        localStorage.setItem('transaction_id', this.generateRandomNumbers().toString())
        localStorage.setItem('pickup_date', this.props.before.date)
        localStorage.setItem('pickup_time', this.props.before.time)
        localStorage.setItem('pickup_location', this.props.before.location)
        localStorage.setItem('dropoff_date', this.props.before.return_date)
        localStorage.setItem('dropoff_time', this.props.before.return_time)
        localStorage.setItem('dropoff_location', this.props.before.return_location)
        localStorage.setItem('vehicle_sipp_code', this.props.before.vehicle.category.sipp_code)
        localStorage.setItem('rate_code', this.props.before.vehicle.rate_totals.rate.rate_code)
        localStorage.setItem('amount', this.props.before.vehicle.rate_totals.pay_later.reservation_total)
        localStorage.setItem('first_name', this.state.firstName)
        localStorage.setItem('last_name', this.state.lastName)
        localStorage.setItem('telephone', this.state.phone)
        localStorage.setItem('email', this.state.email)
        localStorage.setItem('age', this.props.before.age)


        var tax = parseFloat(this.props.before.tax.split(' ')[1]) * 14000;
        var price = parseFloat(this.props.before.price.split(' ')[1]) * 14000;
        tax += (tax + price) * 5 / 100;
        var total_pay = tax + price;
        Axios.post(
            `${API_URL}/api/booking/save`,
            // `${API_URL}/api/booking/save`,
            {
                productType: 'Avis',
                location: this.props.before.location,
                date: this.props.before.date,
                time: this.props.before.time,
                return_location: this.props.before.return_location,
                return_date: this.props.before.return_date,
                return_time: this.props.before.return_time,
                age: this.props.before.age,
                emailForm: this.state.email,
                country: this.props.before.country,
                customer_id: localStorage.getItem('customer_id'),
                offer_code: this.props.before.offer_code,
                car_id: this.props.before.vehicle,
                // extra: this.props.before.extra,
                total: Math.round(total_pay),
                car_img: this.props.before.img,
                car_name: this.props.before.name,
                car_model: this.props.before.model,
                car_make: this.props.before.make
            },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            },
        ).then((res) => {
            console.log(res.data.status);
            if (res.data.status == false) {
                alert(res.data.msg);
            } else {
                localStorage.setItem('rent_id', res.data.booking_code);
                this.props.navigate('/bookingdetail', {
                    state: {
                        booking: res.data.booking_code,
                        price: price,
                        tax: tax,
                        total_pay: Math.round(total_pay),
                        date: this.props.before.date,
                        time: this.props.before.time,
                        return_date: this.props.before.return_date,
                        return_time: this.props.before.return_time,
                        location: this.props.before.location,
                        return_location: this.props.before.return_location,
                        vehicle: this.props.before.vehicle,
                    }
                });
            }
        });
        // post api create reservation
    }

    render() {
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
        };
        const btnLink = {
            backgroundColor: "rgb(212, 0, 42)",
            color: "rgb(255, 255, 255)",
            padding: "0px 50px",
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
                                <p style={myLinkDis}>2</p>
                                <p style={myBorderDis}></p>
                            </div>
                            <div className='col-sm-3'>
                                <p style={myLinkDis}>3</p>
                                <p style={myBorderDis}></p>
                            </div>
                            <div className='col-sm-3'>
                                <p style={myLink}>4 YOUR INFORMATION</p>
                                <p style={myBorder}></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='row mt-4'>
                            <div className='col-sm-12'>
                                <div className='row'>
                                    <div className='col-sm-6 border-bottom'>
                                        <div className='row'>
                                            <div className='col-sm-6'>
                                                <p style={myLink}>Pick-Up</p>
                                                <p>{this.props.before.location}</p>
                                                <p><b>{this.props.before.time} {this.formatDate(this.props.before.date)}</b></p>
                                            </div>
                                            <div className='col-sm-6'>
                                                <p style={myLink}>Return</p>
                                                <p>{this.props.before.return_location}</p>
                                                <p><b>{this.props.before.reutrn_time} {this.formatDate(this.props.before.return_date)}</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 border-start border-bottom'>
                                        <div className='row'>
                                            <div className='col-sm-6'>
                                                <p>Base Rate</p>
                                                <p style={myLink}>Taxes & Fees</p>
                                                <p>Estimated Total</p>
                                                <p style={myLink}>See Rate Terms</p>
                                            </div>
                                            <div className='col-sm-6 text-end'>
                                                <p>{this.props.before.price}</p>
                                                <p>{this.props.before.tax}</p>
                                                <p><b>{this.props.before.totalPrice}</b></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row border-bottom'>
                                    <div className='col-sm-6'>
                                        <div className='row mt-2'>
                                            <div className='col-sm-3'>
                                                <img src={this.props.before.vehicle.category.image_url} className="img-fluid" />
                                            </div>
                                            <div className='col-sm-9'>
                                                <p><h5 className='text-dark'>{this.props.before.vehicle.category.name}</h5></p>
                                                <p>{this.props.before.vehicle.category.make} {this.props.before.vehicle.category.model}</p>
                                                <p>
                                                    <img src="/assets/images/icon/user.png" /> {this.props.before.vehicle.capacity.seats}
                                                    <img src="/assets/images/icon/suitcase.png" className='ms-2' /> {this.props.before.vehicle.capacity.luggage_capacity.large_suitcase}L
                                                    <img src="/assets/images/icon/suitcase.png" className='ms-2' /> {this.props.before.vehicle.capacity.luggage_capacity.large_suitcase}S
                                                </p>
                                                <p>{this.props.before.vehicle.category.vehicle_transmission}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 border-start text-end text-success'>
                                        <p>Other Information</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <form onSubmit={(e) => this.gotoBook(e)}>
                        <div className='container'>
                            <div className='row mt-4 justify-content-md-center'>
                                <div className='col-sm-8'>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <h5 className='text-dark'>YOUR INFORMATION</h5>
                                        </div>
                                        <div className='col-sm-12'>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <label>First Name</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input required type="text" onChange={(e) => this.setState({ firstName: e.target.value })} className='form-control' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <label>Last Name</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input required type="text" onChange={(e) => this.setState({ lastName: e.target.value })} className='form-control' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <label>Email</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input required type="text" onChange={(e) => this.setState({ email: e.target.value })} className='form-control' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <label>Phone</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input onChange={(e) => this.setState({ phone: e.target.value })} required type="number" className='form-control' />
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" for="defaultCheck1">
                                                    Yes, I want receive text messages regarding my current and upcomming rentals, which may include some promotional messages. For more information, please see our <a href='#' style={myLink}>Terms and Conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row mb-5'>
                                        <div className='col-sm-12'>
                                            <p>At time of Check-out you may be asked to provide a second form of goverment identification.</p>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-12'>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                                <label className="form-check-label" for="defaultCheck2">
                                                    <b>Credit Card</b>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-12'>
                                            <h5 className='text-dark'>Credit Card & Billing Information</h5>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-12'>
                                            <p>A credit card is required to secure this reservation, your card will not be charged now, however if you no longer required the rental, you must cancel prior to your scheduled pick-up time or you'll be charged a $75 no-show fee.</p>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <label>Card Type</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <select className='form-control'>
                                                <option>Select</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <label>Card Number</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <label>Expiration Date</label>
                                        </div>
                                        <div className='col-sm-4'>
                                            <select className='form-control'>
                                                <option>Month</option>
                                            </select>
                                        </div>
                                        <div className='col-sm-4'>
                                            <select className='form-control'>
                                                <option>Year</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <label>Country</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <select className='form-control'>
                                                <option>Indonesia</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <label>Address Line 1</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <label>Address Line 2 <small>(optional)</small></label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <label>City</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <label>State/Province</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <select className='form-control'>
                                                <option>Indonesia</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <label>Zip/Pastel Code</label>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type="text" className='form-control' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-12'>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-12'>
                                            <h5 className='text-dark'>TRAVEL INFORMATION</h5>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-12'>
                                            <p>
                                                We recommend providing your Travel information below. These details help us stay informed any changes in your travel plans and allow our agents to better to prepare for your arrival.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <label>Flight Info</label>
                                        </div>
                                        <div className='col-sm-4'>
                                            <select className='form-control'>
                                                <option>Select Airline</option>
                                            </select>
                                        </div>
                                        <div className='col-sm-4'>
                                            <input className='form-control' placeholder='Flight Number' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-12'>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-12'>
                                            <h5 className='text-dark'>Frequent Travel Program for Miles/Points</h5>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-12'>
                                            <p>
                                                Rewards program points will be awarded on eligible rentals. Miles may not be earned on corporate rates, discounts, free tour or certain travel industry rates or on rentals at off airport locations.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <label>Rewards Program</label>
                                        </div>
                                        <div className='col-sm-4'>
                                            <select className='form-control'>
                                                <option>Program Partner Name</option>
                                            </select>
                                        </div>
                                        <div className='col-sm-4'>
                                            <input className='form-control' placeholder='Member Number' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-12'>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-12'>
                                            <h5 className='text-dark'>TERMS & CONDITIONS</h5>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-8'>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                                <label className="form-check-label" for="defaultCheck2">
                                                    <b>I have read and accept the <a target='_blank' style={{ textDecoration: 'underline' }} href='https://www.avis.com/en/customer-service/faqs/usa/rental-locations-vehicles'>Location Policies</a> and <a target='_blank' style={{ textDecoration: 'underline' }} href='https://www.avis.co.uk/TermsAndCondition'>Rental Terms and Conditions.</a></b>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-sm-4 text-end'>
                                            <button className='btn py-2' style={btnLink} type='submit'>Reserve</button>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-sm-12'>
                                            <hr />
                                        </div>
                                    </div>
                                    {/* <div className='row mb-3'>
                                    <div className='col-sm-3'>
                                        <label>Travel Agents Only</label>
                                    </div>
                                    <div className='col-sm-4'>
                                        <input className='form-control' placeholder='IATA/ARC' />
                                    </div>
                                    <div className='col-sm-4'>
                                        <input className='form-control' placeholder='UR MEM #' />
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                {/* End Slogan One */}
            </>
        )
    }
}

function RB(props) {
    let navigate = useNavigate();
    const [service, setService] = useState([]);
    const [car, setCar] = useState([]);
    const [spec, setSpec] = useState([]);
    const [price, setPrice] = useState('');
    const [tax, setTax] = useState('');
    const [fee, setFee] = useState('');
    const [total, setTotal] = useState('');

    // Run Function when pages loaded
    useEffect(() => {
        Axios.post(
            // `${API_URL}/api/booking/information`,
            `${API_URL}/api/booking/information`,
            {
                date: props.before.date,
                return_date: props.before.return_date,
                car: props.before.vehicle,
                extra: props.before.extra
            },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            },
        ).then((res) => {
            setService(res.data.additional);
            setCar(res.data.car);
            setSpec(res.data.spec);
            setPrice(res.data.price);
            setTax(res.data.pajak);
            setFee(res.data.fee);
            setTotal(res.data.total);
        });
    }, [])
    return <RBN {...props} navigate={navigate} service={service} car={car} price={price} tax={tax} fee={fee} total={total} />
}

export default RB;