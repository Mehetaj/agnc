const Banner = ({ title }: any) => {
  return (
      <div className="flex items-center justify-center clip-path w-full md:h-[500px] h-[250px] bg-[#EBF2FF] dark:bg-[#10223F] dark:text-white text-[60px] font-bold px-20 text-center ">
        <h1 className="">{title}</h1>
      </div>
  );
};

export default Banner;
