"use client";

import type { FC } from "react";
import { RowChoiceUserStyled } from "./Styled";
import { OptItemFormFieldType } from "../../types/uiFactory";
import BtnChoice from "@/shared/components/buttons/BtnChoice";

type PropsType = {
  el: OptItemFormFieldType;
};

const RowChoiceUser: FC<PropsType> = ({ el }) => {
  return (
    <RowChoiceUserStyled className="w-full grid grid-cols-1">
      <div className="w-full flex justify-start">
        <label className="label">{el.label}</label>
      </div>

      <div className="row_btns grid grid-cols-2">
        {el.vals!.map((btn) => (
          <BtnChoice key={btn.id} {...{ label: btn.label! }} />
        ))}
      </div>
    </RowChoiceUserStyled>
  );
};

export default RowChoiceUser;
