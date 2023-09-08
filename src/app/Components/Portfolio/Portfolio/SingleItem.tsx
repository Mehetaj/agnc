import Image from 'next/image';
import React from 'react'
type Items = {
    data: {
        img: string;
        category: string;
        name: string;
    }[];
};


const SingleItem = (props: Items) => {
    const datas = props.data;
    return (
        <>
            {
                datas.map((data, i) => {
                    return (
                        <div className='col-span-2 p-4 portfolio-item' key={i}
                        >
                            {/* ------------ Banner image */}
                            <Image className='' src={data.img} alt='' />
                            {/* ----------- portfolio description */}
                            <div className='py-3'>
                                <p className='font-light'>{data.category}</p>
                                <p className='font-bold text-2xl'>{data.name}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default SingleItem;