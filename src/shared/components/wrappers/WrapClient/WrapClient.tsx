"use client";

import { useEffect, useState, type FC } from "react";
import { WrapClientStyled } from "./Styled";

type PropsType = {
  children: React.ReactNode;
};

const WrapClient: FC<PropsType> = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <WrapClientStyled className="w-fit">
      {isHydrated ? children : null}
    </WrapClientStyled>
  );
};

export default WrapClient;
