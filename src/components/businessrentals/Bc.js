import React from 'react';
import {Link} from 'react-router-dom';

export default class Bc extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myBg = {
            backgroundImage: "url("+publicUrl+"assets/images/resources/businessrentals.avif)",
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
                <section className='border-top border-bottom'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12 pt-2'>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb py-2">
                                        <li className="breadcrumb-item"><a href="#">Programs</a></li>
                                        <li className="breadcrumb-item"><a href="#">Small & Mid-Sized Business</a></li>
                                        <li className="breadcrumb-item active link-avis" aria-current="page">Enroll</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='container-fluid' style={myBg}>
                    <div className='row justify-content-md-center'>
                        <div className='col-lg-7 col-md-9 col-sm-12 mt-5'>
                            <h3 className='text-white text-up'> For Small and Mid-Sized Businesses</h3>
                        </div>
                    </div>
                </section>

                <section className='container-fluid mt-3' style={myText}>
                    <div className='row justify-content-md-center'>
                        <div className='col-lg-7 col-md-9 col-sm-12'>
                            <div className='row'>
                                <div className='col-sm-6 text-avis'>
                                    Small Business.  Big Savings. 
                                </div>
                                <div className='col-sm-6'>
                                    <b>Already a member?</b><a href='#' className='link-avis'>Log In Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-md-center mt-3'>
                        <div className='col-lg-7 col-md-9 col-sm-12' style={myPara}>
                            <p className='mb-3'>The Avis For Business program is a unique program built exclusively for small businesses. As a member, you gain access to Reward Days, discounts, and so much more each time you or your employees rent with Avis.  The more rentals your company completes, the greater the rewards your company will receive......so get driving!</p>
                            <p className='mb-3'>As a <b>"welcome to the program"</b> bonus you will receive:</p>
                            <ol className='mb-3'>
                                <li>- <b>One Reward Day</b> after your first completed rental.</li>
                                <li>- <b>Double rewards</b> for the <b>first 90 days</b> as a member. </li>
                            </ol>
                            <p className='mb-3'>Your everyday benefits include:</p>
                            <ol className='mb-3'>
                                <li>- Up to 30% off base rates.</li>
                                <li>- One Reward Day for every 15 completed rental days, along with one Reward Day earned after your first completed rental!</li>
                                <li>- Access to the Avis For Business member site where you can view all of your rental activity and Reward Days.</li>
                                <li>- Complimentary Avis Preferred membership to help you avoid lines and paperwork.</li>
                                <li>- A dedicated customer service team that is always just a call or click away.</li>
                            </ol>
                            <p className='mb-3'>Enroll today to get an Avis Worldwide Discount (AWD) number to share with your company's employees, and immediately start enjoying the benefits.  </p>
                            <p className='mb-3'><a href="#" className='link-avis'>Program Terms and Conditions.</a></p>
                        </div>
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='col-lg-7 py-2 border-bottom border-top'>
                            <a href='#' className='link-avis'>Click here if your company is located in Canada. </a>
                        </div>
                    </div>
                    <div className='row justify-content-md-center mt-3 border-bottom'>
                        <div className='col-lg-7 col-md-9 col-sm-12'>
                            <h3 className="mb-3 link-avis text-up fw-normal">Your Information</h3>
                            <div className='row mb-3'>
                                <label className='col-sm-3'>First Name</label>
                                <input type="text" className='col-sm-9 wide' />
                            </div>
                            <div className='row mb-3'>
                                <label className='col-sm-3'>Last Name</label>
                                <input type="text" className='col-sm-9 wide' />
                            </div>
                            <div className='row mb-3'>
                                <label className='col-sm-3'>Job Title <small><i>(optional)</i></small></label>
                                <input type="text" className='col-sm-9 wide' />
                                <label className='col-sm-3'></label>
                                <label className='col-sm-9'><small><b>Please Note:</b> Your Avis Worldwide Discount (AWD) number will be sent to the email provided. </small></label>
                            </div>
                            <div className='row mb-3'>
                                <label className='col-sm-3'>Email</label>
                                <input type="text" className='col-sm-9 wide' />
                            </div>
                            <div className='row mb-3'>
                                <label className='col-sm-3'>Retype Email Address</label>
                                <input type="text" className='col-sm-9 wide' />
                                <label className='col-sm-3'></label>
                                <label className='col-sm-9'><small>Your Avis Worldwide Discount (AWD) number will be sent to the email provided. </small></label>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-md-center mt-3'>
                        <div className='col-lg-7 col-md-9 col-sm-12'>
                            <h3 className="mb-3 link-avis text-up fw-normal">Communication Preferences</h3>
                            <div className='row mb-3'>
                                <div className='col-sm-6'>
                                    <input type="radio" name='cp' />Yes, I want to receive updates from Budget about products, services, special offers and important updates regarding the Budget Business Program. 
                                </div>
                                <div className='col-sm-6'>
                                    <input type="radio" name='cp' />No, I do not want to receive promotional e-mail offers at this time. 
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-12 text-avis'>
                                    <p><small>Yes, send me promotional email offers from Avis. </small></p>
                                    <p><small>Please note that you can withdraw your consent at any time See. See our <a href='#' className='link-avis'>Privacy Notice</a> and <a href='#' className='link-avis'>Terms Of Use</a> for more details, or <a href='#' className='link-avis'>Contact Us.</a></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-md-center mt-3 border-bottom'>
                        <div className='col-lg-7 col-md-9 col-sm-12'>
                            <h3 className="mb-3 link-avis text-up fw-normal">Company Information </h3>
                            <div className='row mb-3'>
                                <label className='col-sm-3'>Company Name </label>
                                <input type="text" className='col-sm-9 wide' />
                            </div>
                            <div className='row mb-3'>
                                <label className='col-sm-3'>Address Line 1</label>
                                <input type="text" className='col-sm-9 wide' />
                            </div>
                            <div className='row mb-3'>
                                <label className='col-sm-3'>Address Line 2 <small><i>(optional)</i></small></label>
                                <input type="text" className='col-sm-9 wide' />
                            </div>
                            <div className='row mb-3'>
                                <label className='col-sm-3'>City/Town</label>
                                <input type="text" className='col-sm-9 wide' />
                            </div>
                            <div className='row mb-3'>
                                <label className='col-sm-3'>State/Province</label>
                                <select type="text" className='col-sm-9 wide'>
                                    <option>Please Select One</option>
                                    <option>Indonesia</option>
                                    <option>South Korea</option>
                                    <option>China</option>
                                    <option>Japan</option>
                                    <option>Siangapore</option>
                                </select>
                            </div>
                            <div className='row mb-3'>
                                <label className='col-sm-3'>Zip/Postel Code</label>
                                <input type="text" className='col-sm-9 wide' />
                            </div>
                            <div className='row mb-3'>
                                <label className='col-sm-3'>Country</label>
                                <select type="text" className='col-sm-9 wide'>
                                    <option>Please Select One</option>
                                    <option>Indonesia</option>
                                    <option>South Korea</option>
                                    <option>China</option>
                                    <option>Japan</option>
                                    <option>Siangapore</option>
                                </select>
                            </div>
                            <div className='row mb-3'>
                                <label className='col-sm-3'>Phone Number</label>
                                <input type="text" className='col-sm-9 wide' />
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-md-center mt-3 border-bottom'>
                        <div className='col-lg-7 col-md-9 col-sm-12'>
                            <div className='row mb-3'>
                                <a href="#" className='col-sm-6 link-avis'>Cancel </a>
                                <div className='col-sm-6 text-end' >
                                    <button className='btn btn-avis text-up'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Slogan One */}
            </>
        )
    }
}