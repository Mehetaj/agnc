"use client";
import Image from "next/image";
import menu from "../.././../asset/menu.png";
import Link from "next/link";
import { useState } from "react";
import NavLink from '../Links/NavLinks'
import Component from "../Component/Component";
import logo from '../../../asset/Colorful Modern Elegant B Free Logo (280 x 120 px).png'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from 'react-icons/rx'

import { ThemeSwitcher } from "../themeSwitcher/ThemeSwitcher";
import Button from "../Button/Button";

const Navbar = () => {
  const [Toggle, setToggle] = useState<boolean>(true);

  const navLinks = NavLink.map((d, i) => {
    return (
      <div key={i}>
        <li className="pb-6 text-[18px] list-none nav-bar-links  py-1 lg:px-6 text-center   hover:text-blue-900 lg:hover:bg-transparent">
          <Link href={d.path}>
            {d.name}
          </Link>
        </li>
      </div>
    )
  })

  return (
    <div className="">
      <Component>
        <div className="">
          <div className="flex justify-between items-center ">
            <Image className="w-[140px] lg:w-[170px] xl:w-[280px]" src={logo} alt="Logo" />

            {/* <h1 className="text-2xl font-bold text-blue-600">Bytezenith</h1> */}
            <div className="hidden lg:flex items-center mt-5">
              {navLinks}
              <div className=" lg:hidden flex">
                <Button>
                  Contact us
                </Button>
              </div>
            </div>
            <div className="-mt-3 lg:-mt-4 absolute right-8 lg:right-0 lg:relative">
              <ThemeSwitcher />
            </div>
            <div className="">
              <div className="transition hidden lg:flex border rounded-xl border-[#5E17EB]  hover:bg-gradient-to-r from-[#5271FF] via-30% to-[#5E17EB] to-90%">
                <button className="  flex items-center justify-center gap-2 text-lg py-3 px-5">
                  Contact us
                </button>
              </div>
              {/* small device */}
              {/* Toggle navbar */}
              <div className="grid lg:hidden">
                {
                  Toggle
                    ?
                    <FaBars onClick={() => setToggle(!Toggle)} className="text-xl text-[#5E17EB]" />
                    :
                    <RxCross1 onClick={() => setToggle(!Toggle)} className="text-xl text-[#5E17EB]" />
                }

                {
                  !Toggle
                    ?
                    <div className="menu absolute right-4 menu-sm dropdown-content mt-6 z-[1] px-2 py-4 shadow bg-base-100 rounded-box w-52">
                      <div className="">
                        {navLinks}
                        <div className="transition  border rounded-xl border-[#5E17EB]  hover:bg-gradient-to-r from-[#5271FF] via-30% to-[#5E17EB] to-90%">
                          <button className="text-center px-3 py-2 mx-auto text-lg ">
                            Contact us
                          </button>
                        </div>
                      </div>
                    </div> : ""
                }
              </div>
            </div>
          </div>
        </div>
      </Component>
    </div>
  );
};

export default Navbar;