import Image from "next/image";
import banner from "../../../../asset/Coworking-amico 1.png";
import Button from "@/app/Shared/Button/Button";
import Component from "@/app/Shared/Component/Component";
import Link from "next/link";

const Banner = () => {
  return (
    <Component>
      <div className=" mx-auto lg:flex justify-between items-center gap-5">
        <div>
          {/* Heading of Banners */}
          <h1 className="text-center lg:text-left text-[32px] lg:text-[45px] xl:text-[60px] font-bold">
            Stand Out in the <br className="lg:flex hidden" /> Digital Crowd
            with <br className="lg:flex hidden" /> Creative Solutions
          </h1>
          <p className="text-[20px] text-center lg:text-left mt-3 mb-6">
            We are a leading creative agency. Bringing your ideas to <br /> life
            and help your brand thrive in the digital world.
          </p>
          {/* Linked to portfolio page btn */}
          <div className="flex justify-center lg:justify-start">
            <Button>
              <Link href="/portfolio">
                View our work
              </Link>
            </Button>
          </div>
        </div>
        {/* Banner image */}
        <div className="flex justify-center items-center">
        <img className="max-w-full banner-png mt-8 lg:mt-0" src={banner} alt="" />
        </div>
      </div>
    </Component>
  );
};

export default Banner;
