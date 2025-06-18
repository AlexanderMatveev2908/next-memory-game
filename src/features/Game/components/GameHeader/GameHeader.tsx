"use client";

import type { FC } from "react";
import { GameHeaderStyled } from "./Styled";
import Txt from "@/shared/components/Txt/Txt";
import Btn from "@/shared/components/buttons/Btn/Btn";

type PropsType = {};

const GameHeader: FC<PropsType> = ({}) => {
  return (
    <GameHeaderStyled className="fixed flex justify-between">
      <Txt
        {...{
          txt: "memory",
          $clr: "var(--green_3)",
          $fsz: "var(--btn__md)",
          $fsz_md: "var(--h__lg)",
        }}
      />

      <div className="h-[40px] w-[78px]">
        <Btn
          {...{ label: "Menu", $bg: "var(--green_app)", $fsz: "var(--h__xs)" }}
        />
      </div>
    </GameHeaderStyled>
  );
};

export default GameHeader;
