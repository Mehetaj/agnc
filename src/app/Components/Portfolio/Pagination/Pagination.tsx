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
            
            <button className="p-btn " disabled={currentPage===1} onClick={()=> onPageChange(currentPage-1)} ><Image src={left} alt="arrow" /> </button>
            
            {
                pages.map((page) =>(
                        <button onClick={()=> onPageChange(page)}  className={page === currentPage ? " p-btn p-btn-active": " p-btn " } key={page}>{page}</button>
                ))
            }

            <button className="p-btn" onClick={()=> onPageChange(currentPage+1)} disabled={currentPage===pages.length} ><Image src={right} alt="arrow" /> </button>
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
  
  // Usage examples:
  const numbers1 = range(0, 5); // [0, 1, 2, 3, 4]
  const numbers2 = range(1, 6); // [1, 2, 3, 4, 5]
  const numbers3 = range(0, 10, 2); // [0, 2, 4, 6, 8]
  const numbers4 = range(10, 0, -1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  