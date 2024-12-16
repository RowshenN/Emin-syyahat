import React from "react";

import plus from "../../images/testimon green +.svg";
import icon from "../../images/Testimonials.png";
import bigsurat from '../../images/testimon-big.svg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import TestimonialCards from "./TestimonialCards";

const Testimonials = () => {
  return (
    <div className="w-full relative">
      <div className="w-full flex items-center justify-center mb-[70px]">
        <div className="flex w-[40%] mx-auto items-center justify-center gap-2 relative">
          <h1 className="text-[61px] font-[poppins-bold] ">Testimonials</h1>
          <img src={plus} alt="plus" />
          <img
            src={icon}
            alt="icon"
            className="absolute w-full -z-10 top-1 bottom-0 left-0 right-0"
          />
        </div>
      </div>

      <div className="w-[92%] float-right z-10">
        <Swiper
          slidesPerView={3.3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="relative h-[425px] "
          scrollbar={false}
        >
          <SwiperSlide>
            <TestimonialCards />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCards />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCards />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCards />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCards />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCards />
          </SwiperSlide>
        </Swiper>
      </div>

      <img src={bigsurat} alt="surat" className="absolute -z-10 left-0 top-8" />
    </div>
  );
};

export default Testimonials;
