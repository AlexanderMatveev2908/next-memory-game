import { RootStateType } from "@/core/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
});

export const getMobilePopState = (state: RootStateType) => state.mobilePop;
