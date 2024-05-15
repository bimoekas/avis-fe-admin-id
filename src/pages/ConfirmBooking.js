import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import Axios from 'axios';
import HeaderAlt from "../common/header/HeaderAlt";
import { generateRandomNumbers } from "../core/functions";
import { API_URL } from '../core/constant.js';

const ConfirmBooking = () => {
    const [confirm_number, setConfirmNumber] = useState("")
    const [pickup_date, setPickupDate] = useState("")
    const [pickup_location, setPickupLocation] = useState("")
    const [dropoff_date, setDropoffDate] = useState("")
    const [dropoff_location, setDropoffLocation] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [telephone, setTelephone] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [total_price, setTotalPrice] = useState("")
    const [vehicle_sipp_code, setVehicleSippCode] = useState("")
    const [rate_code, setRateCode] = useState("")

    var dataReserve = {
        "product": {
            "brand": "Avis",
            // "iata_number": "0066172E"
        },
        "transaction": {
            "transaction_id": generateRandomNumbers().toString()
        },
        "reservation": {
            "email_notification": true,
            "pickup_date": localStorage.getItem('pickup_date') + "T" + localStorage.getItem('pickup_time') + ":00",
            "pickup_location": localStorage.getItem('pickup_location'),
            "dropoff_date": localStorage.getItem('dropoff_date') + "T" + localStorage.getItem('dropoff_time') + ":00",
            "dropoff_location": localStorage.getItem('dropoff_location'),
            "vehicle_sipp_code": localStorage.getItem('vehicle_sipp_code'),
        },
        "rate_totals": {
            "rate": {
                "rate_code": localStorage.getItem('rate_code'),
                "country_code": "ID"
            }
        },
        "customer": {
            "contact": {
                //   "title": "MR",
                "first_name": localStorage.getItem('first_name'),
                "last_name": localStorage.getItem('last_name'),
                "telephone": localStorage.getItem('telephone').toString(),
                "email": localStorage.getItem('email'),
                "age": parseInt(localStorage.getItem('age')),
            }
        },
        "payment_preference": {
            "type": "CentralBillingAccount",
            "id": generateRandomNumbers().toString(),
            "fixed_value": "FixedValue",
            "electronic_indicator": true,
            "amount": parseInt(localStorage.getItem('amount')),
            "currency": "USD"
        }
    }

    useEffect(() => {
        Axios.post(
            'https://stage.abgapiservices.com/cars/reservation/v2',
            dataReserve,
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
                console.log("DATA RESPONSE: ", data);
                setConfirmNumber(data.reservation.confirmation.number)
                setPickupDate(localStorage.getItem('pickup_date') + "T" + localStorage.getItem('pickup_time') + ":00")
                setPickupLocation(localStorage.getItem('pickup_location'))
                setDropoffDate(localStorage.getItem('dropoff_date') + "T" + localStorage.getItem('dropoff_time') + ":00")
                setDropoffLocation(localStorage.getItem('dropoff_location'))
                setFirstName(localStorage.getItem('first_name'))
                setLastName(localStorage.getItem('last_name'))
                setTelephone(localStorage.getItem('telephone'))
                setEmail(localStorage.getItem('email'))
                setAge(localStorage.getItem('age'))
                // setDataReserve(...reservation, { confirm_number: data.reservation.confirmation.number })
                // setDataReserve(...reservation, {confirm_number: data.reservation.confirmation.number})
                // setDataReserve(...reservation, {confirm_number: data.reservation.confirmation.number})
                // setDataReserve(...reservation, {confirm_number: data.reservation.confirmation.number})

                Axios.post(
                    `${API_URL}/api/booking/booking_code`,
                    {
                        "booking_code": data.reservation.confirmation.number,
                        "customer_id": localStorage.getItem('customer_id'),
                        "rent_id": localStorage.getItem('rent_id'),
                    },
                    {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('token'),
                        }
                    },
                ).then((res) => {
                    alert("Booking code saved");
                    // set the token and bebe to local storage
                    const token = localStorage.getItem('token');
                    const bebe = localStorage.getItem('bebe');
                    const debug = localStorage.getItem('PreMiD*');
                    const customer_id = localStorage.getItem('customer_id');
                    localStorage.clear();
                    localStorage.setItem('token', token);
                    localStorage.setItem('bebe', bebe);
                    localStorage.setItem('PreMiD*', debug);
                    localStorage.setItem('customer_id', customer_id);
                }).catch((err) => {
                    alert("Something went wrong");
                });
            })
            .catch(function (error) {
                // handle error
                // alert("No cars available for your search criteria.");
                if (error.response.status == 401) {
                    window.location.reload();
                } else if (error.response.status == 400) {
                    alert(error.response.data.status.errors[0].details);
                }
            })
            .finally(function () {
                // always executed
            });
    }, [])

    return (
        <>
            <HeaderAlt />
            <div className="container my-5">
                <div className="card p-3">
                    <h2 className="text-center">Booking Successfully</h2>
                    <br />
                    <h4 className="text-center">Here is your booking number confirmation</h4>
                    <br />
                    <div className="d-flex justify-content-center">
                        <h2 className="text-center border border-dark border-2" style={{ width: '250px' }}>{confirm_number}</h2>
                    </div>

                    <br />
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-4">
                            <p><strong>First Name:</strong> {first_name}</p>
                            <p><strong>Last Name:</strong> {last_name}</p>
                            <p><strong>Telephone:</strong> {telephone}</p>
                            <p><strong>Email:</strong> {email}</p>
                            <p><strong>Age:</strong> {age}</p>
                        </div>
                        <div className="col-md-4">
                            <p><strong>Pickup Date:</strong> {pickup_date}</p>
                            <p><strong>Pickup Location:</strong> {pickup_location}</p>
                            <p><strong>Dropoff Date:</strong> {dropoff_date}</p>
                            <p><strong>Dropoff Location:</strong> {dropoff_location}</p>
                        </div>
                    </div>
                    <br />
                    <center>
                        <a href="/bookinglist" className="btn btn-danger">My Booking</a>
                    </center>
                </div>
            </div >
            <FooterOne />
        </>
    )
}

export default ConfirmBooking;