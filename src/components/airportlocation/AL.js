import React from 'react';
import {Link} from 'react-router-dom';

export default class AL extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myStyle = {
            // backgroundImage: "url("+publicUrl+"assets/images/resources/tripideas1.webp)",
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            backgroundColor: "rgb(212, 0, 42)",
            height: "200px"
        };
        const myLink = {
            color: "rgb(237, 85, 5)",
        };
        const myPara = {
            lineHeight: "1.5",
            fontSize: "15px",
            color: "#fff"
        };
        const myBorder = {
            borderBottom: "2px solid #eaeaea"
        };
        return (
            <>
                <section style={myStyle}>
                    <div className='container pt-4'>
                        <div className='row'>
                            <div className='col-sm-12 text-white'>
                                <h3 className='text-white text-up'>Airport Car Rental Through Avis</h3>
                                <p className='text-avis my-2'>From small sedans for single business trips to minivans and SUV rentals for a family vacation, Avis offers a variety of airport car rentals for your convenience. Quickly walk off the plane and slide into a rental car. What better way to make traveling with little ones or luggage simple and painless? Plus, with an airport car rental at your disposal, you can see sights in between meetings, make stops along the way to destinations, and change plans in a pinch. Traveling just became more affordable and enjoyable with the freedom of airport car rental from Avis. </p>
                                <b className=''>Browse our USA airport locations below:</b>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='border-top border-bottom'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12 pt-2'>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item myLink" aria-current="page">Back to Locations</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container mt-4'>
                        <div className='row' style={myBorder}>
                            <div className='col-sm-12'>
                                <h3 className='text-black text-up'>Budget Airport Car Rentals</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container mt-4'>
                        <div className='row mt-3'>
                            <div className='col-sm-12'>
                                <h5 className='text-avis text-up'>USA</h5>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-sm-12' style={myBorder}>
                                <h3 className='text-black text-up'>Alaska</h3>
                            </div>
                            <div className='col-sm-4 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-4 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-4 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-4 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-sm-12' style={myBorder}>
                                <h3 className='text-black text-up'>Albama</h3>
                            </div>
                            <div className='col-sm-4 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-4 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-4 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-4 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='footer-one' style={{backgroundColor:"#000"}}>
                    <div className='container py-3'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <h4 className='text-white text-up'>How Do I Rent a Car at the Airport? </h4>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-sm-12' style={myPara}>
                                <p>Renting a car can be simple and quick. Begin by making a reservation on the Avis app, avis.com, or calling. Need a last minute airport car rental? No problem, check with the Avis counter to see if rentals are available. With a couple of pointers and tips from Avis, you can be out of the airport and on the road in no time.</p>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-sm-12' style={myPara}>
                                <ol>
                                    <li className='mb-3'><b>+ Avis Counter:</b> Each airport layout is different. To find the Avis counter where you are landing, look for signs directing you to the rental car area. Generally, car rental desks are near the baggage claim area. However, some airports have transits to off-site rental locations.</li>
                                    <li className='mb-3'><b>+ Reservations:</b> Making a reservation can help make your rental experience seamless.  Plus, with a reservation, you’ll have access to better rates. </li>
                                    <li className='mb-3'><b>+ Walk-ups:</b> If your plane lands during the business hours of the on-site Avis counter, you can walk up and ask the customer service agent if there are any available rental cars. Generally, all you need is a valid driver’s license and form of payment. If a vehicle is available during your travel times, you will sign paperwork and be on your way. </li>
                                    <li className='mb-3'><b>+ Rates and Availability:</b>  To see which rentals and rates are available, select the “Reservations'' tab, followed by “Make a Reservation” at the top of the page. Next, fill out the form with dates and locations and click “Select My Car.” </li>
                                    <li className='mb-3'><b>+ Coupons and Discounts:</b> Before reserving an airport car rental on the Avis website or app, browse through our “US Offers” page under the “Offers” tab. Once you have found an applicable discount,  select it and begin filling out the form on that page.  </li>
                                    <li className='mb-3'><b>+ Upgrades:</b> Before reserving an airport car rental on the Avis website or app, browse through our “US Offers” page under the “Offers” tab. Once you have found an applicable discount,  select it and begin filling out the form on that page. </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}