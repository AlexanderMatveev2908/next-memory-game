"use client";

import type { FC } from "react";
import { BtnStyled } from "./Styled";

export type PropsTypeBtnChoice = {
  label: string;
  type?: "button" | "submit";
  isDisabled?: boolean;
  handleClick?: () => void;
  $fsz?: string;
  $fsz_md?: string;
  $bg?: string;
  $hoverBg?: string;
  $hoverOpc?: string;
};

const Btn: FC<PropsTypeBtnChoice> = ({
  label,
  handleClick,
  isDisabled,
  type,
  ...props
}) => {
  return (
    <BtnStyled
      type={type ?? "button"}
      disabled={isDisabled}
      onClick={handleClick}
      {...props}
      className="btn_app w-full flex items-center justify-center transition-all duration-300"
    >
      <span>{label}</span>
    </BtnStyled>
  );
};

export default Btn;
