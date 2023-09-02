import React from 'react';
import info_sharing_img from '../../../../asset/privacy/info_sharing.png'
import Image from 'next/image';

const Information_sharing = () => {
    return (
        <div>
            <h1 className='text-[32px] font-bold my-6'>Information Sharing</h1>
{/* Information sharing pic */}
            <Image src={info_sharing_img} alt='' />
        </div>
    );
};

export default Information_sharing;