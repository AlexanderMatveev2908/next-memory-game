"use client";

import type { FC } from "react";
import { OptItemFormFieldType } from "../../../../../../../../features/optUserChoice/types/uiFactory";
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
          <Btn
            key={btn.id}
            {...{
              label: btn.label!,
              $fsz: "var(--h__xs)",
              $fsz_md: "var(--h__md)",
            }}
          />
        ))}
      </div>
    </RowChoiceUserStyled>
  );
};

export default RowChoiceUser;
