"use client";

import type { FC } from "react";
import { RowCounterStyled } from "./Styled";

type PropsType = {
  el: {
    label: string;
    val: string;
  };
};

const RowCounter: FC<PropsType> = ({ el, ...props }) => {
  return (
    <RowCounterStyled
      {...props}
      className="w-full grid grid-cols-2 items-center"
    >
      <span className="label justify-self-start">{el.label}</span>

      <span className="val justify-self-end">{el.val}</span>
    </RowCounterStyled>
  );
};

export default RowCounter;
