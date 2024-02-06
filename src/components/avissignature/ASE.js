import React from 'react';
import {Link} from 'react-router-dom';

export default class ASE extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';

        return (
            <>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12 mt-5 mb-4'>
                                <p className='fw-normal fst-italic'>Vehicle make, model, trim, features and color are not guaranteed and are subject to location and availability. Vehicle features are subject to change based on the vehicle model year.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{backgroundColor:"#000"}}>
                    <div className='container'>
                        <div className='row text-center'>
                            <div className='col-xl-12 mt-3 mb-3'>
                                <h1 className='text-up text-white'>Don’t Wait to Reserve Your Luxury Vehicle! </h1>
                                <p className='text-avis mt-4 text-white'>Luxury cars are exclusive, elite, and exotic vehicles. And they are also in limited supply among our fleet. If you want to surprise your significant other or just treat yourself to an indulgent ride, reserve your car in advance. </p>
                                <button className='btn btn-avis text-up mt-3'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}