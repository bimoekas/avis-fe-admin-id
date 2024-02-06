import React from "react";
import { useLocation } from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from "../common/header/HeaderOne";
// import BP from "../components/blankpage/BP";

const BlankPage = () => {
    const before = useLocation();
    return (
        <>
            <HeaderOne />
            <div className="container py-5">
                <h1 className="link-avis mb-5">{before.state.data}</h1>
                <p className="text-dark mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            {/* <BP
                before = {before.state}
            /> */}
            <FooterOne />
        </>
    )
}

export default BlankPage;