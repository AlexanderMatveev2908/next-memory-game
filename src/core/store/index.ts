import { userChoiceSlice } from "@/features/OptGame/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    userChoice: userChoiceSlice.reducer,
  },

  middleware: (getDefMiddleware) => getDefMiddleware(),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
