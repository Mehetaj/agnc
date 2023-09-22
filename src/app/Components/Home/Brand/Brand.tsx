import Image from "next/image";
import React from "react";
import brand1 from "../../../../asset/brand/Brand-1.png";
import brand2 from "../../../../asset/brand/Brand-2.png";
import brand3 from "../../../../asset/brand/Brand-3.png";
import brand4 from "../../../../asset/brand/Brand-4.png";
import brand5 from "../../../../asset/brand/Brand-5.png";
import brand6 from "../../../../asset/brand/Brand-6.png";
import brand7 from "../../../../asset/brand/Brand-7.png";
import brand8 from "../../../../asset/brand/Brand-8.png";
import Title from "@/app/Shared/Title/Title";
import Component from "@/app/Shared/Component/Component";

export default function Brand() {
  return (
    <div id="brand" className=" bg-[#EBF2FF] dark:bg-[#10223F] p-10  lg:py-20 mt-20">
      <Component>
        <div className="flex flex-col">
          <Title>Brands</Title>
          <h1 className="text-[48px] font-bold">We’ve collaborated with</h1>
        </div>
        {/* create div with four column and three row as card */}
        {/* Brands static img from assets folder */}
        <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <Image className="w-[335px] lg:w-[276px]" src={brand1} alt="" />
          <Image className="w-[335px] lg:w-[276px]" src={brand2} alt="" />
          <Image className="w-[335px] lg:w-[276px]" src={brand3} alt="" />
          <Image className="w-[335px] lg:w-[276px]" src={brand4} alt="" />
          <Image className="w-[335px] lg:w-[276px]" src={brand5} alt="" />
          <Image className="w-[335px] lg:w-[276px]" src={brand6} alt="" />
          <Image className="w-[335px] lg:w-[276px]" src={brand7} alt="" />
          <Image className="w-[335px] lg:w-[276px]" src={brand8} alt="" />
        </div>
      </Component>
    </div>
  );
}
