"use client";

import { type FC } from "react";
import { GameContentStyled } from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { gameSlice, getGameState } from "../../slices/gameSlice";
import { getOptGameState } from "@/features/OptGame/slices/optGameSlice";
import { isArrOK, isObjOK } from "@/core/lib/dataStructure";
import WrapClient from "@/shared/components/wrappers/WrapClient/WrapClient";
import BtnGame from "./fragments/BtnGame/BtnGame";
import { GameCellType } from "../../types";
import { handleStorageMove } from "../../lib/game";
import { useFlipBack } from "../../hooks/useFlipBack";

const GameContent: FC = () => {
  const gameState = useSelector(getGameState);
  const optGame = useSelector(getOptGameState);

  const dispatch = useDispatch();

  const handleClick = (c: GameCellType) => {
    dispatch(gameSlice.actions.makeMove(c));
    handleStorageMove(gameState, c);
  };

  useFlipBack();

  return (
    <WrapClient>
      <GameContentStyled
        className="grid w-full"
        {...{ $gridSize: optGame.gridSize?.split("x")?.[0] ?? "4" }}
      >
        {isArrOK(gameState.gameBoard) &&
          isObjOK(optGame, (v) => !!v) &&
          gameState!.gameBoard!.map((cell) => (
            <div key={cell.id} className="cell">
              <BtnGame
                {...{
                  c: cell,
                  optGame,
                  handleClick: () => handleClick(cell),
                }}
              />
            </div>
          ))}
      </GameContentStyled>
    </WrapClient>
  );
};

export default GameContent;
