"use client";

import type { FC } from "react";
import { RowChoiceStyled } from "./Styled";
import Btn from "@/shared/components/buttons/Btn/Btn";
import { useFormContext } from "react-hook-form";
import { OptItemFormFieldType } from "@/features/OptGame/types/uiFactory";
import { OptGameFormType } from "@/features/OptGame/paperwork/schema";
import { ThemeType } from "@/features/OptGame/types";

type PropsType = {
  el: OptItemFormFieldType;
};

const RowChoice: FC<PropsType> = ({ el }) => {
  const { watch, setValue, register } = useFormContext<OptGameFormType>();

  const valForm = watch(el.field as keyof OptGameFormType);
  const handleClick = (v: string) => {
    setValue(
      el.field as keyof OptGameFormType,
      valForm === v ? ("" as ThemeType) : (v as ThemeType),
      {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      }
    );
  };

  return (
    <RowChoiceStyled className="w-full grid grid-cols-1">
      <div className="w-full flex justify-start">
        <span className="label">{el.label}</span>
      </div>

      <div className="row_btns grid grid-cols-2">
        {el.fields!.map((field) => (
          <div key={field.id} className="wrapper_btn w-full flex">
            <Btn
              {...{
                label: field.label!,
                $fsz: "var(--h__xs)",
                $fsz_md: "var(--h__md)",
                $bg:
                  field.v === valForm ? "var(--green_app)" : "var(--green_1)",
                $hoverBg: field.v !== valForm ? "var(--green_2)" : "",
                handleClick: () => handleClick(field.v!),
              }}
            />
          </div>
        ))}

        <input type="hidden" {...register(el.field as keyof OptGameFormType)} />
      </div>
    </RowChoiceStyled>
  );
};

export default RowChoice;
