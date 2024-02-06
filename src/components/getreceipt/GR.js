import React from 'react';
import {Link} from 'react-router-dom';

export default class GR extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myStyle = {
            // backgroundImage: "url("+publicUrl+"assets/images/resources/reservation.avif)",
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            backgroundColor: "#eaeaea"
        };
        const myLink = {
            color: "rgb(237, 85, 5)",
        }
        return (
            <>
                {/* Start Slogan One */}
                <section style={myStyle}>
                    <div className='container'>
                        <div className='row mt-5'>
                            <div className='col-sm-12 text-center pt-5'>
                                <h2 className='link-avis'>CAR RENTAL RECEIPT</h2>
                            </div>
                        </div>
                        <div className='row mt-5 mb-5' style={{backgroundColor:"#fff"}}>
                            <div className='col-sm-12 p-4 text-avis'>
                                <p>To request a receipt, please complete the fields below, or <a href='#' className='link-avis'>log in</a> to your Avis profile and access your Past Rentals page. <b>If you are unable to retrieve your e-Receipt within 24 hours, please contact customer service at 1-800-352-7900 for further information.</b></p>
                                <small className='mt-2'><b>Note:</b> Miles/Points can be added when viewing receipt. </small>
                            </div>
                            <div className='col-sm-4 p-4'>
                                <label>Country</label>
                                <select className='form-control'>
                                    <option>U.S.A.</option>
                                </select>
                            </div>
                            <div className='col-sm-4 p-4'>
                                <label>Last Name</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className='col-sm-4 p-4'>
                                <label> Confirmation/Rental Agreement Number</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className='col-sm-12 text-center p-4'>
                                <button className='btn btn-avis'>Get Receipt</button>
                            </div>
                            <div className='col-sm-12 text-center p-4 text-avis'>
                                <p><b>Please Note:</b> Adobe Reader is required to view your receipt. If you don't have Adobe Reader. Please <a href="#" style={myLink}>click here</a> to download it. </p>
                            </div>
                        </div>
                        <div className='row mt-5 pb-5'>
                        </div>                       
                    </div>
                </section>
                {/* End Slogan One */}
            </>
        )
    }
}