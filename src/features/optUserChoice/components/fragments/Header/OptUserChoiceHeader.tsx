"use client";

import type { FC } from "react";

import { OptUserChoiceHeaderStyled } from "./Styled";

const OptUserChoiceHeader: FC = () => {
  return (
    <div className="w-full flex justify-center">
      <OptUserChoiceHeaderStyled className="txt_clr__white_0">
        memory
      </OptUserChoiceHeaderStyled>
    </div>
  );
};

export default OptUserChoiceHeader;
