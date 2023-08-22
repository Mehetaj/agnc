import Image from 'next/image';
import img from '../../../../asset/About us page-bro 1.png'
import Title from '@/app/Shared/Title/Title';

const AboutHero = () => {
    return (
        <div className='flex mt-16 justify-between items-center'>
            <div>
                <Title>WHO WE ARE</Title>
                <h1 className='text-[48px] font-bold my-4'>We are design ninjas <br /> for your next project</h1>
                <p className='text-[20px]'>We are driven by a passion for creativity and innovation. <br /> With a team of skilled professionals, we deliver <br /> exceptional solutions that exceed client expectations. With <br /> a deep understanding of your brand to create strategies <br /> that yield remarkable results.</p>
            </div>
            <Image src={img} alt=''/>
        </div>
    );
};

export default AboutHero;