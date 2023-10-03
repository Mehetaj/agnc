"use client";
import Image from "next/image";
import menu from "../.././../asset/menu.png";
import Link from "next/link";
import { useState } from "react";
import close from "../../../asset/close.png";
import NavLink from '../Links/NavLinks'
import Component from "../Component/Component";

import { ThemeSwitcher } from "../themeSwitcher/ThemeSwitcher";

const Navbar = () => {
  const [Toggle, setToggle] = useState<boolean>(true);

  const navLinks = NavLink.map((d, i) => {
    return (
      <div key={i}>
        <li className="pb-6 text-[18px] list-none nav-bar-links  py-2 px-6 text-center border-b-2 lg:border-b-0  hover:text-blue-900  border-blue-900   lg:hover:bg-transparent">
          <Link href={d.path}>
            {d.name}
          </Link>
        </li>
      </div>
    )
  })

  return (
    <div>
      <Component>
        <div className="">
          <div className="flex justify-between items-center">
            <h1 className="text-[24px] lg:text-[32px] text-primary font-bold ">Bytezenith</h1>
            <div className="hidden lg:flex">
              {navLinks}
              <button className="text-blue-600 flex lg:hidden border px-4 lg:px-[32px] py-[12px] lg:text-[18px] rounded-lg font-semibold border-blue-600">
                Contact us
              </button>
            </div>
            <div className="">
              <button className="text-blue-600 hidden lg:flex border px-4 lg:px-[32px] py-[12px] lg:text-[18px] rounded-lg font-semibold border-blue-600">
                Contact us
              </button>
              {/* Toggle navbar */}
              <div className="grid lg:hidden">
                {
                  Toggle
                    ?
                    <Image onClick={() => setToggle(!Toggle)} src={menu} className="w-[20px] h-[20px]" alt="" />
                    :
                    <Image onClick={() => setToggle(!Toggle)} className="w-[20px] h-[20px]" alt="" src={close} />
                }

                {
                  !Toggle
                    ?
                    <div className="absolute top-10 right-7 mb-20">
                      {navLinks}
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