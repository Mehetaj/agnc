import { servicesData } from '@/app/FakeData/Service';
import Title from '@/app/Shared/Title/Title';
import Image from 'next/image';
import React from 'react';
import Service from './Service';

const Services = () => {
    const data = servicesData;
    return (
        <div className='my-[200px]'>
            <Title>Service</Title>
            <h1 className='text-[48px] font-bold'>We offer creative solutions</h1>
            {/* mapped data */}
            <div>
            <Service data={data}/>
            </div>
        </div>
    );
};

export default Services;