import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GridSizeType, ThemeType } from "../types";

const initState = {
  theme: "",
  gridSize: "",
};

export type UserChoiceState = typeof initState;

export const userChoiceSlice = createSlice({
  name: "userChoice",
  initialState: initState,
  reducers: {
    setState: (
      state,
      action: PayloadAction<{ theme: ThemeType; gridSize: GridSizeType }>
    ) => {
      const { theme, gridSize } = action.payload;

      state.theme = theme;
      state.gridSize = gridSize;
    },
  },
});

export const getUserChoiceState = (state: { userChoice: UserChoiceState }) =>
  state.userChoice;
