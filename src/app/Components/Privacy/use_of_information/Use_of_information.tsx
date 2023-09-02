import Image from 'next/image';
import React from 'react';
import use_ofInfo from '../../../../asset/privacy/use_of_information.png'

const Use_of_information = () => {
    return (
        <div className='my-10'>
            <h1 className='text-[32px] font-bold my-6'>Use of Information</h1>
            <Image src={use_ofInfo} alt=''/>
        </div>
    );
};

export default Use_of_information;