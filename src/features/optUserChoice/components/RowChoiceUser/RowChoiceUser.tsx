"use client";

import type { FC } from "react";
import { OptItemFormFieldType } from "../../types/uiFactory";
import { RowChoiceUserStyled } from "./Styled";
import Btn from "@/shared/components/buttons/Btn";

type PropsType = {
  el: OptItemFormFieldType;
};

const RowChoiceUser: FC<PropsType> = ({ el }) => {
  return (
    <RowChoiceUserStyled className="w-full grid grid-cols-1">
      <div className="w-full flex justify-start">
        <span className="label">{el.label}</span>
      </div>

      <div className="row_btns grid grid-cols-2">
        {el.vals!.map((btn) => (
          <Btn key={btn.id} {...{ label: btn.label! }} />
        ))}
      </div>
    </RowChoiceUserStyled>
  );
};

export default RowChoiceUser;
