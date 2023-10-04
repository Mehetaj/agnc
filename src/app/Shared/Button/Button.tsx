import Image from 'next/image';
import arrow from '../../../asset/trending_flat.png'

type Props = {
    children: React.ReactNode;
};


const Button = ({ children }: Props) => {
    return (
        <button className="w-full md:w-fit bg-gradient-to-r from-[#5271FF] via-30% to-[#5E17EB] to-90%  flex items-center justify-center gap-2 text-lg py-3 px-5 rounded-xl  transition-transform text-white">
            {children}
            <Image alt='' src={arrow} />
        </button>
    );
};

export default Button;