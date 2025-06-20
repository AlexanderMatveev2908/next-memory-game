import { RootStateType } from "@/core/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gameSlice } from "./gameSlice";

const initState = {
  isOpen: false,
};

export const mobilePopSlice = createSlice({
  name: "mobilePop",
  initialState: initState,
  reducers: {
    setIsPop: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(gameSlice.actions.resetGame, (state) => {
      state.isOpen = false;
    });
  },
});

export const getMobilePopState = (state: RootStateType) => state.mobilePop;
