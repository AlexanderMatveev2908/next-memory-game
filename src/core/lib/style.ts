import { breaks } from "@/core/constants/breakpoints";
import { BreakType } from "@/shared/types/style";
import { isClient } from "./etc";

export const resp = (brk: BreakType): string =>
  `@media screen and (min-width: ${breaks[brk]}px)`;

export const decap = (str: string) => str.at(0) + str.slice(1);

export const getIsMobile = () => isClient() && window.innerWidth < breaks.md;
