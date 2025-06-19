"use client";

import { useEffect, useState, type FC } from "react";
import { ClientWrapStyled } from "./Styled";

type PropsType = {
  children: React.ReactNode;
};

const ClientWrap: FC<PropsType> = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <ClientWrapStyled className="w-fit">
      {isHydrated ? children : null}
    </ClientWrapStyled>
  );
};

export default ClientWrap;
