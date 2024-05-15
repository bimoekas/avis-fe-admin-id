import React from "react";
import { useLocation } from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderAlt from "../common/header/HeaderAlt";
import RB from "../components/reviewandbook/RB";

const ReviewAndBook = () => {
    const before = useLocation();
    return (
        <>
            <HeaderAlt />
            <RB
                before={before.state}
            />
            <FooterOne />
        </>
    )
}

export default ReviewAndBook;