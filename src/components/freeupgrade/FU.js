import React from 'react';
import {Link} from 'react-router-dom';

export default class FU extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myStyle = {
            backgroundImage: "url("+publicUrl+"assets/images/resources/freedeal1.avif)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        const myLink = {
            color: "rgb(237, 85, 5)",
        };
        const myPara = {
            lineHeight: "1.5",
            fontSize: "15px",
            color: "#000"
        };
        return (
            <>
                <section style={myStyle}>
                    <div className='container'>
                        <div className='row mt-5'>
                            <div className='col-sm-12 text-center pt-5'>
                                <h2 style={{color:"rgb(237, 85, 5)"}}>Snag a Free Upgrade for Your Car Rental </h2>
                            </div>
                            <div className='col-sm-12 text-center pt-3'>
                                <h5>Upgrade your ride.</h5>
                            </div>
                        </div>
                        <div className='row mt-3 mb-5 pb-3' style={{backgroundColor:"rgb(247, 139, 0)"}}>
                            <div className='col-sm-6 pt-3 pe-0'>
                                <input type="text" className='form-control' placeholder='Enter your pick-up location or zip code' />
                            </div>
                            <div className='col-sm-3 pt-3 ps-1 pe-0'>
                                <input type="date" className='form-control'/>
                            </div>
                            <div className='col-sm-3 pt-3 ps-1'>
                                <input type="time" className='form-control'/>
                            </div>
                        </div>
                        <div className='row mt-5 pb-5'>
                            <div className='col-sm-12 text-center'>
                                <button className="thm-btn comment-form__btn" type="submit">Select My Car</button>
                            </div>
                        </div>                       
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='row pt-3'>
                            <div className='col-sm-12' style={myPara}>
                                <h5 className='mb-3'>How Can I Get a Free Budget Car Rental Upgrade?</h5>
                                <p className='mb-3'>To begin the booking process for a car rental upgrade, scroll to the top of the page and add in your destination, date, and time. The free upgrade code “UUWZ042” has been prefilled in the form and will automatically apply when you click, “Select my car”.</p>
                                <h5 className='mb-3'>Upgrade from Intermediate, Standard, or Full-Size</h5>
                                <p className='mb-3'>With this coupon you can upgrade any available car from one of the following three Budget car rental groups:</p>
                                <ol className='mb-3'>
                                    <li>+ Intermediate Car Rental (Group C)- upgrade to a Standard Car Rental (Group D)</li>
                                    <li>+ Standard Car Rental (Group D)- upgrade to a Full-Size Car Rental (Group E)</li>
                                    <li>+ Full-Size Car Rental (Group E)- upgrade to a Premium Car Rental (Group G)</li>
                                </ol>
                                <p className='mb-3'><b>The upgrade will take place during pickup.</b> Book the car with the ideal rate for you and then you’ll receive an upgraded vehicle when you pick up the keys.</p>
                                <h5 className='mb-3'>Sale Period</h5>
                                <p className='mb-3'>Your car rental must be picked up on or before <b>06/30/2023.</b></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <a href="#" style={myLink}>Terms and Conditions</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Slogan One */}
            </>
        )
    }
}