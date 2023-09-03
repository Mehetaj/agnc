import React from 'react'
import './Portfolio.css'
import cover1 from '../../../../asset/portfolio/cover1.png'
import cover2 from '../../../../asset/portfolio/cover2.png'
import cover3 from '../../../../asset/portfolio/cover3.png'
import Image from 'next/image'

type Props = {}

const Portfolio = (props: Props) => {
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
            <div className='grid grid-cols-6 gap-4'>
                <div className='col-span-2 p-5'>
                    {/* Banner image */}
                    <Image className='' src={cover1} alt='' />
                    <div>
                        <p className='font-light'>Landing Page</p>
                        <p className='font-bold text-2xl'>Dentistry Website</p>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Portfolio