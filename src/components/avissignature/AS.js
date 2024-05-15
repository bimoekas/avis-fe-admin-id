import React from 'react';
import {Link} from 'react-router-dom';

export default class AS extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myStyle = {
            backgroundImage: "url("+publicUrl+"assets/images/resources/avis-app8.avif)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "500px"
        };
        const myLink = {
            color: "rgb(237, 85, 5)",
        };
        const myPara = {
            lineHeight: "1.5",
            fontSize: "15px",
            color: "#fff"
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
                                        <li className="breadcrumb-item">Cars</li>
                                        <li className="breadcrumb-item link-avis" aria-current="page">Luxury Category and Signature</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container mb-5'>
                        <div className='row'>
                            <div className='col-sm-12 text-center pt-5'>
                                <h1 className='text-up text-black mb-4'>Experience a Luxury Car Rental with Avis</h1>
                                <img src={publicUrl+'assets/images/resources/avis-signature1.avif'} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12 mt-5'>
                                <h2 className='text-up text-black mb-4 fw-normal'>Find the Perfect Luxury Car for Your Next Getaway</h2>
                                <p className='text-avis mb-2'>Enjoy an oasis of comfort and style on your next trip by booking a luxury car rental from Avis. Luxury rental cars take any trip or vacation from boring to unforgettable. Really let your hair down in a convertible rental, or indulge your desire to drive a muscle car. You’ll find we offer luxury vehicles in practically every size, so choose the right car for you from the selection described below. Avis Signature Series vehicles are available only at select Avis locations, so take advantage if you’re in an area with these elite vehicles. Click on a Signature vehicle to see a list of locations that may offer these vehicles. </p>
                                <p className='text-avis'>Book your luxury vehicle and get ready to put the key in the ignition and drive as you’ve never driven before.</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12 mt-5 text-center'>
                                <h4 className='text-up text-black mb-4 fw-normal'>Avis Signature Series cars will make sure you're</h4>
                                <h4 className='text-up text-black mb-4 fw-normal'>traveling in luxury, no matter where you are going</h4>
                            </div>
                        </div>
                        <div className='row text-center'>
                            <div className='col-sm-4 mt-5'>
                                <h5 className='text-up text-black mb-2 fw-normal'>Sport, Convertible, & Muscle Cars</h5>
                                <a href='#' className='link-avis text-decoration-underline'>Sports Cars</a><br/>
                                <a href='#' className='link-avis text-decoration-underline'>Corvette Coupe</a><br/>
                                <a href='#' className='link-avis text-decoration-underline'>Convertibles</a><br/>
                                <a href='#' className='link-avis text-decoration-underline'>Muscle Cars</a>
                            </div>
                            <div className='col-sm-4 mt-5'>
                                <h5 className='text-up text-black mb-2 fw-normal'>Luxury SUVs</h5>
                                <a href='#' className='link-avis text-decoration-underline'>Suburban & Premium SUVs</a><br/>
                                <a href='#' className='link-avis text-decoration-underline'>Premium Elite SUVs</a><br/>
                                <a href='#' className='link-avis text-decoration-underline'>Mercedes-Benz GLS 450 Luxury SUV</a><br/>
                                <a href='#' className='link-avis text-decoration-underline'>Luxury Crossovers</a>
                                <a href='#' className='link-avis text-decoration-underline'>Luxury Midsize Crossovers</a>
                            </div>
                            <div className='col-sm-4 mt-5'>
                                <h5 className='text-up text-black mb-2 fw-normal'>Premium Sedans</h5>
                                <a href='#' className='link-avis text-decoration-underline'>Full-Size Luxury Sedans</a><br/>
                                <a href='#' className='link-avis text-decoration-underline'>Luxury Sports Sedans</a><br/>
                                <a href='#' className='link-avis text-decoration-underline'>High-End Cars</a><br/>
                                <a href='#' className='link-avis text-decoration-underline'>Midsize Luxury Sedans</a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}