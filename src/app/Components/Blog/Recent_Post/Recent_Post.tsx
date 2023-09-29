"use client";
import { blogdata } from "../../../FakeData/blogdata";

const Recent_Post = () => {
  return (
    <div className=" mb-10 bg-[#EBF2FF] dark:bg-[#0A1A33] p-5 rounded-lg">
      <h1 className=" text-[#202C4] text-[20px] font-semibold mb-2">
        Recent Post
      </h1>
      {blogdata.slice(5, 10).map((post) => (
        <div
          key={post.id}
          className="mt-3 flex justify-center items-center bg-[#D6E6FF] dark:bg-[#0A1A33] dark:shadow-lg rounded-md p-2 h-[110px] "
        >
          <div className=" ">
            <img
              className="w-[100px] h-[100px] rounded-md "
              src={post.image}
              alt=""
            />
          </div>

          <div className=" ml-2">
            <h6 className=" text-[#2D3D59] dark:text-white font-normal text-xs">
              {post.category}-{post.publiched}
            </h6>
            <h1 className=" text-[#202C40] dark:text-white font-semibold text-base">
              {post.title}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recent_Post;
