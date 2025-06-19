"use client";

import { useEffect, useMemo, useRef, type FC } from "react";
import { GameFooterStyled } from "./Styled";
import CounterBox from "@/shared/components/CounterBox/CounterBox";
import { useGenIDs } from "@/core/hooks/useGenIDs";
import { useDispatch, useSelector } from "react-redux";
import { gameSlice, getGameState } from "../../slices/gameSlice";
import { formatTime } from "@/core/lib/formatters";
import { clearT } from "@/core/lib/etc";
import { saveStorage } from "@/core/lib/storage";
import { cpyObj } from "@/core/lib/dataStructure";
import WrapClient from "@/shared/components/wrappers/WrapClient/WrapClient";

const GameFooter: FC = () => {
  const timerID = useRef<NodeJS.Timeout | null>(null);
  const gameState = useSelector(getGameState);

  const ids = useGenIDs({ lengths: [2] });

  const pairsVals = useMemo(
    () => [
      {
        label: "Time",
        val: formatTime(gameState.timer.counter),
      },
      {
        label: "Moves",
        val: gameState.moves,
      },
    ],
    [gameState.moves, gameState.timer.counter]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!gameState.timer.run) return;

    timerID.current = setInterval(() => {
      dispatch(gameSlice.actions.incTimer());

      const cpy = cpyObj(gameState);
      cpy.timer.counter += 1;
      saveStorage("game", cpy);
    }, 1000);

    return () => {
      clearT(timerID);
    };
  }, [gameState.timer.run, dispatch, gameState]);

  return (
    <WrapClient>
      <GameFooterStyled className="fixed">
        <div className="wrapper">
          {pairsVals.map((el, i) => (
            <div key={ids.ids[0][i]} className="wrapper__counter_box">
              <CounterBox {...{ ...el }} />
            </div>
          ))}
        </div>
      </GameFooterStyled>
    </WrapClient>
  );
};

export default GameFooter;
