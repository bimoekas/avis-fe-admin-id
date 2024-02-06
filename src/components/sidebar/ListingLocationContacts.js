import React from 'react';
import { Link } from 'react-router-dom';

export default class ListingLocationContacts extends React.Component {
    render(){
        return (
            <>
                <div className="listings-details-page__sidebar-single sidebar__location-contacts wow animated fadeInUp" data-wow-delay="0.2s">
                    <div className="title">
                        <h2>Location / Contacts</h2>
                    </div>

                    <div className="sidebar__location-contacts-google-map">
                        <iframe
                            title="Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                            className="sidebar__location-contacts-map" allowfullscreen>
                        </iframe>
                    </div>

                    <ul className="sidebar__location-contacts-list">
                        <li><p><i className="icon-pin"></i> <span> Adress :</span> USA 20TH Brooklyn NY</p></li>

                        <li>
                            <p><i className="icon-phone-call"></i> <span> Phone :</span> <a href="tel:123456789">+099 695 695 35</a></p>
                        </li>

                        <li>
                            <p><i className="icon-email"></i> <span> Mail :</span> <a href="mailto:info@madina.com">rubel@example.com</a></p>
                        </li>

                        <li>
                            <p><i className="icon-email"></i> <span> Website :</span> <a href="https://www.themeholder.com/">Themeholder1.com</a></p>
                        </li>
                    </ul>

                    <ul className="sidebar__location-contacts-social-links">
                        <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-facebook-app-symbol"></span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-twitter"></span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-instagram"></span></Link></li>
                        <li><Link to={process.env.PUBLIC_URL + `/`}><span className="icon-pinterest"></span></Link></li>
                    </ul>
                </div>
            </>
        )
    }
}