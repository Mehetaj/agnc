// tsx page component
import PortfolioBanner from "@/app/Components/Portfolio/PortfolioBanner/PortfolioBanner";
import React from "react";
import Contact from "@/app/Components/Home/Contact/Contact";
import Component from "@/app/Shared/Component/Component";

const page = () => {
  return (
    <div>
      <Component>
        <PortfolioBanner />
      </Component>
      <Contact />
    </div>
  );
};

export default page;
