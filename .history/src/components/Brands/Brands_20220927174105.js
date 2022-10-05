import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



import './Brands.css'

export default function Brands() {


    return (
        <div className="brands-container">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className='swiper-slid'><img src="./Image/casio-logo.jpg" alt="" className='swiper-img' /></SwiperSlide>
                <SwiperSlide className='swiper-slid'><img src="./Image/tissot-logo.png" alt="" className='swiper-img' /></SwiperSlide>
                <SwiperSlide className='swiper-slid'><img src="./Image/Casio4.jpg" alt="" className='swiper-img' /></SwiperSlide>
                <SwiperSlide className='swiper-slid'><img src="./Image/Casio2.jpg" alt="" className='swiper-img' /></SwiperSlide>
                <SwiperSlide className='swiper-slid'><img src="./Image/Casio3.jpg" alt="" className='swiper-img' /></SwiperSlide>
                <SwiperSlide className='swiper-slid'><img src="./Image/Casio4.jpg" alt="" className='swiper-img' /></SwiperSlide>
            </Swiper>
        </div>
    )
}
