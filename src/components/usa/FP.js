import React from 'react';

export default class FP extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        const myStyle = {
            backgroundImage: "url(" + publicUrl + "assets/images/resources/onewaycarrental1.webp)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "200px"
        };
        return (
            <>
                <section className='border-top border-bottom'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12'>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb text-avis py-3">
                                        <li className="breadcrumb-item">Cars & Services</li>
                                        <li className="breadcrumb-item">Products & Services</li>
                                        <li className="breadcrumb-item">USA & Canada</li>
                                        <li className="breadcrumb-item link-avis" aria-current="page">Fuel Plans</li>
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
                                    <h3 className='text-white text-up'>FUEL PLANS AND FUEL SERVICE OPTIONS</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container mt-2'>
                        <div className='row py-3'>
                            <div className='col-12'>
                                <h3 className='text-up text-black fw-normal'>FUEL PLANS DETAILS</h3>
                                <p className='text-avis mt-2'><b>One less stop on your way home.</b></p>
                                <ul>
                                    <li className='text-avis mt-2'>•	Fuel options geared to your needs</li>
                                    <li className='text-avis mt-2'>•	Pay in advance</li>
                                    <li className='text-avis mt-2'>•	Skip the pump and save time on your trip</li>
                                </ul>
                                <p className='text-avis mt-2'>When it's time to fill up your tank, choose the way that works best for your schedule and budget:</p>
                                <ul>
                                    <li className='text-avis mt-2'>•	Fuel Service Option</li>
                                    <li className='text-avis mt-2'>•	Self-Service*</li>
                                    <li className='text-avis mt-2'>•	EZFuel® and Fuel Service Charge*</li>
                                </ul>
                                <p className='text-avis mt-2'>* Can be requested at rental counter</p>
                            </div>
                        </div>
                        <div className='row py-3'>
                            <div className='col-12'>
                                <h3 className='text-up text-black fw-normal'>Fuel Service Option</h3>
                                <p className='text-avis mt-2'>Save yourself time and hassle by adding our Fuel Service Option to your next online reservation. Just pay in advance for a full tank of gas and bring the car back empty. No need to search for a gas station before returning the car. Our rates for this service are comparable to the current local retail pump price.</p>
                                <p className='text-avis mt-2'>If you select this option, you'll want to bring the car back as close to empty as possible, because no credit or refund will be given for unused fuel in the tank.</p>
                                <p className='text-avis mt-2'>If the Fuel Service Option isn't exactly what you're looking for, choose one of these other popular refueling options at the time of rental:</p>
                            </div>
                        </div>
                        <div className='row py-3'>
                            <div className='col-12'>
                                <h3 className='text-up text-black fw-normal'>Self-Service</h3>
                                <p className='text-avis mt-2'>Not sure how far you'll be driving, but plan to stop for gas? Don't accept the fuel service option. Simply purchase your own fuel just before you return the car to Avis with a full tank of gas. Provide a receipt for your fuel purchase, and you'll avoid any refueling service charge. How easy is that?</p>
                            </div>
                        </div>
                        <div className='row py-3'>
                            <div className='col-12'>
                                <h3 className='text-up text-black fw-normal'>EZFuel® and Fuel Service Charge</h3>
                                <p className='text-avis mt-2'>Driving under 75 miles? With our newest refueling service, customers who drive fewer than 75 miles pay a low flat fee for fuel and then return the car without stopping at the pump. Select this option and we'll automatically charge you a flat fee of <b>$15.99, ($17.99 if you rent the vehicle in California). </b></p>
                                <p className='text-avis mt-2'>If you <b>**FILL UP THE CAR***</b> AND present a receipt for your fuel purchase, the <b>EZFuel</b> charge will be removed when you return the car.</p>
                                <p className='text-avis mt-2'>EZFuel option is not available at all locations. Please contact your renting location to confirm the availability of this service.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}