import Link from "next/link";
import { useRouter } from "next/navigation";

const Single_Post=({post}: any)=>{
    const router =useRouter();
    const handleClick=(id:number)=>{
    router.push(`/blog/${id}`)
    }
    return(
        <div className="card bg-[#EBF2FF] dark:bg-[#0A1A33] h-[600px] lg:p-5 mx-2 md:mx-0">
                <figure className="px-5 pt-5">
                    <img src={post.image} alt={post.title} className="rounded-xl h-[270px] w-full md:w-[340px] "/>
                </figure>
                <div className="card-body -mt-4 text-left ">
                    <p className=" text-[#2D3D59] dark:text-white text-[18px] font-normal">{post.publiched}</p>
                    <h2 className=" text-xl font-semibold">{post.title}</h2>
                    <p>{post.content.slice(0,120)}</p>
                    <button className=" text-left text-[#226CE5]">
                        <Link href={`/blog/${post.id}`}>
                        Read more &rarr;
                        </Link>
                    </button>
                    
                </div>
        </div>
    )
}

export default Single_Post;
