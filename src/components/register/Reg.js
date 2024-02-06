import React from 'react';
import {Link} from 'react-router-dom';

export default class Reg extends React.Component {
    constructor() {
        super();
    
        this.state = { checked: true };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.setState({
          checked: !this.state.checked
        })
    }    
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myLink = {
            color: "rgb(237, 85, 5)",
        }
        const myHead = {
            fontSize: "18px"
        }
        const myPara = {
            lineHeight: "1.5",
            fontSize: "15px",
            color: "#000",
            height: "175px"
        }
        const content = this.state.checked 
        ? null
        : <div className='row mb-3'>
        <div className='col-sm-12'>
            <label>Username</label>
            <input type="text" className='form-control' />
        </div>
    </div>;
        return (
            <>
                <section>
                    <div className='container pt-5 pb-3'>
                        <div className='row justify-content-md-center'>
                            <div className='col-lg-8 col-sm-12 border-bottom pb-5' style={{color:"#000"}}>
                                <h1 className='text-up text-black mb-4'>Join Avis Preferred®</h1>
                                <p>If you already have a 6-character Avis Wizard Number, <a className='link-avis'>go here</a> to upgrade to Avis Preferred</p>
                                <p>Please enter your First Name and Last Name below as it appears on your Driver's License.</p>
                            </div>
                        </div>
                        <div className='row justify-content-md-center'>
                            <div className='col-lg-8 col-sm-12 border-bottom pt-2 pb-3'>
                                <div className='row mb-3'>
                                    <div className='col-sm-12'>
                                        <label>Country</label>
                                        <select className='form-control'>
                                            <option>U.S.A.</option>
                                            <option>England</option>
                                            <option>Indonesia</option>
                                            <option>France</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-sm-12'>
                                        <label>First Name</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-sm-12'>
                                        <label>Last Name</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-sm-12'>
                                        <label>Mobile Number</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-sm-12'>
                                        <label>If you provide your mobile phone number you can opt-in to receiving text messages about your reservations.</label>
                                        <div className="form-check form-switch form-check-reverse">
                                            <label className="form-check-label" for="flexSwitchCheckReverse"><b>Receive texts about reservations and rentals?</b> </label>
                                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" />
                                        </div>
                                        <label>See our <a href="#" className='link-avis'>Terms and Conditions.</a></label>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-sm-12'>
                                        <label>Email Address </label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" checked={ this.state.checked } onChange={ this.handleChange } />
                                            <label className="form-check-label" for="defaultCheck1">
                                                Use Email address as Username
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                { content }
                                <div className='row mb-3'>
                                    <div className='col-sm-6'>
                                        <label>Receive email offers?</label>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className="form-check form-switch form-check-reverse">
                                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" />
                                        </div>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-sm-12'>
                                        <label>Password</label>
                                        <input type="password" className='form-control' />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-sm-12'>
                                        <label>Address Line 1</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-sm-12'>
                                        <label>Address Line 2 <small>(optional)</small></label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-sm-12'>
                                        <label>Zip/Pastel Code</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-sm-12'>
                                        <label>BCD Number <small>optional</small></label>
                                        <input type="text" className='form-control' />
                                    </div>
                                    <a href='#' className='link-avis'>What is a BCD Number ?</a>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-md-center mt-3'>
                            <div className='col-lg-8 col-sm-12 pb-2' style={{color:"#000"}}>
                                <div className='row'>
                                    <div className='col-sm-8 text-avis'>
                                        <p className='mb-2'>Please read our <a className='link-avis'>Terms and Conditions.</a> Please verify the spelling of your </p>
                                        <p className='mb-2'>username, email and password before saving. Please be advised, username </p>
                                        <p>cannot be changed once submitted. </p>
                                    </div>
                                    <div className='col-sm-4 text-end' >
                                        <button className='btn btn-avis'>Save</button>
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