"use client";

import type { FC } from "react";
import { OptUserChoiceStyled } from "./Styled";
import OptUserChoiceForm from "./fragments/Form/OptUserChoiceForm";
import { useSelector } from "react-redux";
import { getUserChoiceState } from "../../../features/optUserChoice/slice";
import Txt from "@/shared/components/Txt/Txt";

const OptUserChoice: FC = () => {
  const state = useSelector(getUserChoiceState);

  console.log(state);

  return (
    <OptUserChoiceStyled className="w-full grid grid-cols-1">
      <div className="w-full flex justify-center h-fit">
        <Txt {...{ txt: "memory", $fsz: "var(--h__xl)" }} />
      </div>

      <OptUserChoiceForm />
    </OptUserChoiceStyled>
  );
};

export default OptUserChoice;
