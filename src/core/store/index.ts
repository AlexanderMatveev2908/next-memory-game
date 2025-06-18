import { mobilePopSlice } from "@/features/Game/slices/mobilePopSlice";
import { optGameSlice } from "@/features/OptGame/slices/optGameSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    optGame: optGameSlice.reducer,
    mobilePop: mobilePopSlice.reducer,
  },

  middleware: (getDefMiddleware) => getDefMiddleware(),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
