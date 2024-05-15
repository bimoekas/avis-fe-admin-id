import React from 'react';
import {Link} from 'react-router-dom';

export default class AP extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myStyle = {
            backgroundImage: "url("+publicUrl+"assets/images/resources/avis-app8.avif)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "500px"
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
                <section style={{backgroundColor:"#3e3e3e"}}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-8 align-self-center'>
                                <h1 className='text-white text-up mb-4'>Avis Rental Car App</h1>
                                <p className='text-avis text-white'>Looking to choose your own vehicle upon arrival? How about skip the counter at pickup? Do all of this and more right from your phone using the Avis App! Renting a car has never been easier.</p>
                                <button className='btn btn-avis text-up mt-4'>Get The App</button>
                            </div>
                            <img className='col-sm-4 img-fluid' src={publicUrl+'assets/images/resources/avis-app1.avif'} />
                        </div>
                    </div>
                </section>
                <section style={{backgroundColor:"#eaeaea"}}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-8 align-self-center'>
                                <h1 className='text-black text-up mb-4'>Make, update and cancel reservations and rentals.</h1>
                                <p className='text-avis text-black'>Take control of your rental. Choose your car, confirm, cancel or extend the rental. </p>
                            </div>
                            <img className='col-sm-4 img-fluid' src={publicUrl+'assets/images/resources/avis-app2.avif'} />
                        </div>
                    </div>
                </section>
                <section style={{backgroundColor:"#3e3e3e"}}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-8 align-self-center'>
                                <h1 className='text-white text-up mb-4'>Choose your car at pickup.</h1>
                                <p className='text-avis text-white'>You can exchange or upgrade your car before arriving at the rental location, quickly return your car, lock and unlock your car and more real-time rental features with an Avis Preferred Membership.</p>
                            </div>
                            <img className='col-sm-4 img-fluid' src={publicUrl+'assets/images/resources/avis-app3.avif'} />
                        </div>
                    </div>
                </section>
                <section style={{backgroundColor:"#eaeaea"}}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-8 align-self-center'>
                                <h1 className='text-black text-up mb-4'>Change your plans, find gas stations and more.</h1>
                                <p className='text-avis text-black'>Easily look-up and review rental details.</p>
                            </div>
                            <img className='col-sm-4 img-fluid' src={publicUrl+'assets/images/resources/avis-app4.avif'} />
                        </div>
                    </div>
                </section>
                <section style={{backgroundColor:"#3e3e3e"}}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-8 align-self-center'>
                                <h1 className='text-white text-up mb-4'>View and share your rental receipts.</h1>
                                <p className='text-avis text-white'>Get and share your receipt with anyone you wish, whether it’s your accountant, friend, co-worker, spouse, or the Human resource department.</p>
                            </div>
                            <img className='col-sm-4 img-fluid' src={publicUrl+'assets/images/resources/avis-app5.avif'} />
                        </div>
                    </div>
                </section>
                <section style={{backgroundColor:"#eaeaea"}}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-8 align-self-center'>
                                <h1 className='text-black text-up mb-4'>Manage your profile and preferences.</h1>
                                <p className='text-avis text-black'>Manage your Avis Preferred Profile in addition to preferences including your vehicle, location, add-ons, protection and coverages.</p>
                            </div>
                            <img className='col-sm-4 img-fluid' src={publicUrl+'assets/images/resources/avis-app6.avif'} />
                        </div>
                    </div>
                </section>
                <section style={{backgroundColor:"#3e3e3e"}}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-8 align-self-center'>
                                <h1 className='text-white text-up mb-4'>Find parking on the spot!</h1>
                                <p className='text-avis text-white'>Search for open parking spaces near your destination, compare options, and reserve a spot with a few taps. The charge will be applied directly to your credit card on file.</p>
                            </div>
                            <img className='col-sm-4 img-fluid' src={publicUrl+'assets/images/resources/avis-app7.avif'} />
                        </div>
                    </div>
                </section>
                <section style={myStyle}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 pt-5'>
                                <h1 className='text-black text-up mb-2'>The Avis App</h1>
                                <p className='text-secondary'>New Look. New Experience. Take Control.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}