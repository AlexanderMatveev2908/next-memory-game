import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameCellType } from "../types";
import { getStorage } from "@/core/lib/storage";
import { RootStateType } from "@/core/store";
import { mobilePopSlice } from "./mobilePopSlice";
import { handleFlipBack, handleMove, handleRestartGame } from "../lib/game";
import { gamePopSlice } from "./gamePopSlice";

export type StateGameType = {
  timer: {
    run: boolean;
    counter: number;
  };
  moves: number;
  gameBoard: GameCellType[] | null;
  currFlipped: [] | [GameCellType] | [GameCellType, GameCellType] | null;
  flipBack: boolean;
};

export const defStateGame = {
  timer: {
    run: false,
    counter: 0,
  },
  moves: 0,
  gameBoard: null,
  currFlipped: null,
  flipBack: false,
};

const initState: StateGameType = getStorage("game") ?? defStateGame;

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

    incTimer: (state) => {
      state.timer.counter += 1;
    },

    setTimerMode: (state, action: PayloadAction<boolean>) => {
      state.timer.run = action.payload;
    },

    makeMove: (state, action: PayloadAction<GameCellType>) => {
      handleMove(state, action.payload);
    },

    resetCurrFlipped: (state) => {
      handleFlipBack(state);
    },

    restartGame: (state) => {
      handleRestartGame(state);
    },

    resetGame: () => defStateGame,
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        mobilePopSlice.actions.setIsPop,
        (state, action: PayloadAction<boolean>) => {
          state.timer.run = !action.payload;
        }
      )
      .addCase(
        gamePopSlice.actions.setPop,
        (state, action: PayloadAction<boolean>) => {
          state.timer.run = !action.payload;
        }
      );
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
