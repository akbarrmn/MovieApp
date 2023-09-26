import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide><img src='/images/coba/banner1.jpg' 
                style={{ width:'100%', height:'512px', objectFit:'cover', objectPosition:'0 10%' }} /></SwiperSlide>
                <SwiperSlide><img src='/images/coba/banner2.jpg' 
                style={{ width:'100%', height:'512px', objectFit:'cover', objectPosition:'50% 80%' }} /></SwiperSlide>
                <SwiperSlide><img src='/images/coba/banner3.jpg' 
                style={{ width:'100%', height:'512px', objectFit:'cover',  }} /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Banner