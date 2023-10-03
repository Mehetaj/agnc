"use client"
/* eslint-disable @next/next/no-img-element */

import { Swiper, SwiperSlide } from "swiper/react";
import arrow from '../../../../asset/icon/blue-arroe.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import star from "../../../../asset/icon/Review.png";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import { Service } from "@/app/types/types";

const Service = (props : any) => {
  // console.log(props);
  const data = props.data;
  return (
    <div className=" ">
      <Swiper
        slidesPerView={3}
        spaceBetween={3}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          // when window width is >= 640px
          320: {
            width: 320,
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            width: 480,
            slidesPerView: 1,
            spaceBetween: 100,
          },
          768: {
            width: 770,
            slidesPerView: 2,
            spaceBetween: 10
          },
          // when window width is >= 768px
          1024: {
            width: 1024,
            slidesPerView: 2,
            spaceBetween: 2
          },
          1440: {
            width: 1440,
            slidesPerView: 3,
            spaceBetween: 50
          },
        }}
      >
        {data.map((d: object | string | string[] | any | Service, i : number) => (
          <SwiperSlide key={i}>
            <div className="bg-[#EBF2FF] service-slides dark:bg-[#0A1A33] dark:text-white mt-3 p-8 mb-10 h-[380px] lg:h-[348px] rounded-lg">
              <img src={d?.logo} alt="" />
              <h2 className="text-2xl font-bold my-6">{d?.category}</h2>
              <p>{d?.description}</p>
              <Image className=" mt-6" src={arrow} alt="Details button"/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Service;
