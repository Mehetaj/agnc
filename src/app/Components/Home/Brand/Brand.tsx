import React from 'react'

export default function Brand() {
    return (
        <div>
            <div className='flex flex-col'>

                <div className='flex flex-col'>
                    <p className='text-[18px] text-blue-400 mb-0'>
                        BRANDS
                    </p>
                    <h1 className='text-[48px] font-bold'>
                        We’ve collaborated with
                    </h1>
                </div>
                {/* create div with four column and three row as card */}
                <div className='grid grid-cols-4 grid-rows-2 gap-1'>
                    <div className='col-span-1 row-span-2'>
                        <button className='w-full h-ful font-bold'>
                            click me
                        </button>
                    </div>
                    <div className='col-span- row-span-2'>
                        <button className='w-full h-ful font-bold'>
                            click me
                        </button>
                    </div>
                    <div className='col-span-1 row-span-2'>
                        <button className='w-full h-ful font-bold'>
                            click me
                        </button>
                    </div>
                    <div className='col-span-1 row-span-2'>
                        <button className='w-full h-ful font-bold'>
                            click me
                        </button>
                    </div>
                    <div className='col-span-1 row-span-2'>
                        <button className='w-full h-ful font-bold'>
                            click me
                        </button>
                    </div>
                    <div className='col-span-1 row-span-2'>
                        <button className='w-full h-ful font-bold'>
                            click me
                        </button>
                    </div>
                    <div className='col-span-1 row-span-2'>
                        <button className='w-full h-ful font-bold'>
                            click me
                        </button>
                    </div>
                    <div className='col-span-1 row-span-2'>
                        <button className='w-full h-ful font-bold'>
                            click me
                        </button>
                    </div>
                </div>
            </div>

        </div>)
}