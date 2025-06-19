import { createSlice } from "@reduxjs/toolkit";
import { GameIconsType, GameNumberType4x4, GameNumberType6x6 } from "../types";

type GameCellStatusType = "hidden" | "visible" | "matched";

type CellGameValType =
  | keyof typeof GameIconsType
  | keyof (typeof GameNumberType4x4)[number]
  | keyof (typeof GameNumberType6x6)[number];

type GameCellType = {
  id: string;
  val: CellGameValType;
  type: GameCellStatusType;
};

type StateGameType = {
  timer: {
    run: boolean;
    counter: number;
  };
  moves: number;
  gameBoard: GameCellType[] | null;
};

const initState: StateGameType = {
  timer: {
    run: false,
    counter: 0,
  },
  moves: 0,
  gameBoard: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState: initState,
  reducers: {},
});
