"use client";

import { useEffect, type FC } from "react";
import { HomeStyled } from "./Styled";
import Txt from "@/shared/components/Txt/Txt";
import CardForm from "@/features/OptGame/components/CardForm";
import { useSelector } from "react-redux";
import { getOptGameS } from "@/features/OptGame/slices/optGameSlice";
import { useRouter } from "next/navigation";
import { isStr } from "@/core/lib/dataStructure";

const Home: FC = () => {
  const optGame = useSelector(getOptGameS);

  const nav = useRouter();

  useEffect(() => {
    if (Object.values(optGame).every((val) => isStr(val))) nav.replace("/game");
  }, [optGame, nav]);

  return (
    <HomeStyled className="h-full min-h-screen w-full grid grid-cols-1 justify-items-center items-center">
      <div className="cont w-full grid grid-cols-1">
        <div className="w-full flex justify-center h-fit">
          <Txt
            {...{
              txt: "memory",
              $fsz: "var(--h__lg)",
              $fsz_md: "var(--h__xl)",
              $clr: "var(--white__1)",
            }}
          />
        </div>

        <CardForm />
      </div>
    </HomeStyled>
  );
};

export default Home;
