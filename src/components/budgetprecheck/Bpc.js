import React from 'react';
import {Link} from 'react-router-dom';

export default class Bpc extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myStyle = {
            backgroundImage: "url("+publicUrl+"assets/images/resources/reservation.avif)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
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
                                <h2 style={{color:"#000"}}>AVIS PRECHECK™</h2>
                                <h4 className='mt-2' style={{color:"#000"}}>RETRIEVE YOUR RESERVATION TO GET STARTED WITH AVIS PRECHECK.</h4>
                            </div>
                        </div>
                        <div className='row mt-5 mb-5' style={{backgroundColor:"#fff"}}>
                            <div className='col-sm-12 p-4 text-avis'>
                                <p>Reservations made through Avis.com may be viewed, modified or canceled by entering the information below, or by <a href='#' className='link-avis'>logging in</a> and accessing your Rentals page. Need help finding your confirmation/rental agreement number?<a href='#' className='link-avis'>Chat With Us <span className="fa fa-comment"></span></a></p>
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
                                <button className='btn btn-avis'>Find Reservation</button>
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