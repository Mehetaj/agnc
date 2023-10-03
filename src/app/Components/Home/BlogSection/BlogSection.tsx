"use client"
import { BlogData } from "@/app/FakeData/blog";
import Component from "@/app/Shared/Component/Component";
import Title from "@/app/Shared/Title/Title";
import React from "react";
import arrow from '../../../../asset/icon/blue-arroe.png'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";


const BlogSection = () => {
  const data = BlogData;
  
  return (
    <div className="my-10">
      <div className="">
        <Component>
          <Title>blog</Title>
          <h1 className="font-bold text-5xl text-center lg:text-left">Our Latest Articles</h1>
          {/* Mapped blog section data on home page */}
          <div className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
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
                },
                375: {
                  width: 358,
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                425: {
                  width: 400,
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
                  width: 950,
                  slidesPerView: 2,
                },
                1440: {
                  width: 1190,
                  slidesPerView: 3,
                  spaceBetween: 10
                },
                1520: {
                  width: 1500,
                  slidesPerView: 3,
                  spaceBetween: 10
                },
              }}
            >
              {data.slice(0, 3).map((d, i) => (
                <SwiperSlide key={i}>
                  <div className=" w-full blog-slides lg:w-[379px] my-8 p-6 bg-[#EBF2FF] rounded-md dark:bg-[#0A1A33]">
                    <img
                      className="h-[276px] w-[338px] rounded-lg"
                      src={d?.image}
                      alt=""
                    />
                    <p className="my-4 ">{d.publiched}</p>
                    <h1 className="text-[24px]  font-bold h-[70px]">
                      {d?.title.slice(0, 45)}..
                    </h1>
                    <p className="mb-4 mt-10 lg:my-4">{d?.content.slice(0, 107)}...</p>

                    <div className="text-blue-600 flex gap-2 items-center">
                      <button>Read more</button>
                      <Image className="" src={arrow} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Component>
      </div>
    </div>
  );
};

export default BlogSection;
