import { RootStateType } from "@/core/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gameSlice } from "./gameSlice";

const initState = {
  isPop: false,
};

export const gamePopSlice = createSlice({
  name: "gamePop",
  initialState: initState,
  reducers: {
    setPop: (state, action: PayloadAction<boolean>) => {
      state.isPop = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(gameSlice.actions.resetGame, (state) => {
      state.isPop = false;
    });
  },
});

export const getGamePopState = (state: RootStateType) => state.gamePop;
