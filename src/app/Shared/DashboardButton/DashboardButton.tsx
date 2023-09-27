"use client"
type Props = {
    children: React.ReactNode;
};


const DashboardBtn = ({ children }: Props) => {
    return (
        <button className="bg-[#7367F0] text-white btn normal-case w-full">
            {children}
        </button>
    );
};

export default DashboardBtn;