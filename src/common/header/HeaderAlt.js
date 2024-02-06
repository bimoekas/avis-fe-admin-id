import React from 'react';
import { Link } from "react-router-dom";
import SignModal from './SignModal';

export default class HeaderAlt extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <header class="main-header main-header-one clearfix">
                    <div class="main-header-one__wrapper">

                        <div class="main-header-one__bottom">
                            <nav class="main-menu main-menu--1">
                                <div class="main-menu__wrapper">
                                    <div class="container">
                                        <div class="main-menu__wrapper-inner py-3">
                                            <div class="main-header-one__bottom-left">
                                                <div class="logo">
                                                    <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl + "assets/images/icon/avis.png"} alt="" /></Link>
                                                </div>
                                            </div>
                                            <div class="main-header-one__bottom-right">
                                                <div class="main-header-one__bottom-right myNav">
                                                    <div class="main-menu__inner">
                                                        <ul class="main-menu__list myNav">
                                                            <li class="dropdown">
                                                                {localStorage.getItem('token') ? (
                                                                    <a href={publicUrl + "userhome"}><span className="fa fa-user"></span> {localStorage.getItem('name')}</a>
                                                                ) : (
                                                                    <Link to={process.env.PUBLIC_URL + `#`}><SignModal /></Link>
                                                                )}

                                                            </li>
                                                            {/* <li><a href='#'>Chat Now</a></li> */}
                                                        </ul>
                                                    </div>
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