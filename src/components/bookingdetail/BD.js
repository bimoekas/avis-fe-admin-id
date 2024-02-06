import React, { useEffect, useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { formatRupiah } from '../../core/functions';
import { API_URL } from '../../core/constant';
class BDN extends React.Component {
    formatDate(va) {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const date = new Date(va);
        return date.toLocaleDateString(undefined, options);
    }

    cancelRes(book) {
        Axios.post(
            `${API_URL}/api/booking/cancel`,
            {
                book: book,
            }
        ).then((res) => {
            console.log(res.data.status);
            if (res.data.status == false) {
                alert(res.data.msg);
            } else {
                alert(res.data.msg);
                this.props.navigate('/makereservation', {
                    state: {
                        booking: book,
                    }
                });
            }
        });
    }

    render() {
        let btn;
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
        const selectLink = {
            border: "2px solid rgb(212, 0, 42)",
            color: "#140a55"
        };
        const btnLink = {
            backgroundColor: "rgb(212, 0, 42)",
            color: "rgb(255, 255, 255)",
            padding: "0px 50px",
            // height: "50px"
        }
        // if (this.props.header.status_book == 'Hold') {
        // btn = <div><button className='btn py-1' style={btnLink}>Modify Reservation</button><br/><button className='btn py-1 mt-2' onClick={(e)=>this.cancelRes(this.props.header.rent_id)} style={btnLink}>Cancel Reservation</button></div>
        btn = <div><a className='btn py-1' href={`${this.props.midlink}`} target='_blank' style={btnLink}>Pay Now</a><br /><button style={btnLink} className='btn py-1 mt-2' onClick={(e) => this.cancelRes(this.props.header.rent_id)}>Cancel Reservation</button></div>
        // } else {    
        //     btn = <h1></h1>
        // }
        return (
            <>
                <section>
                    <div className='container'>
                        <div className='row mt-3'>
                            <div className='col-sm-6'>
                                <table className='table'>
                                    <tbody>
                                        <tr>
                                            <td>Rent ID</td>
                                            <td><b>{this.props.header.rent_id}</b></td>
                                        </tr>
                                        <tr>
                                            <td>Reservation Status</td>
                                            <td><b>{this.props.header.status_book}</b></td>
                                        </tr>
                                        <tr>
                                            <td>Booking at</td>
                                            <td><b>{this.formatDate(this.props.header.created_at)}</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className='col-sm-6 text-end'>
                                {btn}
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mb-4'>
                    <div className='container'>
                        <div className='row mt-4'>
                            <div className='col-sm-12'>
                                <div className='row'>
                                    <div className='col-sm-6 border-bottom'>
                                        <div className='row'>
                                            <div className='col-sm-6'>
                                                <p style={myLink}>Pick-Up</p>
                                                <p>{this.props.before.location}</p>
                                                <p>{this.props.before.time} {this.formatDate(this.props.before.time)}</p>
                                            </div>
                                            <div className='col-sm-6'>
                                                <p style={myLink}>Return</p>
                                                <p>{this.props.before.return_locatio}</p>
                                                <p>{this.props.before.reutrn_time} {this.formatDate(this.props.before.return_date)}</p>
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
                                                <p>{formatRupiah(this.props.before.price)}</p>
                                                <p>{formatRupiah(this.props.before.tax)}</p>
                                                <p><b>{formatRupiah(this.props.before.total_pay)}</b></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
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
                {/* <section>
                    <div className='container'>
                        <div className='row mt-4'>
                            <div className='col-sm-12'>
                                <h5>Service</h5>
                            </div>
                        </div>
                        {this.props.service.map((is) => (
                        <div className='row mt-4'>
                            <div className='col-sm-1'>
                                <img className='pe-2 img-fluid' src={publicUrl+"assets/images/resources/protection-ldw.avif"} />
                            </div>
                            <div className='col-sm-7 align-self-center'>
                                <b>{is.name}</b>
                                <p>{is.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </section> */}
                {/* End Slogan One */}
            </>
        )
    }
}

function BD(props) {
    let navigate = useNavigate();
    const [service, setService] = useState([]);
    const [header, setHeader] = useState([]);
    const [detail, setDetail] = useState([]);
    const [car, setCar] = useState([]);
    const [spec, setSpec] = useState([]);
    const [price, setPrice] = useState('');
    const [tax, setTax] = useState('');
    const [fee, setFee] = useState('');
    const [total, setTotal] = useState('');
    const [midlink, setMidlink] = useState('');

    // Run Function when pages loaded
    useEffect(() => {
        Axios.post(
            `${API_URL}/api/booking/search`,
            // `${API_URL}/api/booking/search`,
            {
                book: props.before.booking,
            },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            },
        ).then((res) => {
            console.log(res);
            // setService(res.data.booking.addi);
            setHeader(res.data.booking.header);
            setDetail(res.data.booking.detail);
            // setCar(res.data.booking.car);
            // setSpec(res.data.booking.spec);
            setMidlink(res.data.booking.mid);
            //    setPrice(res.data.price);
            //    setTax(res.data.pajak);
            //    setFee(res.data.fee);
            //    setTotal(res.data.total);
            console.log(res.data.booking);
        });
    }, [])

    return <BDN {...props} navigate={navigate} header={header} detail={detail} car={car} spec={spec} service={service} midlink={midlink} />
}

export default BD;