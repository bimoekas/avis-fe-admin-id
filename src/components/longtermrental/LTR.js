import React from 'react';
import {Link} from 'react-router-dom';

export default class LTR extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myStyle = {
            // backgroundImage: "url("+publicUrl+"assets/images/resources/productservice.avif)",
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            // height: "200px"
        };
        const myLink = {
            color: "rgb(237, 85, 5)",
        };
        const myPara = {
            lineHeight: "1.5",
            fontSize: "15px",
            color: "#000"
        };
        const myHead = {
            fontSize: "18px"
        };
        const myCard = {
            backgroundColor: "#fff"
        };
        const myParas = {
            lineHeight: "1.5",
            height: "150px",
            fontSize: "15px",
            color: "#000"
        }
        return (
            <>
                <section style={{backgroundColor:"#3e3e3e"}}>
                    <div className='container-fluid pb-3'>
                        <div className='row'>
                            <div className='col-sm-4 pt-3 pe-0'>
                                <input type="text" className='form-control input-avis py-2' placeholder='Enter your pick-up location or zip code' />
                            </div>
                            <div className='col-sm-3 pt-3 ps-0 pe-0'>
                                <input type="date" className='form-control input-avis py-2'/>
                            </div>
                            <div className='col-sm-3 pt-3 pe-0 ps-0'>
                                <input type="time" className='form-control input-avis py-2'/>
                            </div>
                            <div className='col-sm-2 ps-1 pt-3'>
                                <button className="btn btn-avis2 form-control py-2" type="submit">Continue</button>
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
                                        <li className="breadcrumb-item"><a href="#">Products & Services</a></li>
                                        <li className="breadcrumb-item"><a href="#">Services</a></li>
                                        <li className="breadcrumb-item link-avis" aria-current="page">Avis Flex - Long Term Car Rental</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container pt-5'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <h1 className='text-up text-black mb-2'>Low Monthly & Long-Term Car Rental Rates with Avis Flex</h1>
                                <p className='mb-3 text-avis'>Flexible rentals for a month or longer.</p>
                                <p className='mb-3 text-avis'>Avis Flex is designed to give you all the benefits of a premium Avis car for an extended period of time – with great rates and no long-term commitment.</p>
                                <p className='mb-3 text-avis'>With Avis Flex, you get:</p>
                                <ol className='mb-3 text-avis'>
                                    <li><b>+ Great Rates:</b>   the longer you rent, the more you save</li>
                                    <li><b>+ No long term commitment:</b>  rent up to 11 months at a time</li>
                                    <li><b>+ Choose your car:</b>  download the Avis app and upon your arrival you can choose the exact make and model of the car you prefer</li>
                                    <li><b>+ One-Way Rentals:</b>  book a month-long car rental with a one-way option</li>
                                    <li><b>+ Loss Damage Waiver (LDW):</b>  we offer discounted LDW rates on monthly car rentals</li>
                                    <li><b>+ Swap Vehicles:</b>   If you need to change your car for any reason, contact the rental location from where you picked up your car, to schedule a vehicle swap.</li>
                                </ol>
                                <p className='mb-3 text-avis'><b>Reserve Today</b> or call 1-800-524-9000 for an Avis Flex long-term rental.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{backgroundColor:"#3e3e3e"}}>
                    <div className='container p-5'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <h4 className='text-up text-white'>Long-Term Car Rental Deals</h4>
                            </div>
                            <div className='col-sm-6 mt-3'>
                                <div className='col-sm-12 bg-white'>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <img className='w-100 h-100' src={publicUrl+"assets/images/resources/ltr2.webp"} />
                                        </div>
                                        <div className='col-sm-6 my-3'>
                                            <a href='#'>
                                                <h5 className='text-up link-avis'>Deals for Every Driver</h5>
                                            </a>
                                            <p className='mt-3'>Avis offers discounts so you can save on car rental. Browse our discounts and discover savings for AARP members, military service members and veterans, and everyday renters.</p>
                                            <button className='btn btn-avis text-up mt-3'>pick your discount</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 mt-3'>
                                <div className='col-sm-12 bg-white'>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <img className='w-100 h-100' src={publicUrl+"assets/images/resources/ltr3.webp"} />
                                        </div>
                                        <div className='col-sm-6 my-3'>
                                            <a href='#'>
                                                <h5 className='text-up link-avis'>Pay Now, Save Up to 30%</h5>
                                            </a>
                                            <p className='mt-3'>Choose to “Pay Now” and save up to 30% on your next car rental. This is an offer you don’t want to miss!</p>
                                            <button className='btn btn-avis text-up mt-3'>Get Up to 30% Off</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container mb-5'>
                        <div className='row mb-4'>
                            <div className='col-sm-12 mt-3'>
                                <h4 className='mb-3 text-black text-up'>Leasing Vs. Renting a Car</h4>
                                <p className='mb-3 text-avis'>If you’re thinking about renting a car for an extended period, you may wonder if you should just jump straight to financing or leasing. </p>
                                <p className='mb-3 text-avis'>In the long run, booking a long-term car rental can be a lot easier and cheaper than getting a one-year car lease. And if you’re looking for a short-term auto lease that’s even shorter than a year, then a monthly car rental is perfect for you! </p>
                                <p className='mb-3 text-avis'><b>Monthly car rentals…</b></p>
                                <ol className='mb-3 text-avis'>
                                    <li>+ Are easier to find than a short-term lease.</li>
                                    <li>+ Are less expensive.</li>
                                    <li>+ Give you the ability to swap cars.</li>
                                    <li>+ Keep you free from leasing/ownership fees (such as vehicle registration and car maintenance).</li>
                                    <li>+ Are new vehicles (usually not more than 3 years old).</li>
                                    <li>+ Don’t require a credit check.</li>
                                </ol>
                                <p className='mb-3 text-avis'>Interested in comparing your options further? Look at the pros and cons of car leases and long-term car rentals before you make your choice.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container mt-3'>
                        <div className='row pt-4'>
                            <div className='col-sm-12'>
                                <h4 className='text-up text-black'>Popular Car Groups for Long-Term Car Rental</h4>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/resources/ltr4.webp"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content">
                                        <a href='#'><h5 className='text-up text-black'>Rent a Ford Mustang Coupe </h5></a>
                                        <p className='my-5 text-avis'>When you’re looking for a long-term rental, make the most of your trip and enjoy a dream car without the big price tag.</p>
                                        <button className='btn btn-avis mt-3 w-100'>View Vehicle Info</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/resources/ltr5.webp"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content">
                                        <a href='#'><h5 className='text-up text-black'>Rent a Ford Mustang Coupe </h5></a>
                                        <p className='my-5 text-avis'>When you’re looking for a long-term rental, make the most of your trip and enjoy a dream car without the big price tag.</p>
                                        <button className='btn btn-avis mt-3 w-100'>View Vehicle Info</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/resources/ltr4.webp"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content">
                                        <a href='#'><h5 className='text-up text-black'>Rent a Ford Mustang Coupe </h5></a>
                                        <p className='my-5 text-avis'>When you’re looking for a long-term rental, make the most of your trip and enjoy a dream car without the big price tag.</p>
                                        <button className='btn btn-avis mt-3 w-100'>View Vehicle Info</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{backgroundColor:"#eaeaea"}}>
                    <div className='container p-5'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <h4 className='text-up text-black'>Travel Inspiration for Extended Car Rental</h4>
                            </div>
                            <div className='col-sm-6 mt-3'>
                                <div className='col-sm-12 bg-white'>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <img className='w-100 h-100' src={publicUrl+"assets/images/resources/ltr6.webp"} />
                                        </div>
                                        <div className='col-sm-6 my-3'>
                                            <a href='#'>
                                                <h5 className='text-up link-avis'>Go on an Epic Route 66 Road Trip</h5>
                                            </a>
                                            <p className='mt-3'>See the country like never before! Journey through eight states and cover 2,448 miles on this iconic American highway. </p>
                                            <button className='btn btn-avis text-up mt-3'>View Major Stops</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 mt-3'>
                                <div className='col-sm-12 bg-white'>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <img className='w-100 h-100' src={publicUrl+"assets/images/resources/ltr7.webp"} />
                                        </div>
                                        <div className='col-sm-6 my-3'>
                                            <a href='#'>
                                                <h5 className='text-up link-avis'>Explore State and National Parks Near Las Vegas</h5>
                                            </a>
                                            <p className='mt-3'>Yearning for the outdoors? Discover 11 state and national parks that are a short drive away from Las Vegas. </p>
                                            <button className='btn btn-avis text-up mt-3'>See Trip Details</button>
                                        </div>
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