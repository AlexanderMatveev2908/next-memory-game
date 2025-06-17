import { z } from "zod";
import { GridSizeType, ThemeType } from "../types";

export const schemaOptUserChoice = z.object({
  theme: z.enum(Object.values(ThemeType) as [string, ...string[]]),
  gridSize: z.enum(Object.values(GridSizeType) as [string, ...string[]]),
});

export type OptUserChoiceType = z.infer<typeof schemaOptUserChoice>;
