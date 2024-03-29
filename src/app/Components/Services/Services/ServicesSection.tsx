import { servicesData } from '@/app/FakeData/Service';
import Component from '@/app/Shared/Component/Component';
import Image from 'next/image';
import React from 'react';
import arrow from '../../../../asset/icon/blue-arroe.png'
import Link from 'next/link';
const ServicesSection = () => {
    const data = servicesData;

    return (
        <div className='bg-[#F7FAFF] dark:bg-[#061126] p-1 lg:p-10 my-10'>
            <Component>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3'>
                    {
                        data?.map((d: any, i: number) => (
                            <div key={i} className="bg-[#EBF2FF] relative  dark:bg-[#0A1A33] dark:text-white mt-3 p-8 mb-10 w-full lg:h-[420px] xl:w-[379px] h-full xl:h-[348px] rounded-lg">
                                <img  src={d?.logo} alt="" />
                                <h2 className="text-2xl font-bold my-6">{d?.category}</h2>
                                <p>{d?.description}</p>
                                <Link className='absolute left-9 inset-x-0 bottom-0 h-16' href={`/services/${d?.id}`}>
                                    <Image className=" mt-6" src={arrow} alt="Details button" />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </Component>
        </div>
    );
};

export default ServicesSection;