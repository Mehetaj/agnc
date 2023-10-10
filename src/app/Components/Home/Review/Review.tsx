"use client";
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import star from "../../../../asset/icon/Review.png";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import './style.css'

type Items = {
  data: {
    reviewer_name: string;
    reviewer_type: string;
    reviewer_img: string;
    ratings: number;
    review: string;
  }[];
};

const Review = (Props: Items) => {
  const data = Props.data;

  return (
    <div className="res-sub-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
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
            spaceBetween: 130,
          },
          375: {
            width: 358,
            slidesPerView: 1,
            spaceBetween: 20,
          },
          425: {
            width: 410,
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            width: 750,
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 768px
          1024: {
            width: 940,
            slidesPerView: 3,
            spaceBetween: 10
          },
          1440: {
            width: 1190,
            slidesPerView: 3,
            spaceBetween: 20
          },
          1520: {
            width: 1080,

            slidesPerView: 3,
            spaceBetween: 20
          },
        }}
      >
        {data.map((d: object | string | string[] | any, i) => (
          <SwiperSlide key={i}>
            <div>
              <div className="review-slides bg-[#EBF2FF] dark:bg-[#0A1A33] dark:text-white p-8 my-7 rounded-lg">
                <p>{d.review}</p>
                <hr className="my-4" />
                <img src={star} alt="" />
              </div>
              <div className="p-2 flex gap-2 mb-7 items-center">
                <div className="w-[50px] h-[50px] rounded-full bg-[#161623]">
                </div>
                <div>
                  <h1 className="text-xl font-semibold">{d.reviewer_name}</h1>
                  <h1>{d.reviewer_type}</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
