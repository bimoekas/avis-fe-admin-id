import React, { useEffect, useState } from "react";
import FooterOne from '../common/footer/FooterOne';
import Axios from 'axios';
import { API_URL } from '../core/constant.js';
import HeaderOne from "../common/header/HeaderOne";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
// import Title from '../Title';

const DashboardAdmin = () => {
    const [transactions, setTransactions] = useState([]);
    const [adminTax, setAdminTax] = useState(0);
    const [isLoading, setLoading] = useState(false)
    const [fee24Hour, setFee24Hour] = useState(0);

    const formatDate = (va) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const date = new Date(va);
        return date.toLocaleDateString(undefined, options);
    }

    const handleChangeTax = async () => {
        setLoading(true)
        await Axios.put(
            `${API_URL}/api/booking/tax`,
            {
                tax: adminTax,
                productType: "Avis"
            },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            },
        ).then((res) => {
            console.log(res.data);
            setLoading(false)
            alert('Tax has been updated');
        });
        setLoading(false)
    }

    const handleChangeFee24Hour = async () => {
        setLoading(true)
        await Axios.put(
            `${API_URL}/api/booking/fee/cancel`,
            {
                tax: fee24Hour,
                productType: "Avis"
            },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            },
        ).then((res) => {
            console.log(res.data);
            setLoading(false)
            alert('Fee has been updated');
        });
        setLoading(false)
    }

    useEffect(() => {
        Axios.post(
            `${API_URL}/api/booking/list/admin/avis`,
            {},
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            },
        ).then((res) => {
            console.log(res.data.booking);
            setTransactions(res.data.booking);
        });
        console.log(localStorage.getItem('token'));
        Axios.get(
            `${API_URL}/api/booking/tax?productType=Avis`,
            {},
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            },
        ).then((res) => {
            setAdminTax(res.data.tax.tax);
        });

        Axios.get(
            `${API_URL}/api/booking/fee/cancel?productType=Avis`,
            {},
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            },
        ).then((res) => {
            setFee24Hour(res.data.tax.tax);
        });
    }, [])

    //initialize datatable
    if (transactions.length > 0) {
        $(document).ready(function () {
            $('#example').DataTable();
        });


    }

    $('.dateadded').on('change', function (ret) {
        if (ret.target.value === "") {
            window.location.reload()
        }
        else {
            var v = formatDate(ret.target.value)  // getting search input value

            $('#example').DataTable().columns(7).search(v).draw();
        }
    });


    // Title ('Avis ID User Panel')
    return (
        <>
            <HeaderOne />
            {/* react data table with columns No, Car Image, Car Name, Car Mode, Fullname, Pick-up Location, Dropoff Location */}
            <div className="py-5 px-4">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Booking & Transaction</h3>
                    </div>
                </div>
                <div className="row mt-5">
                    <div class="col-sm-3 mb-3 d-flex justify-content-between w-100">
                        <div class="form-group">
                            <label for="sel1" class="form-label">Date Filter:</label>
                            <input class="form-control" type="date" className="dateadded form-control" />
                        </div>
                        <div className="d-flex flex-column align-items-start">
                            <div class="form-group">
                                <label for="sel1" class="form-label">Admin Tax %:</label>
                                <div className="d-flex flex-row align-items-end justify-content-center">
                                    <input class="form-control" style={{ padding: "8px" }} type="number" value={adminTax ?? 0} className="form-control me-2" onChange={(e) => setAdminTax(e.target.value)} />
                                    <button disabled={isLoading} type="button" class=" mt-2" onClick={() => handleChangeTax()} style={{
                                        backgroundColor: "rgb(212, 0, 42)",
                                        color: "rgb(255, 255, 255)",
                                        padding: "8px",
                                        borderRadius: "5px"
                                    }}>Save</button>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <label for="sel1" class="form-label">Fee Charge Cancellation In 24 Hours:</label>
                                <div className="d-flex flex-row align-items-end justify-content-center">
                                    <input class="form-control" style={{ padding: "8px" }} type="number" value={fee24Hour ?? 0} className="form-control me-2" onChange={(e) => setFee24Hour(e.target.value)} />
                                    <button disabled={isLoading} type="button" class=" mt-2" onClick={() => handleChangeFee24Hour()} style={{
                                        backgroundColor: "rgb(212, 0, 42)",
                                        color: "rgb(255, 255, 255)",
                                        padding: "8px",
                                        borderRadius: "5px"
                                    }}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <table id="example" class="display">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Booking Code</th>
                                    <th>Car Image</th>
                                    <th>Fullname</th>
                                    <th>Car Model</th>
                                    <th>Car Name</th>
                                    <th>Status Booking</th>
                                    <th>Pick-up Date</th>
                                    <th>Dropoff Date</th>
                                    <th>Pick-up Location</th>
                                    <th>Dropoff Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((result, index) => {
                                    return (
                                        <tr class="table-success">
                                            <td>{index + 1}</td>
                                            <td>{result.booking_code ?? ''}</td>
                                            <td><img src={result?.rent_detail?.car_img} alt='Vehicle' width={100} /></td>
                                            <td>{result?.user?.name} {result?.user?.last_name}</td>
                                            <td>{result?.rent_detail?.car_model}</td>
                                            <td>{result?.rent_detail?.car_name}</td>
                                            <td className={result.status_book == "Success" ? 'text-success' : 'text-danger'}>{result.status_book}</td>
                                            <td>{formatDate(result?.pickup_date)}</td>
                                            <td>{formatDate(result?.return_date)}</td>
                                            <td>{result?.pickup_loc}</td>
                                            <td>{result?.pickup_loc}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div >
            <FooterOne />
        </>
    )
}

export default DashboardAdmin;