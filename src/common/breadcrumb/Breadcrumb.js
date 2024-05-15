import React from 'react';
import {Link} from 'react-router-dom';

export default class Breadcrumb extends React.Component {
    render(){
        let heading = this.props.heading;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let currentPage = this.props.currentPage ? this.props.currentPage : heading
        let Img = this.props.Img ? this.props.Img :'page-header-img1.jpg'
        return (
            <>
                <section class="page-header">
                    <div class="page-header__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/'+Img+')'}}></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="page-header__wrapper">
                                    <div class="page-header__content text-center">
                                        <h2>{heading}</h2>
                                        <div class="page-header__menu">
                                            <ul>
                                                <li><Link to={process.env.PUBLIC_URL + `/`}>Home</Link></li>
                                                <li>{currentPage}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}