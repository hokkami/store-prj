import React from 'react'
import './Brands.css'
import ReactDOM from "react-dom";
import Slider from "react-slick";

export default function Brands() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="brands-container">
            <Slider {...settings}>
                <div>
                    <img src="./Image/background3.jpg" />
                </div>
                <div>

                    <img src="http://placekitten.com/g/400/200" />
                </div>

                <div>
                    <img src="http://placekitten.com/g/400/200" />
                </div>
                <div>
                    <img src="http://placekitten.com/g/400/200" />
                </div>
            </Slider>
        </div>
  )
}
