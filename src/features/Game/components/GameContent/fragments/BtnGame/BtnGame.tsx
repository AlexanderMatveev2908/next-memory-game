"use client";

import type { FC } from "react";
import { BtnGameStyled } from "./Styled";
import { GameCellType, objSVGs } from "@/features/Game/types";
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
  const Icon = objSVGs[c.val as keyof typeof objSVGs];

  return (
    <BtnGameStyled
      disabled={isDisabled || c.type !== "hidden"}
      onClick={handleClick}
      {...{
        ...getFszBtns(optGame),
        $bg: getBgBtn(c.type),
        $iconSize: optGame.gridSize === "4x4" ? "34px" : "25px",
        $iconSIze_md: optGame.gridSize === "4x4" ? "56px" : "40px",
      }}
      className="w-full h-full flex justify-center items-center"
    >
      {optGame.theme === ThemeType.NUMBERS
        ? c.type !== "hidden" && (
            <span className="label">{c.val as number}</span>
          )
        : c.type !== "hidden" && (
            <div className="icon">
              <Icon className="w-full h-full text-[var(--white__1)]" />
            </div>
          )}
    </BtnGameStyled>
  );
};

export default BtnGame;
