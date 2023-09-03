// tsx page component

import PortfolioBanner from '@/app/Components/Portfolio/PortfolioBanner/PortfolioBanner';
import React from 'react'
import Portfolio from '@/app/Components/Portfolio/Portfolio/Portfolio';
import ChooseUs from '@/app/Components/About/ChooseUs/ChooseUs';
import Contact from '@/app/Components/Home/Contact/Contact';



const page = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <PortfolioBanner />
            <Portfolio />
            <Contact />
            <ChooseUs />
        </div>
    )
}

export default page;