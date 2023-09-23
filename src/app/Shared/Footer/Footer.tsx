import Image from "next/image";
import icons1 from "../../../asset/social/Icon 1.png";
import icons2 from "../../../asset/social/Icon 2.png";
import icons3 from "../../../asset/social/Icon 3.png";
import icons4 from "../../../asset/social/Icon 4.png";
import top_arrow from "../../../asset/top_arrow.png";
import Link from "next/link";
import Component from "../Component/Component";

const Footer = () => {
  return (
    <Component>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10">
        <div className="foot">
          {/* Company name */}
          <h1 className="text-[48px] lg:text-[32px] font-bold mb-8">
            Bytezenith
          </h1>
          <p className="text-[21px] lg:text-[16px] mb-6 text-[#2D3D59] dark:text-white">
            World-class user experiences with <br /> pixel perfect user
            interface <br /> designs.
          </p>
        </div>
        <div className="foot">
          {/* Address */}
          <h1 className="text-[24px] font-bold mb-8">Lets Connect</h1>
          <p className=" text-[21px] lg:text-[16px] mb-6 text-[#2D3D59] dark:text-white">
            House 336,Road 02, Block-D <br />
            Bashundhara R/A, Dhaka 1229
          </p>
          <p className="text-[21px] lg:text-[16px] mb-6 text-[#2D3D59] dark:text-white">
            hello@Bytezenith.com
          </p>
          <p className="text-[21px] lg:text-[16px] mb-6 text-[#2D3D59] dark:text-white">
            019999999999
          </p>
        </div>
        <div>
          {/* Links */}
          <h1 className="text-[24px] font-bold mb-8">Links</h1>
          <Link
            href="/about"
            className="text-[16px] block my-3 mb-6 text-[#2D3D59] dark:text-white"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-[16px] block my-3 mb-6 text-[#2D3D59] dark:text-white"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="text-[16px] block my-3 mb-6 text-[#2D3D59] dark:text-white"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="text-[16px] block my-3 mb-6 text-[#2D3D59] dark:text-white"
          >
            Blog
          </Link>
          <Link
            href="/career"
            className="text-[16px] block my-3 mb-6 text-[#2D3D59] dark:text-white"
          >
            Career
          </Link>
        </div>
        <div>
          {/* Social Links */}
          <h1 className="text-[24px] font-bold mb-8">Follow us</h1>
          <div className="flex gap-8">
            <Image src={icons1} alt="fb icons" />
            <Image src={icons2} alt="fb icons" />
            <Image src={icons3} alt="fb icons" />
            <Image src={icons4} alt="fb icons" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="divider"></div>
        <Image
          className=""
          src={top_arrow}
          alt=""
        />
      </div>
      <div className=" w-11/12 h-[0.06px] bg-[#CED3D9] mx-auto rounded-lg"></div>
      <div className="p-10 lg:p-0">
        <div className="my-5 flex justify-between items-center">
          {/* P=privacy and policy route */}
          <p>@ 2023, Bytezenith. All rights reserved.</p>
        </div>

        <Link className="text-gray-500" href="/privacy_policy">
          Privacy & Policy
        </Link>
      </div>
    </Component>
  );
};

export default Footer;
