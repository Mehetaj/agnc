import React from "react";
import Banner from "@/app/Shared/Banner/Banner"
import AboutHero from "@/app/Components/About/AboutHero/AboutHero";
import Contact from "@/app/Components/Home/Contact/Contact";
import ChooseUs from "@/app/Components/About/ChooseUs/ChooseUs";
import Portfolio from "@/app/Components/Home/Portfolio/Portfolio";

const AboutPage = () => {
  return (
    <div>
          <Banner title="About Us" />
          <AboutHero />
          <ChooseUs />
          <Portfolio />
          <Contact />
    </div>
  );
};

export default AboutPage;
