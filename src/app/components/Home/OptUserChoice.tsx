"use client";

import type { FC } from "react";
import { OptUserChoiceStyled } from "./Styled";
import { useSelector } from "react-redux";
import { getUserChoiceState } from "../../../features/optUserChoice/slice";
import Txt from "@/shared/components/Txt/Txt";
import CardForm from "./fragments/Form/CardForm";

const OptUserChoice: FC = () => {
  const state = useSelector(getUserChoiceState);

  console.log(state);

  return (
    <OptUserChoiceStyled className="w-full grid grid-cols-1">
      <div className="w-full flex justify-center h-fit">
        <Txt
          {...{ txt: "memory", $fsz: "var(--h__xl)", $clr: "var(--white_1)" }}
        />
      </div>

      <CardForm />
    </OptUserChoiceStyled>
  );
};

export default OptUserChoice;
