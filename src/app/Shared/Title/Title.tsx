

type Props = {
    children: React.ReactNode;
};


const Title = ({ children }: Props) => {
    return (
        <p className="text-[#226CE5] text-center lg:text-left uppercase text-[20px] ">
            {children}
        </p>
    );
};

export default Title;