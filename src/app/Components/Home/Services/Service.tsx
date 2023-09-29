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
  console.log(props);
  const data = props.data;
  return (
    <div className=" ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[FreeMode, Pagination]}
      >
        {data.map((d: object | string | string[] | any | Service, i : number) => (
          <SwiperSlide key={i}>
            <div className="bg-[#EBF2FF] dark:bg-[#0A1A33] dark:text-white mt-3 p-8 mb-10 w-[379px] h-[348px] rounded-lg">
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
