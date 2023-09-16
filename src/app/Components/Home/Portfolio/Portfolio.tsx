/* eslint-disable @next/next/no-img-element */
/// This file not needed but if you want i can use it (MH-Fahim11)
"use client"
import { portfolio_data } from "@/app/FakeData/portfolio";
import Component from "@/app/Shared/Component/Component";
import Title from "@/app/Shared/Title/Title";
<<<<<<< HEAD
import React from "react";
import Single_portfolio from "./singleportfolio";
=======
import React, { useEffect, useState } from "react";

>>>>>>> 947ac79e882378857c4f401c8654a899cf6459b4

const Portfolio = () => {
  const data = portfolio_data;
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch("https://api.jsonbin.io/v3/qs/64fbfdc68d92e126ae693a51")
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data.record)
  //     })
  // }, [])

  return (
    <div className="my-16">
      <Component>
        {/* <Title>portfolio</Title>
        <h1 className="text-[48px] font-bold">Some of our work</h1> */}

        {/* <Single_portfolio data={data} ></Single_portfolio> */}
      </Component>
    </div>
  );
};

export default Portfolio;
