import React from 'react';
import {Link} from "react-router-dom";
import LanguageSwitcher from './LanguageSwitcher';
import Nav from './Nav';
import SearchButton from './SearchButton';


export default class HeaderTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <header class="main-header main-header-one main-header-one--two clearfix">
                    <div class="main-header-one__wrapper">
                        <div class="main-header-one__bottom">
                            <nav class="main-menu main-menu--1">
                                <div class="main-menu__wrapper">
                                    <div class="container">
                                        <div class="main-menu__wrapper-inner">
                                            <div class="main-header-one__bottom-left">
                                                <div class="logo">
                                                    <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/resources/logo-2.png"} alt="" /></Link>
                                                </div>
                                            </div>

                                            <div class="main-header-one__bottom-right">
                                                <Nav />

                                                <div class="main-header-one__bottom-right-search">
                                                    <SearchButton />
                                                </div>

                                                <LanguageSwitcher />

                                                <div class="main-header-one__bottom-right-btn">
                                                    <Link to={process.env.PUBLIC_URL + `/`} class="thm-btn">+ Add Listing </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}