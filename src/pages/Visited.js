import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import VisitedOne from '../components/visited/VisitedOne';
import FooterOne from '../common/footer/FooterOne';

const Visited = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb 
                heading="Visited Page"
                currentPage="Visited Page" 
            />
            <VisitedOne />
            <FooterOne />
        </>
    )
}

export default Visited;