import Banner from "@/app/Shared/Banner/Banner";
import { blogdata } from "../../../FakeData/blogdata";
import { Blogs } from "../../../types/types";
import Recent_Post from "@/app/Components/Blog/Recent_Post/Recent_Post";
import Component from "@/app/Shared/Component/Component";
import Image from "next/image";
import icons1 from "../../../../asset/social/Icon 1.png";
import icons2 from "../../../../asset/social/Icon 2.png";
import icons3 from "../../../../asset/social/Icon 3.png";
import icons4 from "../../../../asset/social/Icon 4.png";
import Contact from "@/app/Components/Home/Contact/Contact";



const SingleBlogPost=({params}:any)=>{
    const filteredPost: Blogs[] = blogdata.filter((post) => {
        const matchesId =  post.id.toString() ===  params.postId.toString();
        return matchesId;
      });

    return(
        <div className="">
            <Banner title={filteredPost[0].title}/>
            <Component>
                <div className="flex mt-10 w-full">
                    <div className=" w-3/4 ">
                        {filteredPost.map((post) => (
                        <div key={post.id} className="px-20">
                            <img src={post.image} alt={`${post.title} img`} className=" h-[400px] w-full border-[#0A1A33] border-8" />  
                            <div className=" flex gap-2 font-normal text-base text-[#202C40] pt-3 pb-3">
                                <h6 className=" border-[#226CE5] border-[1px] p-1 rounded">{post.category}</h6>
                                <h6 className="p-1">{post.publiched}</h6>
                            </div>
                            <h1 className="text-[#202C40] font-bold text-[32px]">{post.title}</h1>
                            <p>{post.content}</p>

                            <div className=" w-full h-[2px] bg-[#397BE5] mt-5 rounded"/>

                            <div className="flex justify-between mt-5">
                                <div className=" flex gap-2 items-center font-normal text-base text-[#202C40] ">
                                    {
                                        post.tag.map((tag:any) =>(
                                            <h6 key={tag} className=" border-[#226CE5] border-[1px] px-2 rounded">{tag}</h6>
                                        ))
                                    }
                                </div>
                                <div className="flex gap-4">
                                    <Image src={icons1} alt="fb icons" />
                                    <Image src={icons2} alt="fb icons" />
                                    <Image src={icons3} alt="fb icons" />
                                    <Image src={icons4} alt="fb icons" />
                                </div>

                            </div>

                            <div className=" w-full h-[2px] bg-[#397BE5] mt-5 rounded"/>
                        </div>
                        ))}
                    </div>
                    <div className=" w-1/4 ">
                        <Recent_Post/>
                    </div>
                </div>
            </Component>
            <Contact/>
        </div>
    )
}

export default SingleBlogPost;