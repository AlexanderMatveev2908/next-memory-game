"use client";

import type { FC } from "react";
import { BtnStyled } from "./Styled";

export type PropsTypeBtnChoice = {
  label: string;
  isDisabled?: boolean;
  handleClick?: () => void;
  $fsz?: string;
  $fsz_md?: string;
  $bg?: string;
};

const Btn: FC<PropsTypeBtnChoice> = ({
  label,
  handleClick,
  isDisabled,
  ...props
}) => {
  return (
    <BtnStyled
      disabled={isDisabled}
      onClick={handleClick}
      {...props}
      className="w-full flex items-center justify-center transition-all duration-300"
    >
      <span>{label}</span>
    </BtnStyled>
  );
};

export default Btn;
