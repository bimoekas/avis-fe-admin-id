import React from 'react';
import HeaderTwo from '../common/header/HeaderTwo';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogTwo from '../components/blog/BlogTwo';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const BlogSidebar = () => {
    return (
        <>
            <HeaderTwo />
            <Breadcrumb 
                heading="Blog Page"
                currentPage="Blog Page" 
            />
            <BlogTwo />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default BlogSidebar;