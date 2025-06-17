"use client";

import type { FC } from "react";
import { BtnChoiceStyled } from "./Styled";

export type PropsTypeBtnChoice = {
  label: string;
};

const BtnChoice: FC<PropsTypeBtnChoice> = ({ label }) => {
  return (
    <BtnChoiceStyled className="w-full flex items-center justify-center">
      <span>{label}</span>
    </BtnChoiceStyled>
  );
};

export default BtnChoice;
