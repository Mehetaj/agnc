/* eslint-disable @next/next/no-img-element */
import arrow from "../../../../asset/service_img/right_arroe.png";

type Items = {
  data: {
    img: string;
    title: string;
    description: string;
    details_arrow: string;
  }[];
};

const Service = (props: Items) => {
  const data = props.data;
  return (
    <div className="grid mt-12 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((d, i) => {
        return (
          <div
            key={i}
            className="w-full  lg:w-[379px] rounded-[8px] border border-grey-blue lg:h-[348px] bg-[#EBF2FF] dark:bg-[#0A1A33] dark:border-[#3A4559] dark:text-white p-[32px]"
          >
            <img src={d.img} alt="" />
            <h1 className="text-[24px] font-bold my-6">{d.title}</h1>
            <p className="text-[18px] text-[#2D3D59] dark:text-white">{d.description}</p>

            <button className="mt-6">
              <img src={d.details_arrow} alt="" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
