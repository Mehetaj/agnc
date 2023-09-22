import React from 'react';
import info_we_collect from '../../../../asset/privacy/info_we_collect.png'
import Image from 'next/image';

// Information we collect component

const Info_we_collect = () => {
    return (
        <div className='cursor-not-allowed'>
            <h1 className='text-[32px] font-bold my-6' id="1">Information We Collect</h1>
            {/* information collected photo */}
            {/* <Image src={info_we_collect} alt=''/> */}
            <p>Personal Information: When you visit our website or use our services, we may collect certain personal information, including :

            </p>
            <ul className='list-disc ml-10'>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Postal address</li>
                <li>Company name (if applicable)</li>
                <li>Payment information (such as credit card details)</li>
            </ul>
            <p className='pt-5'>Usage Data: We also collect non-personal information automatically as you navigate and interact with our website. This information may include your IP address, browser type, operating system, referring URLs, and pages viewed.</p>
        </div>
    );
};

export default Info_we_collect;