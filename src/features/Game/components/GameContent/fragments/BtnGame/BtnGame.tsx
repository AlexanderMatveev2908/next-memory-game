"use client";

import { useMemo, type FC } from "react";
import { BtnGameStyled } from "./Styled";
import { GameCellType, objSVGs } from "@/features/Game/types";
import { ThemeType } from "@/features/OptGame/types";
import { getBgBtn, getFszBtns } from "../../../../lib/styles";
import { OptGameStateType } from "@/features/OptGame/slices/optGameSlice";
import { motion } from "framer-motion";

type PropsType = {
  c: GameCellType;
  optGame: OptGameStateType;
  handleClick: () => void;
  isDisabled: boolean;
};

const BtnGame: FC<PropsType> = ({ c, handleClick, optGame, isDisabled }) => {
  const Icon = useMemo(() => objSVGs[c.val as keyof typeof objSVGs], [c.val]);

  return (
    <BtnGameStyled
      disabled={isDisabled || c.type !== "hidden"}
      onClick={handleClick}
      {...{
        ...getFszBtns(optGame),
        $iconSize: optGame.gridSize === "4x4" ? "34px" : "25px",
        $iconSIze_md: optGame.gridSize === "4x4" ? "56px" : "40px",
        $bgServer: getBgBtn(c.type),
      }}
      className="deep_show w-full h-full flex justify-center items-center"
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: c.type !== "hidden" ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <div className="client"></div>
        <div className="server">
          {optGame.theme === ThemeType.NUMBERS ? (
            <span className="label">{c.val as number}</span>
          ) : (
            <div className="icon">
              <Icon className="w-full h-full text-[var(--white__1)]" />
            </div>
          )}
        </div>
      </motion.div>
    </BtnGameStyled>
  );
};

export default BtnGame;
