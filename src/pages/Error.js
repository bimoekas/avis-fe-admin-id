import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ErrorContent from '../components/error/ErrorContent';
import FooterOne from '../common/footer/FooterOne';

const Error = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb 
                heading="Error Page"
                currentPage="Error Page" 
            />
            <ErrorContent />
            <FooterOne />
        </>
    )
}

export default Error;