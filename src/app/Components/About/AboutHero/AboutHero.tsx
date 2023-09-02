import Image from 'next/image';
import img from '../../../../asset/About us page-bro 1.png'
import Title from '@/app/Shared/Title/Title';

const AboutHero = () => {
    return (
        <div className='px-2 mx-auto lg:flex mt-16 justify-between items-center'>
            <div>
                <Title>WHO WE ARE</Title>
                <h1 className='text-[48px] font-bold my-4'>We are design ninjas <br className='hidden lg:grid'/> for your next project</h1>
                <p className='text-[20px]'>We are driven by a passion for creativity and innovation. <br className='hidden lg:grid'/> With a team of skilled professionals, we deliver <br className='hidden lg:grid'/> exceptional solutions that exceed client expectations. With <br className='hidden lg:grid'/> a deep understanding of your brand to create strategies <br className='hidden lg:grid'/> that yield remarkable results.</p>
            </div>
            <Image src={img} alt=''/>
        </div>
    );
};

export default AboutHero;