/* eslint-disable @next/next/no-img-element */
"use client";
import { jobs_data } from "@/app/FakeData/Jobs";
import Link from "next/link";
import React, { useState } from "react";
import Jobs_modal from "../Jobs_modal/Jobs_modal";

const Jobs = () => {
  const data = jobs_data;

  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-8 mt-10 mb-36 md:grid-cols-2">
      {data.map((d, i) => {
        return (
          <div
            key={i}
            className="w-full lg:w-[584px] rounded-lg border p-10  bg-[#EBF2FF]"
          >
            <h1 className="text-[32px] font-bold">{d.name}</h1>
            <p className="my-4 text-[20px]">{d.type}</p>
            <p className="text-[20px] my-4">Deadline: {d.deadline}</p>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#226CE5] px-6 text-white rounded-lg py-3"
            >
              <Jobs_modal isOpen={isOpen} setIsOpen={setIsOpen}/>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
