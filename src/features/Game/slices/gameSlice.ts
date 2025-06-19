import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameCellType } from "../types";
import { getStorage } from "@/core/lib/storage";
import { RootStateType } from "@/core/store";
import { mobilePopSlice } from "./mobilePopSlice";

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
      if (!Array.isArray(state.currFlipped))
        state.currFlipped = [action.payload];
      else (state.currFlipped as GameCellType[]).push(action.payload);

      const currIDs = new Set(state.currFlipped.map((el) => el.id));
      state.gameBoard = state.gameBoard!.map((cell: GameCellType) =>
        currIDs.has(cell.id) ? { ...cell, type: "currFlipped" } : cell
      );

      if (state.currFlipped.length === 2) {
        state.moves++;

        const isMatch = state.currFlipped[0]!.val === state.currFlipped[1]!.val;

        if (isMatch) {
          const ids = new Set(state.currFlipped.map((el) => el.id));

          state.gameBoard = state.gameBoard!.map((cell: GameCellType) =>
            ids.has(cell.id) ? { ...cell, type: "matched" } : cell
          );

          state.currFlipped = null;
        } else {
          state.flipBack = true;
        }
      }
    },

    resetCurrFlipped: (state) => {
      const IDs = new Set(state.currFlipped!.map((el) => el.id));
      state.gameBoard = state.gameBoard!.map((cell: GameCellType) =>
        IDs.has(cell.id) ? { ...cell, type: "hidden" } : cell
      );
      state.currFlipped = null;
      state.flipBack = false;
    },

    resetGame: () => defStateGame,
  },
  extraReducers: (builder) =>
    builder.addCase(
      mobilePopSlice.actions.setIsPop,
      (state, action: PayloadAction<boolean>) => {
        state.timer.run = !action.payload;
      }
    ),
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
