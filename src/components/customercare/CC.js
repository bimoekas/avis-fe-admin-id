import React from 'react';
import {Link} from 'react-router-dom';

export default class CC extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myBg = {
            backgroundColor: "#eaeaea" 
        }
        const myLink = {
            color: "rgb(237, 85, 5)",
        }
        const myHead = {
            fontSize: "18px"
        }
        const myPara = {
            lineHeight: "1.5",
            fontSize: "15px",
            color: "#000",
            height: "175px"
        }
        const myCard = {
            backgroundColor: "#fff"
        }
        return (
            <>
                {/* Start Slogan One */}
                <section >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12 py-5'>
                                <h2 className='text-up text-black'>Contact Avis Customer Service</h2>
                                <p className='text-avis mt2'>Do you want to talk to an Avis customer service agent? For help in the United States, call 1-800-352-7900. Visit the Worldwide Telephone Numbers page for help in other countries. Helpful links for many common customer service needs are found below.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={myBg} className="py-5">
                    <div className='container'>
                        <div className='row'>
                            <a href='#' className='col-lg-4 col-sm-6 pe-5 pb-5'>
                                <div className='row text-black' style={myCard}>
                                    <div className='col-12 p-3'>
                                        <label className='mb-2'><b>Worldwide Telephone Numbers</b></label>
                                        <label className='text-avis' style={{minHeight:"150px"}}>Avis has locations in more than 150 countries. Use the phone numbers here to reserve a car at one of our international car rental locations.</label>
                                    </div>
                                    <div className='col-sm-12 text-end pb-3'>
                                        <label className='link-avis'>Learn More</label>
                                    </div>
                                </div>
                            </a>
                            <a href='#' className='col-lg-4 col-sm-6 pe-5 pb-5'>
                                <div className='row text-black' style={myCard}>
                                    <div className='col-12 p-3'>
                                        <label className='mb-2'><b>Worldwide Telephone Numbers</b></label>
                                        <label className='text-avis' style={{minHeight:"150px"}}>Avis has locations in more than 150 countries. Use the phone numbers here to reserve a car at one of our international car rental locations.</label>
                                    </div>
                                    <div className='col-sm-12 text-end pb-3'>
                                        <label className='link-avis'>Learn More</label>
                                    </div>
                                </div>
                            </a>
                            <a href='#' className='col-lg-4 col-sm-6 pe-5 pb-5'>
                                <div className='row text-black' style={myCard}>
                                    <div className='col-12 p-3'>
                                        <label className='mb-2'><b>Worldwide Telephone Numbers</b></label>
                                        <label className='text-avis' style={{minHeight:"150px"}}>Avis has locations in more than 150 countries. Use the phone numbers here to reserve a car at one of our international car rental locations.</label>
                                    </div>
                                    <div className='col-sm-12 text-end pb-3'>
                                        <label className='link-avis'>Learn More</label>
                                    </div>
                                </div>
                            </a>
                            <a href='#' className='col-lg-4 col-sm-6 pe-5 pb-5'>
                                <div className='row text-black' style={myCard}>
                                    <div className='col-12 p-3'>
                                        <label className='mb-2'><b>Worldwide Telephone Numbers</b></label>
                                        <label className='text-avis' style={{minHeight:"150px"}}>Avis has locations in more than 150 countries. Use the phone numbers here to reserve a car at one of our international car rental locations.</label>
                                    </div>
                                    <div className='col-sm-12 text-end pb-3'>
                                        <label className='link-avis'>Learn More</label>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                {/* End Slogan One */}
            </>
        )
    }
}