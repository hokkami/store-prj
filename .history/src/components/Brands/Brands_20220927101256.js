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
                    <img className='brands-img' src="./Image/Casio1.jpg" />
                </div>
                <div>
                    <img className='brands-img' src="./Image/Casio2.jpg" />
                </div>
                <div>
                    <img className='brands-img' src="./Image/Casio3.jpg" />
                </div>
                <div>
                    <img className='brands-img' src="./Image/Casio4.jpg" />
                </div>
            </Slider>
        </div>
    )
}
