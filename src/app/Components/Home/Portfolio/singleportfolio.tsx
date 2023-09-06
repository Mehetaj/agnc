/* eslint-disable @next/next/no-img-element */
import React from "react";
type Items = {
  data: {
    img: string;
    category: string;
    name: string;
  }[];
};

const Single_portfolio = (Props: Items) => {
    const data = Props.data
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {data.map((d, i) => {
        return (
          <div
            key={i}
            className=""
          >
            <img src={d.img} alt="" />
            <p className="text-[18px] my-4">{d.category}</p>
            <h1 className="text-[24px] font-bold">{d.name}</h1>
          </div>
        );
      })}
    </div>
  )
};

export default Single_portfolio;
