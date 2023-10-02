

type Props = {
    children: string | JSX.Element | JSX.Element[] | any
}

const Component = ({children} : Props) => {
    return (
        <div className="p-2 lg:px-10 container mx-auto">
            {children}
        </div>
    );
};

export default Component;