import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamContentDetails from '../components/team/TeamContentDetails';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const TeamDetails = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb 
                heading="Team Details Page"
                currentPage="Team Details Page" 
            />
            <TeamContentDetails />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default TeamDetails;