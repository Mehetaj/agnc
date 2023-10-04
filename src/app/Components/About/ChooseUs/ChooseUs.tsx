import Title from "@/app/Shared/Title/Title";
import background from "../../../../asset/Vector.png";
import Image from "next/image";
import icon1 from "../../../../asset/icon/Component 1.png";
import icon2 from "../../../../asset/icon/Component 2.png";
import icon3 from "../../../../asset/icon/Component 3.png";
import Component from "@/app/Shared/Component/Component";

interface data_type {
    img: string;
    title: string;
    description: string;
}

const ChooseUs = () => {

    const choose_us_data = [
        {
            img: "https://i.ibb.co/Nx6cNJY/Component-1.png",
            title: "Fast Development",
            description: "World-class user experiences with pixel perfect user interface designs for your digital products."
        },
        {
            img: "https://i.ibb.co/6g3Z11d/Component-2.png",
            title: "Full Flaxibility",
            description: "World-class user experiences with pixel perfect user interface designs for your digital products."
        },
        {
            img: "https://i.ibb.co/R2Zn8RD/Component-3.png",
            title: "Modern Design",
            description: "World-class user experiences with pixel perfect user interface designs for your digital products."
        },
    ]

    return (
        <div className=" mx-auto dark:bg-[#030C1A] my-10 dark:py-16">
            <Component >
                <div>
                    <div >
                        <div>
                            <Title >WHY CHOOSE US</Title>
                            <h1 className="text-[48px] font-bold">
                                we provide best quality services
                            </h1>
                        </div>
                        {/* create div with four column and three row as card */}
                        {/* <div style={{ marginTop: '30px' }} className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                            <div id="chooseUs1" className='flex bg-[#EBF2FF] dark:bg-[#10223F]  lg:p-[40px] rounded-[5px] flex-col items-start'>

                                <Image src={icon1} alt='' />
                                <h1 className='text-[26px] font-bold mt-3'>Fast Development</h1>
                                <p
                                    className="mt-4"
                                >
                                    World-class user experiences with pixel perfect user interface designs for your digital products.
                                </p>
                            </div>
                            <div id="chooseUs2" className='flex bg-[#EBF2FF] dark:bg-[#10223F]  lg:p-[40px] rounded-[5px] flex-col items-start'>

                                <Image src={icon2} alt='' />
                                <h1 className='text-[26px] font-bold mt-3'>Full Flaxibility</h1>
                                <p
                                    className="mt-4"
                                >
                                    World-class user experiences with pixel perfect user interface designs for your digital products.
                                </p>
                            </div>
                            <div id="chooseUs3" className='flex bg-[#EBF2FF] dark:bg-[#10223F]  lg:p-[40px] rounded-[5px] flex-col items-start'>

                                <Image src={icon3} alt='' />
                                <h1 className='text-[26px] font-bold mt-3'>Modern Design</h1>
                                <p
                                    className="mt-4"
                                >
                                    World-class user experiences with pixel perfect user interface designs for your digital products.
                                </p>
                            </div>
                        </div> */}
                        <div className="">
                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-8 lg:grid-cols-3">
                                {
                                    choose_us_data.map((d: data_type, i: number) => (
                                        <div className="w-full mt-4 rounded-md lg:mt-0 lg:w-[300px] xl:w-[379px] bg-[#EBF2FF] dark:bg-[#0A1A33] p-8 " key={i}>
                                            <img src={d.img} alt=""/>
                                            <h1 className="my-4 text-[24px] font-bold">{d.title}</h1>
                                            <p>{d.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Component>
        </div >
    );
};


export default ChooseUs;