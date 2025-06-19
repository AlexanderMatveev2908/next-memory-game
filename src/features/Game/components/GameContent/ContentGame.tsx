"use client";

import type { FC } from "react";
import { GameContentStyled } from "./Styled";
import { useSelector } from "react-redux";
import { getGameState } from "../../slices/gameSlice";
import { getOptGameState } from "@/features/OptGame/slices/optGameSlice";
import { isArrOK } from "@/core/lib/dataStructure";
import WrapClient from "@/shared/components/wrappers/WrapClient/WrapClient";

const GameContent: FC = () => {
  const gameState = useSelector(getGameState);
  const optGame = useSelector(getOptGameState);

  return (
    <WrapClient>
      <GameContentStyled
        className="grid w-full"
        {...{ $gridSize: optGame.gridSize?.split("x")?.[0] ?? "4" }}
      >
        {isArrOK(gameState.gameBoard) &&
          gameState!.gameBoard!.map((cell) => (
            <div key={cell.id} className="cell"></div>
          ))}
      </GameContentStyled>
    </WrapClient>
  );
};

export default GameContent;
