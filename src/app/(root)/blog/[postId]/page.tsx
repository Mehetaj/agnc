"use client"
import BlogBanner from "@/app/Components/Blog/BlogBanner/BlogBanner";
import Recent_Post from "@/app/Components/Blog/Recent_Post/Recent_Post";
import Component from "@/app/Shared/Component/Component";
import Image from "next/image";
import icons1 from "../../../../asset/social/Icon 1.png";
import icons2 from "../../../../asset/social/Icon 2.png";
import icons3 from "../../../../asset/social/Icon 3.png";
import icons4 from "../../../../asset/social/Icon 4.png";
import Contact from "@/app/Components/Home/Contact/Contact";
import { usePathname } from "next/navigation";
import { BlogData } from "@/app/FakeData/blog";



const SingleBlogPost = () => {

    const path = usePathname();
    const id = path.split("/")[2]
    console.log(id);
    const blogData = BlogData;
    const singleData: any = blogData.find((item: object | string | string[] | any) => item?.id == id);
    console.log(singleData);

    return (
        <div className="">
            <BlogBanner title={singleData.title} />
            <Component>
                <div className="md:flex mt-10 w-full">
                    <div className=" md:w-3/4 ">
                            <div key={singleData.id} className="lg:px-20 px-4">
                                <img src={singleData.image} alt={`${singleData.title} img`} className=" md:h-[480px] h-[260px] w-full border-[#0A1A33] border-8" />
                                <div className=" flex gap-2 font-normal text-base text-[#202C40] pt-3 pb-3">
                                    <h6 className=" border-[#226CE5] border-[1px] p-1 rounded">{singleData.category}</h6>
                                    <h6 className="p-1">{singleData.publiched}</h6>
                                </div>
                                <h1 className="text-[#202C40] font-bold md:text-[32px] text-[24px]">{singleData.title}</h1>
                                <p>{singleData.content}</p>

                                <div className=" w-full h-[2px] bg-[#397BE5] mt-5 rounded" />

                                <div className="md:flex justify-between mt-5 ">
                                    <div className=" flex gap-2 items-center justify-center font-normal text-base text-[#202C40] mb-2">
                                        {
                                            singleData.tag.map((tag: any) => (
                                                <h6 key={tag} className=" border-[#226CE5] border-[1px] px-2 rounded">{tag}</h6>
                                            ))
                                        }
                                    </div>
                                    <div className="flex gap-4 justify-center">
                                        <Image src={icons1} alt="fb icons" />
                                        <Image src={icons2} alt="fb icons" />
                                        <Image src={icons3} alt="fb icons" />
                                        <Image src={icons4} alt="fb icons" />
                                    </div>

                                </div>

                                <div className=" w-full h-[2px] bg-[#397BE5] mt-5 rounded" />
                            </div>
                    </div>
                    <div className=" md:w-1/4 mt-10 md:mt-0">
                        <Recent_Post />
                    </div>
                </div>
            </Component>
            <Contact />
        </div>
    )
}

export default SingleBlogPost;