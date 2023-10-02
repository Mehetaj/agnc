import { servicesData } from "@/app/FakeData/Service";
import Title from "@/app/Shared/Title/Title";
import Image from "next/image";
import React from "react";
import Service from "./Service";
import Component from "@/app/Shared/Component/Component";

const Services = () => {
  const data = servicesData;
  return (
    <div className="my-10 dark:my-[200px]">
      <Component>
        <Title>Service</Title>
        <h1 className="text-[48px] text-center lg:text-left font-bold">We offer creative solutions</h1>
        {/* mapped data */}
        <div>
          <Service data={data} />
        </div>
      </Component>
    </div>
  );
};

export default Services;
