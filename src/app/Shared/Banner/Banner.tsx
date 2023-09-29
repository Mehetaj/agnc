"use client";
import React from "react";
import Component from "../Component/Component";

// import { useTheme } from 'next-themes';

// console.log(useTheme)

const Banner = ({ title }: any) => {
  return (
    <Component>
      <div className="bg-img">
        <h1 className="">{title}</h1>
      </div>
    </Component>
  );
};

export default Banner;
