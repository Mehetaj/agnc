const BlogBanner = ({ title }: any) => {
  return (
      <div className="flex items-center justify-center clip-path w-full md:h-[500px] h-[260px] bg-[#EBF2FF] dark:bg-[#10223F] dark:text-white md:text-[60px] text-[20px] font-bold px-20 text-center ">
        <h1 className="">{title}</h1>
      </div>
  );
};

export default BlogBanner;
