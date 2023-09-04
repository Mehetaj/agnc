

type Props = {
    children: string | JSX.Element | JSX.Element[] | any
}

const Component = ({children} : Props) => {
    return (
        <div className="max-w-[1440px] mx-auto">
            {children}
        </div>
    );
};

export default Component;