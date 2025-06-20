"use client";

import { useMemo, type FC } from "react";
import { GamePopStyled } from "./Styled";
import WrapPop from "@/shared/components/wrappers/WrapPop/WrapPop";
import { useSelector } from "react-redux";
import { getGamePopState } from "../../slices/gamePopSlice";
import Txt from "@/shared/components/Txt/Txt";
import { gamePopBtns, rowsCountersPop } from "../../uiFactory";
import RowCounter from "./fragments/RowCounter/RowCounter";
import { getGameState } from "../../slices/gameSlice";
import Btn from "@/shared/components/buttons/Btn/Btn";
import { useNewGame } from "../../hooks/useNewGame";
import { useRestart } from "../../hooks/useRestart";

const GamePop: FC = ({}) => {
  const gamePopState = useSelector(getGamePopState);
  const gameState = useSelector(getGameState);

  const rowsData = useMemo(
    () => rowsCountersPop(gameState.timer.counter, gameState.moves),
    [gameState.moves, gameState.timer.counter]
  );

  const { startNewGame } = useNewGame();
  const { handleRestart } = useRestart();

  const handlers = new Map([
    ["restart", handleRestart],
    ["setupNewGame", startNewGame],
  ]);

  return (
    <WrapPop {...{ isChildPop: gamePopState.isPop }}>
      <GamePopStyled className="fixed inset-0 h-fit max-w-fit max-h-fit m-auto grid grid-cols-1 justify-items-center items-start">
        <div className="header w-full flex items-center flex-col justify-start">
          <Txt
            {...{
              txt: "You did it!",
              $clr: "var(--green__3)",
              $fsz: "var(--btn__md)",
              $fsz_md: "var(--h__2xl)",
            }}
          />

          <Txt
            {...{
              txt: "Game over! Here’s how you got on…",
              $clr: "var(--green__4)",
              $fsz: "var(--h__xs)",
              $fsz_md: "var(--h__sm)",
            }}
          />
        </div>

        <div className="content w-full flex flex-col">
          {rowsData.map((el) => (
            <RowCounter key={el.id} {...{ el }} />
          ))}
        </div>

        <div className="footer w-full">
          {gamePopBtns.map((el) => (
            <div key={el.id} className="wrap_btn w-full flex">
              <Btn
                {...{
                  label: el.label,
                  $bg: el.$bg,
                  $clrTxt: el.$clrTxt,
                  $fsz: "var(--h__sm)",
                  $fsz_md: "var(--h__md)",
                  handleClick: handlers.get(el.handler),
                }}
              />
            </div>
          ))}
        </div>
      </GamePopStyled>
    </WrapPop>
  );
};

export default GamePop;
