import React from 'react'
import './Tab.css'

type Props = {}

const Portfolio = (props: Props) => {
    return (
        <>
            {/* tab section of portfolio */}
            <div className=' w-3/4	'>
                <div className="flex justify-around item-center flex-1 PortfolioContaner">
                    <button className='px-12 font-bold'>View All</button>
                    <button className='px-12'>Graphics</button>
                    <button className='px-12'>UI/UX</button>
                    <button className='px-12'>Wordpress</button>
                    <button className='px-12'>Web Development</button>
                </div>
            </div>

            {/* portfolio section */}
            <div className='flex flex-wrap justify-center items-center'>



            </div>

        </>
    )
}

export default Portfolio