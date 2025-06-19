import { GridSizeType, ThemeType } from "@/features/OptGame/types";

export const initGame = ({
  theme,
  gridSize,
}: {
  theme: ThemeType;
  gridSize: GridSizeType;
}) => {
  const len = (+gridSize.split("x")[0]) ** 2;

  const initGame = Array.from({ length: len }, (_, i) => {});
};

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
