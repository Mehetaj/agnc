import React from 'react'
import './Tab.css'

type Props = {}

const Tab = (props: Props) => {
    return (
        <div className=' mx-24	'>
            <div className="bg-purple tabContaner justify-center item-center">
                <ul className='flex justify-between items-center'>
                    <li>View All</li>
                    <li>Graphics</li>
                    <li>UI/UX</li>
                    <li>Web Development</li>
                </ul>
            </div>
        </div>
    )
}

export default Tab