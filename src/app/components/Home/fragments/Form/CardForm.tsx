"use client";

import type { FC } from "react";
import { CardFormStyled } from "./Styled";
import ChoicesUser from "./fragments/ChoicesUser/ChoicesUser";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaOptUserChoice } from "@/features/optUserChoice/paperwork/schema";
import Btn from "@/shared/components/buttons/Btn";

const CardForm: FC = () => {
  const formCtx = useForm({
    mode: "onChange",
    resolver: zodResolver(schemaOptUserChoice),
  });

  return (
    <CardFormStyled className="w-full grid grid-cols-1">
      <FormProvider {...formCtx}>
        <ChoicesUser />

        <div className="w-full flex">
          <Btn
            {...{
              label: "Start Game",
              $fsz: "var(--h__sm)",
              $fsz_md: "var(--h__lg)",
            }}
          />
        </div>
      </FormProvider>
    </CardFormStyled>
  );
};

export default CardForm;
