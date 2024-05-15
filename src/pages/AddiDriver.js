import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import OfferDetails from "../components/addidriver/AD";
import Title from '../Title';

const AddiDriver = () => {
    Title('Additional Drivers')
    return (
        <>
            <HeaderOne />
            <OfferDetails />
            <FooterOne />
        </>
    );
};

export default AddiDriver;
