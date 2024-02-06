import React from 'react';
import {Link} from 'react-router-dom';
import BlogAds from '../sidebar/BlogAds';
import BlogCategory from '../sidebar/BlogCategory';
import BlogLatestPosts from '../sidebar/BlogLatestPosts';
import BlogSearch from '../sidebar/BlogSearch';
import BlogTags from '../sidebar/BlogTags';

export default class BlogContentDetails extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="blog-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="blog-single__left">
                                    {/* Start Blog One Single */}
                                    <div className="blog-one__single">
                                        <div className="blog-one__single-img">
                                            <img src={publicUrl+"assets/images/blog/blog-v1-img1.jpg"} alt="" />
                                        </div>

                                        <div className="blog-one__single-content">

                                            <div className="blog-one__single-content-meta-box">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <div className="inner">
                                                            <div className="icon">
                                                                <span className="icon-user"></span>
                                                            </div>
                                                            <div className="text">
                                                                <Link to={process.env.PUBLIC_URL + `/`}>By Admin</Link>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="inner">
                                                            <div className="icon">
                                                                <span className="icon-calendar"></span>
                                                            </div>
                                                            <div className="text">
                                                                <Link to={process.env.PUBLIC_URL + `/`}>25 jun,2022</Link>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="btn-box">
                                                    <Link to={process.env.PUBLIC_URL + `/`}><span className="fas fa-share"></span></Link>
                                                </div>
                                            </div>

                                            <p className="blog-one__single-content-tagline">Excepteur occaecat cupidatat </p>
                                            <h2>Besting and commercial We <br /> with This Blog.</h2>
                                            <div className="line"></div>
                                            <div className="text">
                                                <p>There are many variations of passages of Lorem Ipsum available, but the
                                                    majority have suffered alteration in some form, by injected humour, or
                                                    randomised words which don't look even slightly believable.</p>
                                            </div>
                                            <div className="blog-single__text1">
                                                <p className="text1">It is a long established fact that a reader will be distracted
                                                    by the readable content of a page when looking at its layout. The point of
                                                    using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                    letters, as opposed to using 'Content here, content here', making it look
                                                    like readable English. </p>

                                                <p className="text2">Many desktop publishing packages and web page editors now use
                                                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
                                                    uncover many web sites still in their infancy. Various versions have evolved
                                                    over the years, sometimes by accident, sometimes on purpose (injected humour
                                                    and the like).</p>
                                            </div>

                                            <div className="blog-single__text2">
                                                <div className="title">
                                                    <h2>The standard chunk of Lorem Ipsum used</h2>
                                                </div>
                                                <p className="text1">The standard chunk of Lorem Ipsum used since the 1500s is
                                                    reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de
                                                    Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                                                    original form, accompanied by English versions from the 1914 translation by
                                                    H. Rackham.</p>

                                                <p className="text2">Contrary to popular belief, Lorem Ipsum is not simply random
                                                    text. It has roots in a piece of classical Latin literature from 45 BC,
                                                    making it over 2000 years old. Richard McClintock, a Latin professor at
                                                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                                                    words, consectetur,</p>
                                            </div>

                                            <div className="blog-single__img1">
                                                <img src={publicUrl+"assets/images/blog/blog-single-img1.jpg"} alt="" />
                                            </div>

                                            <div className="blog-single__text3">
                                                <div className="title">
                                                    <h2>There are many variations of passages</h2>
                                                </div>
                                                <p className="text1">"At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                    blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et
                                                    quas molestias excepturi sint occaecati cupiditate non provident</p>

                                                <ul className="list-unstyled">
                                                    <li>
                                                        <div className="round-box"> </div>
                                                        <div className="text-box">
                                                            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                                accusantium doloremque laudantium, </p>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="round-box"> </div>
                                                        <div className="text-box">
                                                            <p>"But I must explain to you how all this mistaken idea of
                                                                denouncing pleasure and praising pain was born</p>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="round-box"> </div>
                                                        <div className="text-box">
                                                            <p>It is a long established fact that a reader will be distracted by
                                                                the readable content of a page when looking at its layout.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="blog-single__tags-box">
                                                <div className="title">
                                                    <h4>Tags:</h4>
                                                </div>

                                                <ul className="blog-single__tags-list">
                                                    <li><Link to={process.env.PUBLIC_URL + `/`}>blog</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/`}>Counselling</Link></li>
                                                    <li><Link to={process.env.PUBLIC_URL + `/`}>therapy</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Blog One Single */}

                                    <div className="author">
                                        <div className="author__img">
                                            <img src={publicUrl+"assets/images/blog/author-img.jpg"} alt="" />
                                        </div>
                                        <div className="author__content">
                                            <h4>David Cooper</h4>
                                            <p>It is a long established fact that a reader will be distracted by the readable
                                                content of a page when looking at its layout.</p>
                                            <div className="author__social">
                                                <Link to={process.env.PUBLIC_URL + `/`}><i className="fab fa-facebook-f"></i></Link>
                                                <Link to={process.env.PUBLIC_URL + `/`}><i className="fab fa-twitter"></i></Link>
                                                <Link to={process.env.PUBLIC_URL + `/`}><i className="fab fa-instagram"></i></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="back-news">
                                        <div className="back-news__left">
                                            <div className="back-news__arrow">
                                                <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-left-arrow"></span></Link>
                                            </div>
                                            <div className="back-news__content">
                                                <p>Discover Venice, <br /> Italy</p>
                                            </div>
                                        </div>
                                        <div className="back-news__right">
                                            <div className="back-news__content">
                                                <p>Great Experience <br /> At MiFost Villa</p>
                                            </div>
                                            <div className="back-news__arrow">
                                                <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-next"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blog-single__bottom">


                                        <div className="comment-one">
                                            <h3 className="comment-one__title">Comments(02)</h3>
                                            <div className="comment-one__single">
                                                <div className="comment-one__image">
                                                    <img src={publicUrl+"assets/images/blog/comment-1-1.png"} alt="" />
                                                </div>
                                                <div className="comment-one__content">
                                                    <h3>Dani Smith</h3>
                                                    <span>11 jun, 2022</span>
                                                    <p>Lorem Ipsum available, but the majority have suffered alteration in
                                                        some form If you are going to use a passage of Lorem Ipsum, you need
                                                    </p>
                                                    <Link to={process.env.PUBLIC_URL + `/`} className="comment-one__btn">Reply</Link>
                                                </div>
                                            </div>
                                            <div className="comment-one__single comment-one__single--two">
                                                <div className="comment-one__image">
                                                    <img src={publicUrl+"assets/images/blog/comment-1-2.png"} alt="" />
                                                </div>
                                                <div className="comment-one__content">
                                                    <h3>Robin Wiliam</h3>
                                                    <span>14 dec 2022</span>
                                                    <p>Lorem Ipsum available, but the majority have suffered alteration in
                                                        some form If you are going to use a passage of Lorem Ipsum, you need
                                                    </p>
                                                    <Link to={process.env.PUBLIC_URL + `/`} className="comment-one__btn">Reply</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="comment-form">
                                            <h3 className="comment-form__title">Leave a Comment</h3>
                                            <form action="#"
                                                className="comment-one__form contact-form-validated" novalidate="novalidate">
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="comment-form__input-box">
                                                            <input type="text" placeholder="Full name" name="name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="comment-form__input-box">
                                                            <input type="email" placeholder="Email Address" name="email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="comment-form__input-box text-message-box">
                                                            <textarea name="message" placeholder="Comments"></textarea>
                                                        </div>
                                                        <div className="comment-form__btn-box">
                                                            <button type="submit" className="comment-form__btn thm-btn">Post Comment</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Start Sidebar */}
                            <div className="col-xl-4 col-lg-5">
                                <div className="sidebar">
                                    <BlogSearch />
                                    <BlogCategory />
                                    <BlogLatestPosts />
                                    <BlogTags />
                                    <BlogAds />
                                </div>
                            </div>
                            {/* End Sidebar */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}