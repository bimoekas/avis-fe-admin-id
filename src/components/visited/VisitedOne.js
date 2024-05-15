import React from 'react';
import { Link } from 'react-router-dom';

export default class VisitedOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                {/* Start Place One */}
                <section className="place-one">
                    <div className="container">
                        <div className="sec-title text-center">
                            <h2 className="sec-title__title">Top Places Visited</h2>
                            <p className="sec-title__text">Excepteur s occaecat cupidatat proident sunt</p>
                        </div>
                        <div className="row">
                            {/* Start Place One Single */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="place-one__single">
                                    <div className="place-one__single-img">
                                        <div className="place-one__single-img-inner">
                                            <div className="icon-box">
                                                <Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-heart"></span></Link>
                                            </div>
                                            <img src={publicUrl+"assets/images/resources/place-v1-img1.jpg"} alt="" />
                                        </div>
                                        <div className="text-box">
                                            <span>Hotel Storn</span>
                                        </div>
                                    </div>

                                    <div className="place-one__single-content">
                                        <div className="top-content">
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Wedding Off Service</Link></h2>
                                            <p>Excepteur sint occaecat </p>

                                            <div className="top-content-bottom">
                                                <div className="location-box">
                                                    <div className="icon-box">
                                                        <span className="fa fa-map-marker"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>London,Dhaka</p>
                                                    </div>
                                                </div>

                                                <div className="number-box">
                                                    <div className="icon">
                                                        <span className="fa fa-clock"></span>
                                                    </div>
                                                    <div className="text">
                                                        <a href="tel:123456789">+65556522222</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bottom-content">
                                            <ul className="review-box">
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="icon-star-1"></span></li>
                                            </ul>
                                            <div className="count-box">
                                                <p>(04)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Place One Single */}

                            {/* Start Place One Single */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="place-one__single">
                                    <div className="place-one__single-img">
                                        <div className="place-one__single-img-inner">
                                            <div className="icon-box">
                                                <Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-heart"></span></Link>
                                            </div>
                                            <img src={publicUrl+"assets/images/resources/place-v1-img2.jpg"} alt="" />
                                        </div>
                                        <div className="text-box">
                                            <span>Bulding As</span>
                                        </div>
                                    </div>

                                    <div className="place-one__single-content">
                                        <div className="top-content">
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Lisiting & Hotel Store </Link></h2>
                                            <p>Excepteur sint occaecat </p>

                                            <div className="top-content-bottom">
                                                <div className="location-box">
                                                    <div className="icon-box">
                                                        <span className="fa fa-map-marker"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>London,Dhaka</p>
                                                    </div>
                                                </div>

                                                <div className="number-box">
                                                    <div className="icon">
                                                        <span className="fa fa-clock"></span>
                                                    </div>
                                                    <div className="text">
                                                        <a href="tel:123456789">+65556522222</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bottom-content">
                                            <ul className="review-box">
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="icon-star-1"></span></li>
                                                <li><span className="icon-star-1"></span></li>
                                            </ul>
                                            <div className="count-box">
                                                <p>(03)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Place One Single */}

                            {/* Start Place One Single */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="place-one__single">
                                    <div className="place-one__single-img">
                                        <div className="place-one__single-img-inner">
                                            <div className="icon-box">
                                                <Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-heart"></span></Link>
                                            </div>
                                            <img src={publicUrl+"assets/images/resources/place-v1-img3.jpg"} alt="" />
                                        </div>
                                        <div className="text-box">
                                            <span>Storn Car</span>
                                        </div>
                                    </div>

                                    <div className="place-one__single-content">
                                        <div className="top-content">
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Vendor Hotel Car</Link></h2>
                                            <p>Excepteur sint occaecat </p>

                                            <div className="top-content-bottom">
                                                <div className="location-box">
                                                    <div className="icon-box">
                                                        <span className="fa fa-map-marker"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>London,Dhaka</p>
                                                    </div>
                                                </div>

                                                <div className="number-box">
                                                    <div className="icon">
                                                        <span className="fa fa-clock"></span>
                                                    </div>
                                                    <div className="text">
                                                        <a href="tel:123456789">+65556522222</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bottom-content">
                                            <ul className="review-box">
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                            </ul>
                                            <div className="count-box">
                                                <p>(05)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Place One Single */}

                            {/* Start Place One Single */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="place-one__single">
                                    <div className="place-one__single-img">
                                        <div className="place-one__single-img-inner">
                                            <div className="icon-box">
                                                <Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-heart"></span></Link>
                                            </div>
                                            <img src={publicUrl+"assets/images/resources/place-v1-img4.jpg"} alt="" />
                                        </div>
                                        <div className="text-box">
                                            <span>Camera Sin</span>
                                        </div>
                                    </div>

                                    <div className="place-one__single-content">
                                        <div className="top-content">
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Marriott Classic Dinner</Link></h2>
                                            <p>Excepteur sint occaecat </p>

                                            <div className="top-content-bottom">
                                                <div className="location-box">
                                                    <div className="icon-box">
                                                        <span className="fa fa-map-marker"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>London,Dhaka</p>
                                                    </div>
                                                </div>

                                                <div className="number-box">
                                                    <div className="icon">
                                                        <span className="fa fa-clock"></span>
                                                    </div>
                                                    <div className="text">
                                                        <a href="tel:123456789">+65556522222</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bottom-content">
                                            <ul className="review-box">
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="icon-star-1"></span></li>
                                                <li><span className="icon-star-1"></span></li>
                                            </ul>
                                            <div className="count-box">
                                                <p>(03)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Place One Single */}

                            {/* Start Place One Single */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="place-one__single">
                                    <div className="place-one__single-img">
                                        <div className="place-one__single-img-inner">
                                            <div className="icon-box">
                                                <Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-heart"></span></Link>
                                            </div>
                                            <img src={publicUrl+"assets/images/resources/place-v1-img5.jpg"} alt="" />
                                        </div>
                                        <div className="text-box">
                                            <span>Landon City</span>
                                        </div>
                                    </div>

                                    <div className="place-one__single-content">
                                        <div className="top-content">
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Find What You Hotel</Link></h2>
                                            <p>Excepteur sint occaecat </p>

                                            <div className="top-content-bottom">
                                                <div className="location-box">
                                                    <div className="icon-box">
                                                        <span className="fa fa-map-marker"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>London,Dhaka</p>
                                                    </div>
                                                </div>

                                                <div className="number-box">
                                                    <div className="icon">
                                                        <span className="fa fa-clock"></span>
                                                    </div>
                                                    <div className="text">
                                                        <a href="tel:123456789">+65556522222</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bottom-content">
                                            <ul className="review-box">
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="icon-star-1"></span></li>
                                            </ul>
                                            <div className="count-box">
                                                <p>(04)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Place One Single */}

                            {/* Start Place One Single */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="place-one__single">
                                    <div className="place-one__single-img">
                                        <div className="place-one__single-img-inner">
                                            <div className="icon-box">
                                                <Link to={process.env.PUBLIC_URL + `/`}><span className="fa fa-heart"></span></Link>
                                            </div>
                                            <img src={publicUrl+"assets/images/resources/place-v1-img6.jpg"} alt="" />
                                        </div>
                                        <div className="text-box">
                                            <span>Book Storn</span>
                                        </div>
                                    </div>

                                    <div className="place-one__single-content">
                                        <div className="top-content">
                                            <h2><Link to={process.env.PUBLIC_URL + `/`}>Lisiting Off Book</Link></h2>
                                            <p>Excepteur sint occaecat </p>

                                            <div className="top-content-bottom">
                                                <div className="location-box">
                                                    <div className="icon-box">
                                                        <span className="fa fa-map-marker"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>London,Dhaka</p>
                                                    </div>
                                                </div>

                                                <div className="number-box">
                                                    <div className="icon">
                                                        <span className="fa fa-clock"></span>
                                                    </div>
                                                    <div className="text">
                                                        <a href="tel:123456789">+65556522222</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bottom-content">
                                            <ul className="review-box">
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="fa fa-star"></span></li>
                                                <li><span className="icon-star-1"></span></li>
                                                <li><span className="icon-star-1"></span></li>
                                            </ul>
                                            <div className="count-box">
                                                <p>(03)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Place One Single */}
                        </div>
                    </div>
                </section>
                {/* End Place One */}
            </>
        )
    }
}