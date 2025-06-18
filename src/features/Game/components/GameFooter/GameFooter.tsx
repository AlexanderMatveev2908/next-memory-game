"use client";

import { useMemo, type FC } from "react";
import { GameFooterStyled } from "./Styled";
import CounterBox from "@/shared/components/CounterBox/CounterBox";
import { useGenIDs } from "@/core/hooks/useGenIDs";

const GameFooter: FC = () => {
  const ids = useGenIDs({ lengths: [2] });

  const pairsVals = useMemo(
    () => [
      {
        label: "Time",
        val: 0.01,
      },
      {
        label: "Moves",
        val: 2,
      },
    ],
    []
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
