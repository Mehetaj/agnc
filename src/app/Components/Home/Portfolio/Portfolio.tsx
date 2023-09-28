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
    <div className="my-16">
      <Component>
        <Title>portfolio</Title>
        <h1 className="text-[48px] font-bold">Some of our work</h1>
        <div className="">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {data?.map((d: portfolio_data_type, i: number) => (
                  <SwiperSlide key={i}>
              <div className="mt-7 mb-10">
                  <img className="w-[379px] h-[280px]" src={d?.img} alt="" />
                  <p className="text-[18px] my-4">{d.type}</p>
                  <h1 className="text-[24px] font-bold">{d.title}</h1>
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
