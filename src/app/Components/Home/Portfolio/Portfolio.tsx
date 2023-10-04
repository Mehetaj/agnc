/* eslint-disable @next/next/no-img-element */

"use client";
import { portfolio_data } from "@/app/FakeData/portfolio";
import Component from "@/app/Shared/Component/Component";
import Title from "@/app/Shared/Title/Title";
// import { portfolio_data } from "@/app/FakeData/portfolio";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

const Portfolio = () => {
  type portfolio_data_type = {
    img: string;
    category: string;
    title: string;
    description: string;
    company: string;
    portfolio: string;
    type: string;
  };

  const data: portfolio_data_type[] = portfolio_data;

  return (
    <div className="my-16 res-sub-container">
      <Component>
        <Title>portfolio</Title>
        <h1 className="text-[32px] lg:text-[48px] text-center lg:text-left font-bold">Some of our work</h1>
        <div className="">
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
                spaceBetween: 20
              },
              375: {
                width: 358,
                slidesPerView: 1,
                spaceBetween: 20
              },
              425: {
                width: 410,
                slidesPerView: 1,
                spaceBetween: 20
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
            {data?.map((d: portfolio_data_type, i: number) => (
              <SwiperSlide
                key={i}>
                <div>
                  <div className="mt-7 portfolio-slides portfolio-content w-full xl:w-[378px]  mb-10">
                    <img className="w-full" src={d?.img} alt="" />
                    <p className="text-[18px] my-4">{d.type}</p>
                    <h1 className="text-[24px] font-bold">{d.title}</h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Component>
    </div>
  );
};

export default Portfolio;
