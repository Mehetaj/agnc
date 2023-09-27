"use client"
import React, { useState } from 'react';
import Component from "@/app/Shared/Component/Component";
import Banner from "@/app/Shared/Banner/Banner";
import Recent_Post from "@/app/Components/Blog/Recent_Post/Recent_Post";
import { Blogs } from '../../types/types';
import { blogdata } from "../../FakeData/blogdata"
import Single_Post from '@/app/Components/Blog/Single_Post/Single_post';

const page = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredPosts: Blogs[] = blogdata.filter((post) => {
        const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
        const matchesTag = selectedTag ? post.tag.includes(selectedTag) : true;
        const matchesStatus = post.status === "Approved";
        return matchesCategory && matchesTag && matchesStatus;
      });
 
    const categories: string[] = Array.from(new Set(blogdata.map((post) => post.category)));
    const tags: string[] = Array.from(new Set(blogdata.flatMap((post) => post.tag)));

return (
    <div className=' bg-[#F7FAFF]'>

        <Banner title="Blog" />

        <Component>
            <div className=" md:flex md:gap-20 mt-5 mx-auto ">
                <div className=" w-1/4 h-min sticky top-6 md:block hidden ">  
                    <div className=" ">
                        {/* category */}
                        <div className=" mb-10 bg-[#EBF2FF] p-5 rounded-lg">
                            <h1 className=" text-[#202C4] text-[20px] font-semibold mb-2">Categories</h1>
                            <ul>
                                <li>
                                    <button onClick={() => setSelectedCategory(null)}>All</button>
                                </li>
                                {categories.slice(0,5).map((category) => (
                                    <li key={category}>
                                        <button onClick={() => setSelectedCategory(category)}>{category}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                            {/* Tags */}
                        <div className=' mb-10 bg-[#EBF2FF] p-5 rounded-lg'>
                            <h2 className='text-[#202C4] text-[20px] font-semibold mb-2'>Tags</h2>
                            <ul className=' grid grid-cols-2 gap-3'>
                                {/* <li>
                                    <button onClick={() => setSelectedTag(null)}>All</button>
                                </li> */}
                                {tags.map((tag) => (
                                <li key={tag}>
                                    <button className=' text-[#202C40] font-normal text-base border-[#226CE5] border-[1px] p-1 rounded-md ' onClick={() => setSelectedTag(tag)}>{tag}</button>
                                </li>
                                ))}
                            </ul>
                        </div>
                        <Recent_Post/>
                    </div>
                </div>

                    {/* blog */}
                <div className="md:w-3/4 grid md:grid-cols-2 grid-cols-1 gap-5">
                        {filteredPosts.map((post) => (
                            <Single_Post key={post.id} post={post} />
                        ))}
                </div>
            </div>
        </Component>
    </div>
  );
};

export default page;
