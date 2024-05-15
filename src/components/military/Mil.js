import React from 'react';
import {Link} from 'react-router-dom';

export default class OWCR extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myStyle = {
            backgroundImage: "url("+publicUrl+"assets/images/resources/military1.webp)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "500px"
        };
        return (
            <>
                <section className='border-top border-bottom'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12'>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb text-avis py-3">
                                        <li className="breadcrumb-item">Products & Services</li>
                                        <li className="breadcrumb-item">Services</li>
                                        <li className="breadcrumb-item link-avis" aria-current="page">One-Way Car Rental</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="banner-one" style={myStyle}>
                    <div className="banner-one__inner py-4">
                        <div className="container">
                            <div className="banner-one__content text-center">
                                <div className="title">
                                    <h3 className='text-black text-up'>US Veteran and Military Discount on Car Rental </h3>
                                    <p className='text-avie'>Enroll in Veterans Advantage and save up to 25% off base rates</p>
                                </div>

                                <div className="banner-one__tab-box">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="banner-one__tab tabs-box">

                                                <div className="tabs-content">

                                                    <div className="tab active-tab" id="places">
                                                        <div className="banner-one__tab-content-item">
                                                            <div className="banner-one__tab-content-places">
                                                                <div className="row">
                                                                    <div className="col-xl-12">
                                                                        <div className="banner-one__tab-content-places-form">
                                                                            <form action="#" className="comment-one__form contact-form-validated" novalidate="novalidate">
                                                                                <ul>
                                                                                    <li>
                                                                                        <div className="comment-form__input-box">
                                                                                            <div className="icon">
                                                                                                <span className="fas fa-keyboard"></span>
                                                                                            </div>
                                                                                            <input type="text" placeholder="Enter your pick-up location or zip code" name="name" />
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="comment-form__input-box">
                                                                                            <input type="date" placeholder="Location" name="name" />
                                                                                        </div>
                                                                                    </li>

                                                                                    <li>
                                                                                        <div
                                                                                            className="comment-form__input-box clearfix">
                                                                                            <input type="time" placeholder="Location" name="name" />
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="banner-one__categories">
                                    <div className="title">
                                        <button className="btn btn-avis py-2" type="submit">Select My Car</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <seciton>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 pt-4 border-bottom'>
                                
                            </div>
                            <div className='col-sm-12 mt-2'>
                                <h3 className='text-up text-black fw-normal'>Offer Details</h3>
                                <p className='text-avis text-black mt-2'>Avis is proud to support the veterans who have served and who continue to serve our country. To show our gratitude, Avis offers military rate car rentals of up to 25% off base rates. This veteran discount on car rental applies to U.S. military veterans, active-duty military, National Guard & Reservists, and their families who have enrolled in Veterans Advantage. Easily sign up for Veterans Advantage and receive discounts from popular brands on everyday wellness care, travel packages, technology, and more. Sign up for free today and use your first savings for a rental car from Avis.</p>
                                <p className='text-avis text-black mt-5'>Simply add in discount code T765700 after selecting your destination and rental dates. The discount will be reflected in the prices on next page, where you’ll browse through various car rental models. Some car groups are not eligible for the veteran car rental discount, and blackout dates and nonparticipating locations may also apply. The discount does not apply to taxes and fees. </p>
                                <p className='text-avis text-black mt-5'>Book a car rental online today with Avis and save on already affordable rentals with a discount for Veterans Advantage members.</p>
                                <h3 className='py-3'><a href="#" className='text-up link-avis'>Terms And Conditions</a></h3>
                            </div>
                        </div>
                    </div>
                </seciton>
            </>
        )
    }
}