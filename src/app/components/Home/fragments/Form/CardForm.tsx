"use client";

import type { FC } from "react";
import { CardFormStyled } from "./Styled";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  OptUserChoiceFormType,
  schemaOptUserChoice,
} from "@/features/optUserChoice/paperwork/schema";
import Btn from "@/shared/components/buttons/Btn/Btn";
import Choices from "./fragments/Choices/Choices";

const CardForm: FC = () => {
  const formCtx = useForm<OptUserChoiceFormType>({
    mode: "all",
    resolver: zodResolver(schemaOptUserChoice),
  });

  const {
    watch,
    formState: { isDirty, dirtyFields },
  } = formCtx;
  const vals = watch();
  const isValid =
    isDirty &&
    Object.entries(vals).every(
      ([key, val]) =>
        Object.keys(dirtyFields).includes(key) && !!val?.trim()?.length
    );

  return (
    <CardFormStyled className="w-full grid grid-cols-1">
      <FormProvider {...formCtx}>
        <Choices />

        <div className="w-full flex">
          <Btn
            {...{
              label: "Start Game",
              $fsz: "var(--h__sm)",
              $fsz_md: "var(--h__lg)",
              isDisabled: !isValid,
            }}
          />
        </div>
      </FormProvider>
    </CardFormStyled>
  );
};

export default CardForm;
