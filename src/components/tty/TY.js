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
                                        <li className="breadcrumb-item active link-avis" aria-current="page">TTY / TDD Information</li>
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
                                <h1 className='text-up text-black'>TTY / TDD Information</h1>
                                <h5 className='text-up text-black fw-normal mt-4'>For the speech and hearing impaired</h5>
                                <p className='text-avis mt-2'>Avis believes that all renters should enjoy a convenient reservation and rental experience. Speech and hearing-impaired customers in the U.S. can easily communicate with Avis through a special device called a Teletypewriter or Telecommunications Display Device (TTY / TDD). This is a text telephone or related computer program that works through a teletype system.</p>
                                <p className='text-avis mt-2'>Contacts to Avis via this method are non-voice.</p>
                                <p className='text-avis mt-2'>Customers wishing to use a relay operator should phone our Voice Reservations number at 1-800-633-3469.</p>
                                <p className='text-avis mt-2'>To contact Avis via a TTY / TDD machine or program, phone 1-800-331-2323, from 7:30 am - 7:30 pm Monday through Friday, Central Standard Time.</p>
                                <button className='btn btn-avis py-2 text-up mt-4'>Make a Reservation</button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}