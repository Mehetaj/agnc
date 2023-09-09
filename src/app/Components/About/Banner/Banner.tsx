"use client"
import React from 'react';

import { useTheme } from 'next-themes';

console.log(useTheme)

const Banner = () => {
    return (
        <div id='bg-image' className='bg-img'>
            <h1 className=''>About Us</h1>
        </div>
    );
};

export default Banner;