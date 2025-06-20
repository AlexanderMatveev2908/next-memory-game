import { OptGameStateType } from "@/features/OptGame/slices/optGameSlice";
import { GridSizeType, ThemeType } from "@/features/OptGame/types";
import { GameCellStatusType } from "../types";

export const getFszBtns = (optGame: OptGameStateType) => {
  if (optGame.theme === ThemeType.NUMBERS) {
    return optGame.gridSize === GridSizeType["4x4"]
      ? {
          $fsz: "var(--h__xl)",
          $fsz_md: "var(--h__3xl)",
        }
      : {
          $fsz: "var(--btn__md)",
          $fsz__md: "var(--h__xl)",
        };
  } else {
    return {};
  }
};

export const getBgBtn = (type: GameCellStatusType) => {
  switch (type) {
    case "currFlipped":
      return "var(--green__app)";

    case "matched":
      return "var(--green__1)";

    default:
      return "";
  }
};
