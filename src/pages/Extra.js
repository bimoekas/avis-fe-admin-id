import React from "react";
import { useLocation } from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderAlt from "../common/header/HeaderAlt";
import EX from "../components/extra/EX";

const Extra = () => {
    const before = useLocation();
    return (
        <>
            <HeaderAlt />
            <EX
                before={before.state}
            />
            <FooterOne />
        </>
    )
}

export default Extra;