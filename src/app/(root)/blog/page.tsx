import React from "react";
import Component from "@/app/Shared/Component/Component";
import Banner from "@/app/Shared/Banner/Banner";
import Recent_Post from "@/app/Components/Blog/Recent_Post/Recent_Post";
import Tags from "@/app/Components/Blog/Tags/Tags";
import Blogs from "@/app/Components/Blog/Blogs/Blogs";
import {blogdata} from "../../FakeData/blogdata"

const page = () => {
    const categorizedData: any = {
        "View all": [...blogdata], // Create a "View all" category with a copy of all data
    };

    blogdata.forEach((item) => {
        const { category, ...rest } = item;
        if (!categorizedData[category]) {
            categorizedData[category] = [];
        }
        categorizedData[category].push(rest);
    });
    let categories = categorizedData;
    console.log(categories)

  return (
    <div>
        <Banner title="Blog" />
        <Component>
     
        
        <div className=" md:flex md:gap-20 mt-5 mx-auto px-10 ">
            <div className=" w-1/4 h-[calc(100vh-1.75rem)] sticky top-6 overflow-hidden md:block hidden ">  
                <div className=" h-[1000px] ">
                    {/* category */}
                    <div className=" mb-10 bg-[#EBF2FF] p-5 rounded-lg">
                        <h1 className=" text-[#202C4] text-[20px] font-semibold mb-2">Categories</h1>
                        {Object.keys(categories).map((category, idx) => (
                            <div key={idx}><button>{category}</button> <br /> </div>   
                        ))}
                    </div>
                    <Recent_Post/>
                    <Tags/>
                </div>
            </div>
                {/* blog */}
            <div className="md:w-3/4 ">
                {Object.values(categories).map((data: any, idx) => (
                    <Blogs key={idx} data={data}/>
                ))}
            </div>
        </div>
        </Component>
    </div>
  );
};

export default page;
