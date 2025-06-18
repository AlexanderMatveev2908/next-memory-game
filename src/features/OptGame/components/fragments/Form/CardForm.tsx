"use client";

import { useEffect, type FC } from "react";
import { CardFormStyled } from "./Styled";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Btn from "@/shared/components/buttons/Btn/Btn";
import {
  OptGameFormType,
  schemaOptUserChoice,
} from "@/features/OptGame/paperwork/schema";
import { fieldsOptUserChoice } from "@/features/OptGame/uiFactory/forms";
import RowChoice from "./fragments/RowChoiceUser/RowChoice";
import { useDispatch } from "react-redux";
import { initStateOptGame, optGameSlice } from "@/features/OptGame/slice";
import { getStorage, saveStorage } from "@/core/lib/storage";

const CardForm: FC = () => {
  const formCtx = useForm<OptGameFormType>({
    mode: "all",
    resolver: zodResolver(schemaOptUserChoice),
  });

  const {
    watch,
    formState: { isDirty, dirtyFields },
    handleSubmit,
    setValue,
  } = formCtx;
  const vals = watch();
  const isValid =
    isDirty &&
    Object.entries(vals).every(
      ([key, val]) =>
        Object.keys(dirtyFields).includes(key) && !!val?.trim()?.length
    );

  const dispatch = useDispatch();

  const handleSave = handleSubmit(
    (data) => {
      dispatch(optGameSlice.actions.setOpt(data));

      saveStorage("optGame", data);
    },
    (errs) => {
      console.log(errs);
    }
  );

  useEffect(() => {
    const formData: OptGameFormType =
      getStorage<OptGameFormType>("optGame") ?? initStateOptGame;

    for (const k in formData) {
      setValue(
        k as keyof OptGameFormType,
        formData[k as keyof typeof formData],
        { shouldValidate: true, shouldDirty: true, shouldTouch: true }
      );
    }
  }, [setValue]);

  return (
    <CardFormStyled onSubmit={handleSave} className="w-full grid grid-cols-1">
      <FormProvider {...formCtx}>
        <div className="choices w-full grid grid-cols-1">
          {fieldsOptUserChoice.map((el) => (
            <RowChoice key={el.id} {...{ el }} />
          ))}
        </div>

        <div className="wrap_btn w-full flex">
          <Btn
            {...{
              label: "Start Game",
              type: "submit",
              $fsz: "var(--h__sm)",
              $fsz_md: "var(--h__lg)",
              $hoverOpc: "0.7",
              isDisabled: !isValid,
            }}
          />
        </div>
      </FormProvider>
    </CardFormStyled>
  );
};

export default CardForm;
