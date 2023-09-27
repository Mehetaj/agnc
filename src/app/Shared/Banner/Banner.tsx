"use client"
import React from 'react';

// import { useTheme } from 'next-themes';

// console.log(useTheme)

const Banner = ({title}: any) => {
    return (
        <div id='bg-image' className='bg-img' >
            <h1 className=''>{title}</h1>
        </div>
    );
};

export default Banner;