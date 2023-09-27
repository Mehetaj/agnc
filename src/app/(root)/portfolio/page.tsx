// tsx page component
import Banner from "@/app/Shared/Banner/Banner"
import React from "react";
import Contact from "@/app/Components/Home/Contact/Contact";
import Component from "@/app/Shared/Component/Component";
import Portfolio from "@/app/Components/Portfolio/Portfolio/Portfolio";

const page = () => {
  return (
    <div>
      <Component>
        <Banner title="Portfolio" />
        <Portfolio/>
      </Component>
      <Contact />
    </div>
  );
};

export default page;
