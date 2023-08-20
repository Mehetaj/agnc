import Image from 'next/image';
import banner from '../../../../asset/Coworking-amico 1.png'
import Button from '@/app/Shared/Button/Button';

const Banner = () => {
    return (
        <div className='flex justify-between items-center  mt-16'>
           <div>
            <h1 className='text-[60px] font-bold'>
            Stand Out in the <br /> Digital Crowd with <br /> Creative Solutions
            </h1>
            <p className='text-[20px] mt-3 mb-6'>
            We are a leading creative agency. Bringing your ideas to <br /> life and help your brand thrive in the digital world.
            </p>
            <Button>
            View our work
            </Button>
            
            </div> 
            <Image className='w-[584px] h-[584px]' src={banner} alt=''/>
        </div>
    );
};

export default Banner;