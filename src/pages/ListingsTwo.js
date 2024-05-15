import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ListingTwo from '../components/listing/ListingTwo';
import FooterOne from '../common/footer/FooterOne';

const ListingsTwo = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb 
                heading="Listings"
                currentPage="Listings" 
            />
            <ListingTwo />
            <FooterOne />
        </>
    )
}

export default ListingsTwo;