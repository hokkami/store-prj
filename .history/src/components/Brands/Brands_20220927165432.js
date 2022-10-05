import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css'

import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

// import 'swiper/css/navigation';
// import 'swiper/modules/pagination/pagination.min.css'
// import 'swiper/css/scrollbar';



import './Brands.css'

export default function Brands() {


    return (
        <div className="brands-container">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                // navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src="./Image/Casio1.jpg" alt="" className='header-img-item' /></SwiperSlide>
                <SwiperSlide><img src="./Image/Casio2.jpg" alt="" className='header-img-item' /></SwiperSlide>
                <SwiperSlide><img src="./Image/Casio3.jpg" alt="" className='header-img-item' /></SwiperSlide>
                <SwiperSlide><img src="./Image/Casio4.jpg" alt="" className='header-img-item' /></SwiperSlide>
            </Swiper>
        </div>
    )
}
