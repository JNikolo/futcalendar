"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

const CustomSwiper = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>Item 1</SwiperSlide>
        <SwiperSlide>Item 2</SwiperSlide>
        <SwiperSlide>Item 3</SwiperSlide>
        <SwiperSlide>Item 4</SwiperSlide>
        <SwiperSlide>Item 5</SwiperSlide>
        <SwiperSlide>Item 6</SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
      <style jsx>{`
        .swiper-container {
          width: 100%;
          height: 100%;
        }
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eee;
          border: 1px solid #ddd;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default CustomSwiper;