// tsx PortfolioPage component
import Banner from "@/app/Shared/Banner/Banner"
import React from "react";
import Contact from "@/app/Components/Home/Contact/Contact";
import Component from "@/app/Shared/Component/Component";
import Portfolio from "@/app/Components/Portfolio/Portfolio/Portfolio";

const PortfolioPage = () => {
  return (
    <div>
        <Banner title="Portfolio" />
      <Component>
        <Portfolio/>
      </Component>
      <Contact />
    </div>
  );
};

export default PortfolioPage;
