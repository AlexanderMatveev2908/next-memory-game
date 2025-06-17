"use client";
import type { FC } from "react";
import OptUserChoiceHeader from "./fragments/OptUserChoiceHeader";
import { OptUserChoiceStyled } from "./Styled";

const OptUserChoice: FC = () => {
  return (
    <OptUserChoiceStyled className="w-full grid grid-cols-1 max-w-fit">
      <OptUserChoiceHeader />
    </OptUserChoiceStyled>
  );
};

export default OptUserChoice;
