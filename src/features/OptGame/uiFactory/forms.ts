import { decap } from "@/core/lib/style";
import { GridSizeType, ThemeType } from "../types";
import { addNestedIDs } from "@/core/lib/ids";
import { OptItemFormFieldType } from "../types/uiFactory";

export const fieldsOptUserChoice = addNestedIDs<OptItemFormFieldType>([
  {
    label: "Select Theme",
    field: "theme",
    fields: Object.values(ThemeType).map((v) => ({
      label: decap(v),
      v,
    })),
  },
  {
    label: "Grid Size",
    field: "gridSize",
    fields: Object.values(GridSizeType).map((v) => ({
      label: v,
      v,
    })),
  },
]);
