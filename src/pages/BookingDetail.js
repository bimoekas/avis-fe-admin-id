import React from "react";
import { useLocation } from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderAlt from "../common/header/HeaderAlt";
import BD from "../components/bookingdetail/BD";

const BookingDetail = () => {
    const before = useLocation();
    return (
        <>
            <HeaderAlt />
            <BD
                before={before.state}
            />
            <FooterOne />
        </>
    )
}

export default BookingDetail;