import React from 'react';

export default class ContentTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        return (
            <>
                {/* Start Slogan One */}
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-8 col-sm-12'>
                                <h3 className='text-black'>PLUS save even more when you pay now</h3>
                                <p>Save on your next daily or monthly car rental with these deals and offers.</p>
                            </div>
                            <div className='col-xl-4 col-sm-12 text-end'>
                                <button className='btn btn-avis'>VIEW ALL OFFERS</button>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/resources/img-5.webp"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content">
                                        <h5 className="text-black">GET A FREE UPGRADE!</h5>
                                        {/* <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Besting and commercial We <br /> with This Blog.</Link></h2> */}
                                        {/* <div className="line"></div> */}
                                        <div className="text" style={{height:"100px"}}>
                                            <p>Travel in a roomier ride.</p>
                                        </div>
                                        <a href="#" className="link-avis"><b>UPGRADE NOW</b></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/resources/img-4.webp"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content">
                                        <h5 className="text-black">GET LAST MINUTE TRAVEL DEALS.</h5>
                                        {/* <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Besting and commercial We <br /> with This Blog.</Link></h2> */}
                                        {/* <div className="line"></div> */}
                                        <div className="text" style={{height:"100px"}}>
                                            <p>Use our last-minute car rental travel deals to save today.</p>
                                        </div>
                                        <a href="#" className="link-avis"><b>SAVE NOW</b></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/resources/img-6.webp"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content">
                                        <h5 className="text-black">SAVE $15</h5>
                                        {/* <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Besting and commercial We <br /> with This Blog.</Link></h2> */}
                                        {/* <div className="line"></div> */}
                                        <div className="text" style={{height:"100px"}}>
                                            <p>On your 3 day rental of $175 or more</p>
                                        </div>
                                        <a href="#" className="link-avis"><b>SAVE NOW</b></a>
                                    </div>
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