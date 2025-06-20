import { StateGameType } from "../slices/gameSlice";
import { GameCellType } from "../types";

export const handleMove = (
  state: StateGameType,
  c: GameCellType,
  returnState?: boolean
) => {
  if (!Array.isArray(state.currFlipped)) state.currFlipped = [c];
  else (state.currFlipped as GameCellType[]).push(c);

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

  return returnState ? state : null;
};

export const handleFlipBack = (state: StateGameType, returnState?: boolean) => {
  const IDs = new Set(state.currFlipped!.map((el) => el.id));
  state.gameBoard = state.gameBoard!.map((cell: GameCellType) =>
    IDs.has(cell.id) ? { ...cell, type: "hidden" } : cell
  );
  state.currFlipped = null;
  state.flipBack = false;

  return returnState ? state : null;
};

export const handleRestartGame = (
  state: StateGameType,
  returnState?: boolean
) => {
  state.currFlipped = null;
  state.flipBack = false;
  state.moves = 0;
  state.timer = {
    run: true,
    counter: 0,
  };
  state.gameBoard = state.gameBoard!.map((cell) => ({
    ...cell,
    type: "hidden",
  }));

  return returnState ? state : null;
};
