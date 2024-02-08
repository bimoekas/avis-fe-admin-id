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

    const formatDate = (va) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const date = new Date(va);
        return date.toLocaleDateString(undefined, options);
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
    }, [])

    //initialize datatable
    if (transactions.length > 0) {
        $(document).ready(function () {
            $('#example').DataTable();
        });


    }

    $('.dateadded').on('change', function (ret) {

        var v = formatDate(ret.target.value)  // getting search input value
        console.log(v);
        $('#example').DataTable().columns(7).search(v).draw();
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
                    <div class="col-sm-3 mb-3">
                        <div class="form-group">
                            <label for="sel1" class="form-label">Date Filter:</label>
                            <input class="form-control" type="date" className="dateadded form-control" />
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
            </div>
            <FooterOne />
        </>
    )
}

export default DashboardAdmin;