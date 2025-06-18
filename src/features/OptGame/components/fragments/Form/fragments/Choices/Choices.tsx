"use client";

import type { FC } from "react";
import { ChoicesStyled } from "./Styled";
import RowChoice from "./RowChoiceUser/RowChoice";
import { fieldsOptUserChoice } from "@/features/OptGame/uiFactory/forms";

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
