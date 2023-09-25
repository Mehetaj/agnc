"use client"
import React, { useState } from 'react';
import Component from "@/app/Shared/Component/Component";
import Banner from "@/app/Shared/Banner/Banner";
import Recent_Post from "@/app/Components/Blog/Recent_Post/Recent_Post";
import Tags from "@/app/Components/Blog/Tags/Tags";
import { Project } from '../../types/types';
import {blogdata} from "../../FakeData/blogdata"
import Single_Post from '@/app/Components/Blog/Single_Post/Single_post';

const page = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts: Project[] = selectedCategory
    ? blogdata.filter((post) => post.category === selectedCategory)
    : blogdata;

  const categories: string[] = Array.from(new Set(blogdata.map((post) => post.category)));
   
  return (
    <div className=' bg-[#F7FAFF]'>
        <Banner title="Blog" />
        <Component>
            <div className=" md:flex md:gap-20 mt-5 mx-auto px-10 ">
                <div className=" w-1/4 h-[calc(100vh-1.75rem)] sticky top-6 overflow-hidden md:block hidden ">  
                    <div className=" h-[1000px] ">
                        {/* category */}
                        <div className=" mb-10 bg-[#EBF2FF] p-5 rounded-lg">
                            <h1 className=" text-[#202C4] text-[20px] font-semibold mb-2">Categories</h1>
                            <ul>
                                <li>
                                    <button onClick={() => setSelectedCategory(null)}>All</button>
                                </li>
                                {categories.map((category) => (
                                    <li key={category}>
                                    <button onClick={() => setSelectedCategory(category)}>{category}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Recent_Post/>
                        <Tags/>
                    </div>
                </div>
                    {/* blog */}
                <div className="md:w-3/4 grid grid-cols-2 gap-5">
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
