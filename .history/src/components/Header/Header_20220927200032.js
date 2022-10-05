import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Header.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <div className='main-container-header'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./Image/background3.jpg" alt="" className='header-img-item' /></SwiperSlide>
        <SwiperSlide><img src="./Image/background3.jpg" alt="" className='header-img-item' /></SwiperSlide>
        <SwiperSlide><img src="./Image/background3.jpg" alt="" className='header-img-item' /></SwiperSlide>
        <SwiperSlide><img src="./Image/background3.jpg" alt="" className='header-img-item' /></SwiperSlide>
        <SwiperSlide><img src="./Image/background3.jpg" alt="" className='header-img-item' /></SwiperSlide>
        <SwiperSlide><img src="./Image/background3.jpg" alt="" className='header-img-item' /></SwiperSlide>
        <SwiperSlide><img src="./Image/background3.jpg" alt="" className='header-img-item' /></SwiperSlide>
        <SwiperSlide><img src="./Image/background3.jpg" alt="" className='header-img-item' /></SwiperSlide>
        <SwiperSlide><img src="./Image/background3.jpg" alt="" className='header-img-item' /></SwiperSlide>
      </Swiper>
    </div>
  );
}

