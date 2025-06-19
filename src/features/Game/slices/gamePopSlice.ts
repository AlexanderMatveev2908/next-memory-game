import { RootStateType } from "@/core/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
});

export const getGamePopState = (state: RootStateType) => state.gamePop;
