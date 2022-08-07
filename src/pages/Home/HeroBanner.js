import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroBanner.css";

import slide1 from '../../assets/images/slider/slider-1.jpg';
import slide2 from '../../assets/images/slider/slider-2.jpg';
import slide3 from '../../assets/images/slider/slider-3.jpg';
import slide4 from '../../assets/images/slider/slider-4.jpg';
// import required modules
const HeroBanner = () => {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} className="max-h-screen" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} className="max-h-screen" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} className="max-h-screen" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} className="max-h-screen" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default HeroBanner;
