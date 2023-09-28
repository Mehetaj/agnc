"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import "./Review.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import star from "../../../../asset/icon/Review.png";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

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

  const [rating, setRating] = useState("");

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data.map((d: object | string | string[] | any, i) => (
          <SwiperSlide key={i}>
            <div>
              <div className=" w-full lg:w-[379px] bg-[#EBF2FF] dark:bg-[#0A1A33] dark:text-white p-8 my-7 rounded-lg">
                <p>{d.review}</p>
                <hr className="my-4" />
                <Image src={star} alt="" />
              </div>
              <div className="p-2 flex gap-2 mb-7 items-center">
                <img
                  src={d.reviewer_img}
                  alt=""
                  width={50}
                  height={50}
                  className="rounded-full"
                />
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
