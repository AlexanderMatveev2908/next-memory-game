"use client";

import type { FC } from "react";
import { OptUserChoiceFormStyled } from "./Styled";
import ChoicesUser from "./fragments/ChoicesUser/ChoicesUser";

const OptUserChoiceForm: FC = () => {
  return (
    <OptUserChoiceFormStyled className="w-full grid grid-cols-1">
      <ChoicesUser />
    </OptUserChoiceFormStyled>
  );
};

export default OptUserChoiceForm;
