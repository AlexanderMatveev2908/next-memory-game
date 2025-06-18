"use client";

import type { FC } from "react";
import { GameStyled } from "./Styled";
import GameHeader from "@/features/Game/components/GameHeader/GameHeader";
import GameContent from "@/features/Game/components/GameContent/ContentGame";
import GameFooter from "@/features/Game/components/GameFooter/GameFooter";

const Game: FC = () => {
  return (
    <GameStyled className="w-full grid grid-cols-1 justify-items-center items-center">
      <GameHeader />
      <GameContent />
      <GameFooter />
    </GameStyled>
  );
};
export default Game;
