// tsx page component

import PortfolioBanner from '@/app/Components/Portfolio/PortfolioBanner/PortfolioBanner';
import React from 'react'
import Portfolio from '@/app/Components/Portfolio/Portfolio/Portfolio';



const page = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <PortfolioBanner />
            <Portfolio />
        </div>
    )
}

export default page;