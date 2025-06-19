import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameCellType } from "../types";
import { getStorage } from "@/core/lib/storage";
import { RootStateType } from "@/core/store";

type StateGameType = {
  timer: {
    run: boolean;
    counter: number;
  };
  moves: number;
  gameBoard: GameCellType[] | null;
};

const defState = {
  timer: {
    run: false,
    counter: 0,
  },
  moves: 0,
  gameBoard: null,
};

const initState: StateGameType = getStorage("game") ?? defState;

export const gameSlice = createSlice({
  name: "game",
  initialState: initState,
  reducers: {
    initGame: (state, action: PayloadAction<{ gameBoard: GameCellType[] }>) => {
      state.gameBoard = action.payload.gameBoard;
      state.timer = {
        run: true,
        counter: 0,
      };
    },

    resetGame: () => defState,
  },
  // extraReducers: (builder) =>
  //   builder.addCase(
  //     optGameSlice.actions.setOpt,
  //     (
  //       state,
  //       action: PayloadAction<{
  //         theme: ThemeType;
  //         gridSize: GridSizeType;
  //       }>
  //     ) => {
  //       const { theme, gridSize } = action.payload;

  //       state.gameBoard = initGame({ theme, gridSize });
  //     }
  //   ),
});

export const getGameState = (state: RootStateType) => state.game;
