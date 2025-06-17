// ? tailwind by default already have 768pc as break md but like to experiment things and ideas with custom things sometimes ✌🏽

export const breaks = {
  md: 768,
  lg: 1440,
};

export type BreakType = keyof typeof breaks;

export const resp = (brk: BreakType): string =>
  `@media screen and (min-width: ${breaks[brk]}px)`;
