import React from "react";
import { useLocation } from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderAlt from "../common/header/HeaderAlt";
import PM from "../components/userhome/PM";
import BL from "../components/bookinglist/BL";

const BookingList = () => {
    // const before = useLocation();
    return (
        <>
            <HeaderAlt />
            <PM />
            <BL
            // before = {before.state}
            />
            <FooterOne />
        </>
    )
}

export default BookingList;