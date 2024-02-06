import React from 'react';
import {Link} from 'react-router-dom';

export default class TS extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myBg = {
            backgroundImage: "url("+publicUrl+"assets/images/resources/tripit1.avif)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "250px"
        }
        const myText = {
            color: "#000",
        }
        const myLink = {
            color: "rgb(237, 85, 5)",
            textDecoration: "underline"
        }
        const myPara = {
            lineHeight: "1.5",
            fontSize: "15px"
        }
        const myUl = {
            paddingLeft: "50px"
        }
        const myH3 = {
            color: "rgb(0, 40, 95);"
        }
        return (
            <>
                {/* Start Slogan One */}
                <section className='container-fluid' style={myBg}>
                    <div className='row justify-content-md-center'>
                        <div className='col-lg-7 col-md-9 col-sm-12 mt-5'>
                            <h1 className='text-black'>AVIS TRIPIT® SERVICE</h1>
                            <p>Revolutionize the car rental process</p>
                        </div>
                    </div>
                </section>

                <section className='container-fluid mt-3' style={myText}>
                    <div className='row justify-content-md-center'>
                        <div className='col-lg-7 col-md-9 col-sm-12'>
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <h4 className='text-avis text-black'><b>Make an Avis rental without having to re-enter flight or travel dates, times and locations.</b></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-md-center mt-2'>
                        <div className='col-lg-7 col-md-9 col-sm-12'>
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <button className='btn btn-avis'>SIGN IN</button>
                                    <button className='btn btn-avis ms-3'>NOT A MEMBER? SIGN UP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-md-center mt-3 pt-3' style={{backgroundColor:"#eaeaea"}}>
                        <div className='col-lg-7 col-md-9 col-sm-12 border-bottom' style={myPara}>
                            <img style={{maxWidth:"200px"}} src={publicUrl+"assets/images/resources/tripit.png"} />
                            <h4 className='mt-2 link-avis'><b>WHAT IS TRIPIT?</b></h4>
                            <ol>
                                <li>+ Organize trip details into one master online itinerary - even if arrangements are booked at multiple travel sites</li>
                                <li>+ Automatically include maps, directions and weather in the master itinerary</li>
                                <li>+ Have the option to book restaurants, theatre tickets, activities and more right from within the online itinerary</li>
                                <li>+ Safely access travel plans online, share them, check-in for flights or print an itinerary</li>
                            </ol>
                            <h4 className='mt-2 link-avis'><b>LINK YOUR ACCOUNTS AND SAVE TIME</b></h4>
                            <ol>
                                <li>+ Your trip itineraries appear on Avis.com</li>
                                <li>+ Click an itinerary and those trip details will be entered into the Avis.com search</li>
                                <li>+ Have the option to book restaurants, theatre tickets, activities and more right from within the online itinerary</li>
                                <li>+ Your Avis car is then automatically added to your TripIt itinerary</li>
                            </ol>
                            <h4 className='mt-2 link-avis'><b>ALL YOU HAVE TO DO IS CHOOSE WHAT YOU WANT</b></h4>
                            <p>You pick your car and options, we apply your travel details.</p>
                            <button className='btn btn-avis mt-4 mb-2'>SIGN UP - IT'S FREE AND EASY</button>
                        </div>
                    </div>
                </section>
                {/* End Slogan One */}
            </>
        )
    }
}