import type { FC } from "react";

type PropsType = {
  children: React.ReactNode;
};

const Layout: FC<PropsType> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
