/* eslint-disable @next/next/no-img-element */
"use client";
import { jobs_data } from "@/app/FakeData/Jobs";
import React, { useState } from "react";
import Jobs_modal from "../Jobs_modal/Jobs_modal";

const Jobs = () => {
  const data = jobs_data;
  const [item, setItem] = useState({});

  const handleDynamicModal = (item: string[] | string | object) => {
    // console.log(item);
    setItem(item);
  };

  return (
    <div className="grid grid-cols-1 gap-8 mt-10 mb-36 md:grid-cols-2">
      {data.map((d, i) => {
        return (
          <div
            key={i}
            className="w-full lg:w-[584px] rounded-lg border p-10  bg-[#EBF2FF]"
          >
            {/* short describe of jobs */}
            <h1 className="text-[32px] font-bold">{d.name}</h1>
            <p className="my-4 text-[20px]">{d.type}</p>
            <p className="text-[20px] my-4">Deadline: {d.deadline}</p>
            {/* Details Modal for every job */}
            <div onClick={() => handleDynamicModal(d)}>
              <Jobs_modal item={item}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
