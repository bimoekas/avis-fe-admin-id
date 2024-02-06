import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ListingDetails from '../components/listing/ListingDetails'
import FooterOne from '../common/footer/FooterOne';

const ListingsDetails = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb 
                heading="Listings Details"
                currentPage="Listings Details" 
            />
            <ListingDetails />
            <FooterOne />
        </>
    )
}

export default ListingsDetails;