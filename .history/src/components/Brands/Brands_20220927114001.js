import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

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
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
        </div>
    )
}
