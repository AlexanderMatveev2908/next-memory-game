"use client";

import type { FC } from "react";
import { ChoicesStyled } from "./Styled";
import { fieldsOptUserChoice } from "@/features/optUserChoice/uiFactory/forms";
import RowChoice from "./RowChoiceUser/RowChoice";

const Choices: FC = () => {
  return (
    <ChoicesStyled className="w-full grid grid-cols-1">
      {fieldsOptUserChoice.map((el) => (
        <RowChoice key={el.id} {...{ el }} />
      ))}
    </ChoicesStyled>
  );
};

export default Choices;
