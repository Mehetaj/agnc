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
import Link from "next/link";

const Service = (props: any) => {
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
            width: 300,
            slidesPerView: 1,
            spaceBetween: 10
          },
          375: {
            width: 358,
            slidesPerView: 1,
            spaceBetween: 10
          },
          425: {
            width: 410,
            slidesPerView: 1,
            spaceBetween: 100,
          },
          768: {
            width: 750,
            slidesPerView: 2,
            spaceBetween: 10
          },
          // when window width is >= 768px
          1024: {
            width: 940,
            slidesPerView: 2,
            spaceBetween: 20
          },
          1440: {
            width: 1190,
            slidesPerView: 3,
            spaceBetween: 20
          },
          1520: {
            width: 1440,
            slidesPerView: 3,
            spaceBetween: 20
          },
        }}
      >
        {data.map((d: object | string | string[] | any | Service, i: number) => (
          <SwiperSlide key={i}>
            <div className="bg-[#EBF2FF] dark:bg-[#0A1A33] dark:text-white mt-3 p-8 mb-10 h-[380px] lg:h-[348px] rounded-lg">
              <img src={d?.logo} alt="" />
              <h2 className="text-2xl font-bold my-6">{d?.category}</h2>
              <p>{d?.description}</p>
              <Link className='absolute left-9 inset-x-0 bottom-4 h-16' href={`/services/${d?.id}`}>
                <Image className="" src={arrow} alt="Details button" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Service;
