import Image from 'next/image'
import React from 'react'
import brand1 from '../../../../asset/brand/Brand-1.png'

export default function Brand() {
    return (
        <div className='flex flex-col px-10'>

            <div className='flex flex-col'>
                <p className='text-[18px] text-blue-400 mb-0'>
                    BRANDS
                </p>
                <h1 className='text-[48px] font-bold'>
                    We’ve collaborated with
                </h1>
            </div>
            {/* create div with four column and three row as card */}
            <div className='grid grid-cols-4 grid-rows-2 gap-1'>
                <div className='col-span-1 row-span-2'>
                    {/* there should be a image of brand into a div and there some padding around the image */}
                    <div className='flex m-4 justify-center items-center '>
                        {/* image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image className='border-inherit' src={brand1} alt='' />
                    </div>
                </div>
                <div className='col-span- row-span-2'>
                    <div className='flex m-4 justify-center items-center '>
                        {/* write an image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image src={brand1} alt='' />
                    </div>
                </div>
                <div className='col-span-1 row-span-2'>
                    <div className='flex m-4 justify-center items-center '>
                        {/* write an image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image src={brand1} alt='' />
                    </div>
                </div>
                <div className='col-span-1 row-span-2'>
                    <div className='flex m-4 justify-center items-center '>
                        {/* write an image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image src={brand1} alt='' />
                    </div>
                </div>
                <div className='col-span-1 row-span-2'>
                    <div className='flex m-4 justify-center items-center '>
                        {/* write an image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image src={brand1} alt='' />
                    </div>
                </div>
                <div className='col-span-1 row-span-2'>
                    <div className='flex m-4 justify-center items-center '>
                        {/* write an image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image src={brand1} alt='' />
                    </div>
                </div>
                <div className='col-span-1 row-span-2'>
                    <div className='flex m-4 justify-center items-center '>
                        {/* write an image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image src={brand1} alt='' />
                    </div>
                </div>
                <div className='col-span-1 row-span-2'>
                    <div className='flex m-4 justify-center items-center '>
                        {/* write an image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image src={brand1} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}