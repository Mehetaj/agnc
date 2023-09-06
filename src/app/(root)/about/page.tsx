import React from "react";
import Banner from "@/app/Components/About/Banner/Banner";
import AboutHero from "@/app/Components/About/AboutHero/AboutHero";
import Contact from "@/app/Components/Home/Contact/Contact";
import ChooseUs from "@/app/Components/About/ChooseUs/ChooseUs";
import Component from "@/app/Shared/Component/Component";

const page = () => {
  return (
    <div>
      <Component>
        <div>
          <Banner />
          <AboutHero />
          <ChooseUs />
        </div>
      </Component>
      <Contact />
    </div>
  );
};

export default page;
