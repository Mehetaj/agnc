import Image from 'next/image'
import React from 'react'
import brand1 from '../../../../asset/brand/Brand-1.png'
import brand2 from '../../../../asset/brand/Brand-2.png'
import brand3 from '../../../../asset/brand/Brand-3.png'
import brand4 from '../../../../asset/brand/Brand-4.png'
import brand5 from '../../../../asset/brand/Brand-5.png'
import brand6 from '../../../../asset/brand/Brand-6.png'
import brand7 from '../../../../asset/brand/Brand-7.png'
import brand8 from '../../../../asset/brand/Brand-8.png'

export default function Brand() {
    return (
        <div className='flex flex-col mt-20'>

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
                    <div className='flex m-4 justify-center items-center'>
                        {/* image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image className='p-2' src={brand1} alt='' />
                    </div>
                </div>
                <div className='col-span- row-span-2'>
                    <div className='flex m-4 justify-center items-center '>
                        {/* write an image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image src={brand2} alt='' />
                    </div>
                </div>
                <div className='col-span-1 row-span-2'>
                    <div className='flex m-4 justify-center items-center '>
                        {/* write an image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image src={brand3} alt='' />
                    </div>
                </div>
                <div className='col-span-1 row-span-2'>
                    <div className='flex m-4 justify-center items-center '>
                        {/* write an image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image src={brand4} alt='' />
                    </div>
                </div>
                <div className='col-span-1 row-span-2'>
                    <div className='flex m-4 justify-center items-center '>
                        {/* write an image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image src={brand5} alt='' />
                    </div>
                </div>
                <div className='col-span-1 row-span-2'>
                    <div className='flex m-4 justify-center items-center '>
                        {/* write an image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image src={brand6} alt='' />
                    </div>
                </div>
                <div className='col-span-1 row-span-2'>
                    <div className='flex m-4 justify-center items-center '>
                        {/* write an image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image src={brand7} alt='' />
                    </div>
                </div>
                <div className='col-span-1 row-span-2'>
                    <div className='flex m-4 justify-center items-center '>
                        {/* write an image tag with source ../../../../asset/brand/Brand 1.png  for typescript file*/}
                        <Image src={brand8} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}