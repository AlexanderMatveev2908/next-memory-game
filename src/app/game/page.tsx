"use client";

import { useEffect, type FC } from "react";
import { GameStyled } from "./Styled";
import GameHeader from "@/features/Game/components/GameHeader/GameHeader";
import GameContent from "@/features/Game/components/GameContent/ContentGame";
import GameFooter from "@/features/Game/components/GameFooter/GameFooter";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { getOptGameState } from "@/features/OptGame/slices/optGameSlice";
import MobilePop from "@/features/Game/components/MobilePop/MobilePop";

const Game: FC = () => {
  const optGame = useSelector(getOptGameState);
  const nav = useRouter();

  useEffect(() => {
    if (!Object.values(optGame).every((el) => typeof el === "string"))
      nav.replace("/");
  }, [optGame, nav]);

  return (
    <GameStyled className="w-full grid grid-cols-1 place-content-center justify-items-center">
      <MobilePop />

      <GameHeader />
      <GameContent />
      <GameFooter />
    </GameStyled>
  );
};
export default Game;
