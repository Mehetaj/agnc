import Image from 'next/image';
import arrow from '../../../asset/trending_flat.png'

type Props = {
    children: React.ReactNode;
};


const Button = ({ children }: Props) => {
    return (
        <button className="bg-[#226CE5] flex items-center justify-center gap-2 text-lg py-3 px-5 rounded-md text-white">
            {children}
            <Image alt='' src={arrow} />
        </button>
    );
};

export default Button;