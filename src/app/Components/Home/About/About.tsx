import Image from "next/image";
import React from "react";
import img from "../../../../asset/team checklist-amico 1.png";
import Title from "@/app/Shared/Title/Title";
import Button from "@/app/Shared/Button/Button";

const About = () => {
  return (
    <div className="mt-20 flex flex-col-reverse lg:flex-row p-10 lg:p-0 lg:justify-between items-center gap-10 lg:gap-60">
      <Image src={img} alt="" />
      <div>
        <Title>About</Title>
        <h1 className="text-[60px] font-bold text-black dark:text-yellow-500">
          We are design ninjas for your next project
        </h1>
        <p className=" text-[20px] my-10 dark:bg-red-500">
          We are driven by a passion for creativity and innovation. With a team
          of skilled professionals, we deliver exceptional solutions that exceed
          client expectations. With a deep understanding of your brand to create
          strategies that yield remarkable results.
        </p>
        <Button>More About Us</Button>
      </div>
    </div>
  );
};

export default About;
