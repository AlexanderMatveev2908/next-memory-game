"use client";

import type { FC } from "react";
import { BtnStyled } from "./Styled";

export type PropsTypeBtnChoice = {
  label: string;
};

const Btn: FC<PropsTypeBtnChoice> = ({ label }) => {
  return (
    <BtnStyled className="w-full flex items-center justify-center">
      <span>{label}</span>
    </BtnStyled>
  );
};

export default Btn;
