"use client";

import type { FC } from "react";
import { WrapPopStyled } from "./Styled";

type PropsType = {
  children: React.ReactNode;
  isChildPop: boolean;
};

const WrapPop: FC<PropsType> = ({ children, isChildPop }) => {
  return !isChildPop ? null : (
    <WrapPopStyled className="w-full fixed inset-0 bg-black/50">
      {children}
    </WrapPopStyled>
  );
};

export default WrapPop;
