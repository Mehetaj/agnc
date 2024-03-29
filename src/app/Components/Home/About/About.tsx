import Image from "next/image";
import React from "react";
import img from "../../../../asset/about-us-home-.png";
import Title from "@/app/Shared/Title/Title";
import Button from "@/app/Shared/Button/Button";
import Component from "@/app/Shared/Component/Component";
import Link from "next/link";

const About = () => {
  return (
    <div className="dark:bg-[#030C1A] pt-10 pb-16">
      <Component>
        <div className="mx-auto mt-20  flex flex-col-reverse lg:flex-row p-10 justify-between items-center">
          <div className="">
          <Image className="w-full h-full mt-6 lg:mt-0" src={img} alt="" />
          </div>
          <div className="">
            <Title>About</Title>
            <h1 className="text-[32px] lg:text-[60px] text-center lg:text-left font-bold">
              We are design ninjas for your next project
            </h1>
            <p className=" text-[20px] text-center lg:text-left my-10">
              We are driven by a passion for creativity and innovation. With a
              team of skilled professionals, we deliver exceptional solutions that
              exceed client expectations. With a deep understanding of your brand
              to create strategies that yield remarkable results.
            </p>
            <div className="flex justify-center lg:justify-start">
            <Button>
              <Link href="/about">More About Us</Link>
            </Button>
            </div>
          </div>
        </div>
      </Component>
    </div>
  )
};



export default About;
