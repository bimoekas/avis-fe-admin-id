import React from "react";
import { useLocation } from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderAlt from "../common/header/HeaderAlt";
import CC from "../components/choosecars/CC";

const ChooseCars = () => {
    const before = useLocation();
    return (
        <>
            <HeaderAlt />
            <CC
                before={before.state}
            />
            <FooterOne />
        </>
    )
}

export default ChooseCars;