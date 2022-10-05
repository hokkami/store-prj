import React from 'react'
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
      ></Swiper>
        </div>
    )
}
