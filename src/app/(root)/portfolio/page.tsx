// tsx page component
import PortfolioBanner from "@/app/Components/Portfolio/PortfolioBanner/PortfolioBanner";
import React from "react";
import Contact from "@/app/Components/Home/Contact/Contact";
import Component from "@/app/Shared/Component/Component";
import Portfolio from "@/app/Components/Portfolio/Portfolio/Portfolio";

const page = () => {
  return (
    <div>
      <Component>
        <PortfolioBanner />
        <Portfolio></Portfolio>
      </Component>
      <Contact />
    </div>
  );
};

export default page;
