import React from "react";
import AD from "../components/avis360detail/AD";
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from "../common/header/HeaderOne";
import Title from '../Title';

const Avis360Detail = () => {
    Title('Discover the Avis 360')
    return (
        <>
            <HeaderOne />
            <div className="container py-5">
                <h1 className="link-avis mb-5">Discover the Avis 360° - renting without excess amount!</h1>
                <p className="text-dark mb-3">
                    Whether you need a car for a few days, a weekend or 2 weeks, with Avis 360° you don't have to worry about your rental.
                </p>
                <p className="text-dark mb-3">
                    The Avis 360° product is inclusive of:
                    <ul>
                        <li>- Unlimited Mileage</li>
                        <li>- Super Collision Damage Waiver - SCDW (zero excess)</li>
                        <li>- Super Theft Protection (STP) </li>
                        <li>- Airport or Railway Surcharges </li>
                        <li>- Windscreen Protection* </li>
                        <li>- Public Liability </li>
                        <li>- Vehicle Registration Fee (VRF) </li>
                        <li>- Local VAT </li>
                        <li>- Roadside Assistance Plus (RSN)** </li>
                    </ul>
                </p>
                <p className="text-dark mb-3">
                    Avis 360° can be booked for following destinations:
                    <ul>
                        <li>Austria, Belarus, Belgium, Bosnia, Bulgaria, Croatia, Czech Republic, Denmark, Estonia, Finland, France, Germany, Hungary, Italy, Laos, Latvia, Lithuania, Luxembourg, Malta, Montenegro, Norway, Poland, Portugal, Romania, Serbia, Singapore, Slovenia, South Africa, Spain, Sweden, Switzerland, Turkey, UAE, Ukraine and United Kingdom.</li>
                    </ul>
                </p>
                <p className="text-dark mb-3">
                    Book here your Avis 360°
                </p>
                <p className="text-dark mb-3">
                    *Windscreen Protection may not be included in some destinations.
                </p>
                <p className="text-dark mb-3">
                    **Free Roadside Assistance Plus (RSN) is included for below destinations:
                    <ul>
                        <li>1.	Austria</li>
                        <li>2.	Belgium</li>
                        <li>3.	Czech Republic</li>
                        <li>4.	France (excluding Corsica)</li>
                        <li>5.	Germany</li>
                        <li>6.	Italy </li>
                        <li>7.	Luxembourg</li>
                        <li>8.	Poland</li>
                        <li>9.	Portugal</li>
                        <li>10.	Spain (excluding Canaries)</li>
                        <li>11.	Switzerland</li>
                        <li>12.	UK  </li>
                        <li>13.	Denmark</li>
                        <li>14.	Norway</li>
                        <li>15.	Sweden</li>
                    </ul>
                </p>
                <p className="text-dark mb-3">
                    Book Avis 360 plan using below Avis Worldwide Discount (AWD) numbers:
                    <ul>
                        <li>For rentals within 1 to 13 days – I017600</li>
                        <li>For rentals within 14 to 27 days – I068100</li>
                    </ul>
                </p>
                <p className="text-dark mb-3">
                    Terms and conditions:
                    <ul>
                        <li>- All offers are subject to mandatory surcharges for the full rental duration.</li>
                        <li>- Minimum advance booking period of 24 hours is required to avail the discount.</li>
                        <li>- The discounts do not apply for domestic rentals (for example, rentals taking place in the same country the booking is made).</li>
                        <li>- Offer valid on all car groups, subject to availability at time of booking.</li>
                        <li>- Offer restrictions may apply at certain times in certain locations.</li>
                        <li>- Prices vary by season and by Avis locations.</li>
                        <li>- Rates quoted on website are rates after discount.</li>
                        <li>- To qualify, reservations must be made using Avis Worldwide Discount (AWD) number I017600 for rental length 1-13 days & I068100 for rental length 14 - 27 days</li>
                        <li>- If any other AWD number is present in the rental booking, no discounts will be awarded.</li>
                        <li>- If any other AWD number is present in a customer’s Avis Preferred profile and this is used in the rental booking, no discounts will be awarded and once booked, this cannot be reversed.</li>
                        <li>- Renters must meet standard Avis age, driver and credit requirements.</li>
                        <li>- Offers may not be used in conjunction with any other discount, promotion or offer other than those valid on this website and are subject to availability.</li>
                        <li>- Avis is not responsible for typographical errors or omissions.</li>
                        <li>- Avis reserve the right to discontinue this offer at any time.</li>
                        <li>- Standard Avis rental terms and conditions apply.</li>
                    </ul>
                </p>
            </div>
            <FooterOne />
        </>
    )
}

export default Avis360Detail;