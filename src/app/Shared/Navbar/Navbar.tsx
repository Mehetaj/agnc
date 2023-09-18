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
  const [navbar, setNavbar] = useState<boolean>(false);

  const navLinks = NavLink.map((d, i) => {
    return (
      <div key={i}>
        <li className="pb-6 text-[18px]  py-2 lg:px-6 text-center border-b-2 lg:border-b-0  hover:text-blue-900  border-blue-900   lg:hover:bg-transparent">
          <Link href={d.path} onClick={() => setNavbar(!navbar)}>
            {d.name}
          </Link>
        </li>
      </div>
    )
  })

  return (
    <div id="navbar" className="mx-auto lg:p-0 dark:bg-[#030C1A] ">
      <Component>
        <nav className="w-full lg:max-w-[1400px]">
          <div className="justify-between mx-auto  lg:items-center lg:flex">
            <div>
              <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                {/* LOGO */}
                <Link href="/">
                  <h2 className="text-[32px] text-blue-600 font-bold ">
                    Bytezenith
                  </h2>
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="lg:hidden">
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
                className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "p-12 lg:p-0 block" : "hidden"
                  }`}
              >
                <ul className="h-screen lg:h-auto items-center dark:text-white justify-center lg:flex ">
                  {/* Nav link form LINKS component (on shared folder) */}
                  {
                    navLinks
                  }

                  {/* contact link hidden on large device */}
                  <li className="pb-6 text-[18px]  py-2 px-6 text-center  border-b-2 lg:border-b-0  hover:text-blue-600  border-blue-900  lg:hover:text-blue-600 lg:hover:bg-transparent">
                    <Link href="" onClick={() => setNavbar(!navbar)}>
                      <button className="btn-outline lg:hidden">
                        Contact Us
                      </button>
                    </Link>
                  </li>

                  {/* Toggle dark mode */}

                  
                  <li className="pb-6 text-[18px]  py-2 lg:px-6 text-center border-b-2 lg:border-b-0  hover:text-blue-900  border-blue-900  lg:hover:text-blue-600 lg:hover:bg-transparent">
                    <Link href="" onClick={() => setNavbar(!navbar)}>
                      <ThemeSwitcher />
                    </Link>
                  </li>
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
