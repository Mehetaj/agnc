import Image from 'next/image';
import hello_text from '../../../../asset/hello.png'


const Contact = () => {
    return (
        <div className="bg-[#226CE5] my-16 h-[340px] px-10 items-center text-white flex justify-between">
            <div>
                    <Image className='mb-8' src={hello_text} alt=''/>
                
                <h1 className="text-[48px] font-bold ">
                    Have a project to work <br /> with? Let’s talk!
                </h1>
            </div>

            <div>
                <p className="text-[20px] my-6">
                    We’re a team of creatives who are excited about unique <br /> ideas and help fin-tech companies to create amazing <br /> identity by crafting top-notch UI/UX.
                </p>

                <button className="bg-white px-6 py-3 font-bold text-blue-500 text-black border border-blue-600 rounded-md">Contact us</button>
            </div>
        </div>
    );
};

export default Contact;