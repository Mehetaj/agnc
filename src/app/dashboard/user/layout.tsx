type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const UserLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default UserLayout;
