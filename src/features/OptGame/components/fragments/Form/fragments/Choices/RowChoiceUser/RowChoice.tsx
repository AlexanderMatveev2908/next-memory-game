"use client";

import type { FC } from "react";
import { RowChoiceStyled } from "./Styled";
import Btn from "@/shared/components/buttons/Btn/Btn";
import { useFormContext } from "react-hook-form";
import { OptItemFormFieldType } from "@/features/OptGame/types/uiFactory";
import { OptUserChoiceFormType } from "@/features/OptGame/paperwork/schema";

type PropsType = {
  el: OptItemFormFieldType;
};

const RowChoice: FC<PropsType> = ({ el }) => {
  const { watch, setValue, register } = useFormContext<OptUserChoiceFormType>();

  const valForm = watch(el.field as keyof OptUserChoiceFormType);
  const handleClick = (v: string) => {
    setValue(el.field as keyof OptUserChoiceFormType, valForm === v ? "" : v, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  return (
    <RowChoiceStyled className="w-full grid grid-cols-1">
      <div className="w-full flex justify-start">
        <span className="label">{el.label}</span>
      </div>

      <div className="row_btns grid grid-cols-2">
        {el.fields!.map((field) => (
          <Btn
            key={field.id}
            {...{
              label: field.label!,
              $fsz: "var(--h__xs)",
              $fsz_md: "var(--h__md)",
              $bg: field.v === valForm ? "var(--green_app)" : "var(--green_2)",
              handleClick: () => handleClick(field.v!),
            }}
          />
        ))}

        <input
          type="hidden"
          {...register(el.field as keyof OptUserChoiceFormType)}
        />
      </div>
    </RowChoiceStyled>
  );
};

export default RowChoice;
