import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './DemoCarousel.css';

class DemoCarousel extends Component {
    render() {
        return (
            <div>
            <div class="container">
    <div class="row">
       
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
           

            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active">LIFE EVENTS</li>
                <li data-target="#carousel-example-generic" data-slide-to="1">BUSINESS VS PERSONAL WEALTH</li>
                <li data-target="#carousel-example-generic" data-slide-to="2">RETIREMENT DREAMS</li>
            </ol>
            
            <div class="carousel-inner">
                <div class="item active">
                    <img src="http://unsplash.s3.amazonaws.com/batch%209/barcelona-boardwalk.jpg" alt="First slide"/>
                    
                    <div class="header-text hidden-xs">
                        <div class="col-md-12 text-center">
                            <h2>
                                <span>Welcome to <strong>LOREM IPSUM</strong></span>
                            </h2>
                            <br/>
                            <h3>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </h3>
                            <br/>
                            <div class="">
                                <a class="btn btn-theme btn-sm btn-min-block" href="#">Login</a><a class="btn btn-theme btn-sm btn-min-block" href="#">Register</a></div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src="http://unsplash.s3.amazonaws.com/batch%209/barcelona-boardwalk.jpg" alt="Second slide"/>
                    
                    <div class="header-text hidden-xs">
                        <div class="col-md-12 text-center">
                            <h2>
                                <span>Welcome to LOREM IPSUM</span>
                            </h2>
                            <br/>
                            <h3>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </h3>
                            <br/>
                            <div class="">
                                <a class="btn btn-theme btn-sm btn-min-block" href="#">Login</a><a class="btn btn-theme btn-sm btn-min-block" href="#">Register</a></div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src="http://unsplash.s3.amazonaws.com/batch%209/barcelona-boardwalk.jpg" alt="Third slide"/>
                    
                    <div class="header-text hidden-xs">
                        <div class="col-md-12 text-center">
                            <h2>
                                <span>Welcome to LOREM IPSUM</span>
                            </h2>
                            <br/>
                            <h3>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </h3>
                            <br/>
                            <div class="">
                                <a class="btn btn-theme btn-sm btn-min-block" href="#">Login</a><a class="btn btn-theme btn-sm btn-min-block" href="#">Register</a></div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/*<a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
            </a>*/}
        </div>
    </div>
</div>
            </div>
        );
    }
}

export default DemoCarousel;