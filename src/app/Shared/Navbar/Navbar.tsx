"use client";
import Image from "next/image";
import menu from "../.././../asset/menu.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import close from "../../../asset/close.png";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

import Component from "../Component/Component";

import { ThemeSwitcher } from "../themeSwitcher/ThemeSwitcher";

const Navbar = () => {
  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <div id="navbar" className="mx-auto lg:p-0 dark:bg-[#030C1A] ">
      <Component>
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
                <ul className="h-screen md:h-auto items-center dark:text-white justify-center md:flex ">
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
                    <Link href="/portfolio" onClick={() => setNavbar(!navbar)}>
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

                  <div className="mt-6">
                    <ThemeSwitcher />
                  </div>
                </ul>
              </div>
            </div>
            <button className="btn-outline hidden lg:flex">
              <Link href="/contact">Contact Us</Link>
            </button>
          </div>
        </nav>
      </Component>
    </div>
  );
};

export default Navbar;
