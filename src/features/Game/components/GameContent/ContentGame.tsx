"use client";

import type { FC } from "react";
import { GameContentStyled } from "./Styled";
import { useSelector } from "react-redux";
import { getOptGameState } from "@/features/OptGame/slices/optGameSlice";

const GameContent: FC = () => {
  const optGame = useSelector(getOptGameState);

  console.log(optGame);

  return <GameContentStyled></GameContentStyled>;
};

export default GameContent;
