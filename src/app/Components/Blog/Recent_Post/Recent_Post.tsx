import { Blogs } from '../../../types/types';
import {blogdata} from "../../../FakeData/blogdata"


const Recent_Post =()=>{

    return(
        <div className=" mb-10 bg-[#EBF2FF] p-5 rounded-lg">
            <h1 className=" text-[#202C4] text-[20px] font-semibold mb-2">Recent Post</h1>
            {
                blogdata.slice(5,10).map(post=>(
                    <div key={post.id} className='mt-3 flex justify-center items-center bg-[#D6E6FF] rounded-md p-2 h-[110px] '>
                        <div className=' '>
                            <img className='w-[100px] h-[100px] rounded-md ' src={post.image} alt="" />
                        </div>

                        <div className=' ml-2'>
                            <h6 className=' text-[#2D3D59] font-normal text-xs'>{post.category}-{post.publiched}</h6>
                            <h1 className=' text-[#202C40] font-semibold text-base'>{post.title}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Recent_Post;