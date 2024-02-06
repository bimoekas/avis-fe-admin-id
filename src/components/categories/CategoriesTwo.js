import React from 'react';
import { Link } from 'react-router-dom';

export default class CategoriesTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                {/* Start Categories One */}
                <section className="categories-one categories-one--two">
                    <div className="container">
                        <div className="sec-title text-center">
                            <h2 className="sec-title__title">Most Poplar Categories</h2>
                            <p className="sec-title__text">Excepteur s occaecat cupidatat proident sunt</p>
                        </div>
                        <div className="row">
                            {/* Start Categories One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="categories-one__single">
                                    <div className="categories-one__single-img">
                                        <img src={publicUrl+"assets/images/resources/categorie-v2-img1.jpg"} alt="" />
                                        <div className="text-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/categories`}>Perspiciatis Bulding</Link></h2>
                                            <p>Excepteur sint occaecat </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Categories One Single */}

                            {/* Start Categories One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="categories-one__single">
                                    <div className="categories-one__single-img">
                                        <img src={publicUrl+"assets/images/resources/categorie-v2-img2.jpg"} alt="" />
                                        <div className="text-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/categories`}>Hotel Caring Now</Link></h2>
                                            <p>Excepteur sint occaecat </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Categories One Single */}

                            {/* Start Categories One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="categories-one__single">
                                    <div className="categories-one__single-img">
                                        <img src={publicUrl+"assets/images/resources/categorie-v2-img3.jpg"} alt="" />
                                        <div className="text-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/categories`}>London city</Link></h2>
                                            <p>Excepteur sint occaecat </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Categories One Single */}

                        </div>
                    </div>
                </section>
                {/* End Categories One */}
            </>
        )
    }
}