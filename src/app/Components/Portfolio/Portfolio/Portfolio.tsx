import React from 'react'
import './Portfolio.css'
import { portfolio_data } from '@/app/FakeData/portfolio'
import SingleItem from './SingleItem'

type Props = {}

const Portfolio = (props: Props) => {
    const data = portfolio_data;
    return (
        <>
            {/* tab section of portfolio */}
            <div className=' w-3/4	'>
                <div className="flex justify-around item-center flex-1  tabContaner">
                    <button className='px-12 font-bold'>View All</button>
                    <button className='px-12'>Graphics</button>
                    <button className='px-12'>UI/UX</button>
                    <button className='px-12'>Wordpress</button>
                    <button className='px-12'>Web Development</button>
                </div>
            </div>

            {/* portfolio section */}
            <div className='grid grid-cols-6 gap-4 w-full'>
                
            </div>



            {/*--------  pagination section here ---------------------to do */}
            <div className="w-full">

            </div>



            {/* contact us banner here ---------------done
            <div className="w-full">
                <Contact />
            </div> */}

        </>
    )
}

export default Portfolio