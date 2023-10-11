"use client"
import Image from "next/image";
import icons1 from "../../../asset/social/Icon 1.png";
import icons2 from "../../../asset/social/Icon 2.png";
import icons3 from "../../../asset/social/Icon 3.png";
import icons4 from "../../../asset/social/Icon 4.png";
import top_arrow from "../../../asset/top_arrow.png";
import Link from "next/link";
import Component from "../Component/Component";
import ScrollToTop from "react-scroll-to-top";
import { BsFacebook } from 'react-icons/bs'
import { BiLogoTwitter, BiLogoInstagramAlt } from 'react-icons/bi'
import { IoLogoWhatsapp } from 'react-icons/io'

const Footer = () => {

  return (

    <footer className="dark:bg-[#030C1A] p-2">
      <Component>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-10">
          <div className="">
            {/* Company name */}
            <h1 className="text-[48px] lg:text-[32px] font-bold mb-8">
              Bytezenith
            </h1>
            <p className="text-[21px] lg:text-[16px] mb-6 text-[#2D3D59] dark:text-white">
              World-class user experiences with <br /> pixel perfect user
              interface <br /> designs.
            </p>
          </div>
          <div className="">
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
          <div className="mb-4">
            {/* Social Links */}
            <h1 className="text-[24px] font-bold mb-8">Follow us</h1>
            <div className="flex gap-8">
              <div className="bg-[#D6E6FF] p-4 rounded-xl">
                <BsFacebook className="text-2xl   text-[#226CE5]" />
              </div>
              <div className="bg-[#D6E6FF] p-4 rounded-xl">
                <BiLogoTwitter className="text-2xl bg-[#D6E6FF]  text-[#226CE5]" />
              </div>
              <div className="bg-[#D6E6FF] p-4 rounded-xl">
                <BiLogoInstagramAlt className="text-2xl bg-[#D6E6FF]  text-[#226CE5]" />
              </div>
              <div className="bg-[#D6E6FF] p-4 rounded-xl">
                <IoLogoWhatsapp className="text-2xl bg-[#D6E6FF]  text-[#226CE5]" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <ScrollToTop color="#226CE5" className="flex dark:bg-[#10223F] dark:text-white justify-center items-center w-10" width="20" top={20} smooth />
        <div className=" dark:bg-[#030C1A] mx-auto rounded-lg">
          <div className="p-10 lg:p-0">
            <div className="mt-5 mb-2 flex justify-between items-center">
              {/* P=privacy and policy route */}
              <p>@ 2023, Bytezenith. All rights reserved.</p>
            </div>

            <Link className="text-gray-500" href="/privacy_policy">
              Privacy & Policy
            </Link>
          </div>
        </div>
      </Component>
    </footer>
  );
};

export default Footer;
