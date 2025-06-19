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
  const cpy = [...arg];

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
