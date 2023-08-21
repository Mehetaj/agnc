import Image from 'next/image';
import icons1 from '../../../asset/social/Icon 1.png'
import icons2 from '../../../asset/social/Icon 2.png'
import icons3 from '../../../asset/social/Icon 3.png'
import icons4 from '../../../asset/social/Icon 4.png'
import top_arrow from '../../../asset/top_arrow.png'

const Footer = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10">
                <div>
                    <h1 className="text-[32px] font-bold mb-8">Bytezenith</h1>
                    <p className="text-[16px] mb-6 text-[#2D3D59]">World-class user experiences with <br /> pixel perfect user interface <br /> designs.</p>
                </div>
                <div>
                    <h1 className="text-[24px] font-bold mb-8">Lets Connect</h1>
                    <p className="text-[16px] mb-6 text-[#2D3D59]">House 336,Road 02, Block-D <br />
Bashundhara R/A, Dhaka 1229</p>
                    <p className="text-[16px] mb-6 text-[#2D3D59]">hello@Bytezenith.com</p>
                    <p className="text-[16px] mb-6 text-[#2D3D59]">019999999999</p>

                </div>
                <div>
                    <h1 className="text-[24px] font-bold mb-8">Links</h1>
                    <p className="text-[16px] mb-6 text-[#2D3D59]">About Us</p>
                    <p className="text-[16px] mb-6 text-[#2D3D59]">Services</p>
                    <p className="text-[16px] mb-6 text-[#2D3D59]">Portfolio</p>
                    <p className="text-[16px] mb-6 text-[#2D3D59]">Blog</p>
                </div>
                <div>
                    <h1 className="text-[24px] font-bold mb-8">Follow us</h1>
                    <div className='flex gap-8'>
                        <Image src={icons1} alt='fb icons'/>
                        <Image src={icons2} alt='fb icons'/>
                        <Image src={icons3} alt='fb icons'/>
                        <Image src={icons4} alt='fb icons'/>
                    </div>
                </div>
            </div>
            <hr />
            <div className='mt-5 flex justify-between items-center'>
                <p>@ 2023, Bytezenith. All rights reserved.</p>
                <Image className='-mr-14 -mt-16' src={top_arrow} alt=''/>
            </div>
        </div>
    );
};

export default Footer;