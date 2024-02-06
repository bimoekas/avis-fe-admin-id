import React from "react";
import FooterOne from '../common/footer/FooterOne';
import HeaderAlt from "../common/header/HeaderAlt";
import PR from "../components/userhome/Profile";
import PM from "../components/userhome/PM";
// import Title from '../Title';

const UserHome = () => {
    // Title ('Avis ID User Panel')
    return (
        <>
            <HeaderAlt />
            <PM />
            <PR />
            <FooterOne />
        </>
    )
}

export default UserHome;