import { cpyObj } from "@/core/lib/dataStructure";
import {
  CellGameValType,
  GameCellType,
  GameIconsType4x4,
  GameIconsType6x6,
  GameNumberType4x4,
  GameNumberType6x6,
} from "@/features/Game/types";
import { GridSizeType, ThemeType } from "@/features/OptGame/types";
import { v4 } from "uuid";

export const shuffle = <T>(arg: T[]): T[] => {
  const cpy = cpyObj(arg);

  let i = cpy.length - 1;
  while (i > 0) {
    const j = Math.floor(Math.random() * (i + 1));

    [cpy[i], cpy[j]] = [cpy[j], cpy[i]];
    i--;
  }

  return cpy;
};

export const initGame = ({
  theme,
  gridSize,
}: {
  theme: ThemeType;
  gridSize: GridSizeType;
}): GameCellType[] => {
  const arg =
    theme === ThemeType.NUMBERS
      ? gridSize === GridSizeType["4x4"]
        ? GameNumberType4x4
        : GameNumberType6x6
      : gridSize === GridSizeType["4x4"]
      ? GameIconsType4x4
      : GameIconsType6x6;

  const shuffled = shuffle([...arg, ...arg]);

  return shuffled.map((el) => ({
    val: el as CellGameValType,
    type: "hidden",
    id: v4(),
  }));
};

export const isPairGame = (gameBoard: GameCellType[], theme: ThemeType) => {
  if (gameBoard?.length % 2 !== 0) return false;

  const counter = new Map<string, number>();

  for (const cell of gameBoard) {
    counter.set(
      cell!.val as string,
      (counter.get(cell.val as string) ?? 0) + 1
    );
  }

  for (const count of counter.values()) {
    if (gameBoard.length === 36 && theme === ThemeType.ICON) {
      if (count % 2 !== 0) return false;
    } else {
      if (count !== 2) return false;
    }
  }

  return true;
};
