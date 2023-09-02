"use client";
import Image from "next/image";
import menu from "../.././../asset/menu.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import close from "../../../asset/close.png";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Navbar = () => {
  const [navbar, setNavbar] = useState<boolean>(false);


  return (
    <div id="navbar" className="mx-auto lg:p-0">
      <div className="">
        <nav className="w-full lg:max-w-[1400px]">
          <div className="justify-between mx-auto  md:items-center md:flex">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                {/* LOGO */}
                <Link href="/">
                  <h2 className="text-[32px] text-blue-600 font-bold ">
                    Bytezenith
                  </h2>
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                  <button
                    className="p-2 rounded-md outline-none"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <Image src={close} width={20} height={20} alt="logo" />
                    ) : (
                      <Image
                        src={menu}
                        width={20}
                        height={20}
                        alt="logo"
                        className=""
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "p-12 md:p-0 block" : "hidden"
                }`}
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                  <li className="pb-6 text-[18px]  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-900  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                      Home
                    </Link>
                  </li>
                  <li className="pb-6 text-[18px]  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                    <Link href="/about" onClick={() => setNavbar(!navbar)}>
                      About Us
                    </Link>
                  </li>
                  <li className="pb-6 text-[18px]  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                    <Link href="" onClick={() => setNavbar(!navbar)}>
                      Services
                    </Link>
                  </li>
                  <li className="pb-6 text-[18px]  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                    <Link href="" onClick={() => setNavbar(!navbar)}>
                      Portfolio
                    </Link>
                  </li>
                  <li className="pb-6 text-[18px]  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                    <Link href="" onClick={() => setNavbar(!navbar)}>
                      Blog
                    </Link>
                  </li>
                  {/* contact link hidden on large device */}
                  <li className="pb-6 text-[18px]  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                    <Link href="" onClick={() => setNavbar(!navbar)}>
                      <button className="btn-outline lg:hidden">
                        Contact Us
                      </button>
                    </Link>
                  </li>

                  {/* Toggle dark mode */}

                  {/* <li className="pb-2">
                  <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                  {/* <input
                    
                      type="checkbox" />


                    <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                  </label>
                </li> */}
                  <DarkModeToggle />
                </ul>
              </div>
            </div>
            <button className="btn-outline hidden lg:flex">
              <Link href="/contact">Contact Us</Link>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
