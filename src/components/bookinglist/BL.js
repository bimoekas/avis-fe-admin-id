import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { API_URL } from '../../core/constant.js';

function BLN(props) {
    const [isNoPaid, setIsNoPaid] = useState(true);
    const navigate = useNavigate();

    const formatDate = (va) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const date = new Date(va);
        return date.toLocaleDateString(undefined, options);
    }

    const showBooking = () => {
        return props.transactions.length > 0 ? props.transactions.map((transaction, index) => (
            <div className='row' key={index}>
                <div className='col-sm-12 pt-3 pb-2'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-sm-3 align-self-center'>
                                    <img src={transaction?.rent_detail?.car_img} alt='Vehicle' width={250} />
                                </div>
                                <div className='col-sm-8'>
                                    <h5><strong>Kode Booking: {transaction.status_book === 'Hold' ? '-' : transaction.booking_code}</strong></h5>
                                    <div className='row mt-3 justify-content-start'>
                                        <div className='col-sm-6'>
                                            <strong>Model Kendaraan:</strong> {transaction?.rent_detail?.car_model}<br />
                                            <strong>Nama Kendaraan:</strong> {transaction?.rent_detail?.car_name}<br />
                                            <strong>Status Booking:</strong> <span className={transaction?.status_book == 'Hold' ? 'text-danger' : 'text-success'}>{transaction?.status_book}</span><br />
                                        </div>
                                        <div className='col-sm-6'>
                                            <strong>Tanggal Booking:</strong> {formatDate(transaction?.pickup_date)} {transaction?.pickup_time}<br />
                                            <strong>Tanggal Pengembalian:</strong> {formatDate(transaction?.return_date)} {transaction?.return_time}<br />

                                            <strong>Pickup Location: </strong> {transaction?.pickup_loc}<br />
                                            <strong>Dropoff Location: </strong>{transaction?.return_loc}
                                        </div>
                                    </div>
                                </div>
                                {transaction.status_book == 'Hold' ? <div className='col-sm-1 text-end align-self-start'>
                                    <a href={transaction?.transaction?.link_midtrans} target='_blank' className='btn btn-warning'>Bayar</a>
                                </div> : <div></div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )) : <div className='row'>
            <div className='col-sm-12 pt-3 pb-2'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-sm-12 text-center'>
                                <h5>Belum ada booking</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <>
            <section>
                <div className='container'>
                    <div className='row mt-3 pb-3'>
                        <div className='col-sm-12'>
                            <h4>Booking List</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ backgroundColor: "#eaeaea" }}>
                <div className='container'>
                    {showBooking()}
                </div>
            </section>
        </>
    )
}

function BL(props) {
    const navigate = useNavigate();
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        Axios.post(
            `${API_URL}/api/booking/list/avis`,
            {},
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            },
        ).then((res) => {
            setTransactions(res.data.booking);
        });
    }, [])

    return <BLN {...props} navigate={navigate} transactions={transactions} />
}

export default BL;
