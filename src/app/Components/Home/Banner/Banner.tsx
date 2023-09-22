import Image from "next/image";
import banner from "../../../../asset/Coworking-amico 1.png";
import Button from "@/app/Shared/Button/Button";
import Component from "@/app/Shared/Component/Component";

const Banner = () => {
  return (
    <Component>
      <div className="px mx-auto p-10 lg:p-0  lg:flex justify-between items-center lg:mt-16">
        <div>
          {/* Heading of Banners */}
          <h1 className="text-[40px] lg:text-[60px] font-bold">
            Stand Out in the <br className="lg:flex hidden" /> Digital Crowd
            with <br className="lg:flex hidden" /> Creative Solutions
          </h1>
          <p className="text-[20px] mt-3 mb-6">
            We are a leading creative agency. Bringing your ideas to <br /> life
            and help your brand thrive in the digital world.
          </p>
          {/* Linked to portfolio page btn */}
          <Button>View our work</Button>
        </div>
        {/* Banner image */}
        <Image className="max-w-full" src={banner} alt="" />
      </div>
    </Component>
  );
};

export default Banner;
