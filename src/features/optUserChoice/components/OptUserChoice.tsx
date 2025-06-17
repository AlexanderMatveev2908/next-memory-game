"use client";

import type { FC } from "react";
import OptUserChoiceHeader from "./fragments/Header/OptUserChoiceHeader";
import { OptUserChoiceStyled } from "./Styled";
import OptUserChoiceForm from "./fragments/Form/OptUserChoiceForm";
import { useSelector } from "react-redux";
import { getUserChoiceState } from "../slice";

const OptUserChoice: FC = () => {
  const state = useSelector(getUserChoiceState);

  console.log(state);

  return (
    <OptUserChoiceStyled className="w-full grid grid-cols-1 max-w-fit">
      <OptUserChoiceHeader />

      <OptUserChoiceForm />
    </OptUserChoiceStyled>
  );
};

export default OptUserChoice;
