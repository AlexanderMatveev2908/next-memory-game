import { OptGameStateType } from "@/features/OptGame/slices/optGameSlice";
import { GridSizeType, ThemeType } from "@/features/OptGame/types";

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
