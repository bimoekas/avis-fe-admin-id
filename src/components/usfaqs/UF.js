import React from 'react';
import {Link} from 'react-router-dom';

export default class UF extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        return (
            <>
                <section className='border-top border-bottom'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12 pt-2'>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb py-2">
                                        <li className="breadcrumb-item"><a href="#">Customer Service</a></li>
                                        <li className="breadcrumb-item active link-avis" aria-current="page">FAQs</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container pt-5 pb-3'>
                        <div className='row'>
                            <div className='col-lg-12 col-sm-12'>
                                <h1 className='text-up text-black'>Frequently Asked Questions</h1>
                            </div>
                            <div className='col-lg-12 col-sm-12 mt-3 border-top border-bottom'>
                                <div className='row text-avis py-3'>
                                    <div className='col-3'>
                                        <p>Select your country: </p>
                                    </div>
                                    <div className='col-2'>
                                        <a href='#' className='link-avis'>USA </a>
                                    </div>
                                    <div className='col-2'>
                                        <a href='#' className='link-avis'>Canda </a>
                                    </div>
                                    <div className='col-2'>
                                        <a href='#' className='link-avis'>New Zealand </a>
                                    </div>
                                    <div className='col-2'>
                                        <a href='#' className='link-avis'>Australia </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-sm-12 text-avis text-black'>
                                <p>As a global rental car leader, Avis offers shared FAQ content for four different countries: U.S., Canada, Australia and New Zealand.</p>
                                <p>If you don't find the answer to your question on one of these sites, please search one of the others.</p>
                                <p>For the latest non-smoking policy, click here.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}