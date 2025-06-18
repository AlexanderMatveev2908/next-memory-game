"use client";

import type { FC } from "react";
import { OptGameStyled } from "./Styled";
import Txt from "@/shared/components/Txt/Txt";
import CardForm from "./fragments/Form/CardForm";

const OptGame: FC = () => {
  return (
    <OptGameStyled className="w-full grid grid-cols-1">
      <div className="w-full flex justify-center h-fit">
        <Txt
          {...{
            txt: "memory",
            $fsz: "var(--h__lg)",
            $fsz_md: "var(--h__xl)",
            $clr: "var(--white_1)",
          }}
        />
      </div>

      <CardForm />
    </OptGameStyled>
  );
};

export default OptGame;
