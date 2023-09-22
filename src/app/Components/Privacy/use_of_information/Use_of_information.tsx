import Image from 'next/image';
import React from 'react';

const Use_of_information = () => {
    return (
        <div className='my-10'>
            <h1 className='text-[32px] font-bold my-6' id="2">Use of Information</h1>
            <p>Personal Information: We may use your personal information for the following purposes:</p>
            <ul className='list-disc ml-10'>
                <li>To provide and improve our services</li>
                <li>To communicate with you regarding your inquiries, requests, or orders</li>
                <li>To process payments for services rendered</li>
                <li>To send you important updates and announcements about our services</li>
                <li>To personalize your experience and provide tailored content</li>
                <li>To comply with legal obligations and resolve disputes</li>
            </ul>
            <p className='pt-5'>Usage Data: We use usage data to analyze trends, administer our website, and gather demographic information to improve our services and enhance the user experience. This data is aggregated and does not personally identify you.</p>
            
        </div>
    );
};

export default Use_of_information;