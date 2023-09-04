/* eslint-disable @next/next/no-img-element */
import { portfolio_data } from "@/app/FakeData/portfolio";
import Component from "@/app/Shared/Component/Component";
import Title from "@/app/Shared/Title/Title";
import React from "react";
import Single_portfolio from "./singleportfolio";

const Portfolio = () => {
  const data = portfolio_data;
  return (
    <div className="my-16">
      <Component>
        <Title>portfolio</Title>
        <h1 className="text-[48px] font-bold">Some of our work</h1>

        <Single_portfolio data={data}></Single_portfolio>
      </Component>
    </div>
  );
};

export default Portfolio;
