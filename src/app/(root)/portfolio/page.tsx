// tsx page component

import PortfolioBanner from '@/app/Components/Portfolio/PortfolioBanner/PortfolioBanner';
import Tab from '@/app/Components/Portfolio/Tab/Tab';
import React from 'react'



const page = () => {
    return (
        <div >
            <PortfolioBanner />
            <Tab />
        </div>
    )
}

export default page;