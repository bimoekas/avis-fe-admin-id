import React from 'react';
import {Link} from 'react-router-dom';

export default class FB extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myLink = {
            color: "rgb(237, 85, 5)",
        }
        const myHead = {
            fontSize: "32px",
            color: "rgb(0, 40, 95)"
        }
        const mySubHead = {
            fontSize: "20px",
            color: "rgb(0, 40, 95)"
        }
        const myMiniHead = {
            color: "rgb(0, 40, 95)"
        }
        const myPara = {
            lineHeight: "1.5",
            fontSize: "15px",
            color: "#000",
            marginBottom: "10px"
        }
        return (
            <>
                <section>
                    <div className='container pt-5 pb-3'>
                        <div className='row'>
                            <div className='col-lg-12 col-sm-12'>
                                <label style={myHead}>Budget Car Rental Fastbreak Program</label>
                            </div>
                            <div className='col-lg-12 col-sm-12 mt-4'>
                                <p style={mySubHead}>Join Fastbreak.</p>
                            </div>
                            <div className='col-lg-12 col-sm-12 mt-5'>
                                <a href={process.env.PUBLIC_URL + `/register`}>
                                    <button className='btn' style={{backgroundColor:"rgb(0, 40, 95)", color:"#fff", padding:"0px 50px", height:"50px"}}>Join Now</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container pt-5 pb-3'>
                        <div className='row'>
                            <div className='col-lg-12 col-sm-12'>
                                <img src={publicUrl+'assets/images/resources/fastbreak.avif'} />
                            </div>
                            <div className='col-lg-12 col-sm-12 mt-2 mb-5'>
                                <p style={mySubHead}>Avoid roadblocks at the counter.</p>
                            </div>
                            <div className='col-lg-12 col-sm-12'>
                                <p style={myMiniHead} className='mb-3'>What is Budget Fastbreak?</p>
                                <p style={myPara}>Fastbreak is a car rental membership program that makes it quick and easy to pick up and drop off your Budget vehicle. Join Budget Fastbreak today — it’s simple, smart, fast, and FREE. </p>
                                <p style={myPara}>Want a brisk exit from the rental counter? As a Fastbreak member, you simply flash your valid license, pick up your keys, and bypass the long lines. Returns are just as easy. Drop the car in the designated area and go. We’ll email you the receipt.</p>
                                <p style={myPara}>As a Fastbreak member, you’ll also receive exclusive deals from Budget so you can save more time and money. </p>
                                <p style={myPara}>Read the full <a href='#' style={myLink}>global rental terms and conditions here.</a></p>
                                <p style={myPara} className='mt-5'><b>Fastbreak Members, register to earn $25 in Budget Bucks</b></p>
                                <p style={myPara}>Now through December 31st, rent twice, and we’ll email you $25 in Budget Bucks.</p>
                                <p style={myPara}>You can earn up to 52 coupons each year – that’s over $1,000 towards future rentals!</p>
                                <p style={myPara}>Register to start earning Budget Bucks today. </p>
                            </div>
                            <div className='col-lg-12 col-sm-12 mt-5'>
                                <a href='#'>
                                    <button className='btn' style={{backgroundColor:"rgb(0, 40, 95)", color:"#fff", padding:"0px 50px", height:"50px"}}>Enroll & Earn Budget Bucks</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}