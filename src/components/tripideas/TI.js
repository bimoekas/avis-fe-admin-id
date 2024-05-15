import React from 'react';
import {Link} from 'react-router-dom';

export default class TI extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myStyle = {
            backgroundImage: "url("+publicUrl+"assets/images/resources/travel-guide1.webp)",
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
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 text-center pt-5' style={myStyle}>
                                <h1 className='text-black text-up mt-3'>USA Travel Guides & Road Trip Ideas</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container mb-5 mt-3'>
                        <div className='row mb-4'>
                            <div className='col-sm-12'>
                                <p className='mb-3 text-avis'>Explore the travel guides below for some of the best road trip routes in the US and fun car games for families or co-workers. From Historic Route 66 to national parks near Las Vegas you’ll make unforgettable memories with any of these USA travel guides. Find travel inspiration for your next trip here and plan your next road trip adventure today!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container mt-3'>
                        <div className='row mt-4'>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/resources/travel-guide2.avif"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content text-center">
                                        <p className="blog-one__single-content-tagline text-black">Business Travel Road Trip Games</p>
                                        <div className="text" style={{minHeight:"150px"}}>
                                            <p>Team build with your colleagues and enjoy these car games on your next business trip.</p>
                                        </div>
                                        <button className="btn btn-avis text-up">See Teambuilding Car Games</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/resources/travel-guide3.avif"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content text-center">
                                        <p className="blog-one__single-content-tagline text-black">Business Travel Road Trip Games</p>
                                        <div className="text" style={{minHeight:"150px"}}>
                                            <p>Team build with your colleagues and enjoy these car games on your next business trip.</p>
                                        </div>
                                        <button className="btn btn-avis text-up">See Teambuilding Car Games</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/resources/travel-guide3.avif"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content text-center">
                                        <p className="blog-one__single-content-tagline text-black">Business Travel Road Trip Games</p>
                                        <div className="text" style={{minHeight:"150px"}}>
                                            <p>Team build with your colleagues and enjoy these car games on your next business trip.</p>
                                        </div>
                                        <button className="btn btn-avis text-up">See Teambuilding Car Games</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/resources/travel-guide2.avif"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content text-center">
                                        <p className="blog-one__single-content-tagline text-black">Business Travel Road Trip Games</p>
                                        <div className="text" style={{minHeight:"150px"}}>
                                            <p>Team build with your colleagues and enjoy these car games on your next business trip.</p>
                                        </div>
                                        <button className="btn btn-avis text-up">See Teambuilding Car Games</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/resources/travel-guide3.avif"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content text-center">
                                        <p className="blog-one__single-content-tagline text-black">Business Travel Road Trip Games</p>
                                        <div className="text" style={{minHeight:"150px"}}>
                                            <p>Team build with your colleagues and enjoy these car games on your next business trip.</p>
                                        </div>
                                        <button className="btn btn-avis text-up">See Teambuilding Car Games</button>
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