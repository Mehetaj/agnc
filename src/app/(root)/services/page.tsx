import ChooseUs from "@/app/Components/About/ChooseUs/ChooseUs";
import Portfolio from "@/app/Components/Home/Portfolio/Portfolio";
import ServicesSection from "@/app/Components/Services/Services/ServicesSection";
import Banner from "@/app/Shared/Banner/Banner";
import Component from "@/app/Shared/Component/Component";
import React from "react";

const ServicePage = () => {
  return (
    <div>
      <Banner title={"Our Services"} />
      <ServicesSection />
      <Portfolio />
      <ChooseUs />
    </div>
  );
};

export default ServicePage;
