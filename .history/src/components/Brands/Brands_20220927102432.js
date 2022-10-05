import React from 'react'
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './Brands.css'

export default function Brands() {


    return (
        <div className="brands-container">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="./Image/Casio1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./Image/Casio2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./Image/Casio3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./Image/Casio4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
