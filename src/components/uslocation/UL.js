import React from 'react';
import {Link} from 'react-router-dom';

export default class GL extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myStyle = {
            backgroundImage: "url("+publicUrl+"assets/images/resources/tripideas1.webp)",
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
        const myBorder = {
            borderBottom: "2px solid #eaeaea"
        };
        return (
            <>
                <section className='border-top border-bottom'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12 pt-2'>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item" aria-current="page">Locations</li>
                                        <li className="breadcrumb-item" aria-current="page">Canda & USA</li>
                                        <li className="breadcrumb-item link-avis" aria-current="page">USA</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container mt-4'>
                        <div className='row'>
                            <div className='col-sm-12 border-bottom pb-3'>
                                <h3 className='text-up text-black'>Car Rental USA</h3>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-sm-3 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-3 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-3 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-3 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-3 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-3 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-3 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-3 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-3 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-3 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-3 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-3 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                            <div className='col-sm-3 mt-2'>
                                <a href='#' className='link-avis'>Albania</a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}