"use client";

import type { FC } from "react";
import { BtnGameStyled } from "./Styled";
import { GameCellType } from "@/features/Game/types";
import { ThemeType } from "@/features/OptGame/types";
import { getFszBtns } from "../../../../lib/styles";
import { OptGameStateType } from "@/features/OptGame/slices/optGameSlice";

type PropsType = {
  c: GameCellType;
  optGame: OptGameStateType;
  handleClick: () => void;
};

const BtnGame: FC<PropsType> = ({ c, handleClick, optGame }) => {
  return (
    <BtnGameStyled
      onClick={handleClick}
      {...{ ...getFszBtns(optGame) }}
      className="w-full h-full flex justify-center items-center"
    >
      {optGame.theme === ThemeType.NUMBERS ? (
        <span className="label">{c.val as number}</span>
      ) : (
        <div className=""></div>
      )}
    </BtnGameStyled>
  );
};

export default BtnGame;
