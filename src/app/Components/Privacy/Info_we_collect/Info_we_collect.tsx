import React from 'react';
import info_we_collect from '../../../../asset/privacy/info_we_collect.png'
import Image from 'next/image';

// Information we collect component

const Info_we_collect = () => {
    return (
        <div className='cursor-not-allowed'>
            <h1 className='text-[32px] font-bold my-6'>Information We Collect</h1>
            {/* information collected photo */}
            <Image src={info_we_collect} alt=''/>
        </div>
    );
};

export default Info_we_collect;