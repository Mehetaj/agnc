// tsx page component

import PortfolioBanner from "@/app/Components/Portfolio/PortfolioBanner/PortfolioBanner";
import React from "react";
import Contact from "@/app/Components/Home/Contact/Contact";
import Component from "@/app/Shared/Component/Component";
import Portfolio from "@/app/Components/Home/Portfolio/Portfolio";

const page = () => {
  return (
    <div>
      <Component>
        <PortfolioBanner />
<<<<<<< HEAD
        <div className="">
=======
        <Portfolio_tabs />
        {/* <div className="">
>>>>>>> 947ac79e882378857c4f401c8654a899cf6459b4
          <Portfolio />
        </div> */}
      </Component>
      <Contact />
    </div>
  );
};

export default page;
