"use client";

import type { FC } from "react";
import { CounterBoxStyled } from "./Styled";

type PropsType = {
  label: string;
  val: string | number;
};

const CounterBox: FC<PropsType> = ({ label, val }) => {
  return (
    <CounterBoxStyled>
      <span className="label">{label}</span>
      <span className="value">{val}</span>
    </CounterBoxStyled>
  );
};

export default CounterBox;
