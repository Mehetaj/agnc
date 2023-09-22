import Image from 'next/image';
import React from 'react'
import { paginate } from '../Pagination/paginate';
// type Items = {
//     data: {
//         img: string;
//         category: string;
//         name: string;
//     }[];
// };


const SingleItem = ({data, currentPage, pageSize}:any) => {

    const paginatePosts = paginate(data, currentPage, pageSize);

    return (
        <>
            {
                paginatePosts.map((data : any, i : number) => {
                    return (
                        <div className=' portfolio-item'
                        >
                            {/* ------------ Banner image */}
                            <img className='' src={data.img} alt='' />
                            {/* ----------- portfolio description */}
                            <div className='py-3'>
                                <p className='font-light'>{data.category}</p>
                                <p className='font-bold text-2xl'>{data.title}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default SingleItem;