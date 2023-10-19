import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src="https://i.postimg.cc/XJFgTBKt/Untitled-design-1.png"  className=" w-96 rounded-2xl"/>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://i.postimg.cc/KjDDYXHN/Untitled-design.png" alt="" className=" w-96 rounded-2xl"  />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/BvRgYBFx/Untitled-design-2.png"
            alt=""  className=" w-96 rounded-2xl"
          />
        </SwiperSlide>

        <div className="autoplay-progress " slot="container-end">
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
