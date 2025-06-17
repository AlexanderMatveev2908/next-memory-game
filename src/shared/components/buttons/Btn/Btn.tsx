"use client";

import type { FC } from "react";
import { BtnStyled } from "./Styled";

export type PropsTypeBtnChoice = {
  label: string;
  $fsz?: string;
  $fsz_md?: string;
};

const Btn: FC<PropsTypeBtnChoice> = ({ label, ...props }) => {
  return (
    <BtnStyled {...props} className="w-full flex items-center justify-center">
      <span>{label}</span>
    </BtnStyled>
  );
};

export default Btn;
