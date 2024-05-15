import React from 'react';
import {Link} from 'react-router-dom';

export default class RentalNYC extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myStyle = {
            backgroundColor: "#c20027"
        };
        const myStyleTwo = {
            background: "linear-gradient(180deg, #c20027 50%, #fff 50%)"
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
                        <div className='row pt-5'>
                            <div className='col-sm-12 text-center pt-5'>
                                <h2 className='text-up text-white'>Rent a Car in Las Vegas, NV </h2>
                            </div>
                        </div>
                        <div className='row mt-3 mb-5 pb-3'>
                            <div className='col-sm-6 pt-3 pe-0'>
                                <input type="text" className='form-control input-avis py-3' placeholder='Enter your pick-up location or zip code' />
                            </div>
                            <div className='col-sm-3 pt-3 ps-0 pe-0'>
                                <input type="date" className='form-control input-avis py-3'/>
                            </div>
                            <div className='col-sm-3 pt-3 ps-0'>
                                <input type="time" className='form-control input-avis py-3'/>
                            </div>
                        </div>
                        <div className='row mt-5 pb-5'>
                            <div className='col-sm-12 text-center'>
                                <button className="btn btn-avis-black" type="submit">Select My Car</button>
                            </div>
                        </div>                       
                    </div>
                </section>
                <section style={myStyleTwo}>
                    <div className='container'>
                        <div className='row pt-3'>
                            <div className='col-sm-12'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <div className='row'>
                                            <div className='col-sm-12 col-lg-6'>
                                                <nav aria-label="breadcrumb">
                                                    <ol className="breadcrumb text-avis">
                                                        <li className="breadcrumb-item"><a href="#">Location</a></li>
                                                        <li className="breadcrumb-item"><a href="#">Canada & USA</a></li>
                                                        <li className="breadcrumb-item"><a href="#">United States</a></li>
                                                        <li className="breadcrumb-item"><a href="#">Nevada</a></li>
                                                        <li className="breadcrumb-item link-avis" aria-current="page"><a href="#">Las Vegas</a></li>
                                                    </ol>
                                                </nav>
                                            </div>
                                            <div className='col-lg-6 text-end link-avis'>
                                                <p>View Map <span className='fa fa-map'></span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <div className='row'>
                                            <div className='col-sm-12'>
                                                <h4 className='text-black text-up'>Las Vegas Car Rental & Nearby Locations </h4>
                                            </div>
                                        </div>
                                        <div className='row mt-5'>
                                            <div className='col-sm-12 border-bottom'>
                                                <div className='row'>
                                                    <div className='col-lg-6 col-sm-6'>
                                                        <b><p className='link-avis'>1. Golden Nugget Hotel</p></b>
                                                    </div>
                                                    <div className='col-lg-6 col-sm-6 text-end'>
                                                        <p>.25 miles away</p>
                                                    </div>
                                                </div>
                                                <div className='row ms-2'>
                                                    <div className='col-lg-3 col-sm-6'>
                                                        <p><span className='fa fa-map-marker'></span> <b>Address</b></p>
                                                        <p>129 E Fremont St </p>
                                                    </div>
                                                    <div className='col-lg-3 col-sm-6 text-end'>
                                                        <p><span className='fa fa-phone'></span> <b>Phone</b></p>
                                                        <p>(1) 702-568-2212 </p>
                                                        <p><span className='fa fa-home'></span> <b>Location Type</b></p>
                                                        <p>Licensee </p>
                                                    </div>
                                                    <div className='col-lg-3 col-sm-6 text-end'>
                                                        <p><span className='fa fa-clock'></span> <b>Hours of Operation</b></p>
                                                        <p>Sun - Sat 7:30 AM - 4:30 PM</p>
                                                        <p><b><small>Keydrop Location</small></b></p>
                                                    </div>
                                                    <div className='col-lg-3 col-sm-6 text-end'>
                                                        <button className='btn btn-avis py-2 mt-3 text-up'>Make A Reservation</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row mt-5'>
                                            <div className='col-sm-12 border-bottom'>
                                                <div className='row'>
                                                    <div className='col-lg-6 col-sm-6'>
                                                        <b><p className='link-avis'>2. Golden Nugget Hotel</p></b>
                                                    </div>
                                                    <div className='col-lg-6 col-sm-6 text-end'>
                                                        <p>.25 miles away</p>
                                                    </div>
                                                </div>
                                                <div className='row ms-2'>
                                                    <div className='col-lg-3 col-sm-6'>
                                                        <p><span className='fa fa-map-marker'></span> <b>Address</b></p>
                                                        <p>129 E Fremont St </p>
                                                    </div>
                                                    <div className='col-lg-3 col-sm-6 text-end'>
                                                        <p><span className='fa fa-phone'></span> <b>Phone</b></p>
                                                        <p>(1) 702-568-2212 </p>
                                                        <p><span className='fa fa-home'></span> <b>Location Type</b></p>
                                                        <p>Licensee </p>
                                                    </div>
                                                    <div className='col-lg-3 col-sm-6 text-end'>
                                                        <p><span className='fa fa-clock'></span> <b>Hours of Operation</b></p>
                                                        <p>Sun - Sat 7:30 AM - 4:30 PM</p>
                                                        <p><b><small>Keydrop Location</small></b></p>
                                                    </div>
                                                    <div className='col-lg-3 col-sm-6 text-end'>
                                                        <button className='btn btn-avis py-2 mt-3 text-up'>Make A Reservation</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row mt-5'>
                                            <div className='col-sm-12 border-bottom'>
                                                <div className='row'>
                                                    <div className='col-lg-6 col-sm-6'>
                                                        <b><p className='link-avis'>3. Golden Nugget Hotel</p></b>
                                                    </div>
                                                    <div className='col-lg-6 col-sm-6 text-end'>
                                                        <p>.25 miles away</p>
                                                    </div>
                                                </div>
                                                <div className='row ms-2'>
                                                    <div className='col-lg-3 col-sm-6'>
                                                        <p><span className='fa fa-map-marker'></span> <b>Address</b></p>
                                                        <p>129 E Fremont St </p>
                                                    </div>
                                                    <div className='col-lg-3 col-sm-6 text-end'>
                                                        <p><span className='fa fa-phone'></span> <b>Phone</b></p>
                                                        <p>(1) 702-568-2212 </p>
                                                        <p><span className='fa fa-home'></span> <b>Location Type</b></p>
                                                        <p>Licensee </p>
                                                    </div>
                                                    <div className='col-lg-3 col-sm-6 text-end'>
                                                        <p><span className='fa fa-clock'></span> <b>Hours of Operation</b></p>
                                                        <p>Sun - Sat 7:30 AM - 4:30 PM</p>
                                                        <p><b><small>Keydrop Location</small></b></p>
                                                    </div>
                                                    <div className='col-lg-3 col-sm-6 text-end'>
                                                        <button className='btn btn-avis py-2 mt-3 text-up'>Make A Reservation</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mt-4'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <h1 className='text-up text-black'>Las Vegas Rental Cars</h1>
                                <p className='text-avis mt-2'>Today, Las Vegas is an internationally renowned cultural center overflowing with thrills and entertainment, but it came from the humblest of beginnings. Even with a name that translates to “the meadows,” it’s hard to believe this thriving metropolis was once a little railroad service center in the middle of the Mojave Desert.</p>
                                <p className='text-avis mt-2'>The towering landmarks and artificial glow of the city can be found near the southernmost point of Nevada, which means you can expect clear skies and warm weather during your stay. We suggest you take full advantage of Nevada’s perpetual summer and choose a convertible for your rental car! Put the top down and cruise along the Vegas Strip, or take a break from the neon lights and go for a drive through the winding roads of Red Rock Canyon. Use the Avis App to reserve your vehicle ahead of time and pick up your car rental at any of our 10 car rental locations in Las Vegas.</p>
                                <p className='text-avis mt-2'>With dozens of massive casinos, award-winning resorts, and an endless list of nightlife options, it’s really no wonder Las Vegas is known as the entertainment capital of the world. Whether you’re a high-stakes gambler, a thrill-seeker, a lover of fine art, or a business traveler, this city has everything you could possibly want from a vacation in the states—it even has a man-made beach! </p>
                                <p className='text-avis mt-2'>If you plan on staying long enough to experience everything Sin City has to offer, you may want to consider a long-term car rental or a monthly car rental. If your vacation or business trip is limited to a mere number of days, get out of the airport and into the city as soon as you can to check off every experience on your list. Save yourself a chunk of time picking up your rental car by joining our rewards program.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Slogan One */}
            </>
        )
    }
}