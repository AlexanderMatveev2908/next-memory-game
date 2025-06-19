import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GridSizeType, ThemeType } from "../types";
import { RootStateType } from "@/core/store";
import { getStorage } from "@/core/lib/storage";

export type OptGameStateType = {
  theme: ThemeType | null;
  gridSize: GridSizeType | null;
};

const defState = {
  theme: null,
  gridSize: null,
};

export const initStateOptGame: OptGameStateType =
  getStorage("optGame") ?? defState;

export const optGameSlice = createSlice({
  name: "optGame",
  initialState: initStateOptGame,
  reducers: {
    setOpt: (
      state,
      action: PayloadAction<{
        theme: ThemeType;
        gridSize: GridSizeType;
      }>
    ) => {
      const { theme, gridSize } = action.payload;

      state.theme = theme;
      state.gridSize = gridSize;
    },

    resetOpt: () => defState,
  },
});

export const getOptGameState = (state: RootStateType) => state.optGame;
