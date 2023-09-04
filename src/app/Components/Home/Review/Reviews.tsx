/* eslint-disable @next/next/no-img-element */
import { reviews_data } from "@/app/FakeData/reviews";
import Component from "@/app/Shared/Component/Component";
import Title from "@/app/Shared/Title/Title";
import React from "react";
import Review from "./Review";


const Reviews = () => {
    const data = reviews_data;
  return (
    <div>
      <Component>
        <Title>Testimonials</Title>
        <h1 className="text-5xl">What people says about us</h1>
        <Review data={data}/>
      </Component>
    </div>
  );
};

export default Reviews;
