import Image from "next/image"

const Single_Post=({post}: any)=>{
    return(
        <div className="card w-[400px] bg-[#EBF2FF] h-[580px]">
                <figure className="px-5 pt-5">
                    <img src={post.image} alt="Shoes" className="rounded-xl h-[280px] w-[380px] "/>
                </figure>
                <div className="card-body -mt-4 text-left">
                    <p className=" text-[#2D3D59] text-[18px] font-normal">{post.publiched}</p>
                    <h2 className=" text-xl font-semibold">{post.title}</h2>
                    <p>{post.content.slice(0,120)}</p>
                    <button className=" text-left text-[#226CE5]">Read more &rarr;</button>
                    
                </div>
        </div>
    )
}

export default Single_Post;
