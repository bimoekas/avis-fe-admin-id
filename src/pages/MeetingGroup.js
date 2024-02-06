import React from "react";
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from "../common/header/HeaderOne";
import MG from "../components/meetinggroup/MG";

const MeetingGroup = () => {
    return (
        <>
            <HeaderOne />
            <MG />
            <FooterOne />
        </>
    )
}

export default MeetingGroup;