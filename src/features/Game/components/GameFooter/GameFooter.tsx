"use client";

import { useMemo, type FC } from "react";
import { GameFooterStyled } from "./Styled";
import CounterBox from "@/shared/components/CounterBox/CounterBox";
import { useGenIDs } from "@/core/hooks/useGenIDs";
import { useSelector } from "react-redux";
import { getGameState } from "../../slices/gameSlice";

const GameFooter: FC = () => {
  const gameState = useSelector(getGameState);

  const ids = useGenIDs({ lengths: [2] });

  const pairsVals = useMemo(
    () => [
      {
        label: "Time",
        val: gameState.timer.counter,
      },
      {
        label: "Moves",
        val: gameState.moves,
      },
    ],
    [gameState.moves, gameState.timer.counter]
  );

  return (
    <GameFooterStyled className="fixed">
      <div className="wrapper">
        {pairsVals.map((el, i) => (
          <div key={ids.ids[0][i]} className="wrapper__counter_box">
            <CounterBox {...{ ...el }} />
          </div>
        ))}
      </div>
    </GameFooterStyled>
  );
};

export default GameFooter;
