"use client";
import Image from "next/image";
import { blogdata } from "../../../FakeData/blogdata";
import { useRouter } from "next/navigation";

const Recent_Post = () => {
  const router =useRouter();
    const handleClick=(id:number)=>{
    router.push(`/blog/${id}`)
    }
  return (
    <div className=" mb-5 bg-[#EBF2FF] dark:bg-[#0A1A33] p-5 rounded-lg ">
      <h1 className=" text-[#202C4] text-[20px] font-semibold mb-2">
        Recent Post
      </h1>
      {blogdata.slice(5, 10).map((post) => (
        <div
          key={post.id}
          className="mt-3 flex items-center bg-[#D6E6FF] dark:bg-[#0A1A33] dark:shadow-lg rounded-md p-2 h-[110px] cursor-pointer"
          onClick={()=>handleClick(post.id)}
        >
          <div className="w-[100px] h-[100px] sm:block md:hidden lg:block">
            <img
              className="w-[100px] h-[80px] rounded-md "
              src={post.image}
              alt={post.title}
            />
          </div>

          <div className="sm:ml-2 md:ml-0 lg:ml-2">
            <h6 className=" text-[#2D3D59] dark:text-white font-normal text-xs">
              {/* {post.category}- */} {post.publiched}
            </h6>
            <h1 className=" text-[#202C40] dark:text-white font-semibold text-sm lg:text-sm">
              {post.title}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recent_Post;
