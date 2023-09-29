import { servicesData } from '@/app/FakeData/Service';
import Component from '@/app/Shared/Component/Component';
import Image from 'next/image';
import React from 'react';
import arrow from '../../../../asset/icon/blue-arroe.png'
const ServicesSection = () => {
    const data = servicesData;

    return (
        <div className='bg-[#F7FAFF] p-10 my-10'>
            <Component>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        data?.map((d, i) => (
                            <div className="bg-[#EBF2FF] dark:bg-[#0A1A33] dark:text-white mt-3 p-8 mb-10 w-[379px] h-[348px] rounded-lg">
                                <img src={d?.logo} alt="" />
                                <h2 className="text-2xl font-bold my-6">{d?.category}</h2>
                                <p>{d?.description}</p>
                                <Image className=" mt-6" src={arrow} alt="Details button" />
                            </div>
                        ))
                    }
                </div>
            </Component>
        </div>
    );
};

export default ServicesSection;