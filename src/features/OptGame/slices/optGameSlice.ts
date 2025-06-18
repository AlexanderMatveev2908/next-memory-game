import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GridSizeType, ThemeType } from "../types";
import { RootStateType } from "@/core/store";

export type OptGameStateType = {
  theme: ThemeType;
  gridSize: GridSizeType;
};

export const initStateOptGame: OptGameStateType = {
  theme: "" as ThemeType,
  gridSize: "" as GridSizeType,
};

export const optGameSlice = createSlice({
  name: "optGame",
  initialState: initStateOptGame,
  reducers: {
    setOpt: (
      state,
      action: PayloadAction<{ theme: ThemeType; gridSize: GridSizeType }>
    ) => {
      const { theme, gridSize } = action.payload;

      state.theme = theme;
      state.gridSize = gridSize;
    },
  },
});

export const getOptGameS = (state: RootStateType) => state.optGame;
