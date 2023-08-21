"use client"
import Image from 'next/image';
import menu from '../.././../asset/menu.png'
import Link from 'next/link';
import { useState } from 'react';
import close from '../../../asset/close.png'



const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    return (
        <div>
            <div>
      <nav className="w-full lg:w-[1440px]">
        <div className="justify-between mx-auto  md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-[32px] text-blue-600 font-bold ">Bytezenith</h2>
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
          <div className=''>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
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
                <li className="pb-6 text-[18px]  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="" onClick={() => setNavbar(!navbar)}>
                    Careers
                  </Link>
                </li>
                <li className="pb-6 text-[18px]  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="" onClick={() => setNavbar(!navbar)}>
                  <button className='btn-outline lg:hidden'>Contact Us</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <button className='btn-outline hidden lg:flex'>
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </nav>
    </div> 
        </div>
    );
};

export default Navbar;