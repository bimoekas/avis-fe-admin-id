import React from 'react';
import {Link} from 'react-router-dom';

export default class TA extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/';
        const myStyle = {
            backgroundImage: "url("+publicUrl+"assets/images/resources/ta1.webp)",
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
                <section className='border-top border-bottom'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12 py-3'>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Program</a></li>
                                        <li className="breadcrumb-item link-avis" aria-current="page">Travel Agent Program</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={myStyle}>
                    <div className='container pt-3'>
                        <div className='row'>
                            <div className='col-sm-12'>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container py-3'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <h1 className='text-up text-black fw-normal'>Travel Agent Car Rental Program</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{backgroundColor:"#eaeaea"}}>
                    <div className='container'>
                        <div className='row pt-4'>
                            <div className='col-sm-12 text-avis text-black'>
                                <p>Avis is pleased to provide you, our valuable travel partners, with the latest information you need to service your clients and take advantage of our special car rental programs. It's our pleasure to offer you Unlimited Rewards. Earn dollar rewards and spend anywhere, anytime you want. </p>
                            </div>
                        </div>
                        <div className='row pt-4'>
                            <a href='#' className='col-lg-4 col-sm-6 pe-5 pb-5'>
                                <div className='row' style={myCard}>
                                    <div className='col-12 p-3'>
                                        <label className='mb-2' style={myHead}>
                                            <div className='row'>
                                                <div className='col-sm-12 align-self-center text-black'>
                                                    Loss Damage Waiver (LDW)
                                                </div>
                                            </div>
                                        </label>
                                        <label className='text-avis mt-2 text-black'>LDW is an option that relieves you of financial responsibility if your rental car is damaged or stolen. Loss Damage Waiver protection for as low as $9 a day.</label>
                                    </div>
                                    <div className='col-12 p-3 text-end'>
                                        <label className='link-avis'>Learn More </label>
                                    </div>
                                </div>
                            </a>
                            <a href='#' className='col-lg-4 col-sm-6 pe-5 pb-5'>
                                <div className='row' style={myCard}>
                                    <div className='col-12 p-3'>
                                        <label className='mb-2' style={myHead}>
                                            <div className='row'>
                                                <div className='col-sm-12 align-self-center text-black'>
                                                    Loss Damage Waiver (LDW)
                                                </div>
                                            </div>
                                        </label>
                                        <label className='text-avis mt-2 text-black'>LDW is an option that relieves you of financial responsibility if your rental car is damaged or stolen. Loss Damage Waiver protection for as low as $9 a day.</label>
                                    </div>
                                    <div className='col-12 p-3 text-end'>
                                        <label className='link-avis'>Learn More </label>
                                    </div>
                                </div>
                            </a>
                            <a href='#' className='col-lg-4 col-sm-6 pe-5 pb-5'>
                                <div className='row' style={myCard}>
                                    <div className='col-12 p-3'>
                                        <label className='mb-2' style={myHead}>
                                            <div className='row'>
                                                <div className='col-sm-3'>
                                                    <img className='img-fluid' src={publicUrl+"assets/images/resources/protection-ldw.avif"} />
                                                </div>
                                                <div className='col-sm-9 align-self-center text-black'>
                                                    Loss Damage Waiver (LDW)
                                                </div>
                                            </div>
                                        </label>
                                        <label className='text-avis mt-2 text-black'>LDW is an option that relieves you of financial responsibility if your rental car is damaged or stolen. Loss Damage Waiver protection for as low as $9 a day.</label>
                                    </div>
                                    <div className='col-12 p-3 text-end'>
                                        <label className='link-avis'>Learn More </label>
                                    </div>
                                </div>
                            </a>
                            <a href='#' className='col-lg-4 col-sm-6 pe-5 pb-5'>
                                <div className='row' style={myCard}>
                                    <div className='col-12 p-3'>
                                        <label className='mb-2' style={myHead}>
                                            <div className='row'>
                                                <div className='col-sm-3'>
                                                    <img className='img-fluid' src={publicUrl+"assets/images/resources/protection-ldw.avif"} />
                                                </div>
                                                <div className='col-sm-9 align-self-center text-black'>
                                                    Loss Damage Waiver (LDW)
                                                </div>
                                            </div>
                                        </label>
                                        <label className='text-avis mt-2 text-black'>LDW is an option that relieves you of financial responsibility if your rental car is damaged or stolen. Loss Damage Waiver protection for as low as $9 a day.</label>
                                    </div>
                                    <div className='col-12 p-3 text-end'>
                                        <label className='link-avis'>Learn More </label>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}