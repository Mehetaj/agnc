import React from 'react';
import info_sharing_img from '../../../../asset/privacy/info_sharing.png'
import Image from 'next/image';

const Information_sharing = () => {
    return (
        <div>
            <h1 className='text-[32px] font-bold my-6' id="3">Information Sharing</h1>
{/* Information sharing pic */}
            {/* <Image src={info_sharing_img} alt='' /> */}
            <p>We understand the importance of keeping your personal information confidential. We do not sell, trade, or rent your personal information to third parties without your consent. However, we may share your information in the following circumstances:</p>
            <ul className='list-disc ml-10'>
                <li>With trusted third-party service providers who assist us in operating our website and delivering our services. These providers have agreed to keep your information confidential.</li>
                <li>In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity.</li>
                <li>To send you important updates and announcements about our services</li>
            </ul>
        </div>
    );
};

export default Information_sharing;