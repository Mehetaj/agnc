"use client"
import Image from "next/image";
import "./globals.css";
import Button from "./Shared/Button/Button";
import notFound from '../asset/error.png'
import Link from "next/link";


export default function NotFound() {
  return (
    <div className='error h-[100vh]'>
      <div>
        <h1 className=''>Page Not Found</h1>
        <p className=''>The page you are looking for was removed, <br></br> renamed or might never existed.</p>


        <Button>
          <Link className="" href="/">Go Back</Link>
        </Button>

      </div>
      <Image className='' src={notFound} alt='' />
    </div>
  );
}
