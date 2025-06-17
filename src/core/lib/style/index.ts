import { breaks } from "@/core/constants/breakpoints";
import { BreakType } from "@/shared/types/style";

export const resp = (brk: BreakType): string =>
  `@media screen and (min-width: ${breaks[brk]}px)`;
