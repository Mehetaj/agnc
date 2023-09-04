/* eslint-disable @next/next/no-img-element */
"use client";


type Items = {
  data: {
    reviewer_name: string;
    reviewer_type: string;
    reviewer_img: string;
    ratings: number;
    review: string;
  }[];
};

const Review = (Props: Items) => {
  const data = Props.data;
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((d, i) => {
        return (
          <div key={i} className="w-[379px] h-[256px]">
            <div className="bg-[#EBF2FF] p-8 rounded-lg">
              <p className="text-[20px]">{d.review}</p>
              <div className="divider"></div>

              {/* <ReactStars count={5} value={5} size={24} color2={"#226CE5"} /> */}
              {/* <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  checked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
