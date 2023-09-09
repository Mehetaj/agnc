// tsx page component

import PortfolioBanner from "@/app/Components/Portfolio/PortfolioBanner/PortfolioBanner";
import React from "react";
import Contact from "@/app/Components/Home/Contact/Contact";
import Component from "@/app/Shared/Component/Component";
import Portfolio from "@/app/Components/Home/Portfolio/Portfolio";
import Portfolio_tabs from "@/app/Components/Portfolio/Portfolio_tabs/PortfolioTabs";

const page = () => {
  return (
    <div>
      <Component>
        <PortfolioBanner />
        <Portfolio_tabs />
        <div className="">
          <Portfolio />
        </div>
      </Component>
      <Contact />
    </div>
  );
};

export default page;
