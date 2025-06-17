"use client";

import type { FC } from "react";
import { TxtStyled } from "./Styled";

export type PropsTypeTxt = {
  $fsz?: string;
  $fsz_md?: string;
  $fsz_lg?: string;
  $clr?: string;

  txt: string;
};

const Txt: FC<PropsTypeTxt> = ({ txt, ...props }) => {
  return <TxtStyled {...{ ...props }}>{txt}</TxtStyled>;
};

export default Txt;
