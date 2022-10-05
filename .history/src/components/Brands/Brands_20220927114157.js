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
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="./Image/Casio1.jpg" alt="" className='header-img-item'/></SwiperSlide>
      <SwiperSlide><img src="./Image/Casio2.jpg" alt="" className='header-img-item'/></SwiperSlide>
      <SwiperSlide><img src="./Image/Casio3.jpg" alt="" className='header-img-item'/></SwiperSlide>
      <SwiperSlide><img src="./Image/Casio4.jpg" alt="" className='header-img-item'/></SwiperSlide>
    </Swiper>
        </div>
    )
}
