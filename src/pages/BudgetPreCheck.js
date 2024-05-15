import React from "react";
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from "../common/header/HeaderOne";
import Bpc from "../components/budgetprecheck/Bpc";

const BudgetPreCheck = () => {
    return (
        <>
            <HeaderOne />
            <Bpc />
            <FooterOne />
        </>
    )
}

export default BudgetPreCheck;