import { z } from "zod";
import { GridSizeType, ThemeType } from "../types";

export const schemaOptUserChoice = z.object({
  theme: z.enum(Object.values(ThemeType) as [ThemeType, ...ThemeType[]]),
  gridSize: z.enum(
    Object.values(GridSizeType) as [GridSizeType, ...GridSizeType[]]
  ),
});

export type OptGameFormType = z.infer<typeof schemaOptUserChoice>;
