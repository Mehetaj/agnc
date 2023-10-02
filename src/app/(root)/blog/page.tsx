"use client";
import { useState } from "react";
import Component from "@/app/Shared/Component/Component";
import Banner from "@/app/Shared/Banner/Banner";
import Recent_Post from "@/app/Components/Blog/Recent_Post/Recent_Post";
import { Blogs } from "../../types/types";
import { blogdata } from "../../FakeData/blogdata";
import Single_Post from "@/app/Components/Blog/Single_Post/Single_post";
import Pagination from "@/app/Components/Portfolio/Pagination/Pagination";
import { paginate } from "@/app/Components/Portfolio/Pagination/paginate";
import Contact from "@/app/Components/Home/Contact/Contact";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts: Blogs[] = blogdata.filter((post) => {
    const matchesCategory = selectedCategory
      ? post.category === selectedCategory
      : true;
    const matchesTag = selectedTag ? post.tag.includes(selectedTag) : true;
    const matchesStatus = post.status === "Approved";
    return matchesCategory && matchesTag && matchesStatus;
  });

  const categories: string[] = Array.from(
    new Set(blogdata.map((post) => post.category))
  );
  const tags: string[] = Array.from(
    new Set(blogdata.flatMap((post) => post.tag))
  );

  const setCategory = (event: any) => {
    if (event.target.value === "All"){
      setSelectedCategory(null);
    }else{
      setSelectedCategory(event.target.value);
    } 
  }

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const paginatePosts = paginate(filteredPosts, currentPage, pageSize);
  const handlePageChange = (page: any) => {
    setCurrentPage(page)
  }


  return (
    

    <div className="pb-12 bg-[#F7FAFF] dark:bg-[#061126] dark:text-white">
      <Banner title="Blog" />
      <Component>
        <div className=" md:flex md:gap-5 mt-5 mx-auto ">
          {/* for big screen  */}
          {/* left side */}
          <div className=" w-1/4 h-min sticky top-6 md:block hidden ">
            <div className=" ">
              {/* category */}
              <div className=" mb-5 bg-[#EBF2FF] dark:bg-[#0A1A33] lg:p-5 rounded-lg">
                <h1 className=" text-[#202C4] text-[20px] font-semibold mb-2">
                  Categories
                </h1>
                <ul>
                  <li>
                    <button onClick={() => setSelectedCategory(null)}>
                      All
                    </button>
                  </li>
                  {categories.slice(0, 5).map((category) => (
                    <li className="mt-2" key={category}>
                      <button onClick={() => setSelectedCategory(category)}>
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {/* // recent post */}
              <Recent_Post />
              {/* Tags */}
              <div className="  bg-[#EBF2FF] dark:bg-[#0A1A33] lg:p-5 rounded-lg">
                <h2 className="text-[#202C4] text-[20px] font-semibold mb-2">
                  Tags
                </h2>
                <ul className=" grid grid-cols-2 gap-3">
                  {/* <li>
                                    <button onClick={() => setSelectedTag(null)}>All</button>
                                </li> */}
                  {tags.map((tag) => (
                    <li key={tag}>
                      <button
                        className=" text-[#202C40] dark:text-white font-normal text-base border-[#226CE5] border-[1px] p-1 rounded-md "
                        onClick={() => setSelectedTag(tag)}
                      >
                        {tag}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* mobile device */}
          <div >
          <div className=" mb-5 text-center dark:bg-[#0A1A33] lg:p-5 rounded-lg md:hidden block">
                <select className="select select-accent w-full max-w-xs" onChange={setCategory}>
                  <option value="All">
                    Select Categories 
                  </option>
                  {categories.slice(0, 5).map((category) => (
                    <option className="mt-2" key={category}>
                        {category}
                    </option>
                  ))}
                </select>
              </div>
          </div>
          {/* blog */}
          <div className="md:w-3/4 grid md:grid-cols-2 grid-cols-1 gap-5">
            {paginatePosts.map((post) => (
              <Single_Post key={post.id} post={post}/>
            ))}
          </div>
          
        </div>
        <div className="flex justify-center">
                <Pagination item={filteredPosts.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange} />
        </div>
      </Component>
      <Contact/>
    </div>
  );
};

export default BlogPage;
