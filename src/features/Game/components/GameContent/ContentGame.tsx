"use client";

import { type FC } from "react";
import { GameContentStyled } from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { gameSlice, getGameState } from "../../slices/gameSlice";
import { getOptGameState } from "@/features/OptGame/slices/optGameSlice";
import { cpyObj, isArrOK, isObjOK } from "@/core/lib/dataStructure";
import WrapClient from "@/shared/components/wrappers/WrapClient/WrapClient";
import BtnGame from "./fragments/BtnGame/BtnGame";
import { GameCellType } from "../../types";
import { useFlipBack } from "../../hooks/useFlipBack";
import { handleMove } from "../../lib/game";
import { saveStorage } from "@/core/lib/storage";
import { useListenEnd } from "../../hooks/useListenEnd";

const GameContent: FC = () => {
  const gameState = useSelector(getGameState);
  const optGame = useSelector(getOptGameState);

  const dispatch = useDispatch();

  const handleClick = (c: GameCellType) => {
    dispatch(gameSlice.actions.makeMove(c));

    const cpy = cpyObj(gameState);
    const updated = handleMove(cpy, c, true);
    saveStorage("game", updated);
  };

  useFlipBack();
  useListenEnd();

  const isDisabled =
    (gameState.currFlipped?.length ?? 0) >= 2 || gameState.flipBack;

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
                  isDisabled,
                }}
              />
            </div>
          ))}
      </GameContentStyled>
    </WrapClient>
  );
};

export default GameContent;
