import React from "react";
import Banner from "@/app/Shared/Banner/Banner"
import AboutHero from "@/app/Components/About/AboutHero/AboutHero";
import Contact from "@/app/Components/Home/Contact/Contact";
import ChooseUs from "@/app/Components/About/ChooseUs/ChooseUs";
import Component from "@/app/Shared/Component/Component";

const AboutPage = () => {
  return (
    <div>
      <Component>
        <div>
          <Banner title="About Us" />
          <AboutHero />
        </div>
      </Component>
          <ChooseUs />
      <Contact />
    </div>
  );
};

export default AboutPage;
