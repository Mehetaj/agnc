import Image from 'next/image';
import arrow from '../../../asset/trending_flat.png'

type Props = {
    children: React.ReactNode;
};


const Button = ({ children }: Props) => {
    return (
        <button className="bg-[#226CE5] w-full lg:w-[270px] flex items-center justify-center gap-2 rounded-[8px] text-[20px] px-[40px] py-[16px] text-white">
            {children}
            <Image alt='' src={arrow}/>
        </button>
    );
};

export default Button;