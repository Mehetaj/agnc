"use client"
import Image from "next/image";
import "./globals.css";
import Button from "./Shared/Button/Button";
import notFound from '../asset/error.png'


export default function NotFound() {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}} className='error'>
            <div>
                <h1 className=''>Page Not Found</h1>
                <p className=''>The page you are looking for was removed, <br></br> renamed or might never existed.</p>

                <Button>Go Back</Button>
            </div>
            <Image className='' src={notFound} alt='' />
        </div>
  );
}
