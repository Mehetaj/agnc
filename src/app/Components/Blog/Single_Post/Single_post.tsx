import Image from "next/image"

const Single_Post=({post}: any)=>{
    console.log(post)
    return(
        <div className="card w-[400px] bg-[#EBF2FF]">

                <figure className="px-5 pt-5">
                    <img src={post.image} alt="Shoes" className="rounded-xl"/>
                    {/* <img  /> */}
                </figure>
                <div className="card-body -mt-4 text-left">
                    <p className=" text-[#2D3D59] text-[18px] font-normal">01/02/2023</p>
                    <h2 className=" text-xl font-semibold">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <button className=" text-left text-[#226CE5]">Read more &rarr;</button>
                    
                </div>
        </div>
    )
}

export default Single_Post;
