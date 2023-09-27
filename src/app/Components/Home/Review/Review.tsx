/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import './Review.css'

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

  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value: number, index: number) => console.log(value, index)



  const data = Props.data;
  return (
    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {data.map((d, i) => {
        return (
          <div key={i} className="w-full lg:w-[379px]  lg:h-[256px]">
            <div className="bg-[#EBF2FF] dark:bg-[#0A1A33] dark:border-[#3A4559] border border-gray-200 p-8 rounded-lg">
              <p className="text-[20px]">{d.review}</p>
              <div className="w-full h-[0.1px] divider dark:border my-6"></div>
            </div>

            <div className="mt-8 flex gap-8 items-center">
              <img src={d.reviewer_img} className="w-[60px] h-[60px] rounded-full" alt="" />
              <div>
                <h1>{d.reviewer_name}</h1>
                <p>{d.reviewer_type}</p>
                <Rating
                  allowFraction
                />
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Review;
