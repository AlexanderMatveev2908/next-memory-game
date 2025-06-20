"use client";

import type { FC } from "react";
import { BtnGameStyled } from "./Styled";
import { GameCellType } from "@/features/Game/types";
import { ThemeType } from "@/features/OptGame/types";
import { getBgBtn, getFszBtns } from "../../../../lib/styles";
import { OptGameStateType } from "@/features/OptGame/slices/optGameSlice";

type PropsType = {
  c: GameCellType;
  optGame: OptGameStateType;
  handleClick: () => void;
  isDisabled: boolean;
};

const BtnGame: FC<PropsType> = ({ c, handleClick, optGame, isDisabled }) => {
  return (
    <BtnGameStyled
      disabled={isDisabled || c.type !== "hidden"}
      onClick={handleClick}
      {...{ ...getFszBtns(optGame), $bg: getBgBtn(c.type) }}
      className="w-full h-full flex justify-center items-center"
    >
      {optGame.theme === ThemeType.NUMBERS ? (
        c.type !== "" && <span className="label">{c.val as number}</span>
      ) : (
        <div className=""></div>
      )}
    </BtnGameStyled>
  );
};

export default BtnGame;
