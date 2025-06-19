"use client";

import type { FC } from "react";
import { GameContentStyled } from "./Styled";
import { store } from "@/core/store";
import { __cg } from "@/core/lib/log";

const GameContent: FC = () => {
  const state = store.getState();

  __cg("stateRtk", state);

  return <GameContentStyled></GameContentStyled>;
};

export default GameContent;
