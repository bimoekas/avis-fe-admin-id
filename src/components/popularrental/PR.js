import React from 'react';
import {Link} from 'react-router-dom';

export default class PR extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myStyle = {
            backgroundImage: "url("+publicUrl+"assets/images/resources/popularrental.jpg)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        return (
            <>
                <section style={myStyle}>
                    <div className='container'>
                        <div className='col-sm-12 pt-4' style={{height:"150px"}}>
                            <h1 style={{color:"#fff"}}>Popular Rentals & Luxury Vehicles</h1>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='row mt-5 pb-3'>
                            <div className='col-sm-6'>
                                <h3>Ford Edge SUV</h3>
                                <div style={{border:"3px solid rgb(0, 40, 95)"}} className='mt-5'></div>
                                <button className='btn w-100 mt-3' style={{backgroundColor:"rgb(0, 40, 95)", color:"#fff", padding:"0px 50px", height:"50px"}}>Rent a Standard SUV</button>
                            </div>
                            <div className='col-sm-6'>
                                <img  src={publicUrl+'assets/images/resources/cars1.avif'}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{backgroundColor:"#eaeaea"}} className='py-4'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 col-sm-12'>
                                <div className='col-sm-12' style={{backgroundColor:"#fff"}}>
                                    <div className='row p-4'>
                                        <div className='col-sm-12'>
                                            <h4>Chrysler Voyager Minivan Rental</h4>
                                        </div>
                                        <div className='col-sm-12 my-3'>
                                            <img  src={publicUrl+'assets/images/resources/cars1.avif'}/>
                                        </div>
                                        <div className='col-sm-12'>
                                        <button className='btn w-100 mt-3' style={{backgroundColor:"rgb(0, 40, 95)", color:"#fff", padding:"0px 50px", height:"50px"}}>Rent a Minivan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='col-sm-12' style={{backgroundColor:"#fff"}}>
                                    <div className='row p-4'>
                                        <div className='col-sm-12'>
                                            <h4>Chrysler Voyager Minivan Rental</h4>
                                        </div>
                                        <div className='col-sm-12 my-3'>
                                            <img  src={publicUrl+'assets/images/resources/cars1.avif'}/>
                                        </div>
                                        <div className='col-sm-12'>
                                        <button className='btn w-100 mt-3' style={{backgroundColor:"rgb(0, 40, 95)", color:"#fff", padding:"0px 50px", height:"50px"}}>Rent a Minivan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='row mt-5 pb-3'>
                            <div className='col-sm-6'>
                                <img  src={publicUrl+'assets/images/resources/cars1.avif'}/>
                            </div>
                            <div className='col-sm-6'>
                                <h3>Ford Edge SUV</h3>
                                <div style={{border:"3px solid rgb(0, 40, 95)"}} className='mt-5'></div>
                                <button className='btn w-100 mt-3' style={{backgroundColor:"rgb(0, 40, 95)", color:"#fff", padding:"0px 50px", height:"50px"}}>Rent a Standard SUV</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{backgroundColor:"#eaeaea"}} className='py-4'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 col-sm-12'>
                                <div className='col-sm-12' style={{backgroundColor:"#fff"}}>
                                    <div className='row p-4'>
                                        <div className='col-sm-12'>
                                            <h4>Chrysler Voyager Minivan Rental</h4>
                                        </div>
                                        <div className='col-sm-12 my-3'>
                                            <img  src={publicUrl+'assets/images/resources/cars1.avif'}/>
                                        </div>
                                        <div className='col-sm-12'>
                                            <button className='btn w-100 mt-3' style={{backgroundColor:"rgb(0, 40, 95)", color:"#fff", padding:"0px 50px", height:"50px"}}>Rent a Minivan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='col-sm-12' style={{backgroundColor:"#fff"}}>
                                    <div className='row p-4'>
                                        <div className='col-sm-12'>
                                            <h4>Chrysler Voyager Minivan Rental</h4>
                                        </div>
                                        <div className='col-sm-12 my-3'>
                                            <img  src={publicUrl+'assets/images/resources/cars1.avif'}/>
                                        </div>
                                        <div className='col-sm-12'>
                                        <button className='btn w-100 mt-3' style={{backgroundColor:"rgb(0, 40, 95)", color:"#fff", padding:"0px 50px", height:"50px"}}>Rent a Minivan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='row mt-5 pb-3'>
                            <div className='col-sm-6'>
                                <img  src={publicUrl+'assets/images/resources/cars1.avif'}/>
                            </div>
                            <div className='col-sm-6'>
                                <h3>Ford Edge SUV</h3>
                                <div style={{border:"3px solid rgb(0, 40, 95)"}} className='mt-5'></div>
                                <button className='btn w-100 mt-3' style={{backgroundColor:"rgb(0, 40, 95)", color:"#fff", padding:"0px 50px", height:"50px"}}>Rent a Standard SUV</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{backgroundColor:"#eaeaea"}} className='py-4'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 col-sm-12'>
                                <div className='col-sm-12' style={{backgroundColor:"#fff"}}>
                                    <div className='row p-4'>
                                        <div className='col-sm-12'>
                                            <h4>Chrysler Voyager Minivan Rental</h4>
                                        </div>
                                        <div className='col-sm-12 my-3'>
                                            <img  src={publicUrl+'assets/images/resources/cars1.avif'}/>
                                        </div>
                                        <div className='col-sm-12'>
                                            <button className='btn w-100 mt-3' style={{backgroundColor:"rgb(0, 40, 95)", color:"#fff", padding:"0px 50px", height:"50px"}}>Rent a Minivan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='col-sm-12' style={{backgroundColor:"#fff"}}>
                                    <div className='row p-4'>
                                        <div className='col-sm-12'>
                                            <h4>Chrysler Voyager Minivan Rental</h4>
                                        </div>
                                        <div className='col-sm-12 my-3'>
                                            <img  src={publicUrl+'assets/images/resources/cars1.avif'}/>
                                        </div>
                                        <div className='col-sm-12'>
                                        <button className='btn w-100 mt-3' style={{backgroundColor:"rgb(0, 40, 95)", color:"#fff", padding:"0px 50px", height:"50px"}}>Rent a Minivan</button>
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