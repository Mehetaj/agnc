import "./../Portfolio/Portfolio.css"
import left from "../../../../asset/chevron-left.svg"
import right from "../../../../asset/chevron-right.svg"
import Image from "next/image";

const Pagination =({item , pageSize, currentPage, onPageChange}:any)=>{

    const pageCount = item/ pageSize;

    if(Math.ceil(pageCount)===1) return null;

    const pages = range(1, pageCount + 1);
    
    return(
        <div className="join mt-5">
            
            <button className="p-btn " disabled={currentPage===1} onClick={()=> onPageChange(currentPage-1)} ><img src={left} alt="arrow" /> </button>
            
            {
                pages.map((page) =>(
                        <button onClick={()=> onPageChange(page)}  className={page === currentPage ? " p-btn p-btn-active": " p-btn " } key={page}>{page}</button>
                ))
            }

            <button className="p-btn" onClick={()=> onPageChange(currentPage+1)} disabled={currentPage===pages.length} ><img src={right} alt="arrow" /> </button>
        </div>
    )
}

export default Pagination;






function range(start: number, end: number, step: number = 1): number[] {
    if (step === 0) {
      throw new Error('Step cannot be zero.');
    }
  
    const result: number[] = [];
    if (start < end && step > 0) {
      for (let i = start; i < end; i += step) {
        result.push(i);
      }
    } else if (start > end && step < 0) {
      for (let i = start; i > end; i += step) {
        result.push(i);
      }
    }
  
    return result;
  }
  