import React from "react";
import HeaderTwo from "../common/header/HeaderTwo";
import HeroThree from "../components/hero/HeroThree";
import AboutTwo from "../components/about/AboutTwo";
import VisitedOne from "../components/visited/VisitedOne";
import VideoOne from "../components/video/VideoOne";
import TeamTwo from "../components/team/TeamTwo";
import ContactOne from "../components/contact/ContactOne";
import BrandOne from "../components/brand/BrandOne";
import BlogOne from "../components/blog/BlogOne";
import FooterOne from "../common/footer/FooterOne";
import FeatureOne from "../components/features/FeatureOne";

const HomeThree = () => {
    return (
        <>
            <HeaderTwo />
            <HeroThree />
            <AboutTwo />
            <VisitedOne />
            <FeatureOne />
            <VideoOne />
            <TeamTwo />
            <ContactOne />
            <BrandOne />
            <BlogOne />
            <FooterOne />
        </>
    )
}

export default HomeThree;