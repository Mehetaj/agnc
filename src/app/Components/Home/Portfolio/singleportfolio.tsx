/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate'
// type Items = {
//   data: {
//     img: string;
//     category: string;
//     name: string;
//   }[];
// };

const Single_portfolio = (Props: any) => {
  const data = Props.data;
  console.log(data)
  // const [currentItems, setCurrentItems] = useState<any>([]);
  // const [pageCount, setPageCount] = useState(0);
  // // 
  // // here use item offsets ; we could also page offsets
  // // following the api or data working with

  // const [itemOffSet, setItemOffSet] = useState(0)
  // const itemsPerPage = 3

  // useEffect(() => {
  //   // fetch items from other resourses
  //   const endOffSet = itemOffSet + itemsPerPage;
  //   setCurrentItems(data.slice(itemOffSet, endOffSet));
  //   setPageCount(Math.ceil(data.length / itemsPerPage))
  // }, [itemOffSet, itemsPerPage, data]);

  // const handlePageClick = (e: any) => {
  //   const newOffSet = (e.selected * itemsPerPage) % data.length
  //   setItemOffSet(newOffSet)
  // }



  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {data.slice(0,3).map((d: any, i: number) => 
            <div
              key={i}
              className=""
            >
              <img src={d.img} alt="" />
              <p className="text-[18px] my-4">{d.category}</p>
              <h1 className="text-[24px] font-bold">{d.name}</h1>
            </div>

        )}
      </div>
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        
        containerClassName="flex gap-2"
        pageLinkClassName="bg-gray-400 paginate"
        nextLinkClassName="page-num"
        previousLinkClassName="page-num"
        activeLinkClassName="active-page"
      /> */}
    </>
  )
};

export default Single_portfolio;