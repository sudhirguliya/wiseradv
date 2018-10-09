import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false}  >

                <div>
                    <img src="https://d1i986aobszzxa.cloudfront.net/images/banner-bg.jpg" alt="1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://d1i986aobszzxa.cloudfront.net/images/bg3.jpg" alt="2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://d1i986aobszzxa.cloudfront.net/images/bg4.jpg" alt="3" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://d1i986aobszzxa.cloudfront.net/images/bg2.jpg" alt="4" />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>

        );
    }
}

export default DemoCarousel;