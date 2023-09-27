/* eslint-disable @next/next/no-img-element */

"use client";
import { portfolio_data } from "@/app/FakeData/portfolio";
import Component from "@/app/Shared/Component/Component";
import Title from "@/app/Shared/Title/Title";
// import { portfolio_data } from "@/app/FakeData/portfolio";

const Portfolio = () => {

  type portfolio_data_type = {
    img: string;
    category: string;
    title: string;
    description: string;
    company: string;
    portfolio: string;
    type: string;
  }
  

  const data: portfolio_data_type[] = portfolio_data;

  return (
    <div className="my-16">
      <Component>
        <Title>portfolio</Title>
        <h1 className="text-[48px] font-bold">Some of our work</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-7">
          {
            data?.slice(0,3)?.map((d: portfolio_data_type, i: number) => (
              <div key={i}> 
                  <img className="w-[379px] h-[280px]" src={d?.img} alt="" />
                  <p className="text-[18px] my-4">{d.type}</p>
                  <h1 className="text-[24px] font-bold">{d.title}</h1>
              </div>
            ))
          }
          </div>
      </Component>
    </div>
  );
};

export default Portfolio;
