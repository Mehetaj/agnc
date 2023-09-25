import Image from "next/image";
import img from "../../../../asset/blog/blog-post.png"
import Single_Post from "../Single_Post/Single_post";

const Blogs =({data}:any)=>{
    return(
        <div className=" grid grid-cols-2 gap-10"> 
            {data.map((post : any, i : number) => (
                <Single_Post key={i} post={post} />
            ) )}
        </div>
    )
}

export default Blogs;