"use client";

import { useEffect, type FC } from "react";
import { OptGameStyled } from "./Styled";
import Txt from "@/shared/components/Txt/Txt";
import CardForm from "./fragments/Form/CardForm";
import { useSelector } from "react-redux";
import { getOptGameS } from "../slice";
import { isStr } from "@/core/lib/dataStructure";
import { useRouter } from "next/navigation";

const OptGame: FC = () => {
  const optGame = useSelector(getOptGameS);

  const nav = useRouter();

  useEffect(() => {
    if (Object.values(optGame).every((val) => isStr(val))) nav.replace("/game");
  }, [optGame, nav]);

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
