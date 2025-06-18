"use client";

import type { FC } from "react";
import { GameContentStyled } from "./Styled";
import { useSelector } from "react-redux";
import { getOptGameState } from "@/features/OptGame/slices/optGameSlice";

type PropsType = {};

const GameContent: FC<PropsType> = ({}) => {
  const optGame = useSelector(getOptGameState);

  console.log(optGame);

  return <GameContentStyled></GameContentStyled>;
};

export default GameContent;
