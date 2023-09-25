import { BlogData } from "@/app/FakeData/blog";
import Component from "@/app/Shared/Component/Component";
import Title from "@/app/Shared/Title/Title";
import React from "react";
import arrow from '../../../../asset/trending_flat.png'
import Image from "next/image";

const BlogSection = () => {
  const data = BlogData;
  return (
    <div className="my-10">
      <Component>
        <Title>blog</Title>
        <h1 className="font-bold text-5xl">Our Latest Articles</h1>
        {/* Mapped blog section data on home page */}
        <div className="grid grid-cols-3 mt-10">
          {data.slice(0, 3).map((d, i) => (
            <div className="h-[600px] w-[379px] p-6 bg-[#EBF2FF]">
              <img
                className="h-[276px] w-[338px] rounded-lg"
                src={d.image}
                alt=""
              />
              <p className="my-4 ">{d.publiched}</p>
              <h1 className="text-[24px] font-bold h-[70px]">
                {d.title.slice(0, 45)}..
              </h1>
              <p className="my-4">{d.content.slice(0, 107)}...</p>

              <div>
                <button>Read more</button>
                <Image className="text-blue-500" src={arrow} alt="" />
              </div>
            </div>
          ))}
        </div>
      </Component>
    </div>
  );
};

export default BlogSection;
