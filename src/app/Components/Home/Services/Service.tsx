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
    <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((d, i) => {
        return (
          <div
            key={i}
            className="w-[379px] rounded-[8px] border border-grey-blue h-[348px] bg-[#EBF2FF] p-[32px]"
          >
            <img src={d.img} alt="" />
            <h1 className="text-[24px] font-bold my-6">{d.title}</h1>
            <p className="text-[18px] text-[#2D3D59]">{d.description}</p>

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
