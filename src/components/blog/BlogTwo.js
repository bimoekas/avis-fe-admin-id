import React from 'react';
import {Link} from 'react-router-dom';

export default class BlogTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="blog-one">
                    <div className="container">
                        <div className="sec-title text-center">
                            <h2 className="sec-title__title">Our Largest Blog</h2>
                            <p className="sec-title__text">Excepteur s occaecat cupidatat proident sunt</p>
                        </div>
                        <div className="row">
                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v1-img1.jpg"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content">
                                        <p className="blog-one__single-content-tagline">Excepteur occaecat cupidatat </p>
                                        <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Besting and commercial We <br /> with This Blog.</Link></h2>
                                        <div className="line"></div>
                                        <div className="text">
                                            <p>There are many variations of passages off ran
                                                of lorem Ipsum available.. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v1-img2.jpg"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content">
                                        <p className="blog-one__single-content-tagline">Excepteur occaecat cupidatat </p>
                                        <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Strategic and commercial this <br /> with Can issues.</Link>
                                        </h2>
                                        <div className="line"></div>
                                        <div className="text">
                                            <p>There are many variations of passages off ran
                                                of lorem Ipsum available.. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v1-img3.jpg"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content">
                                        <p className="blog-one__single-content-tagline">Excepteur occaecat cupidatat </p>
                                        <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Modaer and invenity Welk <br />Now Off Blog.</Link></h2>
                                        <div className="line"></div>
                                        <div className="text">
                                            <p>There are many variations of passages off ran
                                                of lorem Ipsum available.. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v1-img4.jpg"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content">
                                        <p className="blog-one__single-content-tagline">Excepteur occaecat cupidatat </p>
                                        <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>The Most Popular New top <br /> Places Listing</Link></h2>
                                        <div className="line"></div>
                                        <div className="text">
                                            <p>There are many variations of passages off ran
                                                of lorem Ipsum available.. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v1-img5.jpg"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content">
                                        <p className="blog-one__single-content-tagline">Excepteur occaecat cupidatat </p>
                                        <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Greatest Event Places in <br /> Listing</Link></h2>
                                        <div className="line"></div>
                                        <div className="text">
                                            <p>There are many variations of passages off ran
                                                of lorem Ipsum available.. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={publicUrl+"assets/images/blog/blog-v1-img6.jpg"} alt="" />
                                    </div>

                                    <div className="blog-one__single-content">
                                        <p className="blog-one__single-content-tagline">Excepteur occaecat cupidatat </p>
                                        <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Top 15 Greatest Ideas for <br /> Health & Body</Link></h2>
                                        <div className="line"></div>
                                        <div className="text">
                                            <p>There are many variations of passages off ran
                                                of lorem Ipsum available.. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}