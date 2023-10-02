import { useRouter } from "next/navigation";

const Single_Post=({post}: any)=>{
    const router =useRouter();
    const handleClick=(id:number)=>{
    router.push(`/blog/${id}`)
    }
    return(
        <div className="card md:w-[400px] bg-[#EBF2FF] dark:bg-[#0A1A33] h-[580px]">
                <figure className="px-5 pt-5">
                    <img src={post.image} alt="Shoes" className="rounded-xl h-[270px] w-[340px] "/>
                </figure>
                <div className="card-body -mt-4 text-left">
                    <p className=" text-[#2D3D59] dark:text-white text-[18px] font-normal">{post.publiched}</p>
                    <h2 className=" text-xl font-semibold">{post.title}</h2>
                    <p>{post.content.slice(0,120)}</p>
                    <button onClick={()=>handleClick(post.id)} className=" text-left text-[#226CE5]">Read more &rarr;</button>
                    
                </div>
        </div>
    )
}

export default Single_Post;
