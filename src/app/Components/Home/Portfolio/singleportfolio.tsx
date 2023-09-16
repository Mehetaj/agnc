/* eslint-disable @next/next/no-img-element */
type Items = {
    data: any;
    id: number;
    img: string;
    category: string;
    name: string;

};

const Single_portfolio = (Props: Items) => {
  const data = Props.data;
  return (
    <>
      <div className="">
        <img src={data.img} alt="" />
        <p className="text-[18px] my-4">{data.category}</p>
        <h1 className="text-[24px] font-bold">{data.name}</h1>
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
