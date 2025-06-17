"use client";

import type { FC } from "react";
import { ChoicesUserStyled } from "./Styled";
import { fieldsOptUserChoice } from "@/features/optUserChoice/uiFactory/forms";
import RowChoiceUser from "@/features/optUserChoice/components/RowChoiceUser/RowChoiceUser";

const ChoicesUser: FC = () => {
  return (
    <ChoicesUserStyled className="w-full grid grid-cols-1">
      {fieldsOptUserChoice.map((el) => (
        <RowChoiceUser key={el.id} {...{ el }} />
      ))}
    </ChoicesUserStyled>
  );
};

export default ChoicesUser;
