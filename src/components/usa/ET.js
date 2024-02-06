import React from 'react';

export default class ET extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        const myStyle = {
            backgroundImage: "url(" + publicUrl + "assets/images/resources/onewaycarrental1.webp)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "200px"
        };
        return (
            <>
                <section className='border-top border-bottom'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-12'>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb text-avis py-3">
                                        <li className="breadcrumb-item">Cars & Services</li>
                                        <li className="breadcrumb-item">Products & Services</li>
                                        <li className="breadcrumb-item">USA & Canada</li>
                                        <li className="breadcrumb-item link-avis" aria-current="page">Avis e-Toll</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="banner-one" style={myStyle}>
                    <div className="banner-one__inner py-4">
                        <div className="container">
                            <div className="banner-one__content text-center">
                                <div className="title">
                                    <h3 className='text-white text-up'>RENTAL CAR E-TOLLS & CASHLESS TOLL SERVICE</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container mt-2'>
                        <div className='row py-3'>
                            <div className='col-12'>
                                <p className='text-avis mt-2'>Avis is pleased to provide cashless toll processing as a convenience to you.  Select your pick-up state for specific details.</p>
                                <p className='text-avis mt-2'>Avis e-Toll is offered in the Northeast (from Maine to North Carolina), California, Chicago Area, Colorado, Florida, Oklahoma, Texas, Washington and Puerto Rico.</p>
                            </div>
                        </div>
                        <div className='row py-3'>
                            <div className='col-12'>
                                <h3 className='text-up text-black fw-normal'>Cashless Tolls - Canada</h3>
                                <p className='text-avis mt-2'>Please be aware of roads that may be "cashless tolls" and drivers on these roads are not able to pay cash once they have entered these roads. You automatically opt into our e-Toll service program and will be charged $17.00 plus GST/HST per rental, plus incurred kilometer charges and video tolls at the maximum prevailing rates posted by the toll authority. The charges may take 4-8 weeks after the rental to be billed to your billing account or credit card/debit card on file.</p>
                            </div>
                        </div>
                        <div className='row py-3'>
                            <div className='col-12'>
                                <h3 className='text-up text-black fw-normal'>Northeast (Maine to North Carolina and Chicago Areas):</h3>
                                <p className='text-avis mt-2'>California, Colorado, Delaware District of Columbia, Florida, Georgia, Illinois, Indiana, Kansas, Maine, Maryland, Massachusetts, New Hampshire, New Jersey, New York, Ohio, Oklahoma, Pennsylvania, Rhode Island, Texas, Virginia, Washington, West Virginia</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}