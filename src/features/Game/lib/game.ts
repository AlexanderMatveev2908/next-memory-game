import { StateGameType } from "../slices/gameSlice";
import { GameCellType } from "../types";

export const handleStorageMove = (state: StateGameType, c: GameCellType) => {
  if (!Array.isArray(state.currFlipped)) state.currFlipped = [c];
  else (state.currFlipped as GameCellType[]).push(c);

  if (state.currFlipped.length > 1) {
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

  return {
    updated: state,
  };
};
