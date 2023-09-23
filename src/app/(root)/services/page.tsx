import Portfolio from "@/app/Components/Home/Portfolio/Portfolio";
import Services from "@/app/Components/Home/Services/Services";
import ServiceBanner from "@/app/Components/Home/Services/serviceBanner";
import Component from "@/app/Shared/Component/Component";
import React from "react";

const Page = () => {
  return (
    <div>
      <Component>
        <ServiceBanner />
        <Services />
        <Portfolio />
      </Component>
    </div>
  );
};

export default Page;
