"use client";
import React from "react";
import Component from "../Component/Component";

// import { useTheme } from 'next-themes';

// console.log(useTheme)

const Banner = ({ title }: any) => {
  return (
      <div className="flex items-center justify-center clip-path w-full h-[500px] bg-[#EBF2FF] dark:bg-[#10223F] dark:text-white text-[60px] font-bold px-20 text-center ">
        <h1 className="">{title}</h1>
      </div>
  );
};

export default Banner;
