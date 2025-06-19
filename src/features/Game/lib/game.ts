import { cpyObj } from "@/core/lib/dataStructure";
import { StateGameType } from "../slices/gameSlice";
import { GameCellType } from "../types";
import { saveStorage } from "@/core/lib/storage";

export const handleStorageMove = (state: StateGameType, c: GameCellType) => {
  const cpy = cpyObj(state);

  if (!Array.isArray(cpy.currFlipped)) cpy.currFlipped = [c];
  else (cpy.currFlipped as GameCellType[]).push(c);

  const currIDs = new Set(cpy.currFlipped.map((el) => el.id));
  cpy.gameBoard = cpy.gameBoard!.map((cell: GameCellType) =>
    currIDs.has(cell.id) ? { ...cell, type: "currFlipped" } : cell
  );

  if (cpy.currFlipped.length === 2) {
    cpy.moves++;

    const isMatch = cpy.currFlipped[0]!.val === cpy.currFlipped[1]!.val;

    if (isMatch) {
      const ids = new Set(cpy.currFlipped.map((el) => el.id));

      cpy.gameBoard = cpy.gameBoard!.map((cell: GameCellType) =>
        ids.has(cell.id) ? { ...cell, type: "matched" } : cell
      );

      cpy.currFlipped = null;
    } else {
      cpy.flipBack = true;
    }
  }

  saveStorage("game", cpy);
};

export const flipBackStorage = (state: StateGameType) => {
  const cpy = cpyObj(state);

  const IDs = new Set(cpy.currFlipped!.map((el) => el.id));
  cpy.gameBoard = cpy.gameBoard!.map((cell: GameCellType) =>
    IDs.has(cell.id) ? { ...cell, type: "hidden" } : cell
  );
  cpy.currFlipped = null;
  cpy.flipBack = false;

  saveStorage("game", cpy);
};
