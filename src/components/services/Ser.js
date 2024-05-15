import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

class Sern extends React.Component {
    detail(data) {
        this.props.navigate('/blankpage', {
            state: {
                data: data,
            }
        });
    }
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        const myStyle = {
            backgroundImage: "url(" + publicUrl + "assets/images/resources/productservice.avif)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "250px"
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
                <section style={myStyle}>
                    <div className='container pt-5'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <h1 className='text-white'>Car Rental Products and Services</h1>
                                <p className='text-white'>Learn more about Avis products that make your rental experience easier and fun.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{ backgroundColor: "#eaeaea" }}>
                    <div className='container'>
                        <div className='row pt-3'>
                            <a role='button' className='col-lg-4 col-sm-6 pe-5 pb-5' onClick={(e) => this.detail('Fuel Plan')}>
                                <div className='row' style={myCard}>
                                    <div className='col-12 p-3'>
                                        <label className='mb-2' style={myHead}>
                                            <div className='row'>
                                                <div className='col-sm-3'>
                                                    <img className='img-fluid' src={publicUrl + "assets/images/resources/protection-ldw.avif"} />
                                                </div>
                                                <div className='col-sm-9 align-self-center text-black'>
                                                    Fuel Plan
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
                            <a role='button' className='col-lg-4 col-sm-6 pe-5 pb-5' onClick={(e) => this.detail('e-Toll')}>
                                <div className='row' style={myCard}>
                                    <div className='col-12 p-3'>
                                        <label className='mb-2' style={myHead}>
                                            <div className='row'>
                                                <div className='col-sm-3'>
                                                    <img className='img-fluid' src={publicUrl + "assets/images/resources/protection-ldw.avif"} />
                                                </div>
                                                <div className='col-sm-9 align-self-center text-black'>
                                                    e-Toll
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
                            <a role='button' className='col-lg-4 col-sm-6 pe-5 pb-5' onClick={(e) => this.detail('One way Car Rental')}>
                                <div className='row' style={myCard}>
                                    <div className='col-12 p-3'>
                                        <label className='mb-2' style={myHead}>
                                            <div className='row'>
                                                <div className='col-sm-3'>
                                                    <img className='img-fluid' src={publicUrl + "assets/images/resources/protection-ldw.avif"} />
                                                </div>
                                                <div className='col-sm-9 align-self-center text-black'>
                                                    One way Car Rental
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
                            <a role='button' className='col-lg-4 col-sm-6 pe-5 pb-5' onClick={(e) => this.detail('Additional Driver')}>
                                <div className='row' style={myCard}>
                                    <div className='col-12 p-3'>
                                        <label className='mb-2' style={myHead}>
                                            <div className='row'>
                                                <div className='col-sm-3'>
                                                    <img className='img-fluid' src={publicUrl + "assets/images/resources/protection-ldw.avif"} />
                                                </div>
                                                <div className='col-sm-9 align-self-center text-black'>
                                                    Additional Driver
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

function Ser(props) {
    let navigate = useNavigate();
    return <Sern {...props} navigate={navigate} />
}

export default Ser;