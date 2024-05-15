import React from 'react';
import {Link} from 'react-router-dom';

export default class MG extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myStyle = {
            backgroundImage: "url("+publicUrl+"assets/images/resources/meetinggroup.avif)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "200px"
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
                <section className='border-top border-bottom'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12 pt-2'>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb py-2">
                                        <li className="breadcrumb-item"><a href="#">Products & Services</a></li>
                                        <li className="breadcrumb-item"><a href="#">Services</a></li>
                                        <li className="breadcrumb-item link-avis" aria-current="page">Meetings & Groups Car Rentals</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={myStyle}>
                </section>
                <section>
                    <div className='container pt-5'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <h1 className='text-up text-black'>Meetings & Groups Car Rentals</h1>
                            </div>
                        </div>
                        <div className='row justify-content-md-end mt-5'>
                            <div className='col-lg-6 col-sm-12'>
                                <div className='row'>
                                    <div className='col-lg-4 col-sm-12'>
                                        <b>Event Type</b>
                                    </div>
                                    <div className='col-lg-8 col-sm-12'>
                                        <select className='form-control'>
                                            <option>Select</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row text-avis'>
                            <div className='col-sm-12 mb-4'>
                                <p>Whether you’re planning a corporate meeting, entertainment/production event or a wedding or reunion, save when you reserve five or more car rentals with Avis!</p>
                            </div>
                            <div className='col-sm-12 mb-4'>
                                <p>A dedicated Avis Meeting Specialist will build <b>an exclusive package of special low group car rental rates</b> which are valid one week prior to and one week after the event. </p>
                                <p>Additional benefits include:</p>
                            </div>
                            <div className='col-sm-12 mb-4'>
                                <ol>
                                    <li>+ A personalized booking page for attendees</li>
                                    <li>+ Additional 5% prepay discount*</li>
                                    <li>+ Free unlimited mileage</li>
                                    <li>+ Individual and corporate direct billing options</li>
                                </ol>
                            </div>
                            <div className='col-sm-12 mb-4'>
                                <p><b>To connect with a Avis Meeting Specialist and start planning for your next event, choose your event type and complete the form or call (800) 356-0147.</b></p>
                                <p>*Not applicable for existing corporate customers.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}