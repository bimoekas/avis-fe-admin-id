import React, { useEffect, useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import countries from '../../Countries.json';
import { API_URL } from '../../core/constant';

class BLN extends React.Component {
    render() {
        // console.log(this.props.verif);
        let publicUrl = process.env.PUBLIC_URL + '/';
        const myLink = {
            color: "rgb(237, 85, 5)",
        };
        const myBorder = {
            borderBottom: "2px solid rgb(237, 85, 5)"
        }
        const myLinkDis = {
            color: "rgb(168, 168, 168)",
        };
        const myBorderDis = {
            borderBottom: "2px solid rgb(168, 168, 168)"
        };
        const selectLink = {
            border: "2px solid rgb(237, 85, 5)",
            color: "#140a55"
        };
        const btnLink = {
            backgroundColor: "rgb(247, 139, 0)",
            color: "rgb(255, 255, 255)",
            padding: "0px 50px",
            // height: "50px"
        }
        return (
            <>
                <section>
                    <div className='container'>
                        <div className='row mt-3 pb-3'>
                            <div className='col-sm-12'>
                                <h4 className='link-avis'>Home</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{ backgroundColor: "#eaeaea" }}>
                    <div className='container'>
                        {this.props.verif == '0' ? (
                            <Acti />
                        ) : (
                            <></>
                        )}
                        {/* <Acti/> */}
                        <div className='row'>
                            <div className='col-sm-12 pt-3 pb-2'>
                                <div className='card'>
                                    <div className='card-header'>
                                        Profile
                                    </div>
                                    <div className='card-body'>
                                        <div className='row'>
                                            <div className='col-sm-12'>
                                                <div className='form-group'>
                                                    <label>ID Card Number</label>
                                                    <input className='form-control' value={this.props.idcard} readOnly />
                                                </div>
                                                <div className='form-group'>
                                                    <label>First Name</label>
                                                    <input className='form-control' value={this.props.name} readOnly />
                                                </div>
                                                <div className='form-group'>
                                                    <label>Last Name</label>
                                                    <input className='form-control' value={this.props.lastname} readOnly />
                                                </div>
                                                <div className='form-group'>
                                                    <label className=''>Date of birth</label>
                                                    <div className='row'>
                                                        <div className='col-sm-12 form-group'>
                                                            <input type='date' className='form-control' value={this.props.date} readOnly />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='form-group'>
                                                    <label>Country</label>
                                                    <select className='form-control' readOnly>
                                                        {countries.map((c, index) =>
                                                            <option value={c.code}>{c.name}</option>
                                                        )}
                                                    </select>
                                                </div>
                                                <div className='form-group'>
                                                    <label>Cellphone Number</label>
                                                    <input className='form-control' value={this.props.cellphonenumber} readOnly />
                                                </div>
                                                <div className='form-group'>
                                                    <label>Telephone Number</label>
                                                    <input className='form-control' value={this.props.telephonenumber} readOnly />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-footer'>
                                        {/* <button className='btn' style={btnLink}>
                                            Edit
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

class Acti extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token: '',
        }
    }

    activate(event) {
        Axios.post(
            `${API_URL}/api/auth/activation`,
            // `${API_URL}/api/auth/activation`,
            {
                token: this.state.token
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
            if (res.data.status == false) {
                alert(res.data.msg);
            } else {
                alert(res.data.msg);
            }
        }).catch((error) => {
            if (error.response.status === 401) {
                alert('Please Sign In First');
            }
        });
    }

    resend(event) {
        Axios.post(
            `${API_URL}/api/auth/activation/resend`,
            // `${API_URL}/api/auth/activation/resend`,
            {

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
            if (res.data.status == false) {
                alert(res.data.msg);
            } else {
                alert(res.data.msg);
            }
        }).catch((error) => {
            if (error.response.status === 401) {
                alert('Please Sign In First');
            }
        });
    }

    token_change(event) {
        this.setState({
            token: event.target.value
        })
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        const myLink = {
            color: "rgb(237, 85, 5)",
        };
        const myBorder = {
            borderBottom: "2px solid rgb(237, 85, 5)"
        }
        const myLinkDis = {
            color: "rgb(168, 168, 168)",
        };
        const myBorderDis = {
            borderBottom: "2px solid rgb(168, 168, 168)"
        };
        const selectLink = {
            border: "2px solid rgb(237, 85, 5)",
            color: "#140a55"
        };
        const btnLink = {
            backgroundColor: "rgb(247, 139, 0)",
            color: "rgb(255, 255, 255)",
            padding: "0px 50px",
            // height: "50px"
        }
        return (
            <>
                <div className='row'>
                    <div className='col-sm-12 pt-3 pb-2'>
                        <div className='card'>
                            <div className='card-header'>
                                Email Verification
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-sm-12'>
                                        <div className='form-group'>
                                            {/* <label>Email Ve</label> */}
                                            <input className='form-control' placeholder='Please Input Your Code Here' onChange={(e) => this.token_change(e)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-avis py-2' onClick={(e) => this.resend(e)}>
                                    Resend Email Verification
                                </button>
                                <button className='btn btn-avis py-2 float-end' onClick={(e) => this.activate(e)}>
                                    Activate
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function Profile(props) {
    let navigate = useNavigate();
    const [verif, setVerif] = useState([]);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [idcard, setIdcard] = useState('');
    const [telephonenumber, setTelephonenumber] = useState('');
    const [cellphonenumber, setCellphonenumber] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');
    const [country, setCountry] = useState('');

    // Run Function when pages loaded
    useEffect(() => {
        Axios.post(
            `${API_URL}/api/auth/profile`,
            // `${API_URL}/api/auth/profile`,
            {

            },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            },
        ).then((res) => {
            // setService(res.data.booking.addi);
            // console.log(res.data);
            setVerif(res.data.email_verification);
            setName(res.data.name);
            setLastname(res.data.last_name);
            setIdcard(res.data.id_card);
            setTelephonenumber(res.data.telephone_number);
            setCellphonenumber(res.data.cellphone_number);
            setYear(res.data.year_of_birth);
            setMonth(res.data.month_of_birth);
            setDate(res.data.date_of_birth);
            setCountry(res.data.country);
            // setVerif(res.data);
        }).catch((error) => {
            if (error.response.status === 401) {
                alert('Your session has expired');
                window.location.href = '/';
            }
        });
    }, [])

    return <BLN {...props} navigate={navigate} verif={verif} name={name} lastname={lastname} idcard={idcard} country={country} year={year} month={month} date={date} telephonenumber={telephonenumber} cellphonenumber={cellphonenumber} />
}

export default Profile;