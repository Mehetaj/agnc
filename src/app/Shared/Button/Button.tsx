import Image from 'next/image';
import arrow from '../../../asset/trending_flat.png'

type Props = {
    children: React.ReactNode;
};


const Button = ({ children }: Props) => {
    return (
        <button className="btn">
            {children}
            <Image alt='' src={arrow} />
        </button>
    );
};

export default Button;