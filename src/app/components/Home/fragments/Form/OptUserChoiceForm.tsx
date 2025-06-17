"use client";

import type { FC } from "react";
import { OptUserChoiceFormStyled } from "./Styled";
import ChoicesUser from "./fragments/ChoicesUser/ChoicesUser";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaOptUserChoice } from "@/features/optUserChoice/paperwork/schema";

const OptUserChoiceForm: FC = () => {
  const formCtx = useForm({
    mode: "onChange",
    resolver: zodResolver(schemaOptUserChoice),
  });

  return (
    <OptUserChoiceFormStyled className="w-full grid grid-cols-1">
      <FormProvider {...formCtx}>
        <ChoicesUser />
      </FormProvider>
    </OptUserChoiceFormStyled>
  );
};

export default OptUserChoiceForm;
