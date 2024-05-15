import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogContentDetails from '../components/blog/BlogContentDetails';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const BlogDetails = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb 
                heading="Blog Details Page"
                currentPage="Blog Details Page" 
            />
            <BlogContentDetails />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default BlogDetails;